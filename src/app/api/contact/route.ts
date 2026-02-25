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
    const body = await request.json();
    const { fullName, email, phone, eventType, eventDate, budgetRange, message } = body;

    // Validate required fields
    if (!fullName || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Modern Charm <onboarding@resend.dev>",
      to: "moderncharm30@gmail.com",
      replyTo: email,
      subject: `New Event Inquiry: ${eventType} — ${fullName}`,
      html: `
        <h2>New Event Inquiry from Modern Charm Website</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${fullName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Event Type:</td><td style="padding: 8px;">${eventType}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Event Date:</td><td style="padding: 8px;">${eventDate || "Not specified"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${budgetRange || "Not specified"}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
