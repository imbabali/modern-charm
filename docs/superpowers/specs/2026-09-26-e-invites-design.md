# Personalised E-Invites — Design

Date: 2026-09-26
Status: Approved for implementation

## Purpose

A reusable digital invitation product for Modern Charm clients. Each guest receives a private link
that opens a personalised animated invitation, confirms their attendance, and issues a QR admission
pass. Event hosts see live RSVP counts; door staff scan passes on the day.

The first deployment is a December 2026 wedding. The product is multi-tenant from the first line:
an event is a row, not a branch.

## Scope boundaries

No personal data belongs in this repository. Couple names, venues, guest names, and contact numbers
live only in the database. The repository is public, and Uganda's Data Protection and Privacy Act
2019 governs the contact details this product handles.

Out of scope for the first release: background audio, gift registry, seating lookup, guest photo
uploads.

## Architecture

The invite runs inside the existing Next.js application and deploys with it. No second pipeline.

```
/invite/[token]                  personalised invitation (server-rendered)
/invite/[token]/opengraph-image  per-guest share preview
/invite/[token]/pass             QR admission pass, issued after acceptance
/rsvp-board/[boardToken]         host's live RSVP view, read-only
/scan/[scannerToken]             door scanner for check-in
/api/rsvp                        records a response
/api/checkin                     records an admission
```

Guests never reach the database. Row Level Security is enabled on every table with no policy
granted, so no key reads a table directly. Access runs through five `security definer` functions,
each of which takes a raw bearer token, hashes it in SQL, and returns only the rows that token owns.

No service role key exists in the application. The publishable key alone reads nothing, because a
caller still needs a 128-bit token, so the blast radius of losing that key is zero. Seat clamping
and repeat-scan handling live in those functions rather than in TypeScript, since the database is
the only place a rule about the headcount cannot be bypassed.

### Why the token sits in the path

Open Graph metadata resolves per route segment and cannot read a query string. Placing the guest
token in the path is what allows the share preview itself to carry the guest's name, so a forwarded
link renders "Ms Rhona Ajuna · Admits 1" before the recipient opens it. A query-string design
forfeits this permanently.

### Token scheme

Sixteen random bytes, base64url encoded, giving a 22-character path segment. Only the SHA-256 hash
is stored, under a unique index. Lookup hashes the incoming token and matches. Board and scanner
tokens follow the same scheme at event level.

## Data model

| Table | Holds |
|---|---|
| `events` | One celebration. Names, date, dress code, palette, message, status, hashed board and scanner tokens. |
| `event_moments` | Ordered ceremony, reception and timeline entries with venue and map link. |
| `guests` | One invitation. Event reference, hashed token, display name, seat allowance, optional phone. |
| `rsvps` | One current response per guest, upserted. Attending, seats confirmed, message. |
| `rsvp_log` | Append-only history of every response, so a changed answer is never silently lost. |
| `checkins` | Append-only admission scans with seats admitted and scan time. |

Primary keys are `bigint generated always as identity`. Every foreign key carries an index. Guest
tokens carry a unique index on the hash.

## Guest experience

1. A sealed envelope with a wax seal, which opens on tap.
2. Paged scenes: couple reveal, families, ceremony and reception details, timeline, dress code.
3. A personalised admission card naming the guest and their seat allowance.
4. Accept or decline, with seats confirmed up to the allowance and an optional note.
5. On acceptance, a QR admission pass, an add-to-calendar file, and map links.

Content renders on the server. Animation is progressive enhancement, so the invitation is readable
before any JavaScript executes.

## Performance budget

Guests open these on Ugandan mobile data, where average 3G load is around nineteen seconds and half
of visitors abandon after three. First load stays under 500 KB. The share preview stays under
300 KB, above which WhatsApp discards it. No animation library is added; CSS carries the motion.

## Host experience

The host's RSVP board is an unguessable read-only link, not an account. Hosts are non-technical and
often share duties between two people, so a link they can open on a phone beats a login they will
lose. The same reasoning governs the door scanner. Modern Charm's own administration is passcode
protected.

Guest lists import from CSV, with name and seat allowance per row. Import generates tokens and
exports a per-guest link ready to paste into WhatsApp.

## Verification

Token issuance, rejection of malformed tokens, and theme resolution are unit tested alongside the
existing contact and newsletter tests. Seat clamping is verified against the database function that
enforces it, not against a TypeScript copy that nothing calls. The share preview is measured in
bytes against the 300 KB ceiling rather than assumed.
