import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Financial Advisers | Nottingham | 1st Call UK Financial",
  description:
    "Meet our experienced financial advisers in Nottingham. Over 15 years of expertise in mortgage brokering, pension planning, and wealth management.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/our-financial-team",
  },

  // OpenGraph metadata for social and Google previews
  openGraph: {
    title: "Meet Our Expert Financial Advisers | 1st Call UK",
    description:
      "Our team of financial experts in Nottingham provides professional guidance on mortgages, pensions, and investments to help you secure your future.",
    url: "https://www.1stcalluk.financial/our-financial-team",
    type: "profile",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-team.jpg",
        width: 1200,
        height: 630,
        alt: "The 1st Call UK Financial Advisory Team",
      },
    ],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}