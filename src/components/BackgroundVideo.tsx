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
 * Why a component instead of a plain <video>?
 * 1. Sets `video.muted = true` via JS property — more reliable on iOS
 *    than the HTML attribute alone (React sometimes skips it).
 * 2. Calls `video.play()` on mount with `.catch()` fallback.
 * 3. Uses IntersectionObserver to pause/resume — mobile browsers
 *    block autoplay for offscreen videos.
 * 4. Appends `#t=0.001` so iOS renders the first frame immediately
 *    instead of a black box.
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

  // Append #t=0.001 to force first-frame render on iOS
  const safeSrc = src.includes("#") ? src : `${src}#t=0.001`;

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src={safeSrc}
      className={className}
      style={style}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
