import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Financial Advice in Nottingham | 1st Call UK",
  description:
    "Contact 1st Call UK for professional financial advice in Nottingham. Book a consultation for expert support with mortgages, pensions, and wealth management.",

  // Canonical URL for the new domain
  alternates: {
    canonical: "https://www.1stcalluk.financial/contact",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Contact Us | Financial Planning & Mortgages | 1st Call UK",
    description:
      "Get in touch with 1st Call UK Financial Services. Speak with our advisers today about mortgage applications, retirement planning, or investment strategies.",
    url: "https://www.1stcalluk.financial/contact",
    type: "article",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact 1st Call UK Financial Services",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}