import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

/* ── Simple in-memory rate limiter (per-IP, 5 requests/hour) ── */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

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

/* ── HTML-escape to prevent XSS in email body ── */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ── Allowed event types (must match ContactContent.tsx) ── */
const ALLOWED_EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Traditional Ceremony",
  "Birthday / Anniversary",
  "Bridal / Baby Shower",
  "Other",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_FIELD_LENGTH = 200;

export async function POST(request: Request) {
  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const resend = getResend();
    const body = await request.json();
    const { fullName, email, phone, eventType, eventDate, message } = body;

    // Validate required fields
    if (!fullName || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Validate field lengths
    if (
      fullName.length > MAX_FIELD_LENGTH ||
      email.length > MAX_FIELD_LENGTH
    ) {
      return NextResponse.json(
        { error: "Field value too long." },
        { status: 400 },
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 },
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Validate event type against whitelist (prevents header injection)
    if (!ALLOWED_EVENT_TYPES.includes(eventType)) {
      return NextResponse.json(
        { error: "Please select a valid event type." },
        { status: 400 },
      );
    }

    // Validate phone format if provided
    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    // HTML-escape all user input before embedding in email
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeEventType = escapeHtml(eventType);
    const safeDate = escapeHtml(eventDate || "Not specified");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: "Modern Charm <onboarding@resend.dev>",
      to: "info@moderncharmevents.com",
      replyTo: email,
      subject: `New Event Inquiry: ${safeEventType} — ${safeName}`,
      html: `
        <h2>New Event Inquiry from Modern Charm Website</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${safeName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${safeEmail}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${safePhone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Event Type:</td><td style="padding: 8px;">${safeEventType}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Event Date:</td><td style="padding: 8px;">${safeDate}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
