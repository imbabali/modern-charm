import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Modern Charm Uganda",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary sm:text-8xl">
        404
      </h1>
      <h2 className="mt-4 font-heading text-2xl font-bold text-dark sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md font-body text-lg text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent-dark px-8 py-4 font-body text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-accent hover:shadow-lg"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-body text-sm font-semibold tracking-wide text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
