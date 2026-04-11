"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fluid-glass style custom cursor.
 *
 * - Desktop only. CSS hides it on touch/coarse pointer devices.
 * - Any element with `data-cursor-label="VIEW EVENT"` (or similar) activates
 *   the cursor with the label in mono uppercase. Without a label, the cursor
 *   stays hidden — keeping default OS cursor for regular content.
 * - Uses requestAnimationFrame + easing for silky follow motion.
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | null>(null);
  const [label, setLabel] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Bail out early on touch / coarse pointer devices
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      const el = event.target as HTMLElement | null;
      const interactive = el?.closest?.<HTMLElement>("[data-cursor-label]");
      if (interactive) {
        const next = interactive.dataset.cursorLabel ?? "";
        setLabel(next);
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;

      const node = ref.current;
      if (node) {
        node.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (raf.current !== null) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor-fluid glass-pill ${visible ? "is-visible" : ""}`}
      style={{
        minWidth: "8.5rem",
        height: "2.75rem",
        padding: "0 1.25rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-cream)",
      }}
    >
      <span className="label-mono whitespace-nowrap">{label || "EXPLORE"}</span>
    </div>
  );
}
