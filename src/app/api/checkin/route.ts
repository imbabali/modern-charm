import { NextResponse } from "next/server";
import { checkIn } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

/**
 * Door check-in.
 *
 * The scanner token authorises a device for one event; the guest token comes
 * from the QR. Both are resolved server-side, so a scanner cannot admit a
 * guest belonging to a different event, and a guest cannot be admitted for
 * more seats than they confirmed.
 */
export async function POST(request: Request) {
  if (!invitesConfigured()) {
    return NextResponse.json({ error: "Check-in is not configured." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const { scannerToken, guestToken, scannedBy } = body;

    if (!isWellFormedToken(scannerToken) || !isWellFormedToken(guestToken)) {
      return NextResponse.json({ error: "That code was not recognised." }, { status: 400 });
    }

    const result = await checkIn({
      scannerToken,
      guestToken,
      scannedBy: typeof scannedBy === "string" ? scannedBy.slice(0, 80) : null,
    });

    if (result.status === "unauthorised") {
      return NextResponse.json({ error: "This scanner link is not valid." }, { status: 403 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("[checkin] Failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Check-in failed. Please try again." }, { status: 500 });
  }
}
