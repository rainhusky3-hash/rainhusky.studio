import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function RefundPolicy() {
  return (
    <Layout>
      <SEOHead title="Refund Policy" description="Our refund policy for digital art purchases." />
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Digital Goods Refund Policy</h1>
          <div className="prose max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString()}</p>
            <h2 className="font-display text-xl text-foreground mt-8">Digital Products</h2>
            <p>Due to the nature of digital goods, all sales are final once the download link has been accessed. Please review product descriptions carefully before purchasing.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Exceptions</h2>
            <p>Refunds may be granted if: the file is corrupted/undownloadable, or a duplicate purchase was made accidentally.</p>
            <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
            <p>Issues? Email <a href="mailto:hello@artistry.com" className="text-foreground font-medium hover:underline">hello@artistry.com</a> within 48 hours of purchase.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
