"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

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
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <button
        id={buttonId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-primary"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-heading text-lg font-semibold text-dark pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-base leading-relaxed text-muted pr-10">
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
      {/* Hero Banner */}
      <section className="relative overflow-hidden px-6 py-32 text-center text-white md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_1985.jpg",
            "/images/portfolio/oscar-sandra/IMG_2416.jpg",
            "/images/portfolio/wedding-highlights/IMG_3879.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Everything you need to know about working with Modern Charm
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className={catIndex > 0 ? "mt-14" : ""}>
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-heading text-2xl font-bold text-dark">
                  {category.category}
                </h2>
                <div className="h-px flex-1 bg-cream-dark" />
              </div>

              {/* FAQ Items */}
              <div className="rounded-xl bg-white p-2 shadow-sm md:p-4">
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  return (
                    <FAQAccordionItem
                      key={id}
                      item={item}
                      isOpen={openItems.has(id)}
                      onToggle={() => toggleItem(id)}
                      id={id}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Contact us directly and we&apos;ll be happy to help you plan your
            perfect celebration.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
