"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert" className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold text-dark sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md font-body text-lg text-muted">
        We apologise for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-lg cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
