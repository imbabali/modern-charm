export type EventCategory = "planning" | "styling";

export interface PortfolioEvent {
  slug: string;
  title: string;
  category: EventCategory;
  description: string;
  coverImage: string;
  images: string[];
  date: string;
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    slug: "allan-pauline",
    title: "Lavender Garden Wedding",
    category: "planning",
    description:
      "A romantic lavender garden wedding set along the shores of Lake Victoria, featuring lush floral installations, crystal-draped canopies, and golden sunset vows.",
    coverImage: "/images/portfolio/allan-pauline/img_0652.jpg",
    images: [
      "/images/portfolio/allan-pauline/img_0652.jpg",
      "/images/portfolio/allan-pauline/img_0023.jpg",
      "/images/portfolio/allan-pauline/img_0291.jpg",
      "/images/portfolio/allan-pauline/img_0614.jpg",
      "/images/portfolio/allan-pauline/img_0632.jpg",
      "/images/portfolio/allan-pauline/img_0636.jpg",
      "/images/portfolio/allan-pauline/img_0659.jpg",
      "/images/portfolio/allan-pauline/img_0675.jpg",
      "/images/portfolio/allan-pauline/img_0697.jpg",
      "/images/portfolio/allan-pauline/img_0714.jpg",
      "/images/portfolio/allan-pauline/img_0731.jpg",
      "/images/portfolio/allan-pauline/img_0748.jpg",
      "/images/portfolio/allan-pauline/img_0760.jpg",
      "/images/portfolio/allan-pauline/img_0791.jpg",
      "/images/portfolio/allan-pauline/_dsc5915.jpg",
      "/images/portfolio/allan-pauline/_dsc5931.jpg",
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
    images: [
      "/images/portfolio/oscar-sandra/IMG_0882.jpg",
      "/images/portfolio/oscar-sandra/IMG_0267.jpg",
      "/images/portfolio/oscar-sandra/IMG_0834.jpg",
      "/images/portfolio/oscar-sandra/IMG_0846.jpg",
      "/images/portfolio/oscar-sandra/IMG_0851.jpg",
      "/images/portfolio/oscar-sandra/IMG_0868.jpg",
      "/images/portfolio/oscar-sandra/IMG_0919.jpg",
      "/images/portfolio/oscar-sandra/IMG_0947.jpg",
      "/images/portfolio/oscar-sandra/IMG_1917.jpg",
      "/images/portfolio/oscar-sandra/IMG_1930.jpg",
      "/images/portfolio/oscar-sandra/IMG_1952.jpg",
      "/images/portfolio/oscar-sandra/IMG_2408.jpg",
      "/images/portfolio/oscar-sandra/IMG_2416.jpg",
      "/images/portfolio/oscar-sandra/IMG_2440.jpg",
    ],
    date: "2025",
  },
  {
    slug: "wedding-highlights",
    title: "Sage & Peach Elegance",
    category: "styling",
    description:
      "A curated collection showcasing sage green bridesmaids, an intimate candle wall, peach bouquets, and dreamy garden ceremony moments.",
    coverImage: "/images/portfolio/wedding-highlights/IMG_3879.jpg",
    images: [
      "/images/portfolio/wedding-highlights/IMG_3879.jpg",
      "/images/portfolio/wedding-highlights/IMG_3876.jpg",
      "/images/portfolio/wedding-highlights/IMG_3878.jpg",
      "/images/portfolio/wedding-highlights/IMG_3881.jpg",
      "/images/portfolio/wedding-highlights/IMG_3884.jpg",
      "/images/portfolio/wedding-highlights/IMG_3886.jpg",
      "/images/portfolio/wedding-highlights/IMG_3889.jpg",
      "/images/portfolio/wedding-highlights/IMG_3892.jpg",
      "/images/portfolio/wedding-highlights/IMG_3895.jpg",
      "/images/portfolio/wedding-highlights/IMG_3898.jpg",
    ],
    date: "2025",
  },
  {
    slug: "lornas-kuhingira",
    title: "Traditional Kuhingira Ceremony",
    category: "planning",
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
    ],
    date: "2025",
  },
  {
    slug: "david-michelle",
    title: "Pink & Gold Luxe Reception",
    category: "planning",
    description:
      "A luxe pink-and-gold reception featuring elegant table arrangements, sweeping aerial views, and an atmosphere of refined celebration.",
    coverImage: "/images/portfolio/david-michelle/7b7a0805.jpg",
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
    category: "planning",
    description:
      "A joyful wedding celebration filled with heartfelt moments, stylish florals, and an unforgettable reception atmosphere.",
    coverImage: "/images/portfolio/sammy-lala/img_3558.jpg",
    images: [
      "/images/portfolio/sammy-lala/img_3558.jpg",
      "/images/portfolio/sammy-lala/img_3472.jpg",
      "/images/portfolio/sammy-lala/img_3473.jpg",
      "/images/portfolio/sammy-lala/img_3521.jpg",
      "/images/portfolio/sammy-lala/img_3561.jpg",
      "/images/portfolio/sammy-lala/img_3562.jpg",
      "/images/portfolio/sammy-lala/img_3578.jpg",
      "/images/portfolio/sammy-lala/img_3579.jpg",
    ],
    date: "2025",
  },
  {
    slug: "rayner-racheal",
    title: "Intimate Garden Wedding",
    category: "planning",
    description:
      "An intimate and elegant wedding celebration capturing the warmth and beauty of two hearts uniting.",
    coverImage: "/images/portfolio/rayner-racheal/img_4945.jpg",
    images: [
      "/images/portfolio/rayner-racheal/img_4945.jpg",
      "/images/portfolio/rayner-racheal/img_4949.jpg",
    ],
    date: "2025",
  },
  {
    slug: "allan-pauline-styling",
    title: "Floral Tablescape Details",
    category: "styling",
    description:
      "A close-up look at meticulous styling details — tabletop florals, linens, place settings, and decorative accents that complete the look.",
    coverImage: "/images/portfolio/allan-pauline-styling/img_4822.jpg",
    images: [
      "/images/portfolio/allan-pauline-styling/img_4822.jpg",
      "/images/portfolio/allan-pauline-styling/img_4823.jpg",
      "/images/portfolio/allan-pauline-styling/img_4838.jpg",
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
