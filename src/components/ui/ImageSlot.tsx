import { useRef } from "react";
import { ImagePlus, Trash2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ImageSlotProps {
  storageKey: string;
  imageUrl?: string | null;
  label?: string;
  aspectRatio?: "square" | "video" | "hero";
  className?: string;
  frameClassName?: string;
  onUpload?: (file: File) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export function ImageSlot({
  storageKey,
  imageUrl,
  label = "Upload Artwork",
  aspectRatio = "square",
  className,
  frameClassName,
  onUpload,
  onDelete,
}: ImageSlotProps) {
  const { isAdmin } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/") || !onUpload) return;
    await onUpload(file);
    e.target.value = "";
  };

  const handleClick = () => {
    if (!isAdmin) return;
    fileInputRef.current?.click();
  };

  const aspectClass =
    aspectRatio === "hero"
      ? "aspect-[16/7]"
      : aspectRatio === "video"
      ? "aspect-video"
      : "aspect-square";

  const slotContent = (
    <div
      className={cn(
        "relative group",
        isAdmin && "cursor-pointer",
        className
      )}
      onClick={handleClick}
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
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={label}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-card border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImagePlus className="w-8 h-8" />
              <span className="text-xs font-medium">
                {isAdmin ? label : ""}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Non-admin: no context menu, no editing
  if (!isAdmin) {
    return slotContent;
  }

  // Admin: wrap with context menu
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {slotContent}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          onClick={() => fileInputRef.current?.click()}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {imageUrl ? "Replace Image" : "Upload Image"}
        </ContextMenuItem>
        {imageUrl && onDelete && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <ContextMenuItem
                onSelect={(e) => e.preventDefault()}
                className="gap-2 text-destructive focus:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Delete Image
              </ContextMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this image?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently remove this artwork from the site.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ContextMenuContent>
    </ContextMenu>
  );
}
