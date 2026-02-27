import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Client Stories | Modern Charm Uganda",
  description:
    "Hear from the people who trusted Modern Charm Uganda with their most special moments. Real reviews from real clients across Kampala and beyond.",
  alternates: { canonical: "https://modern-charm.vercel.app/testimonials" },
  openGraph: {
    title: "Client Stories | Modern Charm Uganda",
    description:
      "Real reviews from real clients across Kampala and beyond.",
    url: "https://modern-charm.vercel.app/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | Modern Charm Uganda",
    description:
      "Real reviews from real clients across Kampala and beyond.",
  },
};

const featuredTestimonial = {
  text: "Thank you for being part of our special day. You did amazing! The event planning & styling was top notch! Thank you for bringing our vision to life. Execution & attention to detail was magnificent. Modern Charm to the world!",
  name: "Mr. & Mrs. Mugagga Mulindwa",
  initials: "MM",
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-cream-dark text-cream-dark"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative overflow-hidden px-6 py-32 text-center text-white md:py-40 lg:py-44">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="https://pub-9b4e0ecb8d0044128690526d6078afd6.r2.dev/videos/cta-clips/cta-allan-pauline-2.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Client Stories
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Hear from the people who trusted us with their most special moments
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-cream p-8 shadow-lg ring-1 ring-accent/20 md:p-14">
            <div className="relative z-10 flex flex-col items-center text-center">
              <Quote className="mb-4 h-10 w-10 text-accent/40 md:h-14 md:w-14" aria-hidden="true" />
              <p className="font-body text-base leading-relaxed text-dark/80 italic md:text-lg lg:text-xl lg:leading-9">
                {featuredTestimonial.text}
              </p>
              <Quote className="mt-4 h-10 w-10 rotate-180 text-accent/40 md:h-14 md:w-14" aria-hidden="true" />

              <div className="mt-10 flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-md">
                  <span className="font-heading text-2xl font-bold text-white">
                    {featuredTestimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-xl font-semibold text-dark">
                    {featuredTestimonial.name}
                  </p>
                  <p className="mt-1 font-body text-sm text-muted">
                    {featuredTestimonial.event}
                  </p>
                </div>
                <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
            More Kind Words
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-muted">
            Every event is a new story, and we are honoured to be part of so many
            beautiful celebrations across Uganda.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group rounded-xl bg-cream-dark p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <Quote className="mb-4 h-8 w-8 text-accent/50" aria-hidden="true" />
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg font-semibold text-dark">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 font-body text-sm text-muted">
                      {testimonial.event}
                    </p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0795.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9567.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9579.jpg",
          ]}
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to create your own story?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let&apos;s talk about bringing your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent-dark px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
