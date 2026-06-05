"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Website Development", href: "/services/website-development" },
        { name: "SEO Services", href: "/services/seo-services" },
        { name: "Web Design", href: "/services/web-design" },
        { name: "Business Automation", href: "/services/business-automation" },
        { name: "Lead Generation", href: "/services/lead-generation" },
        { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
      ]
    },
    { 
      name: "Industries", 
      href: "#",
      subLinks: [
        { name: "Electricians", href: "/industries/electricians" },
        { name: "Plumbers", href: "/industries/plumbers" },
        { name: "AC Repair", href: "/industries/ac-repair" },
        { name: "CCTV Installation", href: "/industries/cctv-installation" },
        { name: "RO Services", href: "/industries/ro-services" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.jpg" alt="GrowthGrid Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
              onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-muted hover:text-white transition-colors py-2"
              >
                {link.name}
                {link.subLinks && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
              </Link>

              {/* Dropdown Menu */}
              {link.subLinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-[#0A0A0F] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 z-50"
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            Get Free Demo
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 outline-none focus:outline-none active:scale-95 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0F] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl h-[100vh] md:hidden z-50 overflow-y-auto pb-32"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div 
                  className="flex items-center justify-between text-white font-medium p-2 rounded-md hover:bg-white/5 cursor-pointer"
                  onClick={() => link.subLinks ? setActiveDropdown(activeDropdown === link.name ? null : link.name) : setIsOpen(false)}
                >
                  {link.subLinks ? (
                    <span className="flex items-center justify-between w-full">
                      {link.name} <ChevronDown size={18} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </span>
                  ) : (
                    <Link href={link.href} className="w-full">{link.name}</Link>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="flex flex-col pl-4 border-l border-white/10 ml-2 mt-2 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="text-muted text-sm p-2 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white p-3 rounded-md text-center font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Free Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
