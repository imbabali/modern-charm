"use client";

import { useRef, useEffect } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Mobile-safe background video with autoplay.
 *
 * Uses the same HTML pattern that worked on mobile (preload="metadata"
 * + <source> child), plus JS-side fixes for iOS reliability:
 * 1. Sets video.muted = true via JS property (iOS sometimes ignores HTML attr)
 * 2. Calls video.play() with .catch() fallback
 * 3. IntersectionObserver to play when visible, pause when offscreen
 */
export default function BackgroundVideo({
  src,
  className = "",
  style,
}: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Ensure muted via JS property (iOS requirement)
    video.muted = true;

    // Attempt autoplay
    video.play().catch(() => {});

    // Pause when offscreen, play when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      style={style}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
