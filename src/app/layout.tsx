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
  title: "Modern Charm Uganda | Premier Event Management",
  description:
    "Modern Charm Limited is a premier event management company in Kampala, Uganda. We specialize in event planning, styling, corporate events, product launches, and corporate gifting — crafting seamless, impactful, and memorable experiences.",
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
    title: "Modern Charm Uganda | Premier Event Management",
    description:
      "Premier event management in Kampala, Uganda. Event planning, styling, corporate events, product launches, and corporate gifting.",
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
  alternates: {
    canonical: "https://modern-charm.vercel.app",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EventPlanning",
                "name": "Modern Charm Limited",
                "description": "Premier event management company based in Kampala, Uganda specializing in event planning, styling, corporate events, product launches, and corporate gifting.",
                "url": "https://modern-charm.vercel.app",
                "telephone": ["+256779399409", "+256773043256"],
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
                "priceRange": "$$"
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Modern Charm Uganda",
                "description": "Premium event styling and decor company in Kampala, Uganda.",
                "url": "https://modern-charm.vercel.app",
                "telephone": "+256779399409",
                "email": "moderncharm30@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kampala",
                  "addressRegion": "Central",
                  "addressCountry": "UG"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 0.3476,
                  "longitude": 32.5825
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                "sameAs": [
                  "https://instagram.com/moderncharm_events",
                  "https://facebook.com/moderncharmevents"
                ],
                "image": "https://modern-charm.vercel.app/images/hero-wedding.jpg",
                "priceRange": "$$"
              }
            ]),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
