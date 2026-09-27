import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { requireEnv } from "@/lib/env";

/**
 * The invite tables carry guest names and telephone numbers, which are personal
 * data under Uganda's Data Protection and Privacy Act 2019. Row Level Security
 * is enabled on every table with no policy granted to `anon` or `authenticated`,
 * so the publishable key reads nothing at all.
 *
 * Every read and write therefore runs here, under the service role, and this
 * module must never be imported by a client component. Guests reach the data
 * only through route handlers and server components that have already resolved
 * their token.
 */

let client: SupabaseClient | null = null;

export function inviteDb(): SupabaseClient {
  if (client) return client;

  client = createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { "x-application": "modern-charm-invites" } },
    },
  );

  return client;
}

/** True when the deployment has been given its Supabase credentials. */
export function invitesConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
