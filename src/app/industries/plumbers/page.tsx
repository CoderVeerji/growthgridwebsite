import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/industries/plumbers",
  },
  title: "Plumbing Website Design & Plumber Lead Generation | GrowthGrid",
  description: "Specialized plumbing website design, development, and high-quality plumber lead generation services to keep your phone ringing.",
};

export default function PlumbersIndustryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            For Plumbing Contractors
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Get More Plumbing Customers
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            When pipes burst, customers need an immediate response. We provide specialized <strong>plumbing website design</strong> that loads fast and drives urgent calls.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Plumbing Marketing Services</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Plumbing Website Development</h3>
                <p className="text-muted mt-2">
                  A high-converting <strong>plumbing website development</strong> strategy ensures your contact information is always one tap away, establishing your team as the most reliable plumbers in town.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <h3 className="text-xl font-semibold text-white">Plumber Lead Generation</h3>
                <p className="text-muted mt-2">
                  Stop buying shared leads. Our <strong>plumber lead generation</strong> and SEO campaigns send exclusive local calls directly to your business, targeting lucrative services like water heater repair and leak detection.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Get More Plumbing Leads <ArrowRight size={20} />
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
            "name": "Plumbing Marketing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "Plumbing website design and plumber lead generation."
          })
        }}
      />
    </div>
  );
}
