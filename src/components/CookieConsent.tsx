"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent !== "accepted") {
      // Small delay so the banner animates in
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  // Don't render at all if already accepted (checked after mount)
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!visible && localStorage.getItem("cookie-consent") === "accepted") {
      const timer = setTimeout(() => setDismissed(true), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 rounded-t-2xl bg-dark px-6 py-4 shadow-lg transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="banner"
      aria-label="Cookie consent"
    >
      {/* Desktop: single row | Mobile: stacked */}
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
        <p className="text-center text-sm text-white sm:text-left">
          We use privacy-respecting analytics to improve your experience. No
          personal data is collected.{" "}
          <Link
            href="/privacy"
            className="text-accent-light underline hover:text-white"
          >
            Learn more
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 cursor-pointer rounded-full bg-accent-dark px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
