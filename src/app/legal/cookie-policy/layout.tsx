import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | 1st Call UK Financial Services",
  description:
    "Review the Cookie Policy for 1st Call UK Financial Services. Understand how we use cookies to provide a secure and optimized experience for our financial clients.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcalluk.financial/legal/cookie-policy",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Cookie Policy | 1st Call UK Financial Services",
    description:
      "Learn about our use of cookies and data management practices designed to protect your privacy while using our financial advisory services.",
    url: "https://www.1stcalluk.financial/legal/cookie-policy",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-legal.jpg",
        width: 1200,
        height: 630,
        alt: "Legal and Privacy Policies | 1st Call UK Financial",
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