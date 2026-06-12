import Reveal from "@/components/ui/Reveal";

export const metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: "Privacy Policy | GrowthGrid",
  description: "Privacy policy and data handling for GrowthGrid.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you fill out a form, request a demo, or communicate with us. This may include your name, email address, phone number, business name, and project details.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to send you marketing communications (from which you can opt out at any time).
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as necessary to provide our services or as required by law.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:growthgridlab@gmail.com" className="text-primary hover:underline">growthgridlab@gmail.com</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
