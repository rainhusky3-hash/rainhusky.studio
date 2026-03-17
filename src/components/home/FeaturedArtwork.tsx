import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/ui/ImageSlot";

const featuredSlots = [
  { key: "featured-1", title: "Artwork 1" },
  { key: "featured-2", title: "Artwork 2" },
  { key: "featured-3", title: "Artwork 3" },
  { key: "featured-4", title: "Artwork 4" },
];

export function FeaturedArtwork() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Featured Artwork
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of recent hand-drawn pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredSlots.map((slot) => (
            <div key={slot.key} className="group">
              <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <ImageSlot
                  storageKey={slot.key}
                  label="Upload Artwork"
                  aspectRatio="square"
                  frameClassName="rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-border">
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
