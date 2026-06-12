import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/web-design",
  },
  title: "Creative Web Design Services | GrowthGrid",
  description: "Stunning, conversion-focused web design services that elevate your brand and engage your target audience.",
};

export default function WebDesignPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Creative <span className="text-primary">Web Design</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            First impressions matter. We design beautiful, intuitive, and modern user interfaces that captivate your visitors and guide them to take action.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Design That Drives Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Custom UI/UX Design",
                "Brand Identity Integration",
                "Interactive Prototyping",
                "Conversion Rate Optimization (CRO)",
                "Accessibility Compliance",
                "Modern Aesthetic Trends"
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
              Start Your Design Project <ArrowRight size={20} />
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
            "name": "Web Design Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "Professional web design services focusing on UI/UX, aesthetics, and conversion optimization."
          })
        }}
      />
    </div>
  );
}
