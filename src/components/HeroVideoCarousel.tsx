"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

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
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    const vids = [a, b];

    // Wait for video A to actually start playing before revealing it
    const onPlaying = () => {
      setVideoReady(true);
      a.removeEventListener("playing", onPlaying);
    };
    a.addEventListener("playing", onPlaying);

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

    return () => {
      clearInterval(timer);
      a.removeEventListener("playing", onPlaying);
    };
  }, [clips]);

  const transition = `opacity ${FADE_MS}ms ease-in-out`;

  return (
    <>
      {/* Poster image — visible until first video frame is actually playing */}
      <Image
        src={poster}
        alt=""
        fill
        priority
        quality={85}
        className={`object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <video
        ref={videoA}
        muted
        playsInline
        preload="auto"
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
