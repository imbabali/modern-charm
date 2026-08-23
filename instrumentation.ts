import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

/* Next.js calls this for every server-side request error. Without it, errors
   thrown in Server Components and route handlers never reach Sentry. */
export const onRequestError = Sentry.captureRequestError;
