import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === "production",
});

/* Reports App Router client-side navigations so browser errors carry the
   route that produced them. */
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
