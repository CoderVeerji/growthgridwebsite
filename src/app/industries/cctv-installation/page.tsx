import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "CCTV Company Website & Lead Generation | GrowthGrid",
  description: "Grow your security business with a professional CCTV company website, CCTV lead generation, and targeted CCTV installation marketing.",
};

export default function CCTVIndustryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            For Security Systems Integrators
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Scale Your Security Business
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            Whether targeting commercial or residential clients, a professional <strong>CCTV company website</strong> builds the immediate trust required for security installations.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Security Marketing Infrastructure</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">CCTV Installation Marketing</h3>
                <p className="text-muted mt-2">
                  Our comprehensive <strong>CCTV installation marketing</strong> strategies showcase your portfolio, detail your technology stack, and optimize for both B2B and B2C local searches to maximize your visibility.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <h3 className="text-xl font-semibold text-white">CCTV Lead Generation</h3>
                <p className="text-muted mt-2">
                  Get high-ticket commercial installation projects through our targeted <strong>CCTV lead generation</strong> funnels. We capture leads actively looking for IP cameras, access control, and complete surveillance systems.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Get More Installation Jobs <ArrowRight size={20} />
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
            "name": "CCTV Marketing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "CCTV company website design and CCTV lead generation services."
          })
        }}
      />
    </div>
  );
}
