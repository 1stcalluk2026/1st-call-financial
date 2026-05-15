import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMRC Investigation Support & Tax Enquiry Advice | 1st Call UK",
  description:
    "Expert support for HMRC investigations and tax enquiries. Professional representation for VAT, Income Tax, and Corporation Tax reviews in Nottingham and across the UK.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/services/hmrc-investigations-and-enquiries",
  },

  // OpenGraph metadata
  openGraph: {
    title: "HMRC Investigation Support | 1st Call UK Financial Services",
    description:
      "Navigate HMRC tax enquiries with confidence. Professional representation and strategic advice to protect your interests during compliance checks.",
    url: "https://www.1stcalluk.financial/services/hmrc-investigations-and-enquiries",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/hmrc-investigation-hero.png",
        width: 1200,
        height: 630,
        alt: "HMRC Investigation and Tax Enquiry Support",
      },
    ],
  },
};

export default function HMRCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== TAX SERVICE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "1st Call UK HMRC Investigation Support",
            "serviceType": "Tax Investigation Representation",
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
            "description": "Specialist assistance for HMRC compliance checks, including representation for Income Tax, VAT, and Corporation Tax investigations.",
            "areaServed": "United Kingdom",
            "brand": {
              "@type": "Brand",
              "name": "1st Call UK"
            }
          }),
        }}
      />
    </>
  );
}