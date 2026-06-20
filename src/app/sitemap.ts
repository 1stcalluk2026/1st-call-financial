import { MetadataRoute } from 'next';

const baseUrl = 'https://www.1stcalluk.financial';

const pages = [
  '/',
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }));
}