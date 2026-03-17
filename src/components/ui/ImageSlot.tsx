import { useState, useRef, useEffect } from "react";
import { ImagePlus, Trash2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  storageKey: string;
  label?: string;
  aspectRatio?: "square" | "video" | "hero";
  className?: string;
  frameClassName?: string;
  showControls?: boolean;
}

function getStoredImage(key: string): string | null {
  try {
    return localStorage.getItem(`rainhusky-img-${key}`);
  } catch {
    return null;
  }
}

function setStoredImage(key: string, data: string | null) {
  try {
    if (data) {
      localStorage.setItem(`rainhusky-img-${key}`, data);
    } else {
      localStorage.removeItem(`rainhusky-img-${key}`);
    }
  } catch (e) {
    console.warn("Could not save image to localStorage:", e);
  }
}

export function ImageSlot({
  storageKey,
  label = "Upload Artwork",
  aspectRatio = "square",
  className,
  frameClassName,
  showControls = true,
}: ImageSlotProps) {
  const [image, setImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImage(getStoredImage(storageKey));
  }, [storageKey]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const data = ev.target?.result as string;
      setImage(data);
      setStoredImage(storageKey, data);
    };
    reader.readAsDataURL(file);

    // Reset input so the same file can be re-selected
    e.target.value = "";
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    setStoredImage(storageKey, null);
  };

  const aspectClass =
    aspectRatio === "hero"
      ? "aspect-[16/7]"
      : aspectRatio === "video"
      ? "aspect-video"
      : "aspect-square";

  return (
    <div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleUploadClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      <div className={cn("overflow-hidden rounded-lg", frameClassName)}>
        <div className={cn(aspectClass, "overflow-hidden rounded")}>
          {image ? (
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-card border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImagePlus className="w-8 h-8" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          )}
        </div>
      </div>

      {/* Overlay controls on hover when image exists */}
      {image && showControls && isHovered && (
        <div className="absolute inset-0 bg-foreground/30 rounded-lg flex items-center justify-center gap-3 transition-opacity">
          <button
            onClick={handleUploadClick}
            className="p-2 bg-background rounded-full shadow-md hover:bg-card transition-colors"
            title="Replace image"
          >
            <RefreshCw className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-background rounded-full shadow-md hover:bg-destructive hover:text-destructive-foreground transition-colors"
            title="Remove image"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
