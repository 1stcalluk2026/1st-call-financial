export const SITE_URL = "https://www.1stcalluk.financial";

export const SITE_SEARCH_PAGES = [
  {
    title: "Home",
    href: "/",
    description: "Accountants and tax advisers in Nottingham.",
    keywords: ["accountants", "nottingham", "tax", "financial"],
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "ACCA and AAT qualified accountants serving clients across the UK.",
    keywords: ["about", "firm", "acca", "aat"],
  },
  {
    title: "Our Financial Services",
    href: "/our-financial-services",
    description: "Bookkeeping, payroll, VAT, tax planning, and business advisory.",
    keywords: ["services", "accounting", "payroll", "vat", "mtd", "xero"],
  },
  {
    title: "Our Financial Team",
    href: "/our-financial-team",
    description: "Meet the accountants and advisers at 1st Call UK Financial Services.",
    keywords: ["team", "advisers", "accountants"],
  },
  {
    title: "Reviews",
    href: "/reviews",
    description: "Client reviews and testimonials.",
    keywords: ["reviews", "testimonials", "ratings"],
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Accounting, tax, and business finance news and guides.",
    keywords: ["blog", "news", "guides", "tax"],
  },
  {
    title: "Latest News",
    href: "/latest-news",
    description: "Media coverage and firm updates.",
    keywords: ["news", "media", "press"],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Book a consultation or speak to our Nottingham office.",
    keywords: ["contact", "consultation", "appointment", "phone", "email"],
  },
  {
    title: "Document Management",
    href: "/dms",
    description: "Secure client document upload and case management.",
    keywords: ["documents", "dms", "upload", "portal"],
  },
  {
    title: "Audit & Assurance",
    href: "/services/audit-and-assurance",
    description: "Audit and assurance services for businesses.",
    keywords: ["audit", "assurance", "accounts"],
  },
  {
    title: "Business Startup Services",
    href: "/services/business-startup-services",
    description: "Support for new businesses and start-ups.",
    keywords: ["startup", "business", "new company"],
  },
  {
    title: "HMRC Investigations",
    href: "/services/hmrc-investigations-and-enquiries",
    description: "Professional representation for HMRC enquiries.",
    keywords: ["hmrc", "investigation", "enquiry", "tax"],
  },
  {
    title: "Inheritance Tax Planning",
    href: "/services/inheritance-tax-planning",
    description: "Estate and inheritance tax planning advice.",
    keywords: ["inheritance", "estate", "iht", "tax planning"],
  },
  {
    title: "Lifestyle Services",
    href: "/services/lifestyle-services",
    description: "Personal finance and lifestyle accounting support.",
    keywords: ["lifestyle", "personal", "finance"],
  },
  {
    title: "Payroll Services",
    href: "/services/payroll-services",
    description: "Payroll processing and employer compliance.",
    keywords: ["payroll", "payslips", "employer", "rti"],
  },
] as const;

export function searchSitePages(query: string) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return SITE_SEARCH_PAGES.filter((page) => {
    const haystack = [
      page.title,
      page.description,
      page.href,
      ...page.keywords,
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}
