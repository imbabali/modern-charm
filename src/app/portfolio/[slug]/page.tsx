import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  portfolioEvents,
  getEventBySlug,
  categoryLabels,
} from "@/data/portfolio-events";
import HeroCarousel from "@/components/HeroCarousel";

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return portfolioEvents.map((event) => ({ slug: event.slug }));
}

/* ---------- Dynamic metadata ---------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | Modern Charm Uganda" };

  return {
    title: `${event.title} | Modern Charm Uganda`,
    description: event.description,
    alternates: {
      canonical: `https://moderncharmevents.com/portfolio/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | Modern Charm Uganda`,
      description: event.description,
      url: `https://moderncharmevents.com/portfolio/${event.slug}`,
      images: [{ url: event.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Modern Charm Uganda`,
      description: event.description,
    },
  };
}

/* ---------- Page component ---------- */

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  // Find previous and next events for navigation
  const currentIndex = portfolioEvents.findIndex((e) => e.slug === slug);
  const prevEvent = currentIndex > 0 ? portfolioEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < portfolioEvents.length - 1
      ? portfolioEvents[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://moderncharmevents.com" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://moderncharmevents.com/portfolio" },
              { "@type": "ListItem", position: 3, name: event.title, item: `https://moderncharmevents.com/portfolio/${event.slug}` },
            ],
          }),
        }}
      />

      {/* Hero — event cover, near-black surface */}
      <section className="relative overflow-hidden bg-near-black min-h-[80vh] flex items-end">
        <Image
          src={event.coverImage}
          alt={`${event.title} cover photo`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: event.heroPosition || "center" }}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/30 via-near-black/20 to-near-black/85" />

        <div className="relative z-10 container-custom w-full pb-20 md:pb-28 pt-40 drop-shadow-hero">
          <nav aria-label="Breadcrumb" className="label-mono-sm text-cream/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/portfolio" className="hover:text-cream transition-colors">Portfolio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-cream">{event.title}</span>
          </nav>

          <span className="label-mono text-accent">
            {categoryLabels[event.category]} · {event.date}
          </span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.5rem, 6.5vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            {event.title}
          </h1>
          <p className="mt-8 max-w-2xl text-cream/80 text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
      </section>

      {/* Event Info Bar */}
      <section className="bg-cream border-b border-near-black/10">
        <div className="container-custom py-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="btn-fluid-alpha inline label-mono text-near-black"
            data-cursor-label="BACK"
          >
            ← Back to Portfolio
          </Link>
          <div className="flex items-center gap-6 label-mono-sm text-muted">
            <span>
              {event.images.length} PHOTO{event.images.length !== 1 ? "S" : ""}
            </span>
            <span aria-hidden="true">·</span>
            <span>{event.date.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.images.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden bg-cream-dark ${
                  index === 0 ? "lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                data-cursor-label={`PHOTO ${String(index + 1).padStart(2, "0")}`}
              >
                <Image
                  src={image}
                  alt={`${event.title} — photo ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={
                    event.imagePositions?.[index]
                      ? { objectPosition: event.imagePositions[index] }
                      : undefined
                  }
                  quality={80}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <span className="absolute bottom-4 left-4 label-mono-sm text-cream/70 tabular-nums">
                  {String(index + 1).padStart(2, "0")} / {String(event.images.length).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="border-t border-near-black/10 py-14">
        <div className="container-custom grid grid-cols-2 gap-8">
          {prevEvent ? (
            <Link
              href={`/portfolio/${prevEvent.slug}`}
              className="group text-left"
              data-cursor-label="PREVIOUS"
            >
              <span className="label-mono-sm text-muted">← Previous</span>
              <p
                className="mt-3 font-heading text-xl md:text-2xl text-near-black transition-colors group-hover:text-primary line-clamp-1"
                style={{ letterSpacing: "-0.015em" }}
              >
                {prevEvent.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextEvent ? (
            <Link
              href={`/portfolio/${nextEvent.slug}`}
              className="group text-right"
              data-cursor-label="NEXT"
            >
              <span className="label-mono-sm text-muted">Next →</span>
              <p
                className="mt-3 font-heading text-xl md:text-2xl text-near-black transition-colors group-hover:text-primary line-clamp-1"
                style={{ letterSpacing: "-0.015em" }}
              >
                {nextEvent.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={event.images.slice(-3)}
          objectPosition={event.ctaPosition || "center"}
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Start a project</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to plan
              <br />
              your event?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Let us bring your vision to life with the same care and creativity.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-fluid btn-fluid-gold"
                data-cursor-label="GET IN TOUCH"
              >
                Get in touch →
              </Link>
              <Link
                href="/portfolio"
                className="btn-fluid btn-fluid-glass"
                data-cursor-label="MORE EVENTS"
              >
                More events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
