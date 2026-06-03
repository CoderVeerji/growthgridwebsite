import Reveal from "@/components/ui/Reveal";
import { MonitorSmartphone, Search, TrendingUp, MessageSquare, Settings, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | GrowthGrid",
  description: "Comprehensive digital growth services including web design, SEO, and automation.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Business Websites",
      desc: "We don't just build websites; we build digital storefronts optimized for conversion. Fast, mobile-responsive, and designed to turn visitors into paying customers instantly.",
    },
    {
      icon: Search,
      title: "Local SEO Services",
      desc: "Dominate the Google Maps pack. We optimize your Google Business Profile, build local citations, and generate reviews so you appear first when locals search for your services.",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Systems",
      desc: "Stop relying on word-of-mouth. We build predictable advertising and organic funnels that bring a steady stream of qualified leads directly to your phone.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      desc: "Never miss a lead because you were busy working. Our intelligent WhatsApp bots greet customers, answer FAQs, and book appointments 24/7.",
    },
    {
      icon: Settings,
      title: "Business Automation",
      desc: "Save 10+ hours a week by automating your invoicing, follow-ups, and calendar bookings. Work on your business, not in it.",
    },
    {
      icon: ShieldCheck,
      title: "Website Maintenance",
      desc: "Complete peace of mind. We handle all hosting, security updates, backups, and content changes so your website is always fast, secure, and up-to-date.",
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
            <p className="text-xl text-muted">
              We provide an end-to-end digital infrastructure designed specifically to help local service businesses scale predictably.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass p-8 rounded-3xl h-full border border-card-border hover:border-primary/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 text-center glass max-w-4xl mx-auto p-12 rounded-3xl border-primary/20">
            <h2 className="text-3xl font-heading font-bold mb-6">Not sure what you need?</h2>
            <p className="text-lg text-muted mb-8">
              Book a free strategy call. We'll analyze your current digital presence and show you exactly where you're losing customers to competitors.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all">
              Get Your Custom Strategy <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
