import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 1st Call UK Financial Services",
  description:
    "Discover the expertise behind 1st Call UK Financial Services. We are dedicated to providing independent mortgage, pension, and investment advice to individuals and businesses in Nottingham.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/about-us",
  },

  // OpenGraph metadata for richer previews
  openGraph: {
    title: "About Us | 1st Call UK Financial Services",
    description:
      "Learn about our commitment to professional financial planning, wealth management, and expert mortgage advice at 1st Call UK Financial Services.",
    url: "https://www.1stcalluk.financial/about-us",
    type: "article",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "About 1st Call UK Financial Services",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}