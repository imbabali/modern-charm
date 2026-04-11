import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

export const metadata: Metadata = {
  title: "Our Services | Modern Charm Uganda",
  description:
    "From event planning and coordination to styling and decor — discover Modern Charm Limited's full range of event management services in Kampala.",
  alternates: { canonical: "https://moderncharmevents.com/services" },
  openGraph: {
    title: "Our Services | Modern Charm Uganda",
    description:
      "Discover Modern Charm Limited's full range of event management services in Kampala.",
    url: "https://moderncharmevents.com/services",
    images: [{ url: "/images/portfolio/lornas-kuhingira/dji_0985.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Modern Charm Uganda",
    description:
      "Discover Modern Charm Limited's full range of event management services in Kampala.",
    images: ["/images/portfolio/lornas-kuhingira/dji_0985.jpg"],
  },
};

const serviceCategories = [
  {
    id: "planning",
    title: "Event Planning & Coordination",
    tagline: "From vision to flawless execution",
    description:
      "We take the stress out of event planning by handling every logistical detail — from initial concept to day-of coordination. Our experienced team manages budgets, timelines, vendor sourcing, and on-site operations so you can focus on enjoying your celebration. Whether it's a corporate conference, a product launch, or an intimate dinner, we plan with precision and care.",
    image: "/images/portfolio/oscar-sandra/IMG_2411.jpg",
    imagePosition: "center 20%",
    imageAlt:
      "Grand black and gold reception venue with crystal chandeliers styled by Modern Charm",
    subServices: [
      {
        title: "Event Planning",
        highlights: [
          "Full event planning from concept to execution",
          "Budget planning & optimisation",
          "Detailed timeline coordination",
          "Trusted vendor sourcing & management",
          "Professional day-of management",
          "Post-event breakdown & wrap-up",
        ],
      },
      {
        title: "Event Management",
        highlights: [
          "End-to-end event coordination",
          "On-site management team",
          "Vendor & supplier liaison",
          "Guest management & flow",
          "Real-time problem solving",
          "Seamless event transitions",
        ],
      },
      {
        title: "Concept Development",
        highlights: [
          "Creative brainstorming sessions",
          "Mood boards & visual concepts",
          "Theme development & design",
          "Spatial planning & layout",
          "Brand integration for corporate events",
          "Cultural motif incorporation",
        ],
      },
      {
        title: "Product Launches",
        highlights: [
          "Launch event design & coordination",
          "Brand activation setups",
          "Stage design & AV coordination",
          "Media & press area setup",
          "Guest experience design",
          "Exhibition & display management",
        ],
      },
    ],
  },
  {
    id: "styling",
    title: "Event Styling & Decor",
    tagline: "Transforming spaces into unforgettable experiences",
    description:
      "Transform any venue into a breathtaking experience. Our creative team designs immersive environments that reflect your vision and tell your story. From floral installations and lighting design to bespoke gift curation and statement backdrops — we style every detail to perfection, creating spaces that leave lasting impressions.",
    image: "/images/portfolio/lornas-kuhingira/7b7a9560.jpg",
    imagePosition: "center 30%",
    imageAlt:
      "Sage green reception with hanging floral installations and cross-back chairs styled by Modern Charm",
    subServices: [
      {
        title: "Event Styling",
        highlights: [
          "Venue styling & transformation",
          "Bespoke floral arrangements & installations",
          "Atmospheric lighting design",
          "Elegant table settings & centrepieces",
          "Statement backdrops & arches",
          "Themed colour palettes & decor",
        ],
      },
      {
        title: "Corporate Gifting",
        highlights: [
          "Bespoke gift box design & assembly",
          "Premium hamper curation",
          "Branded packaging solutions",
          "Bulk corporate gift orders",
          "Seasonal & holiday gifting",
          "Client appreciation packages",
        ],
      },
    ],
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Modern Charm Limited",
  url: "https://moderncharmevents.com",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Services",
    itemListElement: serviceCategories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.title,
      description: cat.description,
      itemListElement: cat.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.title,
          description: sub.highlights.join(". "),
        },
      })),
    })),
  },
};

