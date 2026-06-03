import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Wrench, ThermometerSnowflake, Droplets, Camera, CheckCircle2, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting Early Partners
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
              Scale Your Local Business <br className="hidden md:block" />
              With <span className="text-gradient">AI-Powered Growth</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
              We build premium websites, automated lead generation systems, and SEO strategies for service businesses that want to dominate their local market.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                Get Your Free Demo <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto glass hover:bg-white/5 text-white px-8 py-4 rounded-full font-semibold transition-all">
                View Our Work
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={0.4} className="mt-16 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass">
              <Image src="/images/hero_abstract.png" alt="GrowthGrid Technology" width={1200} height={600} className="w-full h-auto object-cover opacity-80 mix-blend-screen" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROBLEM / SOLUTION */}
      <section className="py-20 bg-background border-y border-card-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Stop losing customers to competitors with worse service.</h2>
              <p className="text-muted text-lg mb-6">
                Most local businesses rely on word-of-mouth or outdated websites that fail to convert. Meanwhile, your competitors are capturing all the local search traffic.
              </p>
              <ul className="space-y-4">
                {[
                  "No predictable way to get new leads",
                  "Website looks outdated and doesn't load fast",
                  "Missing out on Google search rankings",
                  "Wasting time answering repetitive customer queries"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    {problem}
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal direction="left" delay={0.2}>
              <div className="glass p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-white">The GrowthGrid Solution</h3>
                <ul className="space-y-6">
                  {[
                    "Automated Lead Generation systems working 24/7",
                    "Premium, ultra-fast websites designed to convert",
                    "Local SEO domination to capture high-intent searches",
                    "WhatsApp & AI automations to close deals faster"
                  ].map((solution, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={24} />
                      <span className="text-lg text-white/90">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-[#0A0A0F]">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Industries We Serve</h2>
              <p className="text-muted text-lg">We specialize in helping home service and local businesses scale through predictable digital growth.</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, name: "Electricians", desc: "Emergency calls & rewiring leads" },
              { icon: Wrench, name: "Plumbers", desc: "Pipe repair & installation leads" },
              { icon: ThermometerSnowflake, name: "AC Repair", desc: "HVAC maintenance & service" },
              { icon: Droplets, name: "RO Service", desc: "Purifier installation & repair" },
              { icon: Camera, name: "CCTV", desc: "Security system installations" },
            ].map((industry, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted">{industry.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Everything you need to grow.</h2>
              <p className="text-muted text-lg">We provide an end-to-end digital infrastructure so you can focus on fulfilling services while we bring the customers.</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium Websites", desc: "High-converting, mobile-first designs that build instant trust." },
              { title: "Local SEO", desc: "Rank #1 on Google Maps for high-intent local searches." },
              { title: "Lead Generation", desc: "Predictable customer acquisition systems that run 24/7." },
              { title: "WhatsApp Automation", desc: "Automate follow-ups and appointment booking instantly." },
              { title: "Business Automation", desc: "Save 10+ hours a week with smart workflow automations." },
              { title: "Website Maintenance", desc: "Secure, fast, and updated digital presence always." },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass p-8 rounded-2xl h-full border border-card-border hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-6">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EARLY PARTNER PROGRAM */}
      <section className="py-24 bg-[#0A0A0F] border-y border-card-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-8 md:p-16 rounded-3xl relative overflow-hidden max-w-5xl mx-auto text-center border-primary/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            
            <Reveal>
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/20">
                🚀 Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Early Partner Program</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                We are currently onboarding our first growth partners and offering <span className="text-white font-bold">premium ₹50,000+ websites at exclusive launch pricing.</span> Lock in your market dominance before your competitors do.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all text-lg">
                Claim Partner Pricing <ArrowRight size={20} />
              </Link>
              <p className="text-sm text-muted mt-6">Only 3 spots remaining for this month.</p>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
