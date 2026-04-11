import type { Metadata } from "next";
import { Quote } from "lucide-react";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

export const metadata: Metadata = {
  title: "Client Stories | Modern Charm Uganda",
  description:
    "Hear from the people who trusted Modern Charm Uganda with their most special moments. Real reviews from real clients across Kampala and beyond.",
  alternates: { canonical: "https://moderncharmevents.com/testimonials" },
  openGraph: {
    title: "Client Stories | Modern Charm Uganda",
    description: "Real reviews from real clients across Kampala and beyond.",
    url: "https://moderncharmevents.com/testimonials",
    images: [{ url: "/images/portfolio/oscar-sandra/IMG_1930.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | Modern Charm Uganda",
    description: "Real reviews from real clients across Kampala and beyond.",
    images: ["/images/portfolio/oscar-sandra/IMG_1930.jpg"],
  },
};

const featuredTestimonial = {
  text: "Thank you for being part of our special day. You did amazing! The event planning & styling was top notch! Thank you for bringing our vision to life. Execution & attention to detail was magnificent. Modern Charm to the world!",
  name: "Mr. & Mrs. Mugagga Mulindwa",
  event: "Wedding",
};

const testimonials = [
  {
    text: "We truly thank the almighty for having had you grace us with your wisdom, guidance and expertise throughout the process of preparation we went through. Nothing is ever easy for sure but the intensity of the work done was extremely visible in the flawless execution of the function. Tusiima nyo nyo.",
    name: "The Senkungus",
    event: "Wedding",
    rating: 5,
  },
  {
    text: "Appreciation post to the most peaceful understanding decorators Modern Charm. May God abundantly increase and bless your works. When God puts his hand onto something even a wedding won't stress you — everything will overflow smoothly and abundantly.",
    name: "Oscar & Sandra",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    text: "You guys have a solid team, the decor was amazing, food was good, well done on planning and executing this wedding.",
    name: "Lala T.",
    event: "Wedding",
    rating: 5,
  },
  {
    text: "This wedding was fantastic; it's a while since I attended a very well organized wedding.",
    name: "Noah N.",
    event: "Wedding Guest",
    rating: 5,
  },
  {
    text: "Philip! So many compliments on the decor. Everyone loved it — thought I'd let you know!",
    name: "Happy Client",
    event: "Event Decor",
    rating: 5,
  },
  {
    text: "Feedback from guests is perfect. Thanks to everyone who took part in preparations and ensured everything in their docket was going as planned on the day itself.",
    name: "Happy Client",
    event: "Wedding",
    rating: 5,
  },
];

const allReviews = [
  { name: featuredTestimonial.name, text: featuredTestimonial.text, rating: 5 },
  ...testimonials.map((t) => ({ name: t.name, text: t.text, rating: t.rating })),
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Modern Charm Limited",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(allReviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: allReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    reviewBody: r.text,
  })),
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero — dark teal */}
      <section className="relative overflow-hidden bg-dark-teal pt-40 md:pt-48 pb-28 md:pb-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-sammy-lala.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/30 to-near-black/75" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">Testimonials / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            Words from
            <br />
            our clients.
          </h1>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <span className="label-mono-sm text-accent/70">Rating</span>
              <p className="mt-2 font-heading text-3xl text-cream" style={{ letterSpacing: "-0.02em" }}>5.0</p>
            </div>
            <div>
              <span className="label-mono-sm text-accent/70">Reviews</span>
              <p className="mt-2 font-heading text-3xl text-cream" style={{ letterSpacing: "-0.02em" }}>{allReviews.length}</p>
            </div>
            <div>
              <span className="label-mono-sm text-accent/70">Events</span>
              <p className="mt-2 font-heading text-3xl text-cream" style={{ letterSpacing: "-0.02em" }}>100+</p>
            </div>
            <div>
              <span className="label-mono-sm text-accent/70">Years</span>
              <p className="mt-2 font-heading text-3xl text-cream" style={{ letterSpacing: "-0.02em" }}>06+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial — cream editorial */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-custom">
          <span className="label-mono text-accent-dark">Featured / 01</span>
          <blockquote className="mt-10 max-w-5xl">
            <Quote className="h-10 w-10 text-accent mb-8" aria-hidden="true" />
            <p
              className="font-heading text-near-black"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;{featuredTestimonial.text}&rdquo;
            </p>
            <footer className="mt-12 flex items-center gap-6 pt-6 border-t border-near-black/15">
              <div>
                <p className="label-mono text-near-black">
                  {featuredTestimonial.name}
                </p>
                <p className="label-mono-sm text-muted mt-2">
                  {featuredTestimonial.event}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Testimonial Grid — cream, editorial columns */}
      <section className="bg-cream pb-28 md:pb-36">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="label-mono text-accent-dark">More praise / 02</span>
              <h2
                className="mt-6 font-heading text-near-black max-w-2xl"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                More kind words.
              </h2>
            </div>
          </div>

          <div className="mt-12 hairline bg-near-black" />

          <div className="mt-12 grid gap-0 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 border-b border-near-black/15 ${
                  i % 2 === 0 ? "md:border-r md:border-near-black/15" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                  <span className="label-mono-sm text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="mt-6">
                  <p
                    className="font-heading text-near-black"
                    style={{
                      fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-8 pt-6 border-t border-near-black/15">
                  <p className="label-mono text-near-black">{t.name}</p>
                  <p className="label-mono-sm text-muted mt-2">{t.event}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9596.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9567.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9589.jpg",
          ]}
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Start a project / 03</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to create
              <br />
              your own story?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Let&apos;s talk about bringing your vision to life.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-fluid btn-fluid-gold" data-cursor-label="LET'S TALK">
                Let&apos;s talk →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
