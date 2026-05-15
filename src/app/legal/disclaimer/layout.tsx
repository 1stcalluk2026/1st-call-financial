import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | 1st Call UK Financial Services",
  description:
    "Read the legal disclaimer for 1st Call UK Financial Services. Important information regarding professional advice, financial regulations, and website terms of use.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcalluk.financial/legal/disclaimer",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Legal Disclaimer | 1st Call UK Financial Services",
    description:
      "Important regulatory information and legal notices regarding the professional financial guidance provided by 1st Call UK Financial Services.",
    url: "https://www.1stcalluk.financial/legal/disclaimer",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-legal.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Notices and Disclaimers | 1st Call UK Financial",
      },
    ],
  },
};

// ✅ REQUIRED NEXT.JS LAYOUT WRAPPER
export default function LegalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}