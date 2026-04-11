"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent !== "accepted") {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      setDismissed(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    setTimeout(() => setDismissed(true), 400);
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed z-[55] transition-all duration-500 ease-out glass-pill ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      role="banner"
      aria-label="Cookie consent"
      style={{
        left: "1.5rem",
        bottom: "1.5rem",
        maxWidth: "min(32rem, calc(100vw - 3rem))",
        padding: "0.9rem 1.25rem",
      }}
    >
      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
        <p className="label-mono-sm text-cream/85 flex-1 min-w-0">
          We use privacy-respecting analytics.{" "}
          <Link
            href="/privacy"
            className="btn-fluid-alpha inline text-accent"
            data-cursor-label="READ MORE"
          >
            Learn more
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="btn-fluid btn-fluid-gold shrink-0"
          style={{ padding: "0.55rem 1rem", fontSize: "0.7rem" }}
          data-cursor-label="ACCEPT"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
