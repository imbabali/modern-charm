"use client";

import { useRef, useEffect } from "react";

interface HeroVideoCarouselProps {
  clips: string[];
  poster: string;
}

const CLIP_MS = 5000;
const FADE_MS = 1000;

export default function HeroVideoCarousel({
  clips,
  poster,
}: HeroVideoCarouselProps) {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const active = useRef(0);
  const clipIdx = useRef(0);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    const vids = [a, b];

    // Video A starts playing clip 0
    a.src = clips[0];
    a.load();
    a.play().catch(() => {});
    a.style.opacity = "1";
    b.style.opacity = "0";

    // Video B preloads clip 1
    if (clips.length > 1) {
      b.src = clips[1];
      b.load();
      clipIdx.current = 1;
    }

    const timer = setInterval(() => {
      const curr = active.current;
      const next = curr === 0 ? 1 : 0;

      // Start playing the preloaded standby video
      vids[next].currentTime = 0;
      vids[next].play().catch(() => {});

      // Crossfade: incoming fades in, outgoing fades out
      vids[next].style.opacity = "1";
      vids[curr].style.opacity = "0";

      active.current = next;

      // After fade completes, preload the next clip on the now-hidden video
      setTimeout(() => {
        clipIdx.current = (clipIdx.current + 1) % clips.length;
        vids[curr].src = clips[clipIdx.current];
        vids[curr].load();
      }, FADE_MS + 100);
    }, CLIP_MS);

    return () => clearInterval(timer);
  }, [clips]);

  const transition = `opacity ${FADE_MS}ms ease-in-out`;

  return (
    <>
      <video
        ref={videoA}
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transition, opacity: 1 }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <video
        ref={videoB}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transition, opacity: 0 }}
        aria-hidden="true"
        tabIndex={-1}
      />
    </>
  );
}
