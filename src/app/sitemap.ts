import { MetadataRoute } from 'next';

export const baseUrl = 'https://www.1stcalluk.financial';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/reviews',
    '/our-financial-services',
    '/our-financial-team',
    '/services/audit-and-assurance',
    '/services/business-startup-services',
    '/services/hmrc-investigations-and-enquiries',
    '/services/inheritance-tax-planning',
    '/services/lifestyle-services',
    '/services/payroll-services',
    '/legal/cookie-policy',
    '/legal/disclaimer',
    '/legal/gdpr-data-privacy-notice',
    '/legal/terms-of-website-use',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}