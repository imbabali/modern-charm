"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Traditional Ceremony",
  "Birthday / Anniversary",
  "Bridal / Baby Shower",
  "Other",
];

const budgetRanges = [
  "Under 2M UGX",
  "2 - 5M UGX",
  "5 - 10M UGX",
  "10 - 20M UGX",
  "20M+ UGX",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+256 779 399 409 / +256 773 043 255",
    href: "tel:+256779399409",
  },
  {
    icon: Mail,
    label: "Email",
    value: "moderncharm30@gmail.com",
    href: "mailto:moderncharm30@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9AM - 5PM",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/moderncharm_events",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/moderncharmevents",
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budgetRange: "",
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

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          budgetRange: "",
          message: "",
        });
      }, 4000);
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-body">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="https://pub-9b4e0ecb8d0044128690526d6078afd6.r2.dev/videos/cta-clips/cta-joshua-rhona.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Let&apos;s start a conversation about your dream celebration
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Inner = (
                <div className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-dark font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Social Sidebar */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column — Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-2">
                  Tell Us About Your Event
                </h2>
                <p className="text-muted mb-8">
                  Fill in the details below and we&apos;ll get back to you
                  within 24 hours.
                </p>

                {isSubmitted ? (
                  <div role="status" aria-live="polite" className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Send className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted">
                      Thank you for reaching out. We&apos;ll be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Full Name <span className="text-accent" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Email Address <span className="text-accent" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+256 7XX XXX XXX"
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="eventType"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Event Type <span className="text-accent" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          required
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
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

                    {/* Row 3: Event Date & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="eventDate"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
                        >
                          <option value="" disabled>
                            Select budget range
                          </option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Message <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event vision, any specific themes or ideas you have in mind..."
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-dark placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div role="alert" className="rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-dark hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column — Why Us + Social */}
            <div className="lg:col-span-1 space-y-6">
              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-dark mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="text-sm font-semibold text-dark">We receive your inquiry</p>
                      <p className="text-xs text-muted mt-0.5">Our team reviews every detail you share.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="text-sm font-semibold text-dark">Consultation call scheduled</p>
                      <p className="text-xs text-muted mt-0.5">We schedule a call to understand your vision.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="text-sm font-semibold text-dark">We get to work</p>
                      <p className="text-xs text-muted mt-0.5">Planning and coordination begins for your event.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-dark mb-4">
                  Follow Us
                </h3>
                <p className="text-sm text-muted mb-4">
                  See our latest work and get inspired for your event.
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9480.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9513.jpg",
            "/images/portfolio/oscar-sandra/IMG_0897.jpg",
          ]}
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Have Questions?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Find answers to common questions about our services, pricing,
            timelines, and more on our FAQ page.
          </p>
          <Link
            href="/faq"
            className="mt-8 inline-flex items-center gap-2 bg-accent-dark hover:bg-accent text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Visit Our FAQ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
