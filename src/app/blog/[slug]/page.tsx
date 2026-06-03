import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | GrowthGrid Blog`,
      description: post.excerpt,
    };
  } catch (e) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-medium text-primary mb-6">
            <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-muted">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">{post.title}</h1>
          {post.coverImage && (
            <div className="mt-8 mb-12 relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-blue prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-white">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
