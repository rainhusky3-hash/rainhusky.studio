import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  { name: "Portrait", price: 75, description: "Perfect for personal avatars and character portraits", features: ["Single character bust/headshot", "Simple background", "2 revision rounds", "High-resolution PNG/JPG", "5-7 day turnaround"], popular: false },
  { name: "Illustration", price: 100, description: "Scenic artwork or detailed character pieces", features: ["Single character full body OR scene", "Detailed background", "3 revision rounds", "High-resolution files + PSD", "7-10 day turnaround", "Commercial use available (+$50)"], popular: true },
  { name: "Character Design", price: 150, description: "Original character creation with reference sheet", features: ["Full character design", "Multiple poses/expressions", "Character reference sheet", "4 revision rounds", "All source files included", "10-14 day turnaround"], popular: false },
  { name: "Commercial", price: 200, description: "Artwork for business and commercial use", features: ["Complex illustration or design", "Full commercial licensing", "Unlimited revisions", "All source files + formats", "Priority turnaround", "Dedicated communication"], popular: false },
];

const addOns = [
  { name: "Additional character", price: "+$40" },
  { name: "Complex background", price: "+$30" },
  { name: "Rush delivery (3 days)", price: "+50%" },
  { name: "Print-ready files (300+ DPI)", price: "+$15" },
  { name: "Animation (simple GIF)", price: "+$75" },
];

export default function Prices() {
  return (
    <Layout>
      <SEOHead
        title="Commission Pricing"
        description="Transparent pricing for digital art commissions. From portraits to commercial illustrations, find the perfect tier for your project."
        keywords="art commission prices, digital art pricing, illustration cost, character design price"
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transparent <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Clear pricing for every commission type. No hidden fees, just great art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-6 bg-card rounded-lg border shadow-card ${
                  tier.popular ? "border-secondary shadow-elevated" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-muted-foreground">+</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      : "bg-primary text-primary-foreground hover:bg-primary/80"
                  }`}
                >
                  <Link to="/commissions">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
              Add-Ons & Extras
            </h2>
            <div className="bg-card rounded-lg border border-border divide-y divide-border shadow-card">
              {addOns.map((addon) => (
                <div key={addon.name} className="flex justify-between items-center p-4">
                  <span className="text-foreground">{addon.name}</span>
                  <span className="text-foreground font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-6 bg-card rounded-lg border border-border text-center max-w-2xl mx-auto shadow-card">
            <h3 className="font-display text-lg font-medium text-foreground mb-2">Before You Commission</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please review the commission terms to understand the process, payment schedule, and usage rights.
            </p>
            <Button asChild variant="outline" className="border-border">
              <Link to="/commission-terms">
                Read Commission Terms
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6">Have questions? Feel free to reach out before submitting a request.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              <Link to="/commissions">
                Request a Commission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
