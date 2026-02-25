import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Modern Charm Uganda",
  description:
    "Get in touch with Modern Charm Uganda for event styling consultations. Call +256 779 399 409 or send us a message.",
  openGraph: {
    title: "Contact Us | Modern Charm Uganda",
    description:
      "Get in touch with Modern Charm Uganda for event styling consultations.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
