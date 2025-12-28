import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

// Placeholder artwork for demonstration
const featuredArtwork = [
  {
    id: 1,
    title: "Ethereal Dreams",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Cosmic Voyage",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Abstract Harmony",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=600&fit=crop",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Home"
        description="Discover unique digital artwork crafted with passion. High-quality downloadable art pieces for your personal and commercial projects."
        keywords="digital art, digital download, artwork, illustration, graphic design"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Digital Art Collection</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              Art That <span className="text-gradient-gold">Inspires</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Discover unique digital artwork crafted with passion. Each piece tells a story, 
              ready to bring beauty to your world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
                <Link to="/gallery">
                  Explore Gallery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
                <Link to="/commissions">
                  <Palette className="mr-2 w-4 h-4" />
                  Request Commission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artwork Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Featured Pieces
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A curated selection of our most beloved digital artworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtwork.map((artwork, index) => (
              <article
                key={artwork.id}
                className="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">${artwork.price}</span>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-border">
              <Link to="/gallery">
                View All Artwork
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Custom <span className="text-gradient-gold">Commissions</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Looking for something unique? I create custom digital artwork tailored 
                to your vision. From portraits to illustrations, let's bring your ideas to life.
              </p>
              <ul className="space-y-4 mb-8">
                {["Personal illustrations", "Character designs", "Commercial artwork", "Custom portraits"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/commissions">Start Commission</Link>
                </Button>
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Link to="/prices">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border border-border shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop"
                  alt="Artist at work creating digital art"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
