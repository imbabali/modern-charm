import type { Metadata } from "next";
import {
  Check,
  Camera,
  Music,
  UtensilsCrossed,
  Car,
  PenTool,
  Cake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Our Packages | Modern Charm Uganda",
  description:
    "Transparent pricing for every celebration. Explore our Essential, Premium, and Grand event styling packages tailored to your needs.",
};

const packages = [
  {
    name: "Essential Charm",
    price: "2,000,000",
    description:
      "Perfect for couples and hosts who want professional styling with a beautiful, polished look.",
    features: [
      "Event consultation",
      "Basic decor styling",
      "Table settings for up to 100 guests",
      "Standard floral arrangements",
      "Setup & breakdown",
    ],
    featured: false,
  },
  {
    name: "Premium Charm",
    price: "5,000,000",
    description:
      "Our most popular package for those who want a truly memorable, custom-designed celebration.",
    features: [
      "Everything in Essential",
      "Custom theme development",
      "Premium floral & lighting design",
      "Venue transformation",
      "Up to 250 guests",
      "Day-of coordination",
      "Vendor management",
    ],
    featured: true,
  },
  {
    name: "Grand Charm",
    price: "12,000,000",
    description:
      "The ultimate luxury experience. Full-service planning and bespoke design for extraordinary events.",
    features: [
      "Everything in Premium",
      "Full event planning & management",
      "Luxury decor & bespoke designs",
      "Unlimited guests",
      "Multi-day event support",
      "Entertainment coordination",
      "Complete vendor sourcing",
      "Post-event cleanup",
    ],
    featured: false,
  },
];

const addOns = [
  {
    icon: Camera,
    name: "Photography Coordination",
    price: "From 500,000 UGX",
  },
  {
    icon: Music,
    name: "Entertainment Booking",
    price: "From 800,000 UGX",
  },
  {
    icon: UtensilsCrossed,
    name: "Catering Management",
    price: "From 1,000,000 UGX",
  },
  {
    icon: Car,
    name: "Transport Arrangements",
    price: "From 400,000 UGX",
  },
  {
    icon: PenTool,
    name: "Stationery & Invitations",
    price: "From 300,000 UGX",
  },
  {
    icon: Cake,
    name: "Cake & Dessert Styling",
    price: "From 600,000 UGX",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative overflow-hidden px-6 py-32 text-center text-white md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0834.jpg",
            "/images/portfolio/oscar-sandra/IMG_1985.jpg",
            "/images/portfolio/oscar-sandra/IMG_0795.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-accent-light md:text-5xl lg:text-6xl">
            Our Packages
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Transparent pricing for every celebration
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 md:p-10 ${
                  pkg.featured
                    ? "scale-100 border-2 border-accent bg-white shadow-xl shadow-accent/15 lg:scale-105"
                    : "border border-primary/15 bg-white shadow-md hover:shadow-lg"
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-1.5 font-body text-xs font-bold tracking-wide text-white uppercase shadow-md">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-dark">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted">
                    {pkg.description}
                  </p>
                  <div className="mt-6">
                    <p className="font-body text-sm font-medium text-muted uppercase">
                      Starting from
                    </p>
                    <p className="mt-1 font-heading text-3xl font-bold text-primary md:text-4xl">
                      {pkg.price}
                      <span className="ml-1 font-body text-base font-normal text-muted">
                        UGX
                      </span>
                    </p>
                  </div>
                </div>

                <div className="my-8 h-px bg-cream-dark" />

                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="font-body text-sm text-dark/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-10 block w-full rounded-full py-4 text-center font-body text-sm font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? "bg-accent text-white shadow-md hover:bg-accent-light hover:shadow-lg"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-primary/5 p-6 text-center md:p-8">
            <p className="font-body text-sm leading-relaxed text-muted">
              All packages are customizable. Prices may vary based on event
              size, venue, and specific requirements. Contact us for a
              personalized quote tailored to your unique celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
              Add-On Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-muted">
              Enhance your package with these additional services for a truly
              seamless celebration
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-dark">
                      {addon.name}
                    </h3>
                    <p className="mt-0.5 font-body text-sm text-accent font-medium">
                      {addon.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Need something custom?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let&apos;s design your perfect package, tailored to your vision,
            your venue, and your budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
