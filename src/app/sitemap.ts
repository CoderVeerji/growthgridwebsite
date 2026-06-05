import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const coreRoutes = [
    '', '/services', '/portfolio', '/about', '/contact', '/blog',
    '/locations', '/privacy-policy', '/terms', '/refund-policy'
  ];

  const serviceRoutes = [
    '/services/website-development',
    '/services/seo-services',
    '/services/web-design',
    '/services/business-automation',
    '/services/lead-generation',
    '/services/whatsapp-automation'
  ];

  const industryRoutes = [
    '/industries/electricians',
    '/industries/plumbers',
    '/industries/ac-repair',
    '/industries/cctv-installation',
    '/industries/ro-services'
  ];

  const locationRoutes = [
    '/delhi-website-development',
    '/gurgaon-website-development',
    '/noida-website-development',
    '/delhi-seo-services',
    '/gurgaon-seo-services'
  ];

  const allStaticRoutes = [...coreRoutes, ...serviceRoutes, ...industryRoutes, ...locationRoutes];

  const routes = allStaticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : (serviceRoutes.includes(route) || locationRoutes.includes(route) ? 0.9 : 0.8),
  }));

  return [...routes, ...posts];
}
