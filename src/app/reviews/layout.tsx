import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Five-Star Financial Advice | 1st Call UK",
  description:
    "Read verified testimonials from our clients. 1st Call UK Financial Services is trusted by hundreds for expert mortgage, pension, and wealth management advice.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcalluk.financial/reviews",
  },

  // OpenGraph metadata for social and Google previews
  openGraph: {
    title: "Client Reviews | 1st Call UK Financial Services",
    description:
      "See why clients rate us five stars for financial planning and mortgage advice. Trusted expertise backed by 300+ positive experiences.",
    url: "https://www.1stcalluk.financial/reviews",
    type: "website",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-reviews.jpg",
        width: 1200,
        height: 630,
        alt: "Client Reviews and Testimonials for 1st Call UK Financial",
      },
    ],
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}