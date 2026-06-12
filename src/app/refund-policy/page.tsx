import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/refund-policy",
  },
  title: "Refund Policy | GrowthGrid",
  description: "GrowthGrid refund policy and terms of service cancellation.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Refund Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Service Level Agreements</h2>
          <p className="text-muted">
            At GrowthGrid, we pride ourselves on delivering high-quality digital services. Due to the custom nature of web development, SEO, and lead generation services, refunds are evaluated on a case-by-case basis as outlined below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Web Development Projects</h2>
          <p className="text-muted">
            For website development projects, we typically require an upfront deposit. 
            If you choose to cancel the project before any design or development work has commenced, a full refund of the deposit will be issued.
            Once the initial design mockups have been approved and development has started, the deposit is non-refundable. 
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. SEO & Marketing Retainers</h2>
          <p className="text-muted">
            SEO and Lead Generation are ongoing services. We do not offer refunds for months where services have already been rendered. You may cancel your monthly retainer with a 30-day written notice. Any prepaid amounts for months following the 30-day notice period will be fully refunded.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Exceptions</h2>
          <p className="text-muted">
            If GrowthGrid fails to deliver the agreed-upon scope of work as detailed in your contract, we will work with you to either rectify the situation at no additional cost or provide a prorated refund based on the undelivered components.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Contact Us</h2>
          <p className="text-muted">
            If you have questions about our refund policy or need to request a cancellation, please contact us at <a href="mailto:growthgridlab@gmail.com" className="text-primary hover:underline">growthgridlab@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
