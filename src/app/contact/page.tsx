import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact Us | GrowthGrid",
  description: "Get in touch with GrowthGrid to start scaling your local business.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <Reveal direction="right">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Build Your <span className="text-gradient">Growth Engine</span></h1>
              <p className="text-xl text-muted mb-10">
                Ready to dominate your local market? Fill out the form, and we'll get back to you within 24 hours with a custom growth plan.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-muted mb-1">For general inquiries and support.</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-muted mb-1">Mon-Fri from 9am to 6pm.</p>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-primary hover:underline">{siteConfig.contact.phoneDisplay}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          {/* Contact Form */}
          <Reveal direction="left" delay={0.2}>
            <div className="glass p-8 md:p-10 rounded-2xl border border-card-border shadow-2xl relative">
              <h3 className="text-2xl font-bold mb-6 text-white">Request Your Free Demo</h3>
              <ContactForm />
            </div>
          </Reveal>
          
        </div>
      </div>
    </div>
  );
}
