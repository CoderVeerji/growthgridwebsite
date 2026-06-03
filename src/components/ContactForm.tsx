"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/thank-you");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
          <input required type="text" id="name" name="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="business" className="text-sm font-medium text-white/80">Business Name</label>
          <input required type="text" id="business" name="business" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Acme Services" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
          <input required type="tel" id="phone" name="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
          <input required type="email" id="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-white/80">Service Required</label>
        <select required id="service" name="service" className="w-full bg-[#111116] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
          <option value="">Select a service</option>
          <option value="Website Design">Premium Website Design</option>
          <option value="Local SEO">Local SEO</option>
          <option value="Lead Generation">Lead Generation System</option>
          <option value="WhatsApp Automation">WhatsApp Automation</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/80">Project Details</label>
        <textarea required id="message" name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
      </div>
      
      <button disabled={loading} type="submit" className="w-full bg-primary hover:bg-accent text-white py-4 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
        {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Sending...</> : "Request Free Demo"}
      </button>
    </form>
  );
}
