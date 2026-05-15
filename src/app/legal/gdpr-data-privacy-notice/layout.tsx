import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Data Privacy Notice | 1st Call UK Financial Services",
  description:
    "Review our GDPR and Data Privacy Notice. Learn how 1st Call UK Financial Services securely manages and protects your sensitive financial data under UK law.",

  // Canonical URL
  alternates: {
    canonical:
      "https://www.1stcalluk.financial/legal/gdpr-data-privacy-notice",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Data Privacy & GDPR Compliance | 1st Call UK Financial",
    description:
      "Our commitment to your privacy: Learn how we collect, store, and protect your personal and financial information in compliance with UK GDPR.",
    url: "https://www.1stcalluk.financial/legal/gdpr-data-privacy-notice",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Data Privacy and GDPR Compliance | 1st Call UK Financial",
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