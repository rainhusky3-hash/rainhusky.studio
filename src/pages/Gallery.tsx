import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid, List, ShoppingCart } from "lucide-react";

// Placeholder products - will be replaced with Shopify data
const mockProducts = [
  {
    id: "1",
    title: "Ethereal Dreams",
    description: "A dreamy digital landscape with soft pastel colors",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=600&fit=crop",
    category: "Landscapes",
  },
  {
    id: "2",
    title: "Cosmic Voyage",
    description: "Journey through the stars with this cosmic artwork",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
    category: "Abstract",
  },
  {
    id: "3",
    title: "Abstract Harmony",
    description: "Harmonious blend of colors and shapes",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=600&fit=crop",
    category: "Abstract",
  },
  {
    id: "4",
    title: "Neon Dreams",
    description: "Vibrant neon cityscape at night",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop",
    category: "Cityscapes",
  },
  {
    id: "5",
    title: "Forest Whispers",
    description: "Mystical forest scene with ethereal lighting",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
    category: "Nature",
  },
  {
    id: "6",
    title: "Ocean Depths",
    description: "Deep sea exploration in digital form",
    price: 37.99,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
    category: "Nature",
  },
];

const categories = ["All", "Abstract", "Landscapes", "Nature", "Cityscapes"];

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEOHead
        title="Digital Art Gallery"
        description="Browse our collection of unique digital artwork. High-quality downloadable art pieces for personal and commercial use."
        keywords="digital art, buy digital art, digital downloads, artwork gallery, illustrations"
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Digital <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our collection of unique digital artwork, ready for instant download
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artwork..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border text-muted-foreground hover:text-foreground"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 border border-border rounded-md p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-secondary" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-secondary" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }>
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className={`group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div className={`overflow-hidden ${viewMode === "list" ? "w-48 shrink-0" : "aspect-square"}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h2 className="font-display text-lg font-medium text-foreground mt-1 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">${product.price}</span>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No artwork found matching your criteria.</p>
            </div>
          )}

          {/* Shopify Integration Notice */}
          <div className="mt-16 p-6 bg-card rounded-lg border border-border text-center">
            <p className="text-muted-foreground">
              Products will be loaded from Shopify once the integration is enabled.
              <br />
              <span className="text-primary">Secure checkout via Shopify & PayPal</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
