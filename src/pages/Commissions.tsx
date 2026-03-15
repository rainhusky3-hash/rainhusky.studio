import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Palette, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { CommissionCard } from "@/components/commissions/CommissionCard";

const commissionTypes = [
  {
    id: "headshot",
    name: "Headshot",
    description: "A detailed headshot portrait of your character or person",
    price: "$5",
  },
  {
    id: "pet-portrait",
    name: "Pet Portrait",
    description: "A charming portrait of your beloved pet",
    price: "$20",
  },
  {
    id: "half-body",
    name: "Half Body",
    description: "Upper body artwork with expressive detail and pose",
    price: "$30",
  },
  {
    id: "full-body",
    name: "Full Body",
    description: "Complete character artwork from head to toe",
    price: "$40",
  },
  {
    id: "reference-sheet",
    name: "Reference Sheet",
    description: "Multi-angle character reference with color palette and notes",
    price: "$50",
  },
];

const workflowSteps = [
  {
    icon: MessageSquare,
    title: "Submit Request",
    description: "Fill out the form with your vision and requirements",
  },
  {
    icon: Clock,
    title: "Review & Quote",
    description: "I'll review your request and provide a detailed quote",
  },
  {
    icon: Palette,
    title: "Creation",
    description: "Once approved, I begin bringing your vision to life",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Receive your finished artwork in high resolution",
  },
];

// Placeholder images — replace these with your own artwork
const commissionImages: Record<string, string | undefined> = {
  headshot: undefined,
  "pet-portrait": undefined,
  "half-body": undefined,
  "full-body": undefined,
  "reference-sheet": undefined,
};

export default function Commissions() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    references: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !selectedType || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a commission type.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description:
        "Thank you! I'll review your request and get back to you within 2-3 business days.",
    });

    setFormData({ name: "", email: "", description: "", references: "" });
    setSelectedType("");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Commission Custom Artwork"
        description="Request a custom digital art commission. From headshots to full reference sheets, I create unique artwork tailored to your vision."
        keywords="art commission, custom artwork, digital art commission, character design, portrait commission, pet portrait"
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Custom <span className="text-gradient-gold">Commissions</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a unique vision? Let's create something special together. I work closely with
              each client to bring their ideas to life.
            </p>
          </div>

          {/* Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="text-center p-6 bg-card rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Commission Cards */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2 text-center">
              Choose Your Commission
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-sm">
              Select a tier to get started
            </p>

            <div className="rounded-2xl bg-pastel-bg p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {commissionTypes.map((type) => (
                  <CommissionCard
                    key={type.id}
                    id={type.id}
                    name={type.name}
                    description={type.description}
                    price={type.price}
                    image={commissionImages[type.id]}
                    isSelected={selectedType === type.id}
                    onSelect={setSelectedType}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Request Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Request a Commission
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              {selectedType && (
                <div className="p-3 rounded-lg bg-pastel-bg border border-pastel-primary text-sm text-foreground">
                  Selected:{" "}
                  <strong>
                    {commissionTypes.find((t) => t.id === selectedType)?.name}
                  </strong>{" "}
                  — starting at{" "}
                  {commissionTypes.find((t) => t.id === selectedType)?.price}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your vision in detail. Include colors, mood, style preferences, and any specific elements you'd like..."
                  className="bg-card border-border min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="references">Reference Links (Optional)</Label>
                <Textarea
                  id="references"
                  value={formData.references}
                  onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                  placeholder="Links to reference images, Pinterest boards, or inspiration..."
                  className="bg-card border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our{" "}
                <a href="/commission-terms" className="text-primary hover:underline">
                  Commission Terms
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
