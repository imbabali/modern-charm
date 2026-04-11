"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const fullNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change. This is the textbook "synchronise UI state with
  // external navigation" effect — the lint rule is intentionally disabled.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ===== Mobile — top glass bar ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden glass-pill"
        aria-label="Main navigation (mobile)"
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <div className="container-custom flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="Modern Charm — Home">
            <Logo size={36} />
            <span className="label-mono text-cream">MODERN CHARM</span>
          </Link>
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center w-10 h-10 text-cream transition-colors hover:text-accent"
            data-cursor-label="MENU"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ===== Desktop — floating bottom-center glass pill ===== */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:flex fixed z-50 items-center gap-1 glass-pill"
        style={{
          bottom: "2rem",
          left: "50%",
          transform: "translate3d(-50%, 0, 0)",
          height: "4.5rem",
          padding: "0 1rem 0 1.25rem",
          minWidth: "min(44rem, 92vw)",
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 pr-4 mr-1"
          aria-label="Modern Charm — Home"
          data-cursor-label="HOME"
        >
          <Logo size={40} />
          <div className="flex flex-col leading-none">
            <span className="label-mono text-cream">MODERN CHARM</span>
            <span className="label-mono-sm text-cream/60 mt-1">KAMPALA · UG</span>
          </div>
        </Link>

        <span className="h-8 w-px bg-cream/15" aria-hidden="true" />

        <ul className="flex items-center gap-1 ml-1">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`nav-link-underline inline-flex items-center px-3 py-2 label-mono transition-colors duration-300 ${
                  isActive(link.href) ? "text-accent active" : "text-cream/80 hover:text-cream"
                }`}
                data-cursor-label={link.label.toUpperCase()}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        <Link
          href="/contact"
          className="btn-fluid btn-fluid-gold ml-2"
          style={{ padding: "0.75rem 1.25rem" }}
          data-cursor-label="BOOK NOW"
        >
          Book Consult
        </Link>

        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open full menu"
          aria-expanded={isMenuOpen}
          className="ml-1 flex items-center justify-center w-11 h-11 text-cream transition-colors hover:text-accent"
          data-cursor-label="MENU"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
      </nav>

      {/* ===== Full-screen glass overlay menu (all viewports) ===== */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          backgroundColor: "rgba(15, 21, 19, 0.88)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 container-custom flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <Logo size={40} />
            <span className="label-mono text-cream">MODERN CHARM</span>
          </Link>
          <button
            ref={closeButtonRef}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-11 h-11 text-cream hover:text-accent transition-colors"
            data-cursor-label="CLOSE"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="h-full flex items-center">
          <div className="container-custom w-full grid grid-cols-1 md:grid-cols-12 gap-10 pt-20">
            <div className="md:col-span-8">
              <span className="label-mono text-accent/80">Menu / 00</span>
              <ul className="mt-8 flex flex-col gap-3 md:gap-4">
                {fullNavLinks.map((link, idx) => (
                  <li key={link.href} className="overflow-hidden">
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="group flex items-baseline gap-6 text-cream"
                      data-cursor-label={link.label.toUpperCase()}
                    >
                      <span className="label-mono-sm text-cream/40 tabular-nums w-8">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-heading text-[clamp(2rem,5.5vw,4.5rem)] leading-none transition-colors duration-500 ${
                          isActive(link.href) ? "text-accent" : "group-hover:text-accent"
                        }`}
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8 text-cream">
              <div>
                <span className="label-mono text-accent/80">Contact / 01</span>
                <p className="mt-3 font-heading text-xl leading-tight">
                  <a href="tel:+256779399409" className="btn-fluid-alpha inline">
                    +256 779 399 409
                  </a>
                </p>
                <p className="mt-1 font-heading text-base text-cream/70">
                  <a href="mailto:info@moderncharmevents.com" className="btn-fluid-alpha inline">
                    info@moderncharmevents.com
                  </a>
                </p>
              </div>

              <div>
                <span className="label-mono text-accent/80">Studio / 02</span>
                <p className="mt-3 text-cream/80 leading-relaxed">
                  Kampala, Uganda<br />
                  Mon–Sat · 08:00–18:00
                </p>
              </div>

              <div>
                <span className="label-mono text-accent/80">Social / 03</span>
                <ul className="mt-3 flex flex-col gap-2">
                  <li>
                    <a
                      href="https://instagram.com/moderncharm_events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-fluid-alpha inline text-cream/80"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/moderncharmevents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-fluid-alpha inline text-cream/80"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
