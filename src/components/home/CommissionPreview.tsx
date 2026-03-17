import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const commissionTiers = [
  { id: "headshot", name: "Headshot", price: 5, description: "A detailed headshot portrait of your character" },
  { id: "pet-portrait", name: "Pet Portrait", price: 20, description: "A charming portrait of your beloved pet" },
  { id: "half-body", name: "Half Body", price: 30, description: "Upper body artwork with expressive detail" },
  { id: "full-body", name: "Full Body", price: 40, description: "Complete character artwork from head to toe" },
  { id: "reference-sheet", name: "Reference Sheet", price: 50, description: "Multi-angle character reference with notes" },
];

const colorOptions = [
  { id: "lineart", label: "Lineart", extra: 0 },
  { id: "flat-color", label: "Flat Color", extra: 10 },
  { id: "fully-rendered", label: "Fully Rendered", extra: 25 },
];

const backgroundOptions = [
  { id: "no-bg", label: "No Background", extra: 0 },
  { id: "simple-bg", label: "Simple Background", extra: 10 },
  { id: "detailed-bg", label: "Detailed Background", extra: 25 },
];

export function CommissionPreview() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("lineart");
  const [selectedBg, setSelectedBg] = useState("no-bg");

  const tier = commissionTiers.find((t) => t.id === selectedTier);
  const colorExtra = colorOptions.find((c) => c.id === selectedColor)?.extra ?? 0;
  const bgExtra = backgroundOptions.find((b) => b.id === selectedBg)?.extra ?? 0;
  const totalPrice = (tier?.price ?? 0) + colorExtra + bgExtra;

  const handleRequest = () => {
    if (!tier) return;
    const color = colorOptions.find((c) => c.id === selectedColor)!;
    const bg = backgroundOptions.find((b) => b.id === selectedBg)!;
    const message = `Hi RainHusky! I'd like to request a commission:\n\nType: ${tier.name}\nColor: ${color.label}${color.extra > 0 ? ` (+$${color.extra})` : ""}\nBackground: ${bg.label}${bg.extra > 0 ? ` (+$${bg.extra})` : ""}\nTotal: $${totalPrice}\n\nPlease let me know the next steps!`;
    
    // Copy to clipboard as a simple action
    navigator.clipboard.writeText(message).then(() => {
      alert("Commission request copied to clipboard! Paste it in your message to RainHusky.");
    }).catch(() => {
      alert(message);
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Commission Options
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a tier to get started with your custom artwork
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
          {commissionTiers.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTier(selectedTier === t.id ? null : t.id)}
              className={cn(
                "rounded-xl overflow-hidden transition-all duration-200 text-left",
                "bg-card border-2",
                selectedTier === t.id
                  ? "border-primary shadow-md scale-[1.02]"
                  : "border-transparent shadow-sm hover:shadow-md hover:scale-[1.01]"
              )}
            >
              {/* Image placeholder */}
              <div className="p-2 pb-0">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden aspect-square flex items-center justify-center">
                  <div className="text-muted-foreground/40 flex flex-col items-center gap-1">
                    <ImagePlus className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Example Art</span>
                  </div>
                </div>
              </div>
              <div className="p-3 text-center space-y-1">
                <h3 className="font-display text-sm font-semibold text-foreground">{t.name}</h3>
                <p className="text-xs font-medium text-accent-foreground">Starting at ${t.price}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{t.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Configuration panel */}
        {selectedTier && tier && (
          <div className="max-w-lg mx-auto bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Configure: {tier.name}
              </h3>
              <button onClick={() => setSelectedTier(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Color options */}
            <div className="mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Color Style</p>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedColor(opt.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                      selectedColor === opt.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    )}
                  >
                    {opt.label} {opt.extra > 0 && `(+$${opt.extra})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Background options */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Background</p>
              <div className="flex flex-wrap gap-2">
                {backgroundOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedBg(opt.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                      selectedBg === opt.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    )}
                  >
                    {opt.label} {opt.extra > 0 && `(+$${opt.extra})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + request */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Estimated Total</p>
                <p className="text-2xl font-bold text-foreground">${totalPrice}</p>
              </div>
              <Button onClick={handleRequest} className="bg-primary text-primary-foreground hover:bg-primary/80">
                Request Commission
              </Button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-border">
            <Link to="/commissions">View Full Commission Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
