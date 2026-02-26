import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import HeroCarousel from "@/components/HeroCarousel";

/* Per-post hero image positioning for optimal cropping */
const heroPositions: Record<string, string> = {
  "the-ultimate-guide-to-planning-a-ugandan-wedding-in-2026": "center 30%",
  "top-10-wedding-decor-trends-in-uganda-for-2026": "center 35%",
  "how-to-plan-the-perfect-kwanjula-ceremony": "center 40%",
  "corporate-event-planning-a-complete-checklist": "center 45%",
  "choosing-the-right-color-palette-for-your-event": "center 40%",
  "behind-the-scenes-a-luxury-lakeside-wedding": "center 30%",
  "budget-friendly-event-styling-ideas": "center 45%",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Modern Charm Uganda`,
    description: post.excerpt,
    alternates: { canonical: `https://modern-charm.vercel.app/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://modern-charm.vercel.app/blog/${slug}`,
      type: "article",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center text-white md:py-32">
        <HeroCarousel images={post.heroImages} objectPosition={heroPositions[slug] || "center"} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <nav
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link
              href="/blog"
              className="transition-colors hover:text-white"
            >
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium text-white">{post.category}</span>
          </nav>
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="font-body text-sm">{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div
            className="prose prose-lg prose-headings:font-heading prose-headings:text-dark prose-p:leading-relaxed prose-p:text-muted prose-a:text-primary prose-strong:text-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://modern-charm.vercel.app${post.image}`,
            "datePublished": new Date(post.date).toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Modern Charm Uganda",
              "url": "https://modern-charm.vercel.app",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Modern Charm Uganda",
              "url": "https://modern-charm.vercel.app",
            },
            "mainEntityOfPage": `https://modern-charm.vercel.app/blog/${slug}`,
          }),
        }}
      />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={post.heroImages}
          objectPosition={heroPositions[slug] || "center"}
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to plan your event?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let us bring your vision to life with the same care and creativity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-accent-dark px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-body text-base font-semibold text-white transition-colors duration-300 hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
