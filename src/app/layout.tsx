import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modern-charm.vercel.app"),
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
    url: "https://modern-charm.vercel.app",
    siteName: "Modern Charm Uganda",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/images/hero-wedding.jpg",
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
    images: ["/images/hero-wedding.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#3D7A6E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanning",
              "name": "Modern Charm Uganda",
              "description": "Full-service event styling and decor company based in Kampala, Uganda specializing in weddings, corporate events, and celebrations.",
              "url": "https://modern-charm.vercel.app",
              "telephone": ["+256779399409", "+256775826795"],
              "email": "moderncharm30@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kampala",
                "addressCountry": "UG"
              },
              "sameAs": [
                "https://instagram.com/moderncharm_events",
                "https://facebook.com/moderncharmevents"
              ],
              "image": "https://modern-charm.vercel.app/images/hero-wedding.jpg",
              "priceRange": "UGX 2,000,000 - 12,000,000+"
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
