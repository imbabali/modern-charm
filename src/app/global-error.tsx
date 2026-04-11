"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif", backgroundColor: "var(--color-cream)", color: "var(--color-dark)", margin: 0 }}>
        <div
          role="alert"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--color-muted)", maxWidth: "28rem", marginBottom: "2rem" }}>
            We apologise for the inconvenience. Please try again or return to the homepage.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                backgroundColor: "var(--color-primary)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Link unavailable in global error boundary (renders outside the Next.js layout tree) */}
            <a
              href="/"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
