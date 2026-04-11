import type { Metadata } from "next";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioEvents } from "@/data/portfolio-events";

export const metadata: Metadata = {
  title: "Our Portfolio | Modern Charm Uganda",
  description:
    "Explore our portfolio of stunning weddings, traditional ceremonies, and event styling across Kampala and Uganda. Real celebrations brought to life by Modern Charm.",
  alternates: { canonical: "https://moderncharmevents.com/portfolio" },
  openGraph: {
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Stunning weddings, traditional ceremonies, and event styling across Uganda.",
    url: "https://moderncharmevents.com/portfolio",
    images: [{ url: "/images/portfolio/oscar-sandra/IMG_0882.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Stunning weddings, traditional ceremonies, and event styling across Uganda.",
    images: ["/images/portfolio/oscar-sandra/IMG_0882.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://moderncharmevents.com" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://moderncharmevents.com/portfolio" },
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Banner — near-black */}
      <section className="relative overflow-hidden bg-near-black pt-40 md:pt-48 pb-28 md:pb-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/event-reel-1.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/30 to-near-black/80" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">Portfolio / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            Every event
            <br />
            tells a story.
          </h1>
          <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
            A curated selection of celebrations we have had the honour of
            bringing to life.
          </p>
        </div>
      </section>

      {/* Filterable Event Grid */}
      <PortfolioGrid events={portfolioEvents} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9541.jpg",
            "/images/portfolio/oscar-sandra/IMG_0892.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9602.jpg",
          ]}
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Love what you see?</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Let&apos;s create
              <br />
              something beautiful.
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Start a project with us and let&apos;s bring your vision to life
              for your special day.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-fluid btn-fluid-gold"
                data-cursor-label="START PROJECT"
              >
                Start your journey →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
