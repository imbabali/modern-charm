import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { requireEnv } from "@/lib/env";

/**
 * The invite tables carry guest names and telephone numbers, which are personal
 * data under Uganda's Data Protection and Privacy Act 2019.
 *
 * No service role key exists anywhere in this application. Row Level Security
 * is enabled on every table with no policy granted, so a direct table read
 * returns nothing whatever key is presented. The only door is four
 * `security definer` functions, each of which takes a raw bearer token, hashes
 * it inside the database, and returns just the rows that token owns.
 *
 * The consequence worth stating plainly: the key below is designed to be
 * public, and on its own it reads nothing. A caller still needs a 128-bit
 * token. A leaked service role key, by contrast, would be total compromise.
 * This client is still only used server-side, so the key never reaches a
 * browser either.
 */

let client: SupabaseClient | null = null;

export function inviteDb(): SupabaseClient {
  if (client) return client;

  client = createClient(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_PUBLISHABLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "x-application": "modern-charm-invites" } },
  });

  return client;
}

/** True when the deployment has been given its Supabase credentials. */
export function invitesConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY);
}
