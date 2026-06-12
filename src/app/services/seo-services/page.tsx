import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/seo-services",
  },
  title: "Local SEO Services | Dominate Google Maps | GrowthGrid",
  description: "Rank #1 on Google and Google Maps. Our Local SEO services drive high-intent local traffic to your business.",
};

export default function SEOServicesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Local <span className="text-primary">SEO Services</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            Stop losing customers to your competitors. We optimize your online presence so your business shows up first when local customers search for your services.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Our SEO Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Google Business Profile Optimization",
                "Local Citation Building",
                "On-Page SEO & Keyword Targeting",
                "High-Quality Backlink Acquisition",
                "Review Generation Strategies",
                "Monthly Performance Reporting"
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
              Get a Free SEO Audit <ArrowRight size={20} />
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
            "name": "Local SEO Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "Professional Local SEO services to help businesses rank higher on Google Search and Google Maps."
          })
        }}
      />
    </div>
  );
}
