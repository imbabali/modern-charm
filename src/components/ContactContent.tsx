"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Check, AlertCircle } from "lucide-react";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Traditional Ceremony",
  "Birthday / Anniversary",
  "Bridal / Baby Shower",
  "Other",
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          message: "",
        });
      }, 4000);
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-near-black/20 px-0 pt-6 pb-2 text-near-black placeholder:text-near-black/30 focus:border-primary focus:outline-none transition-colors duration-300 font-body text-base";

  return (
    <div className="font-body">
      {/* Hero Banner — dark teal */}
      <section className="relative overflow-hidden bg-dark-teal pt-40 md:pt-48 pb-24 md:pb-32">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-joshua-rhona.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/25 to-near-black/65" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">Contact / 00</span>
          <h1
            className="mt-6 font-heading text-[clamp(2.75rem,8vw,7rem)] text-cream leading-[0.92] max-w-4xl"
            style={{ letterSpacing: "-0.035em" }}
          >
            Let&apos;s talk
            <br />
            about your event.
          </h1>
          <p className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed">
            Tell us what you&apos;re planning and we&apos;ll get back within 24 hours
            with next steps.
          </p>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-cream border-b border-near-black/10">
        <div className="container-custom py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div>
              <span className="label-mono text-accent-dark">Phone / 01</span>
              <a
                href="tel:+256779399409"
                className="btn-fluid-alpha inline mt-4 block font-heading text-lg text-near-black"
                data-cursor-label="CALL"
              >
                +256 779 399 409
              </a>
              <p className="mt-1 text-sm text-muted">/ +256 773 043 255</p>
            </div>
            <div>
              <span className="label-mono text-accent-dark">Email / 02</span>
              <a
                href="mailto:info@moderncharmevents.com"
                className="btn-fluid-alpha inline mt-4 block font-heading text-lg text-near-black break-words"
                data-cursor-label="EMAIL"
              >
                info@moderncharmevents.com
              </a>
            </div>
            <div>
              <span className="label-mono text-accent-dark">Studio / 03</span>
              <p className="mt-4 font-heading text-lg text-near-black">
                Kampala, Uganda
              </p>
            </div>
            <div>
              <span className="label-mono text-accent-dark">Hours / 04</span>
              <p className="mt-4 font-heading text-lg text-near-black">
                Mon–Sat
                <br />
                <span className="text-base text-muted font-body">09:00–17:00 EAT</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + sidebar */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Form */}
            <div className="lg:col-span-8">
              <span className="label-mono text-accent-dark">Enquire / 05</span>
              <h2
                className="mt-5 font-heading text-[clamp(2rem,4vw,3.5rem)] text-near-black leading-[0.95] max-w-3xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Tell us about your event.
              </h2>
              <p className="mt-6 text-muted max-w-xl">
                Fill in the details below and we&apos;ll get back to you
                within 24 hours to schedule a consultation.
              </p>

              {isSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-14 py-20 border-t border-near-black/15 text-center"
                >
                  <div className="w-14 h-14 border border-accent mx-auto mb-6 flex items-center justify-center">
                    <Check className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <span className="label-mono text-accent-dark">Received / 00</span>
                  <h3
                    className="mt-4 font-heading text-3xl text-near-black"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Message received.
                  </h3>
                  <p className="mt-3 text-muted max-w-md mx-auto">
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-14 space-y-10">
                  {/* Row 1 — Name / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="relative">
                      <label
                        htmlFor="fullName"
                        className="label-mono-sm text-accent-dark absolute top-0 left-0"
                      >
                        01 · Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        maxLength={200}
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="label-mono-sm text-accent-dark absolute top-0 left-0"
                      >
                        02 · Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Phone / Event type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="label-mono-sm text-accent-dark absolute top-0 left-0"
                      >
                        03 · Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength={30}
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+256 7XX XXX XXX"
                        className={inputClass}
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="eventType"
                        className="label-mono-sm text-accent-dark absolute top-0 left-0"
                      >
                        04 · Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 — Event date */}
                  <div className="relative">
                    <label
                      htmlFor="eventDate"
                      className="label-mono-sm text-accent-dark absolute top-0 left-0"
                    >
                      05 · Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Row 4 — Message */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="label-mono-sm text-accent-dark absolute top-0 left-0"
                    >
                      06 · Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      maxLength={5000}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event vision, themes, guest count…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 label-mono-sm text-accent-dark"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="pt-6 border-t border-near-black/15">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-fluid btn-fluid-dark"
                      data-cursor-label="SEND MESSAGE"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <span aria-hidden="true">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right — Process + Social */}
            <aside className="lg:col-span-4 space-y-12">
              <div>
                <span className="label-mono text-accent-dark">Process / 06</span>
                <h3
                  className="mt-5 font-heading text-2xl text-near-black"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  What happens next?
                </h3>
                <ol className="mt-8 space-y-6">
                  {[
                    { t: "We receive your enquiry", d: "Our team reviews every detail you share." },
                    { t: "Consultation call", d: "We schedule a call to understand your vision." },
                    { t: "We get to work", d: "Planning and coordination begins for your event." },
                  ].map((step, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="label-mono text-accent-dark pt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-heading text-base text-near-black" style={{ letterSpacing: "-0.01em" }}>
                          {step.t}
                        </p>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <span className="label-mono text-accent-dark">Follow / 07</span>
                <ul className="mt-5 flex flex-col gap-3">
                  <li>
                    <a
                      href="https://instagram.com/moderncharm_events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-fluid-alpha inline font-heading text-lg text-near-black"
                      data-cursor-label="INSTAGRAM"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/moderncharmevents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-fluid-alpha inline font-heading text-lg text-near-black"
                      data-cursor-label="FACEBOOK"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA — back to FAQ */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9480.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9513.jpg",
            "/images/portfolio/oscar-sandra/IMG_1963.jpg",
          ]}
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom text-center drop-shadow-hero">
          <span className="label-mono text-accent">Have questions?</span>
          <h2
            className="mt-6 font-heading text-[clamp(2.25rem,5vw,4rem)] text-cream leading-[0.95] max-w-2xl mx-auto"
            style={{ letterSpacing: "-0.025em" }}
          >
            Visit our FAQ.
          </h2>
          <p className="mt-6 font-body text-lg text-cream/85 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and timelines.
          </p>
          <Link
            href="/faq"
            className="btn-fluid btn-fluid-gold mt-10"
            data-cursor-label="VIEW FAQ"
          >
            Visit FAQ
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
