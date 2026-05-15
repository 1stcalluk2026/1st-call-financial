import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Protection & Rights | 1st Call UK Financial",
  description:
    "Information on your rights under the Consumer Contracts Regulations and FCA standards, including cancellations and protections for financial service agreements.",
  alternates: {
    canonical:
      "https://www.1stcalluk.financial/legal/consumer-contracts-regulations-2013",
  },
  openGraph: {
    title: "Consumer Rights & Financial Protections | 1st Call UK",
    description:
      "Understand your consumer rights regarding financial service contracts, including cooling-off periods and cancellation protections.",
    url: "https://www.1stcalluk.financial/legal/consumer-contracts-regulations-2013",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-consumer-rights.jpg",
        width: 1200,
        height: 630,
        alt: "Consumer Protection for Financial Services",
      },
    ],
  },
};

export default function LegalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}