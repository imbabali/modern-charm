import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Journal | Modern Charm Uganda",
  description:
    "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda. Your guide to unforgettable celebrations.",
};

const featuredPost = {
  title: "The Ultimate Guide to Planning a Ugandan Wedding in 2026",
  excerpt:
    "From choosing between a garden ceremony and a grand ballroom, to navigating the beautiful blend of traditional and modern elements — this comprehensive guide covers everything you need to know about planning your dream wedding in Uganda this year.",
  category: "Weddings",
  date: "February 18, 2026",
  slug: "#",
};

const blogPosts = [
  {
    title: "Top 10 Wedding Decor Trends in Uganda for 2026",
    excerpt:
      "From sustainable florals to immersive lighting experiences, discover the trends that are shaping Ugandan weddings this year.",
    category: "Weddings",
    date: "February 12, 2026",
    gradient: "from-primary/60 to-primary-dark/80",
    slug: "#",
  },
  {
    title: "How to Plan the Perfect Kwanjula Ceremony",
    excerpt:
      "A step-by-step guide to honouring tradition while adding your own modern touch to this beautiful Buganda introduction ceremony.",
    category: "Traditional",
    date: "February 5, 2026",
    gradient: "from-accent/60 to-accent-light/80",
    slug: "#",
  },
  {
    title: "Corporate Event Planning: A Complete Checklist",
    excerpt:
      "Whether it is a product launch or an annual gala, this checklist ensures nothing falls through the cracks.",
    category: "Corporate",
    date: "January 28, 2026",
    gradient: "from-primary-light/60 to-primary/80",
    slug: "#",
  },
  {
    title: "Choosing the Right Color Palette for Your Event",
    excerpt:
      "Colour sets the mood for your entire celebration. Learn how to select a palette that tells your unique story.",
    category: "Tips",
    date: "January 20, 2026",
    gradient: "from-accent-light/60 to-accent/80",
    slug: "#",
  },
  {
    title: "Behind the Scenes: A Luxury Lakeside Wedding",
    excerpt:
      "Take a peek behind the curtain at one of our most breathtaking weddings set along the shores of Lake Victoria.",
    category: "Portfolio",
    date: "January 14, 2026",
    gradient: "from-primary-dark/60 to-primary-light/80",
    slug: "#",
  },
  {
    title: "Budget-Friendly Event Styling Ideas",
    excerpt:
      "You don't need a massive budget to create a stunning event. Here are our top tips for stylish celebrations on any budget.",
    category: "Tips",
    date: "January 6, 2026",
    gradient: "from-accent/50 to-primary/70",
    slug: "#",
  },
];

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold tracking-wide text-accent uppercase">
      {category}
    </span>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our Journal
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Tips, trends, and behind-the-scenes stories from the world of event
            styling
          </p>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link href={featuredPost.slug} className="group block">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl md:flex">
              {/* Image Placeholder */}
              <div className="relative h-64 w-full bg-gradient-to-br from-primary via-primary-light to-accent md:h-auto md:w-1/2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm" />
                    <p className="mt-3 font-body text-sm text-white/70">
                      Featured Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                <CategoryBadge category={featuredPost.category} />
                <h2 className="mt-4 font-heading text-2xl font-bold text-dark transition-colors group-hover:text-primary md:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 font-body text-sm text-muted">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
            Latest Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-muted">
            Insights and inspiration for your next unforgettable event
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.slug} className="group block">
                <article className="h-full overflow-hidden rounded-xl bg-cream transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Image Placeholder */}
                  <div
                    className={`relative h-48 w-full bg-gradient-to-br ${post.gradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <CategoryBadge category={post.category} />
                    <h3 className="mt-3 font-heading text-lg font-bold text-dark transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-body text-xs text-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-primary transition-colors group-hover:text-primary-dark">
                        Read More
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl bg-cream-dark p-10 md:p-14">
            <h3 className="font-heading text-2xl font-bold text-dark md:text-3xl">
              More Content Coming Soon
            </h3>
            <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-muted">
              We&apos;re working on more articles, guides, and behind-the-scenes
              content. In the meantime, follow us on Instagram for daily
              inspiration!
            </p>
            <a
              href="https://instagram.com/moderncharm_events"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-accent px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl"
            >
              Follow @moderncharm_events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
