import type { Metadata } from "next";
import FAQContent from "@/components/FAQContent";
import type { FAQCategory } from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Modern Charm Uganda",
  description:
    "Find answers to common questions about Modern Charm Uganda's event planning, styling, corporate gifting, pricing, and booking process.",
  alternates: { canonical: "https://modern-charm.vercel.app/faq" },
  openGraph: {
    title: "FAQ | Modern Charm Uganda",
    description:
      "Find answers to common questions about our event planning, styling, corporate gifting, pricing, and booking process.",
    url: "https://modern-charm.vercel.app/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Modern Charm Uganda",
    description:
      "Find answers to common questions about our event planning, styling, corporate gifting, pricing, and booking process.",
  },
};

const faqData: FAQCategory[] = [
  {
    category: "Our Services",
    items: [
      {
        question: "What services does Modern Charm offer?",
        answer:
          "Modern Charm operates across two core pillars. Our Event Planning & Coordination division handles full event planning from concept to execution — including budget planning, timeline coordination, vendor sourcing, on-site management, and post-event breakdown. We also offer concept development with brainstorming sessions, mood boards, and spatial planning. Our Event Styling & Decor division covers venue transformation, floral arrangements and installations, atmospheric lighting, table settings and centrepieces, statement backdrops and arches, and themed colour palettes. We also provide corporate gifting services — bespoke gift box design, premium hamper curation, branded packaging, and bulk corporate orders.",
      },
      {
        question: "What types of events do you handle?",
        answer:
          "We work across a wide range of celebrations and functions — weddings (both modern and traditional Ugandan ceremonies such as kwanjula and kuhingira), corporate events, product launches, birthday and anniversary celebrations, bridal showers and baby showers, and fully custom private events. We have styled everything from intimate garden gatherings to large-scale corporate functions for clients like UEGCL, Unicaf University, KCB Bank, Hima Cement, Bloomberg Philanthropies, and MAAD McCann.",
      },
      {
        question: "Do you offer corporate gifting?",
        answer:
          "Yes! Our corporate gifting service includes bespoke gift box design, premium hamper curation, branded packaging, bulk corporate orders, seasonal gifting collections, and client appreciation packages. Whether it is a holiday campaign, a product launch, or a corporate thank-you gesture, we design and deliver gifts that leave a lasting impression. Visit our Services page for full details.",
      },
      {
        question: "Where are you based and what areas do you serve?",
        answer:
          "We are based in Kampala, Uganda, and serve events across the entire country — from Entebbe and Jinja to Fort Portal and Mbarara. We also take on destination events across East Africa, including Kenya, Tanzania, and Rwanda. We have styled events at lakeside lodges on Lake Victoria, safari venues, and urban hotels. Wherever your celebration takes place, our team handles all logistics.",
      },
    ],
  },
  {
    category: "Weddings & Ceremonies",
    items: [
      {
        question: "Do you handle both traditional and modern weddings?",
        answer:
          "Absolutely. We have deep expertise in both traditional Ugandan ceremonies and contemporary celebrations. Whether you are planning a kwanjula (Buganda introduction), kuhingira (Ankole introduction), or a modern white wedding, we understand the cultural nuances, protocols, and aesthetics that make each ceremony unique. Our portfolio includes weddings like Allan & Pauline's lavender garden wedding at Lake Victoria, Oscar & Sandra's luxury black-and-white reception with gold arches and chandeliers, and Lorna's traditional kuhingira ceremony. Many of our clients choose to blend traditional and modern elements, and we love creating that seamless fusion.",
      },
      {
        question: "Can you work with my existing vendors?",
        answer:
          "Of course. We are happy to collaborate with your preferred vendors — caterers, photographers, DJs, florists, or any other professionals. We believe in teamwork and maintaining strong relationships with all event partners. If you need vendor recommendations, we also have a trusted network across Kampala and beyond who we can connect you with.",
      },
      {
        question: "Do you offer destination wedding styling?",
        answer:
          "Yes! We have styled events at some of the most beautiful venues across Uganda, from lakeside lodges and lake-view gardens to safari lodges and urban rooftops. We also travel to neighbouring countries for destination celebrations. Our team handles all logistics — transporting decor, coordinating with local venue teams, and managing setup — so you can relax and enjoy your special day.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        question: "What is your pricing structure?",
        answer:
          "We offer three core packages — Essential Charm (starting from UGX 2,000,000), Premium Charm (starting from UGX 5,000,000), and Grand Charm (starting from UGX 12,000,000) — plus fully custom options. Final pricing depends on factors like event size, venue requirements, design complexity, and additional services. We believe in transparent pricing and always provide a detailed breakdown before you commit. Contact us to discuss which package suits your event best.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a 40% deposit to secure your date and begin the planning process. This deposit covers initial consultations, concept development, and the sourcing of materials and vendors. The remaining balance is due no later than 2 weeks before the event date. We accept mobile money, bank transfer, and other convenient payment methods. For large or multi-day events, we can arrange a flexible payment schedule.",
      },
      {
        question: "Can I get a package tailored to my event?",
        answer:
          "Absolutely. Every event is unique, and we are happy to build a package tailored to your specific needs and budget. Simply reach out through our Contact page or WhatsApp us at +256 779 399 409, and we will work with you to create the perfect plan.",
      },
    ],
  },
  {
    category: "Working With Us",
    items: [
      {
        question: "What is your event planning process?",
        answer:
          "Our proven five-step process ensures every event is planned and executed to perfection. It starts with a Client Briefing where we learn about your vision, goals, and preferences. Next comes Brainstorming, where our creative team develops unique concepts tailored to your event. We then move into Client Presentation, sharing mood boards and plans for your review. After Concept Approval — where we refine until everything matches your expectations — we move to Event Execution, where our team brings everything to life with precision and stays on-site to ensure a seamless experience.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "For weddings and large-scale events, we recommend booking 3 to 6 months in advance to ensure availability and allow ample time for planning. For smaller events such as bridal showers, birthday parties, or corporate gatherings, 1 to 3 months is usually sufficient. That said, we understand some events come together quickly — reach out and we will do our best to accommodate you. Our hours are Monday to Saturday, 9 AM to 5 PM.",
      },
      {
        question: "Can I see your previous work?",
        answer:
          "Of course! Our Portfolio page features real galleries from past events — including weddings, traditional ceremonies, and styled celebrations with over 150 photos from real clients. You can also follow us on Instagram at @moderncharm_events for daily updates, behind-the-scenes content, and fresh inspiration. During your consultation, we are happy to walk you through events similar to yours.",
      },
      {
        question: "How do I get in touch?",
        answer:
          "You can reach us through our Contact page, call us directly at +256 779 399 409 (Philip) or +256 773 043 255 (Benjamin), email us at moderncharm30@gmail.com, or WhatsApp us anytime. We are also active on Instagram (@moderncharm_events) and Facebook (moderncharmevents). After you reach out, our team reviews your inquiry and schedules a consultation call to discuss your event.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((cat) =>
              cat.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              }))
            ),
          }),
        }}
      />
      <FAQContent faqData={faqData} />
    </>
  );
}
