import { Link } from "react-router-dom";
import { ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { useArtworkSlots } from "@/hooks/useArtworkSlots";

export function HeroSection() {
  const { slots, uploadImage, deleteImage } = useArtworkSlots();

  return (
    <section className="relative min-h-[85vh] flex items-end justify-center overflow-hidden">
      {/* Hero artwork slot */}
      <div className="absolute inset-0">
        <ImageSlot
          storageKey="hero-art"
          imageUrl={slots["hero-art"]}
          label="Upload Featured Artwork"
          aspectRatio="hero"
          className="w-full h-full"
          frameClassName="rounded-none h-full"
          onUpload={async (file) => { await uploadImage("hero-art", file); }}
          onDelete={async () => { await deleteImage("hero-art"); }}
        />
      </div>

      {/* Pastel gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pb-16 pt-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Custom Furry Art &amp; Character Commissions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Hand-drawn characters, pet portraits, and reference sheets by RainHusky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-md">
              <Link to="/commissions">
                <Palette className="mr-2 w-4 h-4" />
                Commission Artwork
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border bg-background/80 text-foreground hover:bg-secondary">
              <Link to="/gallery">
                Browse Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
