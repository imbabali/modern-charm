"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

/**
 * Wraps the document in a Lenis smooth scroll container.
 *
 * - Skips entirely when the user prefers reduced motion (Rule 4, a11y).
 * - `anchors: true` lets Lenis intercept in-page `#hash` links so hash navigation
 *   (e.g. `/services#planning`) still works.
 * - `root` mounts Lenis on `<html>`, so `window.scrollTo`, Next.js router scroll,
 *   and CSS `scroll-behavior` all continue to work without custom wiring.
 */
export default function SmoothScroll({ children }: Props) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setEnabled(!media.matches);
    handle();
    media.addEventListener("change", handle);
    return () => media.removeEventListener("change", handle);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
