import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Website Use | 1st Call UK Financial Services",
  description:
    "Review the Terms of Website Use for 1st Call UK Financial Services. Understand the legal conditions, user obligations, and regulatory notices for accessing our financial services platform.",

  // Canonical URL
  alternates: {
    canonical:
      "https://www.1stcalluk.financial/legal/terms-of-website-use",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Terms of Website Use | 1st Call UK Financial Services",
    description:
      "Important legal conditions and rules for using the 1st Call UK Financial Services website. Ensure you understand our terms before accessing our financial advice resources.",
    url: "https://www.1stcalluk.financial/legal/terms-of-website-use",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Website Use | 1st Call UK Financial Services",
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