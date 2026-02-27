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
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#planning", label: "Event Planning & Coordination" },
  { href: "/services#styling", label: "Event Styling & Decor" },
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
        <div className="container-custom py-4 text-center">
          <p className="font-heading text-xl md:text-2xl font-semibold text-white/95 italic">
            &ldquo;Let us add Modern Charm to your celebration&rdquo;
          </p>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="w-8 h-px bg-accent" />
            <Heart className="w-4 h-4 text-accent fill-accent" aria-hidden="true" />
            <span className="w-8 h-px bg-accent" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Logo size={40} />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-wider text-white">
                  MODERN CHARM
                </span>
                <span className="text-[9px] font-body tracking-[0.25em] uppercase text-white">
                  Uganda
                </span>
              </div>
            </Link>

            <p className="mt-2.5 text-white text-sm leading-relaxed max-w-xs">
              Premier event management — crafting seamless, impactful,
              and memorable experiences across Uganda.
            </p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110"
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
            <h3 className="font-heading text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-0">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2 py-1.5"
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
            <h3 className="font-heading text-lg font-semibold text-white mb-3">
              Our Services
            </h3>
            <ul className="space-y-0">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2 py-1.5"
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
            <h3 className="font-heading text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <ul className="space-y-0">
              <li>
                <a
                  href="tel:+256779399409"
                  className="flex items-center gap-2.5 text-white text-sm hover:text-white transition-colors group py-1.5"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  +256 779 399 409
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@moderncharmevents.com"
                  className="flex items-center gap-2.5 text-white text-sm hover:text-white transition-colors group py-1.5"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  info@moderncharmevents.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-white text-sm py-1.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  <span>Kampala, Uganda</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-white mb-1.5">
                Stay Inspired
              </h4>
              <p className="text-white text-xs mb-1.5 leading-relaxed">
                Subscribe for styling tips, trends, and offers.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex items-center justify-center">
          <p className="text-white/95 text-xs text-center">
            &copy; 2026 Modern Charm Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
