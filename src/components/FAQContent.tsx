"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  id,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  index: number;
}) {
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-t border-near-black/15 last:border-b last:border-near-black/15">
      <button
        id={buttonId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-7 text-left transition-colors hover:text-primary group"
        aria-expanded={isOpen}
        aria-controls={panelId}
        data-cursor-label={isOpen ? "COLLAPSE" : "EXPAND"}
      >
        <span className="flex items-start gap-6 flex-1">
          <span className="label-mono-sm text-near-black/40 tabular-nums pt-2 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-lg md:text-xl text-near-black pr-4 transition-colors group-hover:text-primary" style={{ letterSpacing: "-0.01em" }}>
            {item.question}
          </span>
        </span>
        <span
          className="shrink-0 w-9 h-9 border border-near-black/20 inline-flex items-center justify-center transition-all duration-300 group-hover:border-primary"
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-near-black group-hover:text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-near-black group-hover:text-primary" />
          )}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-base leading-relaxed text-muted pl-12 md:pl-14 pr-4 md:pr-10 max-w-3xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQContent({ faqData }: { faqData: FAQCategory[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner — dark-teal */}
      <section className="relative overflow-hidden bg-dark-teal pt-40 md:pt-48 pb-24 md:pb-32">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-lala-intro-a.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/60 via-near-black/30 to-near-black/70" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">FAQ / 00</span>
          <h1
            className="mt-6 font-heading text-[clamp(2.5rem,7vw,6rem)] text-cream leading-[0.95] max-w-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Questions, answered.
          </h1>
          <p className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed">
            Everything you need to know about working with Modern Charm.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32">
        <div className="container-custom max-w-5xl">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className={catIndex > 0 ? "mt-24" : ""}>
              <div className="mb-8 flex items-center gap-6">
                <span className="label-mono text-accent-dark">
                  {String(catIndex + 1).padStart(2, "0")} /
                </span>
                <h2
                  className="font-heading text-2xl md:text-3xl text-near-black"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {category.category}
                </h2>
              </div>

              <div>
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  return (
                    <FAQAccordionItem
                      key={id}
                      item={item}
                      isOpen={openItems.has(id)}
                      onToggle={() => toggleItem(id)}
                      id={id}
                      index={itemIndex}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_1985.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9562.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9609.jpg",
          ]}
          objectPosition="center 35%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom text-center drop-shadow-hero">
          <span className="label-mono text-accent">Next step / 02</span>
          <h2
            className="mt-6 font-heading text-[clamp(2.25rem,5vw,4rem)] text-cream leading-[0.95] max-w-3xl mx-auto"
            style={{ letterSpacing: "-0.025em" }}
          >
            Still have questions?
          </h2>
          <p className="mt-6 font-body text-lg text-cream/85 max-w-2xl mx-auto">
            Contact us directly and we&apos;ll be happy to help you plan your
            perfect celebration.
          </p>
          <Link
            href="/contact"
            className="btn-fluid btn-fluid-gold mt-10"
            data-cursor-label="GET IN TOUCH"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
