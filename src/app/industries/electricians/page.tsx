import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/industries/electricians",
  },
  title: "Electrician Website Design & Lead Generation | GrowthGrid",
  description: "Professional electrician website design, website development, and electrician lead generation services to help you get more high-paying emergency calls.",
};

export default function ElectricianIndustryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            For Electrical Contractors
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Grow Your Electrical Business
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            When a homeowner has an electrical emergency, they don't look past the first page of Google. Our <strong>electrician website design</strong> and marketing strategies ensure you are the first company they call.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Our Services for Electricians</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Electrician Website Development</h3>
                <p className="text-muted mt-2">
                  A custom <strong>electrician website development</strong> strategy focuses on trust signals: licensing, emergency availability, and clear calls-to-action to convert visitors into immediate service calls.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <h3 className="text-xl font-semibold text-white">Electrician Lead Generation & SEO</h3>
                <p className="text-muted mt-2">
                  We implement robust <strong>electrician lead generation</strong> campaigns targeting your specific service areas. From "rewiring" to "panel upgrades," we optimize for high-value search terms on Google Ads and Local SEO.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Get More Electrical Leads <ArrowRight size={20} />
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
            "name": "Electrician Marketing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "Electrician website design and lead generation services to help electrical contractors get more clients."
          })
        }}
      />
    </div>
  );
}
