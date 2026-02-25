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
    value: "+256 779 399 409 / +256 775 826 795",
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
    value: "Mon - Sat: 8AM - 6PM",
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
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0947.jpg",
            "/images/hero-wedding.jpg",
            "/images/portfolio/allan-pauline/img_0791.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-light mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Let&apos;s start a conversation about your dream celebration
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column — Contact Form */}
            <div className="lg:col-span-3">
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
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

            {/* Right Column — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const Content = (
                    <div className="flex items-start gap-4 bg-white rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">
                          {item.label}
                        </p>
                        <p className="text-dark font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={item.label}>{Content}</div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                  Follow Us
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

              {/* Map */}
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772083989!2d32.52291174218754!3d0.31327959999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f90af4c61%3A0x1ba56f5e3a30c9f0!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Modern Charm Uganda location in Kampala"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-cream rounded-2xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
              Have Questions?
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Find answers to common questions about our services, pricing,
              timelines, and more on our FAQ page.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Visit Our FAQ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
