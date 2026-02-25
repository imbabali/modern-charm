import Link from "next/link";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#weddings", label: "Wedding Styling" },
  { href: "/services#corporate", label: "Corporate Events" },
  { href: "/services#birthdays", label: "Birthday Parties" },
  { href: "/services#showers", label: "Bridal Showers" },
  { href: "/services#weddings", label: "Venue Decoration" },
  { href: "/services#weddings", label: "Floral Arrangements" },
  { href: "/services#planning", label: "Event Consultation" },
];

const socialLinks = [
  {
    href: "https://instagram.com/moderncharm_events",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://facebook.com/moderncharmevents",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://tiktok.com/@moderncharmevents",
    label: "TikTok",
    /* TikTok icon — lucide-react does not have a TikTok icon, so we use a
       small inline SVG wrapped in a component-like function below. We still
       render it inside the same map. See the render section. */
    icon: null,
  },
];

/* Simple TikTok SVG icon matching lucide sizing */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      {/* Tagline Banner */}
      <div className="bg-primary-dark">
        <div className="container-custom py-8 text-center">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-white/95 italic">
            &ldquo;Let us add Modern Charm to your celebration&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="w-8 h-px bg-accent" />
            <Heart className="w-4 h-4 text-accent fill-accent" aria-hidden="true" />
            <span className="w-8 h-px bg-accent" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Logo className="w-10 h-10 text-accent-light" />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-wider text-white">
                  MODERN CHARM
                </span>
                <span className="text-[9px] font-body tracking-[0.25em] uppercase text-accent-light">
                  Uganda
                </span>
              </div>
            </Link>

            <p className="mt-4 text-white/85 text-sm leading-relaxed max-w-xs">
              Transforming ordinary venues into extraordinary experiences. We
              bring elegance, creativity, and modern sophistication to every
              celebration in Uganda.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110"
                >
                  {social.icon ? (
                    <social.icon className="w-4.5 h-4.5" aria-hidden="true" />
                  ) : (
                    <TikTokIcon className="w-4.5 h-4.5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/85 text-sm hover:text-accent-light transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/85 text-sm hover:text-accent-light transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+256779399409"
                  className="flex items-start gap-3 text-white/85 text-sm hover:text-accent-light transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  +256 779 399 409
                </a>
              </li>
              <li>
                <a
                  href="mailto:moderncharm30@gmail.com"
                  className="flex items-start gap-3 text-white/85 text-sm hover:text-accent-light transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  moderncharm30@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/85 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" aria-hidden="true" />
                  <span>Kampala, Uganda</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">
                Stay Inspired
              </h4>
              <p className="text-white/85 text-xs mb-3 leading-relaxed">
                Subscribe for event styling tips, trends, and exclusive offers.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex items-center justify-center">
          <p className="text-white/80 text-xs text-center">
            &copy; 2026 Modern Charm Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
