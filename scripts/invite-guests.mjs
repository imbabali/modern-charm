#!/usr/bin/env node
/**
 * Import a guest list and generate one personalised invitation link per guest.
 *
 *   node scripts/invite-guests.mjs --event <event-slug> --in ~/guests.csv --out ~/links.csv
 *
 * Input CSV needs a header row. Recognised columns: name, seats, group, phone.
 * Only `name` is required; seats defaults to 1.
 *
 * Guest names and telephone numbers are personal data under Uganda's Data
 * Protection and Privacy Act 2019. Keep both files outside the repository:
 * it is public, and .gitignore is a safety net rather than a permission.
 *
 * Re-running is safe. A guest whose name already exists for the event is
 * skipped rather than issued a second link, so a partial run can be resumed.
 */

import { createHash, randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const SITE = process.env.INVITE_SITE_ORIGIN ?? "https://moderncharmevents.com";

function arg(flag, fallback = null) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function die(message) {
  console.error(`\n  ${message}\n`);
  process.exit(1);
}

/** Minimal RFC 4180 reader: handles quoted fields and embedded commas. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function toCsvValue(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const eventSlug = arg("--event");
const inputPath = arg("--in");
const outputPath = arg("--out");

if (!eventSlug || !inputPath || !outputPath) {
  die("Usage: node scripts/invite-guests.mjs --event <slug> --in <guests.csv> --out <links.csv>");
}

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  die("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running this script.");
}

const db = createClient(url, key, { auth: { persistSession: false } });

const { data: event, error: eventError } = await db
  .from("events")
  .select("id, slug, couple_a_name, couple_b_name, event_date")
  .eq("slug", eventSlug)
  .maybeSingle();

if (eventError) die(`Could not read the event: ${eventError.message}`);
if (!event) die(`No event with slug "${eventSlug}".`);

const rows = parseCsv(readFileSync(inputPath, "utf8"));
if (rows.length < 2) die("The input file has no data rows.");

const header = rows[0].map((h) => h.trim().toLowerCase());
const indexOf = (name) => header.indexOf(name);

const nameIndex = indexOf("name");
if (nameIndex === -1) die('The input file needs a "name" column.');

const seatsIndex = indexOf("seats");
const groupIndex = indexOf("group");
const phoneIndex = indexOf("phone");

const { data: existing, error: existingError } = await db
  .from("guests")
  .select("display_name")
  .eq("event_id", event.id);

if (existingError) die(`Could not read existing guests: ${existingError.message}`);

const alreadyInvited = new Set((existing ?? []).map((g) => g.display_name.trim().toLowerCase()));

const output = [["name", "seats", "group", "phone", "link", "whatsapp_message"]];
let created = 0;
let skipped = 0;

for (const row of rows.slice(1)) {
  const displayName = (row[nameIndex] ?? "").trim();
  if (!displayName) continue;

  if (alreadyInvited.has(displayName.toLowerCase())) {
    skipped += 1;
    continue;
  }

  const seats = Math.min(Math.max(parseInt(row[seatsIndex] ?? "1", 10) || 1, 1), 20);
  const group = groupIndex === -1 ? null : (row[groupIndex] ?? "").trim() || null;
  const phone = phoneIndex === -1 ? null : (row[phoneIndex] ?? "").trim() || null;

  const token = randomBytes(16).toString("base64url");
  const tokenHash = createHash("sha256").update(token).digest("hex");

  const { error: insertError } = await db.from("guests").insert({
    event_id: event.id,
    token_hash: tokenHash,
    display_name: displayName,
    seats,
    group_label: group,
    phone,
  });

  if (insertError) {
    console.error(`  Skipped ${displayName}: ${insertError.message}`);
    continue;
  }

  const link = `${SITE}/invite/${token}`;
  const message =
    `Dear ${displayName}, you are warmly invited to the wedding of ` +
    `${event.couple_a_name} and ${event.couple_b_name}. ` +
    `Your personal invitation, with all the details and RSVP, is here: ${link}`;

  output.push([displayName, seats, group ?? "", phone ?? "", link, message]);
  created += 1;
  alreadyInvited.add(displayName.toLowerCase());
}

writeFileSync(outputPath, output.map((r) => r.map(toCsvValue).join(",")).join("\n"), "utf8");

console.log(`\n  ${event.couple_a_name} & ${event.couple_b_name}`);
console.log(`  Created ${created} invitation${created === 1 ? "" : "s"}.`);
if (skipped) console.log(`  Skipped ${skipped} already on the list.`);
console.log(`  Links written to ${outputPath}\n`);
