"use client";

import { useState } from "react";
import { createBlogPost } from "./actions";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4">
        <div className="glass p-8 rounded-2xl w-full max-w-md border border-card-border text-center">
          <h1 className="text-2xl font-heading font-bold mb-6 text-white">Admin Access</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password === "@mission123") setIsAuthenticated(true);
            else alert("Incorrect password");
          }} className="space-y-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary" placeholder="Enter password" />
            <button type="submit" className="w-full bg-primary hover:bg-accent transition-colors text-white py-3 rounded-lg font-semibold">Login</button>
          </form>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await createBlogPost(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setMessage(`Post created successfully! You can view it at /blog/${result.slug}`);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0A0A0F]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-3xl font-heading font-bold mb-2">Local Blog CMS</h1>
        <p className="text-muted mb-8">
          This admin panel works on your local machine to create `.md` files directly in your repository. Do not use this on Vercel production as it will not save permanently.
        </p>

        <div className="glass p-8 rounded-2xl border border-card-border">
          {message && <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded-lg">{message}</div>}
          {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded-lg">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Title</label>
                <input required name="title" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary" placeholder="My New Blog Post" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Slug (URL-friendly)</label>
                <input required name="slug" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary" placeholder="my-new-blog-post" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Category</label>
                <input name="category" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary" placeholder="SEO, Web Design, etc." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Cover Image (Optional)</label>
                <input name="image" type="file" accept="image/*" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Short Excerpt (Meta Description)</label>
              <textarea required name="excerpt" rows={2} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary" placeholder="Brief summary for SEO..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Content (Markdown format)</label>
              <textarea required name="content" rows={12} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary font-mono text-sm" placeholder="# Heading&#10;&#10;Write your post here..."></textarea>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-primary hover:bg-accent text-white py-4 rounded-lg font-semibold flex justify-center items-center transition-colors">
              {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Publishing to Local File...</> : "Publish Post Locally"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
