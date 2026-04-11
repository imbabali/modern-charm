"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioEvent, EventCategory } from "@/data/portfolio-events";
import { categoryLabels } from "@/data/portfolio-events";

const categories: (EventCategory | "all")[] = ["all", "planning", "styling"];

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
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="label-mono text-accent-dark">Our Work / 01</span>
            <h2
              className="mt-5 font-heading text-[clamp(2.25rem,5vw,4rem)] text-near-black leading-[0.95]"
              style={{ letterSpacing: "-0.025em" }}
            >
              Featured events,
              <br />
              across Kampala and beyond.
            </h2>
          </div>
          <p className="font-body text-muted max-w-sm">
            A curated collection of event planning, styling, and decor
            showcases we have produced for discerning clients.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="mt-14 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter events by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              aria-controls="portfolio-grid"
              onClick={() => setActive(cat)}
              data-cursor-label="FILTER"
              className={`btn-fluid transition-colors duration-300 ${
                active === cat
                  ? "btn-fluid-dark"
                  : "btn-fluid-outline"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
          <span className="ml-auto label-mono-sm text-muted">
            {String(filtered.length).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-6 hairline bg-near-black" />

        {/* Event grid */}
        <div
          id="portfolio-grid"
          role="tabpanel"
          className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((event, idx) => (
            <Link
              key={event.slug}
              href={`/portfolio/${event.slug}`}
              className="group block"
              data-cursor-label="VIEW EVENT"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-near-black">
                <Image
                  src={event.coverImage}
                  alt={`${event.title} — ${event.description}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  quality={80}
                  style={event.coverPosition ? { objectPosition: event.coverPosition } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-near-black/10 to-transparent" />
                <span className="absolute top-5 left-5 label-mono text-cream">
                  {String(idx + 1).padStart(2, "0")} · {categoryLabels[event.category]}
                </span>
                <span className="absolute bottom-5 left-5 label-mono-sm text-cream/80">
                  {event.images.length} Photos
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-heading text-xl text-near-black transition-colors group-hover:text-primary"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <span className="label-mono text-near-black transition-all shrink-0 pt-1 group-hover:translate-x-1">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-14 text-center">
            <p className="label-mono text-muted">
              No events found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
