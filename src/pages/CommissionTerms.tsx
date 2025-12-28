import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function CommissionTerms() {
  return (
    <Layout>
      <SEOHead title="Commission Terms" description="Terms and conditions for custom art commissions." />
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Commission Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <h2 className="font-display text-xl text-foreground mt-8">Payment</h2>
            <p>50% deposit required upfront, 50% upon completion. Payment via PayPal.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Revisions</h2>
            <p>Revisions included per tier (see pricing). Major changes after approval may incur additional fees.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Usage Rights</h2>
            <p>Personal use included. Commercial licensing available at additional cost. Artist retains right to display work in portfolio.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Cancellations</h2>
            <p>Full refund if cancelled before work begins. Partial refund based on progress if work has started.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
            <p>Questions? <a href="mailto:hello@artistry.com" className="text-primary hover:underline">hello@artistry.com</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
