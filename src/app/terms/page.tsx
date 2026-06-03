import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Terms & Conditions | GrowthGrid",
  description: "Terms and conditions for using GrowthGrid services.",
};

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services</h2>
            <p>
              GrowthGrid provides digital marketing, website development, SEO, and automation services. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              The materials contained on this website are protected by applicable copyright and trademark law. You may not modify or copy the materials without our prior written consent.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall GrowthGrid be liable for any damages arising out of the use or inability to use the materials on our website or the performance of our services.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
