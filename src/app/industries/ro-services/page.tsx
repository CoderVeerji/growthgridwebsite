import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "RO Service Website Design & Lead Generation | GrowthGrid",
  description: "Get a professional RO service website design and exclusive RO service lead generation campaigns to acquire more annual maintenance contracts (AMC).",
};

export default function ROIndustryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            For Water Purifier Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Grow Your RO Service Business
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            Acquire new customers for installations, repairs, and AMCs. Our <strong>RO service website design</strong> sets you apart from generic local listings.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Marketing for RO Businesses</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">RO Service Website Development</h3>
                <p className="text-muted mt-2">
                  Showcase your certifications, brand expertise (Kent, Aquaguard, Livpure), and service guarantees with a premium <strong>RO service website development</strong> project.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <h3 className="text-xl font-semibold text-white">RO Service Lead Generation</h3>
                <p className="text-muted mt-2">
                  Drive consistent revenue with targeted <strong>RO service lead generation</strong> focusing on high-value Annual Maintenance Contracts (AMC) and new purifier sales in your specific service area.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Get More RO Leads <ArrowRight size={20} />
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
            "name": "RO Service Marketing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "RO service website design and RO service lead generation."
          })
        }}
      />
    </div>
  );
}
