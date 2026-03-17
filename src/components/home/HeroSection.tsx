import { Link } from "react-router-dom";
import { ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end justify-center overflow-hidden">
      {/* Hero artwork — replace /images/hero-art.jpg to change */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-art.jpg"
          alt="Featured artwork by RainHusky"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pastel gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

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
