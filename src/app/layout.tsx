import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowthGrid | Website Development, SEO & Business Automation",
  description: "GrowthGrid helps local businesses grow with professional websites, SEO services, lead generation systems and business automation.",
  keywords: ["website development", "SEO services", "lead generation", "business automation", "web design"],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "GrowthGrid | Website Development, SEO & Business Automation",
    description: "GrowthGrid helps local businesses grow with professional websites, SEO services, lead generation systems and business automation.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "GrowthGrid Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthGrid | Website Development, SEO & Business Automation",
    description: "GrowthGrid helps local businesses grow with professional websites, SEO services, lead generation systems and business automation.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SITE_VERIFICATION_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/logo.jpg`,
        "sameAs": [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
        ].filter(Boolean),
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "email": siteConfig.contact.email,
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        "name": siteConfig.name,
        "image": `${siteConfig.url}/logo.jpg`,
        "description": "GrowthGrid helps local businesses grow with professional websites, SEO services, lead generation systems and business automation.",
        "url": siteConfig.url,
        "telephone": siteConfig.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.contact.addressLocality,
          "addressCountry": siteConfig.contact.addressCountry
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
