import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "Blog | GrowthGrid",
  description: "Insights and strategies for local business growth.",
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Growth <span className="text-gradient">Insights</span></h1>
            <p className="text-xl text-muted">
              Actionable strategies to help your local business generate more leads, close more deals, and dominate your market.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="glass p-6 md:p-8 rounded-2xl h-full border border-card-border group-hover:border-primary/50 transition-colors flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-medium text-primary mb-4">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-muted">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted mb-6 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs text-white/50">#{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-20 text-muted">
            <p>No blog posts found. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}
