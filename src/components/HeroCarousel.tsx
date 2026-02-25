"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
  interval?: number;
}

export default function HeroCarousel({
  images,
  interval = 5000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover object-[center_25%] transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          quality={80}
        />
      ))}
    </div>
  );
}
