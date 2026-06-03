import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Thank You | GrowthGrid",
  description: "Thank you for contacting GrowthGrid.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <div className="glass max-w-2xl mx-auto p-12 md:p-16 rounded-3xl border border-card-border shadow-2xl flex flex-col items-center">
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-500/30">
              <CheckCircle size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Application Received!</h1>
            
            <p className="text-xl text-muted mb-10">
              Thank you for requesting a demo. We have received your details and our team will get back to you within 24 hours with a custom growth plan for your business.
            </p>
            
            <Link href="/" className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] inline-block">
              Return to Homepage
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
