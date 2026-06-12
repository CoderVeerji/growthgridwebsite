import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/website-development",
  },
  title: "Professional Website Development Services | GrowthGrid",
  description: "Get a high-converting, blazing fast website designed to turn visitors into paying customers for your local business.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Professional <span className="text-primary">Website Development</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            We don't just build websites; we build digital storefronts optimized for speed, user experience, and conversions. A professional website is the foundation of your online growth.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Why You Need a Premium Website</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Instant Credibility and Trust",
                "Mobile-First, Responsive Design",
                "Lightning Fast Loading Speeds",
                "Built-in SEO Best Practices",
                "High Conversion Architecture",
                "Secure and Scalable Infrastructure"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Development",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "Professional website development services for local businesses. We build fast, responsive, and high-converting websites."
          })
        }}
      />
    </div>
  );
}
