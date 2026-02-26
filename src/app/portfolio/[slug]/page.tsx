import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
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
      canonical: `https://modern-charm.vercel.app/portfolio/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | Modern Charm Uganda`,
      description: event.description,
      url: `https://modern-charm.vercel.app/portfolio/${event.slug}`,
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
  const prevEvent =
    currentIndex > 0 ? portfolioEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < portfolioEvents.length - 1
      ? portfolioEvents[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-medium">{event.title}</span>
          </nav>
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 font-body text-xs font-medium tracking-wide text-white backdrop-blur-sm mb-4">
            {categoryLabels[event.category]}
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {event.title}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl max-w-2xl mx-auto">
            {event.description}
          </p>
        </div>
      </section>

      {/* Event Info Bar */}
      <section className="border-b border-cream-dark bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 font-body text-sm text-muted">
            <Camera className="h-4 w-4" aria-hidden="true" />
            <span>
              {event.images.length} photo{event.images.length !== 1 && "s"}
            </span>
            <span className="text-cream-dark">|</span>
            <span>{event.date}</span>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.images.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-2xl bg-cream-dark ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="border-t border-cream-dark bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {prevEvent ? (
            <Link
              href={`/portfolio/${prevEvent.slug}`}
              className="group flex items-center gap-3 text-left"
            >
              <ArrowLeft
                className="h-5 w-5 text-muted transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              <div>
                <span className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                  Previous
                </span>
                <p className="font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-1">
                  {prevEvent.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextEvent ? (
            <Link
              href={`/portfolio/${nextEvent.slug}`}
              className="group flex items-center gap-3 text-right sm:flex-row-reverse sm:text-right"
            >
              <ArrowRight
                className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
              <div>
                <span className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                  Next
                </span>
                <p className="font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-1">
                  {nextEvent.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={event.images.slice(-3)}
          objectPosition="center 35%"
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to plan your event?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let us bring your vision to life with the same care and creativity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-accent-dark px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-body text-base font-semibold text-white transition-colors duration-300 hover:bg-white/20"
            >
              View More Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
