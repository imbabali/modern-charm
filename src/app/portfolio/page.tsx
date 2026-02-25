import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Our Portfolio | Modern Charm Uganda",
  description:
    "Browse our gallery of stunning event transformations — weddings, corporate galas, traditional ceremonies, and celebrations styled by Modern Charm Uganda in Kampala.",
  alternates: { canonical: "https://modern-charm.vercel.app/portfolio" },
  openGraph: {
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Browse our gallery of stunning event transformations styled by Modern Charm Uganda.",
    url: "https://modern-charm.vercel.app/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Modern Charm Uganda",
    description:
      "Browse our gallery of stunning event transformations styled by Modern Charm Uganda.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
