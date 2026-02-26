import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioEvents } from "@/data/portfolio-events";

export const metadata: Metadata = {
  title: "Our Portfolio | Modern Charm Uganda",
  description:
    "Explore our portfolio of stunning weddings, traditional ceremonies, and event styling across Kampala and Uganda. Real celebrations brought to life by Modern Charm.",
  alternates: { canonical: "https://modern-charm.vercel.app/portfolio" },
  openGraph: {
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Stunning weddings, traditional ceremonies, and event styling across Uganda.",
    url: "https://modern-charm.vercel.app/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Stunning weddings, traditional ceremonies, and event styling across Uganda.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/event-reel-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Portfolio</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Every event tells a story. Here are some of the moments we have had
            the honour of bringing to life.
          </p>
        </div>
      </section>

      {/* Filterable Event Grid */}
      <PortfolioGrid events={portfolioEvents} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9535.jpg",
            "/images/portfolio/david-michelle/dji_0436.jpg",
            "/images/portfolio/sammy-lala/img_3578.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Love what you see?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let&apos;s create something beautiful together for your special day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent-dark px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
