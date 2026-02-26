"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioEvent, EventCategory } from "@/data/portfolio-events";
import { categoryLabels } from "@/data/portfolio-events";

const categories: (EventCategory | "all")[] = [
  "all",
  "planning",
  "styling",
];

export default function PortfolioGrid({
  events,
}: {
  events: PortfolioEvent[];
}) {
  const [active, setActive] = useState<EventCategory | "all">("all");

  const filtered =
    active === "all"
      ? events
      : events.filter((e) => e.category === active);

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-6">
          <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
            Featured Events
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted">
            Browse our collection of event planning, styling, and decor
            showcases across Kampala and beyond.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Filter events by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2.5 font-body text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-cream-dark text-dark hover:bg-primary/10"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Event grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <Link
              key={event.slug}
              href={`/portfolio/${event.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Cover image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.coverImage}
                  alt={`${event.title} — ${event.description}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 rounded-full bg-white/20 px-3 py-1 font-body text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  {categoryLabels[event.category]}
                </span>
                {/* Image count badge */}
                <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur-sm">
                  {event.images.length} photos
                </span>
              </div>

              {/* Card body */}
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
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-14 text-center">
            <p className="font-body text-muted">
              No events found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
