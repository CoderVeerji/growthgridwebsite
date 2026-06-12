import Reveal from "@/components/ui/Reveal";

export const metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "About Us | GrowthGrid",
  description: "Learn about the mission and vision of GrowthGrid.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">About <span className="text-gradient">GrowthGrid</span></h1>
            <p className="text-xl text-muted">
              We exist to level the playing field for local businesses.
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          <Reveal delay={0.1}>
            <div className="glass p-8 md:p-12 rounded-3xl border border-card-border relative overflow-hidden">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Most marketing agencies focus entirely on big tech, e-commerce, or VC-backed startups. The local plumber, electrician, and HVAC technician are usually left with outdated, slow websites and zero predictable ways to generate leads.
                </p>
                <p>
                  GrowthGrid was founded to change this. We saw that local businesses don't just need a "website"—they need a digital growth engine. They need systems that automatically rank them on Google Maps, capture leads 24/7, and follow up via WhatsApp while they are busy on the job.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.2}>
              <div className="glass p-8 rounded-3xl h-full border border-card-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To equip every local service provider with enterprise-grade digital infrastructure, allowing them to focus entirely on their craft while our systems handle their growth.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="glass p-8 rounded-3xl h-full border border-card-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To become the undisputed backbone of local business growth worldwide, setting the standard for how home services acquire and retain customers.
                </p>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="glass p-8 md:p-12 rounded-3xl border border-card-border bg-gradient-to-br from-[#0A0A0F] to-[#1a1a24]">
              <h2 className="text-3xl font-heading font-bold mb-6">Core Values</h2>
              <ul className="grid sm:grid-cols-2 gap-6 text-muted">
                <li className="flex flex-col gap-2">
                  <strong className="text-white">Results Over Metrics</strong>
                  <span>We don't care about "impressions." We care about booked appointments and revenue.</span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-white">Radical Transparency</strong>
                  <span>No jargon, no hidden fees. Just clear strategies and honest communication.</span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-white">Speed Wins</strong>
                  <span>From lightning-fast websites to 5-minute lead response times, speed is our ultimate advantage.</span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-white">Relentless Innovation</strong>
                  <span>We continuously integrate the latest AI and automation tech so our clients stay ahead.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
