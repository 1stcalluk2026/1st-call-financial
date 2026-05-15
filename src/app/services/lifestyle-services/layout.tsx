import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifestyle Financial Services & Personal Tax Planning | 1st Call UK",
  description:
    "Expert personal financial services in Nottingham. Specialized support for high-net-worth individuals, rental income tax, and long-term lifestyle planning.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/lifestyle-services",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Lifestyle Financial Services | 1st Call UK Financial Services",
    description:
      "Manage your personal wealth with clarity. Professional guidance on personal tax compliance, property investments, and bespoke financial planning.",
    url: "https://www.1stcalluk.financial/services/lifestyle-services",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/lifestyle-services-hero.png",
        width: 1200,
        height: 630,
        alt: "Lifestyle Financial Planning and Personal Tax Services",
      },
    ],
  },
};

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== LIFESTYLE SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK Lifestyle Financial Services",
            "serviceType": "Personal Financial Planning",
            "provider": {
              "@type": "FinancialService",
              "name": "1st Call UK Financial Services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "25 St James's St",
                "addressLocality": "Nottingham",
                "postalCode": "NG1 6FH",
                "addressCountry": "GB"
              }
            },
            "description": "Bespoke personal financial services including tax planning, property income management, and wealth oversight for individuals and families.",
            "areaServed": "United Kingdom",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Personal Finance Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Personal Tax Planning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Property Income Support"
                  }
                }
              ]
            }
          }),
        }}
      />
    </>
  );
}