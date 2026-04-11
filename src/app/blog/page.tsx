import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

export const metadata: Metadata = {
  title: "Our Journal | Modern Charm Uganda",
  description:
    "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda. Your guide to unforgettable celebrations.",
  alternates: { canonical: "https://moderncharmevents.com/blog" },
  openGraph: {
    title: "Our Journal | Modern Charm Uganda",
    description:
      "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda.",
    url: "https://moderncharmevents.com/blog",
    images: [{ url: "/images/portfolio/sammy-lala/img_3472.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Journal | Modern Charm Uganda",
    description:
      "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda.",
    images: ["/images/portfolio/sammy-lala/img_3472.jpg"],
  },
};

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const gridPosts = blogPosts.filter((post) => !post.featured);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero — near-black */}
      <section className="relative overflow-hidden bg-near-black pt-40 md:pt-48 pb-28 md:pb-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-chris-philomera-b.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/30 to-near-black/80" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">Journal / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            Stories, tips,
            <br />
            and trends.
          </h1>
          <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
            Behind-the-scenes dispatches from the world of event styling.
          </p>
        </div>
      </section>

      {/* Featured post — cream editorial */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-custom">
          <span className="label-mono text-accent-dark">Featured / 01</span>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group mt-10 block"
            data-cursor-label="READ ARTICLE"
          >
            <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-near-black">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pt-10">
                <div className="flex items-center gap-4">
                  <span className="label-mono text-accent-dark">
                    {featuredPost.category}
                  </span>
                  <span className="hairline bg-near-black flex-1" />
                  <span className="label-mono-sm text-muted">
                    {featuredPost.date}
                  </span>
                </div>
                <h2
                  className="mt-8 font-heading text-near-black transition-colors group-hover:text-primary"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {featuredPost.title}
                </h2>
                <p className="mt-6 text-muted leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <span className="btn-fluid-alpha inline mt-8 label-mono text-near-black">
                  Read article →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid — editorial list */}
      <section className="bg-cream pb-28 md:pb-36">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="label-mono text-accent-dark">Latest / 02</span>
              <h2
                className="mt-6 font-heading text-near-black max-w-2xl"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Latest articles.
              </h2>
            </div>
            <p className="label-mono-sm text-muted">
              {String(gridPosts.length).padStart(2, "0")} Articles
            </p>
          </div>

          <div className="mt-12 hairline bg-near-black" />

          <div className="mt-16 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
                data-cursor-label="READ"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-near-black">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-5 left-5 label-mono text-cream">
                    {String(i + 1).padStart(2, "0")} · {post.category}
                  </span>
                </div>
                <div className="mt-5">
                  <h3
                    className="font-heading text-xl text-near-black transition-colors group-hover:text-primary"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="label-mono-sm text-muted">{post.date}</span>
                    <span className="label-mono text-near-black group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9603.jpg",
            "/images/portfolio/oscar-sandra/IMG_0951.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9581.jpg",
          ]}
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Have a story / 03</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Have a story
              <br />
              worth telling?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Let us help you create an event worth writing about.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-fluid btn-fluid-gold" data-cursor-label="START PLANNING">
                Start planning →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
