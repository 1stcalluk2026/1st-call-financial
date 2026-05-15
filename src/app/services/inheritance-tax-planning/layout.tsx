import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inheritance Tax Planning & Estate Protection | 1st Call UK",
  description:
    "Expert Inheritance Tax (IHT) planning in Nottingham. Protect your family wealth with professional advice on gifting, property assets, and estate structuring.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/inheritance-tax-planning",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Inheritance Tax Planning | 1st Call UK Financial Services",
    description:
      "Secure your family's future. Expert guidance on reducing IHT exposure through compliant gifting, property planning, and estate management.",
    url: "https://www.1stcalluk.financial/services/inheritance-tax-planning",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/inheritance-tax-hero.png",
        width: 1200,
        height: 630,
        alt: "Inheritance Tax Planning and Wealth Protection",
      },
    ],
  },
};

export default function IHTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== IHT SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK Inheritance Tax Planning",
            "serviceType": "Estate Planning and IHT Advice",
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
            "description": "Professional guidance on UK Inheritance Tax, lifetime gifting, and wealth preservation strategies to protect family estates.",
            "areaServed": "United Kingdom"
          }),
        }}
      />
    </>
  );
}