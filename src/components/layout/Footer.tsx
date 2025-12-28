import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "Digital Gallery", href: "/gallery" },
    { label: "Commissions", href: "/commissions" },
    { label: "Pricing", href: "/prices" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Commission Terms", href: "/commission-terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-semibold text-foreground">
              Artistry
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-sm">
              Unique digital artwork crafted with passion. Each piece tells a story, 
              ready to inspire your space.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:hello@artistry.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Artistry. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Secure payments via Shopify & PayPal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
