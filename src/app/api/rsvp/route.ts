import { NextResponse } from "next/server";
import { recordRsvp } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

/* ── Rate limit by IP, generous enough for a family sharing one connection ── */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

const MAX_MESSAGE_LENGTH = 500;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many responses from this connection. Please try again later." },
      { status: 429 },
    );
  }

  if (!invitesConfigured()) {
    console.error("[rsvp] Supabase credentials are not configured");
    return NextResponse.json(
      { error: "Responses cannot be recorded right now. Please contact the hosts." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const { token, attending, seats, message } = body;

    if (!isWellFormedToken(token)) {
      return NextResponse.json({ error: "This invitation link is not valid." }, { status: 400 });
    }

    if (typeof attending !== "boolean") {
      return NextResponse.json(
        { error: "Please choose whether you can join us." },
        { status: 400 },
      );
    }

    if (message != null && (typeof message !== "string" || message.length > MAX_MESSAGE_LENGTH)) {
      return NextResponse.json(
        { error: `Your note must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 },
      );
    }

    // The token is the credential, and the database is what enforces the
    // seat limit. Whatever the client sends, invite_rsvp clamps to the seats
    // this guest was actually offered and returns what it committed to.
    const result = await recordRsvp({
      token,
      attending,
      seats: typeof seats === "number" ? seats : 1,
      message: typeof message === "string" && message.trim() ? message.trim() : null,
    });

    if (!result.ok) {
      const status = result.reason === "closed" ? 409 : 404;
      const error =
        result.reason === "closed"
          ? "Responses for this celebration are closed."
          : "This invitation link is not valid.";
      return NextResponse.json({ error }, { status });
    }

    console.info("[rsvp] Recorded a response");
    return NextResponse.json({ success: true, seatsConfirmed: result.seatsConfirmed });
  } catch (error) {
    console.error("[rsvp] Failed to record response:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We could not save your response. Please try again." },
      { status: 500 },
    );
  }
}
