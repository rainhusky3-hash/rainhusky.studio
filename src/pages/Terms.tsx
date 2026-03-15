import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Terms() {
  return (
    <Layout>
      <SEOHead title="Terms of Service" description="Terms and conditions for using our digital art services." />
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString()}</p>
            <h2 className="font-display text-xl text-foreground mt-8">Acceptance of Terms</h2>
            <p>By accessing this website, you agree to these terms of service and all applicable laws.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Digital Products</h2>
            <p>Digital artwork purchases grant you a personal, non-exclusive license. Commercial use requires appropriate licensing.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Intellectual Property</h2>
            <p>All artwork and content remain the intellectual property of the artist unless otherwise agreed.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
            <p>Questions? Email us at <a href="mailto:hello@artistry.com" className="text-foreground font-medium hover:underline">hello@artistry.com</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
