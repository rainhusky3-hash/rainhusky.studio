import { Instagram, Coffee } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            About RainHusky
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Hi! I'm RainHusky, a digital artist who specializes in hand-drawn furry characters, 
            pet portraits, and expressive custom commissions. I enjoy bringing original characters 
            and furry designs to life through detailed artwork.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/rainhusky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="https://ko-fi.com/rainhusky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Coffee className="w-4 h-4" />
              Ko-fi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