export default function ServicesPage() {
  return (
    <div className="font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Banner — near-black */}
      <section className="relative overflow-hidden bg-near-black pt-40 md:pt-48 pb-28 md:pb-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-sammy-lala.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/30 to-near-black/80" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">Services / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            From vision to
            <br />
            flawless execution.
          </h1>
          <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
            Two disciplines, one obsessive craft. Event planning and
            coordination, and event styling and décor.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => {
        const isStyling = category.id === "styling";
        const sectionBg = isStyling ? "bg-dark-teal text-cream" : "bg-cream";
        const accent = isStyling ? "text-accent/80" : "text-accent-dark";
        const hairline = isStyling ? "bg-cream" : "bg-near-black";
        const textMain = isStyling ? "text-cream" : "text-near-black";
        const textBody = isStyling ? "text-cream/75" : "text-muted";
        const subtitleColor = isStyling ? "text-accent-light" : "text-accent-dark";

        return (
          <section
            key={category.id}
            id={category.id}
            className={`${sectionBg} py-28 md:py-40 scroll-mt-32`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-12 gap-8 md:gap-16">
                <div className={`col-span-12 lg:col-span-5 ${isStyling ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-near-black">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      style={{ objectPosition: category.imagePosition }}
                      quality={80}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>

                <div className={`col-span-12 lg:col-span-7 ${isStyling ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                  <span className={`label-mono ${accent}`}>
                    Service / {String(catIndex + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className={`mt-6 font-heading ${textMain}`}
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 4rem)",
                      lineHeight: 0.95,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {category.title}
                  </h2>
                  <p className={`mt-6 font-heading text-xl italic ${subtitleColor}`}>
                    {category.tagline}
                  </p>
                  <p className={`mt-8 ${textBody} leading-relaxed max-w-2xl`}>
                    {category.description}
                  </p>
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className={isStyling ? "btn-fluid btn-fluid-gold" : "btn-fluid btn-fluid-dark"}
                      data-cursor-label="GET A QUOTE"
                    >
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`mt-24 hairline ${hairline}`} />

              {/* Sub-services */}
              <div className="mt-16 grid md:grid-cols-2 gap-x-0 gap-y-0">
                {category.subServices.map((sub, i) => (
                  <div
                    key={sub.title}
                    className={`p-8 md:p-10 ${
                      i % 2 === 1 ? "md:border-l" : ""
                    } ${i >= 2 ? "md:border-t" : ""} ${
                      i > 0 && i % 2 === 0 ? "border-t md:border-t" : ""
                    } ${i > 0 && i % 2 === 1 ? "border-t md:border-t-0" : ""} ${
                      isStyling ? "border-cream/15" : "border-near-black/15"
                    }`}
                    style={{
                      borderTopWidth: i > 0 ? "1px" : undefined,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`label-mono-sm ${accent} tabular-nums`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`label-mono-sm ${textBody}`}>
                        {category.id === "planning" ? "Planning" : "Styling"}
                      </span>
                    </div>
                    <h3
                      className={`mt-6 font-heading text-2xl ${textMain}`}
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {sub.title}
                    </h3>
                    <ul className="mt-6 grid grid-cols-1 gap-3">
                      {sub.highlights.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-sm ${textBody}`}
                        >
                          <span className={`mt-2 h-px w-3 shrink-0 ${
                            isStyling ? "bg-accent-light" : "bg-accent"
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9597.jpg",
            "/images/portfolio/oscar-sandra/IMG_0886.jpg",
            "/images/portfolio/oscar-sandra/IMG_0934.jpg",
          ]}
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Next step / 03</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to get started?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Every event is unique, and we love a creative challenge.
              Let&apos;s work together to plan, style, and bring your vision
              to life.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-fluid btn-fluid-gold"
                data-cursor-label="GET STARTED"
              >
                Let&apos;s get started →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
