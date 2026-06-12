import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/industries/ac-repair",
  },
  title: "AC Repair & HVAC Website Design | Lead Generation | GrowthGrid",
  description: "Specialized HVAC website design, AC repair website development, and AC service lead generation to keep your technicians fully booked all summer.",
};

export default function ACRepairIndustryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            For HVAC & AC Service Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Dominate the HVAC Market
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            In peak summer, a fast and reliable <strong>AC repair website</strong> is the difference between a fully booked schedule and an empty board. We build systems that capture urgent local searches instantly.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass p-8 rounded-2xl mb-12 border border-card-border">
            <h2 className="text-2xl font-bold mb-6">Our HVAC Marketing System</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">HVAC Website Design</h3>
                <p className="text-muted mt-2">
                  Our custom <strong>HVAC website design</strong> focuses on mobile-first experiences. When an AC breaks down, customers search on their phones. We ensure your site loads instantly with a click-to-call button front and center.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <h3 className="text-xl font-semibold text-white">AC Service Lead Generation</h3>
                <p className="text-muted mt-2">
                  We run highly targeted <strong>AC service lead generation</strong> campaigns. Whether you want to focus on seasonal maintenance contracts, emergency repairs, or new unit installations, we put you in front of the right local customers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Book More Service Calls <ArrowRight size={20} />
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
            "name": "HVAC Marketing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "GrowthGrid"
            },
            "description": "HVAC website design and AC service lead generation."
          })
        }}
      />
    </div>
  );
}
