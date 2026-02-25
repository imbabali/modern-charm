import type { Metadata } from "next";
import FAQContent from "@/components/FAQContent";
import type { FAQCategory } from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Modern Charm Uganda",
  description:
    "Find answers to common questions about Modern Charm Uganda's event styling services, pricing, booking process, and more.",
  openGraph: {
    title: "FAQ | Modern Charm Uganda",
    description:
      "Find answers to common questions about our event styling services, pricing, and booking process.",
  },
};

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
