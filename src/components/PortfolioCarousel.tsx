"use client";

import Image from "next/image";
import Link from "next/link";
import type { PortfolioEvent } from "@/data/portfolio-events";
import { categoryLabels } from "@/data/portfolio-events";

function EventCard({ event }: { event: PortfolioEvent }) {
  return (
    <Link
      href={`/portfolio/${event.slug}`}
      className="group relative flex-shrink-0 block"
      style={{ width: "min(360px, 80vw)" }}
      data-cursor-label="VIEW EVENT"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-near-black">
        <Image
          src={event.coverImage}
          alt={event.description}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          quality={80}
          style={event.coverPosition ? { objectPosition: event.coverPosition } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black/65 via-near-black/15 to-transparent" />
        <span className="absolute top-5 left-5 label-mono text-cream">
          {categoryLabels[event.category]}
        </span>
        <span className="absolute bottom-5 left-5 label-mono-sm text-cream/80">
          {event.images.length} Photos
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3
          className="font-heading text-lg text-near-black transition-colors group-hover:text-primary"
          style={{ letterSpacing: "-0.015em" }}
        >
          {event.title}
        </h3>
        <span className="label-mono shrink-0 text-near-black pt-1 group-hover:translate-x-1 transition-transform">
          View →
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioCarousel({
  events,
}: {
  events: PortfolioEvent[];
}) {
  return (
    <div className="relative overflow-hidden pause-on-hover">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-20" />

      {/* Scrolling track — duplicated for seamless loop */}
      <div className="flex animate-marquee">
        <div className="flex shrink-0 gap-6 pr-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
        <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
          {events.map((event) => (
            <EventCard key={`dup-${event.slug}`} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
