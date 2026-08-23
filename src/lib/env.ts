/**
 * Central declaration of every environment variable this app reads.
 *
 * Server-side only. Next.js inlines `NEXT_PUBLIC_*` variables at build time
 * for static member access (`process.env.NEXT_PUBLIC_X`) but not for dynamic
 * indexing, so client-side code must keep reading those directly.
 *
 * Vercel holds these per environment (Development / Preview / Production).
 * A variable that is present in one environment and absent in another is the
 * failure mode this module exists to make loud: `requireEnv` names the feature
 * that breaks and the command that fixes it.
 */

interface EnvSpec {
  /** Whether the app can serve a request without it. */
  required: boolean;
  /** What stops working when it is missing. */
  feature: string;
}

export const ENV_VARS = {
  RESEND_API_KEY: {
    required: true,
    feature: "The contact form and newsletter signup",
  },
  RESEND_AUDIENCE_ID: {
    required: false,
    feature: "Adding newsletter signups to the mailing list",
  },
  NEXT_PUBLIC_SENTRY_DSN: {
    required: false,
    feature: "Error reporting to Sentry",
  },
  SENTRY_ORG: {
    required: false,
    feature: "Source map upload at build time",
  },
  SENTRY_PROJECT: {
    required: false,
    feature: "Source map upload at build time",
  },
  SENTRY_AUTH_TOKEN: {
    required: false,
    feature: "Source map upload at build time",
  },
} as const satisfies Record<string, EnvSpec>;

export type EnvVarName = keyof typeof ENV_VARS;

/** Read a variable the caller cannot proceed without. */
export function requireEnv(name: EnvVarName): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing environment variable ${name}. ${ENV_VARS[name].feature} ` +
        `cannot work without it. Add it with: vercel env add ${name}`,
    );
  }
  return value;
}

/** Read a variable the caller can degrade without. */
export function optionalEnv(name: EnvVarName): string | undefined {
  return process.env[name] || undefined;
}

/** Required variables that are absent from the current environment. */
export function missingRequiredEnv(): EnvVarName[] {
  return (Object.keys(ENV_VARS) as EnvVarName[]).filter(
    (name) => ENV_VARS[name].required && !process.env[name],
  );
}
