import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Financial Document Management | 1st Call UK Financial",
  description:
    "A secure, GDPR-compliant digital document management system for your financial planning. Safely store and access mortgage, pension, and investment documents.",

  // Canonical URL for consistency across the new domain
  alternates: {
    canonical: "https://www.1stcalluk.financial/dms",
  },

  // OpenGraph metadata for professional sharing
  openGraph: {
    title: "Secure Financial Document Management | 1st Call UK",
    description:
      "GDPR-compliant storage for sensitive financial records. Fast, secure access for our mortgage and wealth management clients.",
    url: "https://www.1stcalluk.financial/dms",
    type: "website",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-dms.jpg",
        width: 1200,
        height: 630,
        alt: "Secure Financial Document Management System",
      },
    ],
  },
};

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}