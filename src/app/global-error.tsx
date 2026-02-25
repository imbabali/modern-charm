"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#FDFAF6", color: "#1A1A1A", margin: 0 }}>
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
          <p style={{ fontSize: "1.125rem", color: "#5F6570", maxWidth: "28rem", marginBottom: "2rem" }}>
            We apologise for the inconvenience. Please try again or return to the homepage.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                backgroundColor: "#3D7A6E",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                backgroundColor: "#C4915C",
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
