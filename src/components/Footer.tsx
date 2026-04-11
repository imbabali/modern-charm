import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

const services = [
  { href: "/services#planning", label: "Event Planning & Coordination" },
  { href: "/services#styling", label: "Event Styling & Decor" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://instagram.com/moderncharm_events", label: "Instagram" },
  { href: "https://facebook.com/moderncharmevents", label: "Facebook" },
  { href: "https://tiktok.com/@moderncharmevents", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative bg-near-black text-cream overflow-hidden"
      // Bottom padding accounts for the floating desktop nav pill
      style={{ paddingBottom: "clamp(2rem, 6vw, 8rem)" }}
    >
      {/* Masked wordmark backdrop — huge MODERN CHARM in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
        style={{ height: "60%" }}
      >
        <span
          className="font-heading whitespace-nowrap select-none"
          style={{
            fontSize: "clamp(6rem, 22vw, 22rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(196, 145, 92, 0.22)",
            transform: "translateY(15%)",
          }}
        >
          MODERN CHARM
        </span>
      </div>

      {/* Top row — studio label + tagline */}
      <div className="relative container-custom pt-20 pb-12">
        <div className="flex items-start justify-between gap-8 flex-wrap">
          <div>
            <span className="label-mono text-accent/80">Studio / Kampala</span>
            <h2
              className="mt-6 font-heading text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-cream max-w-3xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              Let us add Modern Charm
              <br />
              to your celebration.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-fluid btn-fluid-gold shrink-0 mt-4"
            data-cursor-label="START A PROJECT"
          >
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="relative container-custom">
        <div className="hairline bg-cream" />
      </div>

      {/* Content grid */}
      <div className="relative container-custom py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Modern Charm — Home">
              <Logo size={48} />
              <div className="flex flex-col">
                <span className="label-mono text-cream">MODERN CHARM</span>
                <span className="label-mono-sm text-cream/60 mt-1">KAMPALA · UG</span>
              </div>
            </Link>
            <p className="mt-6 text-cream/70 text-sm leading-relaxed max-w-xs">
              Premier event management — crafting seamless, impactful, and memorable
              experiences across Uganda.
            </p>
            <ul className="mt-6 flex items-center gap-5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fluid-alpha inline label-mono text-cream/70 hover:text-cream"
                    data-cursor-label={social.label.toUpperCase()}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate column */}
          <div className="col-span-1 md:col-span-3">
            <span className="label-mono text-accent/70">Navigate / 01</span>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="btn-fluid-alpha inline font-heading text-cream/85 hover:text-accent transition-colors"
                    data-cursor-label={link.label.toUpperCase()}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="col-span-1 md:col-span-2">
            <span className="label-mono text-accent/70">Services / 02</span>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="btn-fluid-alpha inline font-heading text-sm text-cream/85 hover:text-accent transition-colors"
                    data-cursor-label="EXPLORE"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="col-span-2 md:col-span-3">
            <span className="label-mono text-accent/70">Stay Inspired / 03</span>
            <p className="mt-5 text-cream/70 text-sm leading-relaxed">
              Styling tips, featured work, and event invitations — straight to your inbox.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-cream/70 text-sm">
              <li>
                <a
                  href="tel:+256779399409"
                  className="btn-fluid-alpha inline label-mono"
                  data-cursor-label="CALL"
                >
                  +256 779 399 409
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@moderncharmevents.com"
                  className="btn-fluid-alpha inline label-mono"
                  data-cursor-label="EMAIL"
                >
                  INFO@MODERNCHARMEVENTS.COM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative container-custom">
        <div className="hairline bg-cream" />
      </div>

      {/* Bottom bar */}
      <div className="relative container-custom pt-6 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-cream/60">
          <span className="label-mono-sm">© 2026 Modern Charm Limited</span>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="btn-fluid-alpha inline label-mono-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
