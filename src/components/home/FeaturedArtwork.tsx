import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPieces = [
  {
    id: 1,
    title: "Character Portrait",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Expressive Pose",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Full Illustration",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Reference Sheet",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop",
  },
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
          {featuredPieces.map((piece) => (
            <Link
              key={piece.id}
              to="/gallery"
              className="group block"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground text-center">{piece.title}</p>
            </Link>
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
