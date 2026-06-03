import Reveal from "@/components/ui/Reveal";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Portfolio | GrowthGrid",
  description: "View our premium demo projects for local businesses.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "VoltMaster Electricians",
      category: "Electrician Business",
      desc: "A high-converting landing page optimized for emergency call-outs and local SEO dominance.",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "ClearFlow Plumbing",
      category: "Plumbing Service",
      desc: "Trust-building website with automated WhatsApp booking for instant leak repairs.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Breeze HVAC Solutions",
      category: "AC Repair Service",
      desc: "Seasonal service campaigns and automated maintenance reminders for loyal customers.",
      color: "from-teal-500/20 to-emerald-500/20",
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our <span className="text-gradient">Portfolio</span></h1>
            <p className="text-xl text-muted">
              Explore our premium demo projects. This is the exact caliber of design and conversion architecture we bring to your business.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass rounded-3xl overflow-hidden border border-card-border hover:border-primary/40 transition-colors h-full flex flex-col group">
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0"></div>
                  {i === 0 && <Image src="/images/portfolio_electrician.png" alt={project.title} fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 z-10 mix-blend-luminosity hover:mix-blend-normal" />}
                  {i === 1 && <Image src="/images/portfolio_plumber.png" alt={project.title} fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 z-10 mix-blend-luminosity hover:mix-blend-normal" />}
                  {i === 2 && <Image src="/images/portfolio_hvac.png" alt={project.title} fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 z-10 mix-blend-luminosity hover:mix-blend-normal" />}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-primary text-sm font-semibold mb-3">{project.category}</div>
                  <p className="text-muted mb-8 flex-grow">{project.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium text-sm group-hover:gap-3">
                    Request Similar Build <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
