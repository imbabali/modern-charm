"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Focus management for mobile drawer
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <nav aria-label="Main navigation" className="flex items-center justify-between h-20 lg:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              {/* MC Monogram */}
              <Logo
                className={`w-11 h-11 transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "text-accent" : "text-white"
                }`}
              />
              {/* Brand Name */}
              <div className="flex flex-col">
                <span
                  className={`font-heading text-xl font-bold tracking-wider transition-colors duration-300 ${
                    isScrolled ? "text-dark" : "text-white"
                  }`}
                >
                  MODERN CHARM
                </span>
                <span
                  className={`text-[10px] font-body tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-accent-dark" : "text-white/90"
                  }`}
                >
                  Uganda
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`nav-link-underline relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:text-accent-dark focus-visible:outline-none ${
                    isActive(link.href)
                      ? isScrolled
                        ? "text-primary"
                        : "text-white"
                      : isScrolled
                        ? "text-dark/70 hover:text-primary"
                        : "text-white/90 hover:text-white"
                  } ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              {/* Book Consultation CTA — Desktop */}
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-accent-dark text-white hover:bg-accent shadow-sm hover:shadow-md"
                    : "bg-accent-dark text-white hover:bg-accent shadow-lg"
                } hover:-translate-y-0.5`}
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Book Consultation
              </Link>

              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`xl:hidden p-2.5 rounded-lg transition-colors duration-200 ${
                  isScrolled
                    ? "text-dark hover:bg-cream-dark"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-dark">
          <div className="flex items-center gap-2">
            <Logo className="w-9 h-9 text-primary" />
            <span className="font-heading text-lg font-bold tracking-wider text-dark">
              MODERN CHARM
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-muted hover:bg-cream-dark transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav aria-label="Mobile navigation" className="flex flex-col p-6 gap-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary-dark font-semibold"
                  : "text-dark/70 hover:bg-cream-dark hover:text-dark"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-cream-dark bg-white">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-accent-dark text-white font-semibold text-sm transition-all duration-300 hover:bg-accent shadow-md"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
