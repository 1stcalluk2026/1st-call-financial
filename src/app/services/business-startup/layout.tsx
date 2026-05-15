import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Startup & Growth Advisory | 1st Call UK Financial",
  description:
    "Expert financial support for UK startups and entrepreneurs. From company formation and tax setup to cash-flow management and cloud accounting solutions.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/business-startup-services",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Business & Startup Financial Services | 1st Call UK",
    description:
      "Launch and scale your business with professional financial guidance. Expert advice on company structure, HMRC registrations, and financial planning.",
    url: "https://www.1stcalluk.financial/services/business-startup-services",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/business-startup-hero.png",
        width: 1200,
        height: 630,
        alt: "Business and Startup Financial Advisory",
      },
    ],
  },
};

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== BUSINESS SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK Business & Startup Services",
            "serviceType": "Business Financial Advisory",
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
            "description": "Specialised financial support for startups, including company incorporation, HMRC tax setup, cash-flow forecasting, and cloud accounting implementation.",
            "areaServed": "United Kingdom",
            "offers": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Company Formation and Growth Advisory"
              }
            }
          }),
        }}
      />
    </>
  );
}