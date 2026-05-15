import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Management & PAYE Compliance | 1st Call UK Financial",
  description:
    "Expert payroll services in Nottingham. We manage PAYE, RTI submissions, auto-enrolment, and workplace pensions for UK businesses and directors.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/payroll-services",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Payroll Services & Compliance | 1st Call UK Financial Services",
    description:
      "Remove the administrative burden of payroll. Reliable PAYE processing, HMRC reporting, and pension management for businesses of all sizes.",
    url: "https://www.1stcalluk.financial/services/payroll-services",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/payroll-hero.png",
        width: 1200,
        height: 630,
        alt: "Payroll Management and Compliance Services",
      },
    ],
  },
};

export default function PayrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== PAYROLL SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK Payroll Services",
            "serviceType": "Payroll and PAYE Management",
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
            "description": "Comprehensive outsourced payroll solutions including RTI submissions, workplace pension administration, and director salary structures.",
            "areaServed": "United Kingdom"
          }),
        }}
      />
    </>
  );
}