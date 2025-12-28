import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Palette, Clock, MessageSquare, CheckCircle } from "lucide-react";

const commissionTypes = [
  {
    id: "portrait",
    name: "Portrait",
    description: "Custom character or personal portrait",
    basePrice: "$75+",
  },
  {
    id: "illustration",
    name: "Illustration",
    description: "Scenic or conceptual artwork",
    basePrice: "$100+",
  },
  {
    id: "character",
    name: "Character Design",
    description: "Original character creation with reference sheet",
    basePrice: "$150+",
  },
  {
    id: "commercial",
    name: "Commercial",
    description: "Artwork for business use, includes licensing",
    basePrice: "$200+",
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

export default function Commissions() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    commissionType: "",
    description: "",
    references: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.commissionType || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (will be connected to backend later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "Thank you! I'll review your request and get back to you within 2-3 business days.",
    });

    setFormData({
      name: "",
      email: "",
      commissionType: "",
      description: "",
      references: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Commission Custom Artwork"
        description="Request a custom digital art commission. From portraits to character designs, I create unique artwork tailored to your vision."
        keywords="art commission, custom artwork, digital art commission, character design, portrait commission"
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Custom <span className="text-gradient-gold">Commissions</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a unique vision? Let's create something special together. 
              I work closely with each client to bring their ideas to life.
            </p>
          </div>

          {/* Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="text-center p-6 bg-card rounded-lg border border-border">
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Commission Types */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Commission Types
              </h2>
              <div className="space-y-4">
                {commissionTypes.map((type) => (
                  <div
                    key={type.id}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-foreground">{type.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                      </div>
                      <span className="text-primary font-semibold">{type.basePrice}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Work */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Example Work
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop"
                    alt="Commission example 1"
                    className="rounded-lg border border-border"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=300&h=300&fit=crop"
                    alt="Commission example 2"
                    className="rounded-lg border border-border"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
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

                <div className="space-y-3">
                  <Label>Commission Type *</Label>
                  <RadioGroup
                    value={formData.commissionType}
                    onValueChange={(value) => setFormData({ ...formData, commissionType: value })}
                  >
                    {commissionTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-3">
                        <RadioGroupItem value={type.id} id={type.id} />
                        <Label htmlFor={type.id} className="font-normal cursor-pointer">
                          {type.name} <span className="text-muted-foreground">({type.basePrice})</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

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
        </div>
      </section>
    </Layout>
  );
}
