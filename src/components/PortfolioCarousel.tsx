"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface PortfolioSlide {
  image: string;
  alt: string;
  label: string;
  title: string;
  href: string;
}

export default function PortfolioCarousel({
  slides,
}: {
  slides: PortfolioSlide[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  // Autoplay — scroll one card every 4 seconds, loop back when at end
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 380, behavior: "smooth" });
        }
      }, 4000);
    };

    startAutoplay();

    // Pause on hover / touch
    const pause = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
    const resume = () => {
      pause();
      startAutoplay();
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      pause();
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = direction === "left" ? -380 : 380;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, i) => (
          <Link
            key={i}
            href={slide.href}
            className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
            style={{ width: "350px", height: "440px" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="350px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/50" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                {slide.label}
              </span>
              <h3 className="font-heading mt-3 text-lg font-bold text-white leading-tight">
                {slide.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-white/90 transition-colors group-hover:text-white">
                View Gallery
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
