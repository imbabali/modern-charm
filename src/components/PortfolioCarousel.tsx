"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioEvent } from "@/data/portfolio-events";
import { categoryLabels } from "@/data/portfolio-events";

function EventCard({ event }: { event: PortfolioEvent }) {
  return (
    <Link
      href={`/portfolio/${event.slug}`}
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-300 hover:shadow-xl"
      style={{ width: "min(360px, 80vw)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.coverImage}
          alt={event.description}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
        <span className="absolute top-4 left-4 rounded-full bg-white/20 px-3 py-1 font-body text-xs font-medium tracking-wide text-white backdrop-blur-sm">
          {categoryLabels[event.category]}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur-sm">
          {event.images.length} photos
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted line-clamp-2">
          {event.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-dark transition-colors group-hover:text-primary">
          View Gallery
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
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
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

      {/* Scrolling track — duplicated for seamless loop */}
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex shrink-0 gap-6 pr-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
          {events.map((event) => (
            <EventCard key={`dup-${event.slug}`} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
