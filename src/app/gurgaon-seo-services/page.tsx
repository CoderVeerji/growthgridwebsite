import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/gurgaon-seo-services",
  },
  title: "SEO Services in Gurgaon | Top SEO Agency | GrowthGrid",
  description: "Dominate local search in Gurgaon. We provide advanced SEO strategies for corporate and local businesses in Gurugram.",
};

export default function GurgaonSEOPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Gurgaon SEO
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            SEO Services in <span className="text-primary">Gurgaon</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            Gurgaon is a highly competitive market. Our advanced SEO techniques ensure you outrank your competitors and capture high-value local leads.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Gurgaon Search Domination</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "B2B and B2C Keyword Strategy",
                "Content Marketing",
                "Advanced On-Page SEO",
                "Local Pack Dominance",
                "Performance Tracking & Reporting"
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
              Rank #1 in Gurgaon <ArrowRight size={20} />
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
            "name": "SEO Services Gurgaon",
            "areaServed": "Gurgaon",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            }
          })
        }}
      />
    </div>
  );
}
