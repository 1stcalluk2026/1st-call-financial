import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Coverage & Financial Market Updates | 1st Call UK",
  description:
    "Explore national media coverage and financial industry updates featuring 1st Call UK, including market insights and regulatory developments.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcalluk.financial/latest-news",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Media Coverage & Financial Updates | 1st Call UK",
    description:
      "Stay informed with 1st Call UK Financial Services in the news. Expert commentary on market trends, financial regulations, and industry developments.",
    url: "https://www.1stcalluk.financial/latest-news",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-news.jpg",
        width: 1200,
        height: 630,
        alt: "1st Call UK Financial Media and News",
      },
    ],
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}