import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const resend = getResend();
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // If RESEND_AUDIENCE_ID is set, add to audience
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
      });
    }

    // Send a welcome/confirmation email
    await resend.emails.send({
      from: "Modern Charm <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Modern Charm — You're Subscribed!",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3D7A6E;">Welcome to Modern Charm!</h1>
          <p>Thank you for subscribing to our newsletter. You'll receive event styling tips, trends, and exclusive offers straight to your inbox.</p>
          <p style="color: #C4915C; font-style: italic;">"Some are born with it, others work for it. Then there's us — the ones who make charm happen."</p>
          <p>— The Modern Charm Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (_error) {
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }
}
