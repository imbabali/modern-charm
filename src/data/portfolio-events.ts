export type EventCategory = "planning" | "styling";

export interface PortfolioEvent {
  slug: string;
  title: string;
  category: EventCategory;
  description: string;
  coverImage: string;
  heroPosition?: string;
  ctaPosition?: string;
  imagePositions?: Record<number, string>;
  coverPosition?: string;
  images: string[];
  date: string;
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    slug: "psfu-business-summit",
    title: "PSFU Business Summit",
    category: "planning",
    description:
      "A high-profile corporate summit for the Private Sector Foundation Uganda, featuring keynote presentations, panel discussions, and professional networking — executed with precision and elegance.",
    coverImage: "/images/portfolio/psfu-business-summit/am9a4213.jpg",
    heroPosition: "center 20%",
    images: [
      "/images/portfolio/psfu-business-summit/am9a4154.jpg",
      "/images/portfolio/psfu-business-summit/am9a4175.jpg",
      "/images/portfolio/psfu-business-summit/am9a4197.jpg",
      "/images/portfolio/psfu-business-summit/am9a4213.jpg",
      "/images/portfolio/psfu-business-summit/am9a4238.jpg",
      "/images/portfolio/psfu-business-summit/am9a4249.jpg",
      "/images/portfolio/psfu-business-summit/am9a4267.jpg",
      "/images/portfolio/psfu-business-summit/am9a4284.jpg",
    ],
    date: "2025",
  },
  {
    slug: "hima-cement-event",
    title: "Hima Cement Corporate Event",
    category: "planning",
    description:
      "A branded corporate event for Hima Cement, blending brand identity with stylish event design — from stage setup to guest engagement and branded decor elements.",
    coverImage: "/images/portfolio/hima-cement-event/898A8514.jpg",
    images: [
      "/images/portfolio/hima-cement-event/898A8497.jpg",
      "/images/portfolio/hima-cement-event/898A8501.jpg",
      "/images/portfolio/hima-cement-event/898A8508.jpg",
      "/images/portfolio/hima-cement-event/898A8514.jpg",
      "/images/portfolio/hima-cement-event/898A8528.jpg",
      "/images/portfolio/hima-cement-event/898A8544.jpg",
      "/images/portfolio/hima-cement-event/898A8548.jpg",
      "/images/portfolio/hima-cement-event/898A8561.jpg",
    ],
    date: "2025",
  },
  {
    slug: "bloomberg-launch",
    title: "Bloomberg Philanthropies Launch",
    category: "planning",
    description:
      "A prestigious launch event for Bloomberg Philanthropies, featuring professional staging, branded displays, panel sessions, and a polished atmosphere befitting a global organisation.",
    coverImage: "/images/portfolio/bloomberg-launch/dsc_4337.jpg",
    images: [
      "/images/portfolio/bloomberg-launch/dsc_4273.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4286.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4310.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4337.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4380.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4406.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4432.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4451.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4497_pano.jpg",
      "/images/portfolio/bloomberg-launch/dsc_4534.jpg",
    ],
    date: "2025",
  },
  {
    slug: "unicaf-corporate",
    title: "Unicaf University Conference",
    category: "planning",
    description:
      "A professionally managed university conference for Unicaf, featuring speaker panels, catering, branded setups, and seamless event coordination for academic and corporate delegates.",
    coverImage: "/images/portfolio/unicaf-corporate/unicaf_DON_2084.jpg",
    heroPosition: "center 20%",
    ctaPosition: "center 20%",
    images: [
      "/images/portfolio/unicaf-corporate/unicaf_setup_1.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_setup_2.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_speaker.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2033.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2073.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2084.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2095.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2106.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_DON_2129.jpg",
      "/images/portfolio/unicaf-corporate/unicaf_catering.jpg",
    ],
    date: "2025",
  },
  {
    slug: "phil-pesh",
    title: "Romantic Garden Celebration",
    category: "planning",
    description:
      "An intimate and romantic celebration set in lush greenery, with warm golden tones, elegant styling, and heartfelt moments captured throughout the day.",
    coverImage: "/images/portfolio/phil-pesh/pp_session-55.jpg",
    heroPosition: "center 40%",
    images: [
      "/images/portfolio/phil-pesh/pp_session-15.jpg",
      "/images/portfolio/phil-pesh/pp_session-24.jpg",
      "/images/portfolio/phil-pesh/pp_session-32.jpg",
      "/images/portfolio/phil-pesh/pp_session-40.jpg",
      "/images/portfolio/phil-pesh/pp_session-49.jpg",
      "/images/portfolio/phil-pesh/pp_session-55.jpg",
      "/images/portfolio/phil-pesh/pp_session-74.jpg",
      "/images/portfolio/phil-pesh/pp_session-75.jpg",
      "/images/portfolio/phil-pesh/pp_session-79.jpg",
      "/images/portfolio/phil-pesh/pp_session-90.jpg",
      "/images/portfolio/phil-pesh/pp_session-92.jpg",
      "/images/portfolio/phil-pesh/pp_session-115.jpg",
      "/images/portfolio/phil-pesh/pp_session-120.jpg",
    ],
    date: "2025",
  },
  {
    slug: "oscar-sandra",
    title: "Grand Black & Gold Reception",
    category: "planning",
    description:
      "A luxury black-and-white reception with towering gold arches, crystal chandeliers, and dramatic floral centrepieces that redefined opulence in Kampala.",
    coverImage: "/images/portfolio/oscar-sandra/IMG_0882.jpg",
    heroPosition: "center 40%",
    ctaPosition: "center 40%",
    imagePositions: { 0: "center 40%", 4: "center 65%", 6: "center 50%" },
    images: [
      "/images/portfolio/oscar-sandra/IMG_0882.jpg",
      "/images/portfolio/oscar-sandra/IMG_0267.jpg",
      "/images/portfolio/oscar-sandra/IMG_0834.jpg",
      "/images/portfolio/oscar-sandra/IMG_0846.jpg",
      "/images/portfolio/oscar-sandra/IMG_0851.jpg",
      "/images/portfolio/oscar-sandra/IMG_0868.jpg",
      "/images/portfolio/oscar-sandra/IMG_0919.jpg",
      "/images/portfolio/oscar-sandra/IMG_1917.jpg",
      "/images/portfolio/oscar-sandra/IMG_1930.jpg",
      "/images/portfolio/oscar-sandra/IMG_2408.jpg",
      "/images/portfolio/oscar-sandra/IMG_2440.jpg",
      "/images/portfolio/oscar-sandra/IMG_0947.jpg",
      "/images/portfolio/oscar-sandra/IMG_2416.jpg",
      "/images/portfolio/oscar-sandra/IMG_1952.jpg",
    ],
    date: "2025",
  },
  {
    slug: "wedding-highlights",
    title: "Sage & Peach Elegance",
    category: "planning",
    description:
      "A curated collection showcasing sage green bridesmaids, an intimate candle wall, peach bouquets, and dreamy garden ceremony moments.",
    coverImage: "/images/portfolio/wedding-highlights/IMG_3879.jpg",
    heroPosition: "center 35%",
    images: [
      "/images/portfolio/wedding-highlights/IMG_3879.jpg",
      "/images/portfolio/wedding-highlights/IMG_3876.jpg",
      "/images/portfolio/wedding-highlights/IMG_3878.jpg",
      "/images/portfolio/wedding-highlights/IMG_3881.jpg",
      "/images/portfolio/wedding-highlights/IMG_3884.jpg",
      "/images/portfolio/wedding-highlights/IMG_3886.jpg",
      "/images/portfolio/wedding-highlights/IMG_3889.jpg",
      "/images/portfolio/wedding-highlights/IMG_3879.jpg",
      "/images/portfolio/wedding-highlights/IMG_3888_landscape.jpg",
      "/images/portfolio/wedding-highlights/IMG_3890_landscape.jpg",
    ],
    date: "2025",
  },
  {
    slug: "lornas-kuhingira",
    title: "Traditional Kuhingira Ceremony",
    category: "styling",
    description:
      "A vibrant Kuhingira ceremony rich in Ankole tradition, with layered draping, cultural attire, and a beautifully styled gift-presentation stage.",
    coverImage: "/images/portfolio/lornas-kuhingira/7b7a9543.jpg",
    images: [
      "/images/portfolio/lornas-kuhingira/7b7a9543.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9477.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9496.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9519.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9527.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9535.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9555.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9570.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9587.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9599.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9604.jpg",
      "/images/portfolio/lornas-kuhingira/dji_0985.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9559.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9579.jpg",
      "/images/portfolio/lornas-kuhingira/7b7a9575.jpg",
    ],
    date: "2025",
  },
  {
    slug: "david-michelle",
    title: "Pink & Gold Luxe Reception",
    category: "styling",
    description:
      "A luxe pink-and-gold reception featuring elegant table arrangements, sweeping aerial views, and an atmosphere of refined celebration.",
    coverImage: "/images/portfolio/david-michelle/7b7a0805.jpg",
    heroPosition: "center 30%",
    images: [
      "/images/portfolio/david-michelle/7b7a0805.jpg",
      "/images/portfolio/david-michelle/7b7a0757.jpg",
      "/images/portfolio/david-michelle/7b7a0761.jpg",
      "/images/portfolio/david-michelle/7b7a0807.jpg",
      "/images/portfolio/david-michelle/7b7a0810.jpg",
      "/images/portfolio/david-michelle/dji_0407.jpg",
      "/images/portfolio/david-michelle/dji_0408.jpg",
      "/images/portfolio/david-michelle/dji_0436.jpg",
    ],
    date: "2025",
  },
  {
    slug: "sammy-lala",
    title: "Classic Wedding Celebration",
    category: "styling",
    description:
      "A joyful wedding celebration filled with heartfelt moments, stylish florals, and an unforgettable reception atmosphere.",
    coverImage: "/images/portfolio/sammy-lala/img_3472.jpg",
    images: [
      "/images/portfolio/sammy-lala/img_3558.jpg",
      "/images/portfolio/sammy-lala/img_3561.jpg",
      "/images/portfolio/sammy-lala/img_3562.jpg",
      "/images/portfolio/sammy-lala/img_3578.jpg",
      "/images/portfolio/sammy-lala/img_3472.jpg",
      "/images/portfolio/sammy-lala/img_3473.jpg",
      "/images/portfolio/sammy-lala/img_3521.jpg",
      "/images/portfolio/sammy-lala/img_3579.jpg",
    ],
    date: "2025",
  },
  {
    slug: "rayner-racheal",
    title: "Colorful Chandelier Reception",
    category: "planning",
    description:
      "A breathtaking lakeside wedding featuring a grand tented reception with crystal chandeliers, vibrant floral walls in pink, orange, and yellow, elegant rattan seating, and a stunning multi-tier R&R cake — from church ceremony to golden-hour portraits.",
    coverImage: "/images/portfolio/rayner-racheal/couple-kiss-venue.jpg",
    coverPosition: "center 40%",
    heroPosition: "center 55%",
    ctaPosition: "center 35%",
    images: [
      "/images/portfolio/rayner-racheal/couple-kiss-venue.jpg",
      "/images/portfolio/rayner-racheal/bride-smile-curtain.jpg",
      "/images/portfolio/rayner-racheal/bride-dress-portrait.jpg",
      "/images/portfolio/rayner-racheal/bride-staircase-wide.jpg",
      "/images/portfolio/rayner-racheal/bride-mirror-staircase.jpg",
      "/images/portfolio/rayner-racheal/groom-ready.jpg",
      "/images/portfolio/rayner-racheal/boutonniere.jpg",
      "/images/portfolio/rayner-racheal/bride-arrival.jpg",
      "/images/portfolio/rayner-racheal/bridal-party-processional.jpg",
      "/images/portfolio/rayner-racheal/ring-exchange.jpg",
      "/images/portfolio/rayner-racheal/ceremony-embrace.jpg",
      "/images/portfolio/rayner-racheal/signing-register.jpg",
      "/images/portfolio/rayner-racheal/couple-church-portrait.jpg",
      "/images/portfolio/rayner-racheal/couple-church-exit.jpg",
      "/images/portfolio/rayner-racheal/venue-entrance.jpg",
      "/images/portfolio/rayner-racheal/venue-chandeliers.jpg",
      "/images/portfolio/rayner-racheal/couple-venue-wide.jpg",
      "/images/portfolio/rayner-racheal/reception-entrance.jpg",
      "/images/portfolio/rayner-racheal/couple-romantic.jpg",
      "/images/portfolio/rayner-racheal/couple-walking.jpg",
      "/images/portfolio/rayner-racheal/wedding-cake.jpg",
      "/images/portfolio/rayner-racheal/table-setting.jpg",
      "/images/portfolio/rayner-racheal/place-setting-detail.jpg",
      "/images/portfolio/rayner-racheal/groomsmen-dancing.jpg",
      "/images/portfolio/rayner-racheal/couple-twirl-entrance.jpg",
      "/images/portfolio/rayner-racheal/dance-floor.jpg",
      "/images/portfolio/rayner-racheal/couple-dusk.jpg",
      "/images/portfolio/rayner-racheal/bride-garden.jpg",
      "/images/portfolio/rayner-racheal/couple-kiss-garden.jpg",
      "/images/portfolio/rayner-racheal/couple-gazing.jpg",
      "/images/portfolio/rayner-racheal/entertainment.jpg",
    ],
    date: "2025",
  },
  {
    slug: "allan-pauline-styling",
    title: "Lavender Floral Tablescape",
    category: "styling",
    description:
      "A close-up look at meticulous styling details — lavender tablescapes, lush floral centrepieces, elegant place settings, and decorative accents that complete the look.",
    coverImage: "/images/portfolio/allan-pauline-styling/img_4822.jpg",
    images: [
      "/images/portfolio/allan-pauline-styling/img_4822.jpg",
      "/images/portfolio/allan-pauline-styling/img_4823.jpg",
      "/images/portfolio/allan-pauline-styling/img_4838.jpg",
      "/images/portfolio/allan-pauline-styling/decor_1.jpg",
      "/images/portfolio/allan-pauline-styling/decor_2.jpg",
      "/images/portfolio/allan-pauline-styling/decor_3.jpg",
      "/images/portfolio/allan-pauline-styling/decor_4.jpg",
      "/images/portfolio/allan-pauline-styling/decor_5.jpg",
    ],
    date: "2025",
  },
];

export function getEventBySlug(slug: string): PortfolioEvent | undefined {
  return portfolioEvents.find((event) => event.slug === slug);
}

export function getEventsByCategory(
  category: EventCategory | "all"
): PortfolioEvent[] {
  if (category === "all") return portfolioEvents;
  return portfolioEvents.filter((event) => event.category === category);
}

export const categoryLabels: Record<EventCategory | "all", string> = {
  all: "All Projects",
  planning: "Event Planning & Coordination",
  styling: "Event Styling & Decor",
};
