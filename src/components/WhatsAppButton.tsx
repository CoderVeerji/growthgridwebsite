"use client";

import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing the button slightly for a nice entry effect
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi GrowthGrid, I want to discuss growing my business.")}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 relative group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} className="fill-current" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-[#0A0A0F] border border-white/10 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Chat with us
            </span>
            
            {/* Ping animation behind */}
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
