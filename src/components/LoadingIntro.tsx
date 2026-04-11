"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mc-intro-seen";

/**
 * First-visit brand intro — rotates the MC monogram 315° over 1.5s,
 * then fades the overlay out. Gated by sessionStorage so it only plays
 * once per browser tab session.
 *
 * Respects prefers-reduced-motion: skips the rotation and uses a soft
 * 300ms fade instead.
 */
export default function LoadingIntro() {
  const [phase, setPhase] = useState<"hidden" | "intro" | "fading" | "gone">("hidden");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let shouldShow = true;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) shouldShow = false;
    } catch {
      // sessionStorage blocked (private mode / embedded) — still show intro
    }

    if (!shouldShow) {
      setPhase("gone");
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase("intro");

    const holdMs = reduce ? 200 : 1600;
    const fadeMs = reduce ? 200 : 600;

    const fadeTimer = window.setTimeout(() => setPhase("fading"), holdMs);
    const goneTimer = window.setTimeout(() => {
      setPhase("gone");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }, holdMs + fadeMs);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-near-black"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.6s var(--ease-out-cubic)",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        <div
          className="animate-intro-cube"
          style={{
            width: "clamp(4rem, 10vw, 6rem)",
            height: "clamp(4rem, 10vw, 6rem)",
            border: "1px solid var(--color-accent)",
            background:
              "linear-gradient(135deg, transparent 0%, rgba(196,145,92,0.16) 50%, transparent 100%)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <span
            className="font-heading text-accent"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            MC
          </span>
        </div>
        <span
          className="label-mono text-cream/70"
          style={{ opacity: phase === "fading" ? 0 : 1, transition: "opacity 0.3s" }}
        >
          Modern Charm — Kampala
        </span>
      </div>
    </div>
  );
}
