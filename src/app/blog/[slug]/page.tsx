import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

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
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
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

      {/* Back to Blog */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Journal
          </Link>
        </div>
      </section>
    </div>
  );
}
