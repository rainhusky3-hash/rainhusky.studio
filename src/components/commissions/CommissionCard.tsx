import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";

interface CommissionCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function CommissionCard({
  id,
  name,
  description,
  price,
  image,
  isSelected,
  onSelect,
}: CommissionCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-200 cursor-pointer",
        "bg-pastel-card border-2",
        isSelected
          ? "border-pastel-accent shadow-lg scale-[1.02]"
          : "border-transparent shadow-sm hover:shadow-md hover:scale-[1.01]"
      )}
      onClick={() => onSelect(id)}
    >
      {/* Image slot with white frame */}
      <div className="p-3 pb-0">
        <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-square">
          {image ? (
            <img
              src={image}
              alt={`${name} example artwork`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-pastel-text/40">
              <ImagePlus className="w-8 h-8" />
              <span className="text-xs font-medium">Add Example Artwork</span>
            </div>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 pt-3 text-center space-y-2">
        <h3 className="font-display text-lg font-semibold text-pastel-text">
          {name}
        </h3>
        <p className="text-sm font-medium text-pastel-accent-rose">
          Starting at {price}
        </p>
        <p className="text-xs text-pastel-text/60 leading-relaxed">
          {description}
        </p>
        <Button
          size="sm"
          className={cn(
            "w-full mt-2 rounded-full text-sm font-medium transition-colors",
            isSelected
              ? "bg-pastel-accent-rose text-white hover:bg-pastel-accent-rose/90"
              : "bg-pastel-primary text-pastel-text hover:bg-pastel-primary/80"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id);
          }}
        >
          {isSelected ? "Selected" : "Select Commission"}
        </Button>
      </div>
    </div>
  );
}
