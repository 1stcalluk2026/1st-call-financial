import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Financial Services | Mortgages & Pensions | 1st Call UK",
  description:
    "Expert financial services in Nottingham. We provide professional advice on mortgages, retirement planning, investments, and comprehensive wealth management.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/our-financial-services",
  },

  // OpenGraph metadata for social previews
  openGraph: {
    title: "Financial Planning & Mortgage Services | 1st Call UK",
    description:
      "Achieve your financial goals with 1st Call UK Financial Services. Expert guidance on home loans, pensions, and investment strategies.",
    url: "https://www.1stcalluk.financial/our-financial-services",
    type: "website",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Services by 1st Call UK Financial",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== SERVICE PAGE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Financial Advisory & Mortgage Brokering",
            provider: {
              "@type": "FinancialService",
              name: "1st Call UK Financial Services",
              url: "https://www.1stcalluk.financial",
              telephone: "+441158453325",
              address: {
                "@type": "PostalAddress",
                streetAddress: "25 St James's St",
                addressLocality: "Nottingham",
                postalCode: "NG1 6FH",
                addressCountry: "GB",
              },
            },
            areaServed: "United Kingdom",
            description:
              "Comprehensive financial services including residential and commercial mortgages, pension reviews, and investment portfolio management.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Financial Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mortgage Advice"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Retirement Planning"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wealth Management"
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