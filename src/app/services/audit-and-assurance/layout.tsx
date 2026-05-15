import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & Assurance Services | 1st Call UK Financial",
  description:
    "Professional audit and assurance services in Nottingham. We provide statutory audits, internal control assessments, and independent financial reporting for UK businesses.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/audit-and-assurance",
  },

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Audit & Assurance | Professional Financial Reporting | 1st Call UK",
    description:
      "Strengthen your business governance with rigorous, objective audit and assurance solutions tailored to your regulatory requirements.",
    url: "https://www.1stcalluk.financial/services/audit-and-assurance",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/audit-assurance-hero.png",
        width: 1200,
        height: 630,
        alt: "Audit and Assurance Financial Services",
      },
    ],
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== AUDIT SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK Financial Services - Audit & Assurance",
            "serviceType": "Audit and Assurance",
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
            "description": "Comprehensive statutory audits and independent assurance services to ensure financial accuracy and regulatory compliance for UK organisations.",
            "areaServed": "United Kingdom"
          }),
        }}
      />
    </>
  );
}