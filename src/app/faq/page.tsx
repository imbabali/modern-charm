"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What services does Modern Charm offer?",
        answer:
          "Modern Charm is a full-service event styling and decor company. We specialize in weddings (both traditional and modern), corporate events, traditional ceremonies such as kwanjula and kuhingira, bridal showers, anniversary dinners, product launches, and private celebrations. Our services range from basic decor styling to complete event planning and management, including venue transformation, floral design, lighting, vendor coordination, and day-of execution.",
      },
      {
        question: "Where are you located?",
        answer:
          "We are based in Kampala, Uganda, but we proudly serve events across the entire country — from Entebbe and Jinja to Fort Portal and Mbarara. We also take on destination events across East Africa, including Kenya, Tanzania, and Rwanda. Wherever your celebration takes place, our team is ready to bring the magic.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "For weddings and large-scale events, we recommend booking at least 3 to 6 months in advance to ensure availability and allow ample time for planning and design. For smaller events such as bridal showers, birthday parties, or corporate gatherings, 1 to 3 months is usually sufficient. However, we understand that some events come together quickly — reach out and we will do our best to accommodate you.",
      },
    ],
  },
  {
    category: "Weddings",
    items: [
      {
        question: "Do you handle both traditional and modern weddings?",
        answer:
          "Absolutely! We take great pride in our ability to style both traditional Ugandan ceremonies and contemporary celebrations with equal expertise. Whether you are planning a kwanjula (Buganda introduction), kuhingira (Ankole introduction), or a modern white wedding, we understand the cultural nuances, protocols, and aesthetics that make each ceremony unique. Many of our clients choose to blend traditional and modern elements, and we love helping them create that seamless fusion.",
      },
      {
        question: "Can you work with my existing vendors?",
        answer:
          "Of course! We are happy to collaborate with your preferred vendors — whether it is your caterer, photographer, DJ, or florist. We believe in teamwork and maintaining great relationships with all event professionals. If you need vendor recommendations, we also have a trusted network of partners across Kampala and beyond who we can connect you with to ensure every aspect of your event is covered.",
      },
      {
        question: "Do you offer destination wedding styling?",
        answer:
          "Yes, we do! We have styled events at some of the most beautiful venues across Uganda, from lakeside lodges on Lake Victoria and Lake Bunyonyi to safari lodges in Queen Elizabeth National Park. We also travel to neighbouring countries for destination celebrations. Our team handles all logistics, from transporting decor to coordinating with local venue teams, so you can relax and enjoy your special day without worry.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "What is your pricing structure?",
        answer:
          "We offer three core packages — Essential Charm (starting from UGX 2,000,000), Premium Charm (starting from UGX 5,000,000), and Grand Charm (starting from UGX 12,000,000) — plus fully custom options. Final pricing depends on factors such as event size, venue requirements, design complexity, and any additional services you may need. We believe in transparent pricing and will always provide a detailed breakdown before you commit. Visit our Packages page for a full overview of what each tier includes.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a 40% deposit to secure your date and begin the planning process. This deposit covers initial consultations, concept development, and the sourcing of materials and vendors. The remaining balance is due no later than 2 weeks before the event date. We accept mobile money, bank transfer, and other convenient payment methods. For very large or multi-day events, we can arrange a flexible payment schedule — just ask.",
      },
    ],
  },
  {
    category: "Process",
    items: [
      {
        question: "What is your event planning process?",
        answer:
          "Our process is designed to be smooth, collaborative, and enjoyable. It begins with an initial consultation where we learn about your vision, preferences, and budget. From there, we move into concept development, creating mood boards and design proposals for your review. Once the concept is approved, we handle all the logistics — sourcing materials, coordinating vendors, and managing timelines. On event day, our team arrives early for setup and stays through to ensure flawless execution. We handle everything so you can be fully present and enjoy your celebration.",
      },
      {
        question: "Can I see your previous work?",
        answer:
          "Of course! We invite you to visit our Portfolio page right here on our website, where you can browse photos and details from past events. You can also follow us on Instagram at @moderncharm_events for daily updates, behind-the-scenes content, and fresh inspiration. During your consultation, we are happy to walk you through case studies of events similar to yours so you can see exactly what to expect.",
      },
    ],
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-primary"
        aria-expanded={isOpen}
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

export default function FAQPage() {
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
    <main className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
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
          <p className="mt-4 font-body text-lg text-white/85">
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
    </main>
  );
}
