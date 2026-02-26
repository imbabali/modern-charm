"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface HeroVideoCarouselProps {
  clips: string[];
  poster: string;
}

export default function HeroVideoCarousel({
  clips,
  poster,
}: HeroVideoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const advance = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % clips.length);
      setFading(false);
    }, 800);
  }, [clips.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = clips[current];
    video.load();
    video.play().catch(() => {});

    const handleEnded = () => advance();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [current, clips, advance]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="metadata"
      poster={poster}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms] ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
