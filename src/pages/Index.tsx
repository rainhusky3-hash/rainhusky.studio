import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArtwork } from "@/components/home/FeaturedArtwork";
import { CommissionPreview } from "@/components/home/CommissionPreview";
import { RecentCommissions } from "@/components/home/RecentCommissions";
import { AboutSection } from "@/components/home/AboutSection";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="RainHusky — Custom Furry Art & Character Commissions"
        description="Hand-drawn furry characters, pet portraits, and reference sheets by RainHusky. Commission custom artwork today."
        keywords="furry art, character commission, pet portrait, reference sheet, digital art, custom artwork"
      />
      <HeroSection />
      <FeaturedArtwork />
      <CommissionPreview />
      <RecentCommissions />
      <AboutSection />
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
