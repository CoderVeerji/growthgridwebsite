import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/locations",
  },
  title: "Areas We Serve | Local Digital Marketing Locations | GrowthGrid",
  description: "GrowthGrid provides local SEO, website development, and lead generation services across major cities including Delhi, Gurgaon, and Noida.",
};

export default function LocationsHubPage() {
  const locations = [
    { city: "Delhi", slug: "delhi", services: [
      { name: "Website Development", href: "/delhi-website-development" },
      { name: "SEO Services", href: "/delhi-seo-services" }
    ]},
    { city: "Gurgaon", slug: "gurgaon", services: [
      { name: "Website Development", href: "/gurgaon-website-development" },
      { name: "SEO Services", href: "/gurgaon-seo-services" }
    ]},
    { city: "Noida", slug: "noida", services: [
      { name: "Website Development", href: "/noida-website-development" }
    ]}
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Areas We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl">
            We help local businesses dominate their specific geographic markets. Select your city to see how we can help you grow locally.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-card-border">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">{loc.city}</h2>
                </div>
                <ul className="space-y-4">
                  {loc.services.map((service, j) => (
                    <li key={j}>
                      <Link href={service.href} className="text-muted hover:text-white flex items-center gap-2 group transition-colors">
                        <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
