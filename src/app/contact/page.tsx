import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Modern Charm Uganda",
  description:
    "Get in touch with Modern Charm Uganda for event styling consultations. Call +256 779 399 409 or send us a message.",
  alternates: { canonical: "https://modern-charm.vercel.app/contact" },
  openGraph: {
    title: "Contact Us | Modern Charm Uganda",
    description:
      "Get in touch with Modern Charm Uganda for event styling consultations.",
    url: "https://modern-charm.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Modern Charm Uganda",
    description:
      "Get in touch with Modern Charm Uganda for event styling consultations.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
