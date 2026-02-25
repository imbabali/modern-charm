import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Client Stories | Modern Charm Uganda",
  description:
    "Hear from the people who trusted Modern Charm Uganda with their most special moments. Real reviews from real clients across Kampala and beyond.",
};

const featuredTestimonial = {
  text: "From the very first consultation, Modern Charm felt like family. They listened to every detail of our vision — the soft blush tones, the cascading florals, the candlelit garden ambiance — and brought it all to life in ways we never imagined possible. On the day of our wedding, we walked into the venue and both burst into tears. It was more beautiful than anything we had seen on Pinterest or in magazines. Every single guest asked us who styled the event. Modern Charm didn't just plan our wedding; they created a living, breathing work of art that we will cherish for the rest of our lives. If you're looking for a team that pours their heart and soul into your celebration, look no further.",
  name: "Sarah & David",
  event: "Luxury Garden Wedding, 2025",
};

const testimonials = [
  {
    text: "You weren't just our wedding planner, you were family! The way you handled every detail of our kwanjula — from the traditional bark cloth draping to the modern floral accents — was nothing short of magical. Our families are still talking about it.",
    name: "Anita K.",
    event: "Traditional Kwanjula Ceremony",
    rating: 5,
  },
  {
    text: "Our corporate gala was the talk of the office for months. Modern Charm transformed a standard hotel ballroom into an elegant, immersive experience that left our 300+ guests absolutely stunned. Professional, creative, and flawless execution.",
    name: "James M.",
    event: "Annual Corporate Gala",
    rating: 5,
  },
  {
    text: "Modern Charm turned our backyard into a fairytale. We wanted an intimate anniversary dinner under the stars, and they delivered beyond our wildest expectations. The draped canopy, the twinkling lights, the floral centerpieces — pure magic.",
    name: "Grace & Paul",
    event: "Intimate Anniversary Dinner",
    rating: 5,
  },
  {
    text: "The attention to detail was incredible. Every flower, every drape was perfect. My bridal shower felt like a spread from a luxury magazine. The blush and gold palette was executed to perfection, and the dessert table was a work of art.",
    name: "Monica N.",
    event: "Bridal Shower",
    rating: 5,
  },
  {
    text: "From concept to execution, the team was phenomenal. They understood our brand aesthetic instantly and translated it into a product launch event that generated incredible buzz. The custom installations were a stroke of genius.",
    name: "Robert O.",
    event: "Product Launch Event",
    rating: 5,
  },
  {
    text: "Best decision we made was hiring Modern Charm for our introduction ceremony. They seamlessly blended Ankole traditions with modern elegance, and the result was breathtaking. Both families were absolutely thrilled with every detail.",
    name: "Patricia & Brian",
    event: "Kuhingira Ceremony",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
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
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0882.jpg",
            "/images/portfolio/allan-pauline/img_0023.jpg",
            "/images/portfolio/wedding-highlights/IMG_3893.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
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
                {/* Client Photo Placeholder */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-md">
                  <span className="font-heading text-2xl font-bold text-white">
                    S&D
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
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
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
                <Quote className="mb-4 h-8 w-8 text-accent/50" />
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
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to create your own story?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let&apos;s talk about bringing your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
