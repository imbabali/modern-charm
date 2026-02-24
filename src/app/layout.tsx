import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modern Charm Uganda | Premium Event Styling & Decor",
  description:
    "Modern Charm Uganda is a full-service event styling and decor company based in Kampala, Uganda. We specialize in weddings, corporate events, birthday parties, and all celebrations — transforming venues into breathtaking experiences with elegant, modern design.",
  keywords: [
    "event styling Uganda",
    "wedding decor Kampala",
    "event decoration Uganda",
    "modern event design",
    "wedding planner Kampala",
    "corporate event styling",
    "party decor Uganda",
    "Modern Charm Uganda",
  ],
  authors: [{ name: "Modern Charm Uganda" }],
  openGraph: {
    title: "Modern Charm Uganda | Premium Event Styling & Decor",
    description:
      "Full-service event styling and decor in Kampala, Uganda. Weddings, corporate events, birthdays, and more — designed with elegance and modern charm.",
    url: "https://moderncharmuganda.com",
    siteName: "Modern Charm Uganda",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Charm Uganda — Premium Event Styling & Decor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Charm Uganda | Premium Event Styling & Decor",
    description:
      "Full-service event styling and decor in Kampala, Uganda. Transforming venues into breathtaking experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
