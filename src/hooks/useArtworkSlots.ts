import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type SlotMap = Record<string, string>;

export function useArtworkSlots() {
  const [slots, setSlots] = useState<SlotMap>({});
  const [loading, setLoading] = useState(true);

  const fetchSlots = async () => {
    const { data } = await supabase
      .from("artwork_slots")
      .select("slot_key, image_url");
    if (data) {
      const map: SlotMap = {};
      data.forEach((row) => {
        map[row.slot_key] = row.image_url;
      });
      setSlots(map);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSlots();

    const channel = supabase
      .channel("artwork_slots_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "artwork_slots" },
        () => fetchSlots()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const uploadImage = async (slotKey: string, file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop() || "jpg";
    const filePath = `${slotKey}.${ext}`;

    // Upload to storage (upsert)
    const { error: uploadError } = await supabase.storage
      .from("artwork")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from("artwork")
      .getPublicUrl(filePath);

    const imageUrl = urlData.publicUrl + `?t=${Date.now()}`;

    // Upsert slot record
    const { error: dbError } = await supabase
      .from("artwork_slots")
      .upsert({ slot_key: slotKey, image_url: imageUrl }, { onConflict: "slot_key" });

    if (dbError) {
      console.error("DB error:", dbError);
      return null;
    }

    setSlots((prev) => ({ ...prev, [slotKey]: imageUrl }));
    return imageUrl;
  };

  const deleteImage = async (slotKey: string): Promise<boolean> => {
    // Delete from DB
    const { error: dbError } = await supabase
      .from("artwork_slots")
      .delete()
      .eq("slot_key", slotKey);

    if (dbError) {
      console.error("DB delete error:", dbError);
      return false;
    }

    // Try to delete from storage (best effort, multiple extensions possible)
    const { data: files } = await supabase.storage
      .from("artwork")
      .list("", { search: slotKey });

    if (files && files.length > 0) {
      const paths = files.map((f) => f.name);
      await supabase.storage.from("artwork").remove(paths);
    }

    setSlots((prev) => {
      const next = { ...prev };
      delete next[slotKey];
      return next;
    });

    return true;
  };

  return { slots, loading, uploadImage, deleteImage, refetch: fetchSlots };
}
