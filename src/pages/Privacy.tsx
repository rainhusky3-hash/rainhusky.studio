import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Privacy() {
  return (
    <Layout>
      <SEOHead title="Privacy Policy" description="How we collect, use, and protect your personal information." />
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString()}</p>
            <h2 className="font-display text-xl text-foreground mt-8">Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, and commission details when you submit requests or make purchases.</p>
            <h2 className="font-display text-xl text-foreground mt-8">How We Use Your Information</h2>
            <p>Your information is used to process orders, deliver digital products, communicate about commissions, and improve our services.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Payment Processing</h2>
            <p>Payments are processed securely through Shopify and PayPal. We do not store credit card information.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
            <p>Questions? Email us at <a href="mailto:hello@artistry.com" className="text-foreground font-medium hover:underline">hello@artistry.com</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
