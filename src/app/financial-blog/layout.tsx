import type { Metadata } from "next";

export const dynamic = "force-dynamic"; // ✅ REQUIRED FOR PREVIEW ROUTES

export const metadata: Metadata = {
  title: "UK Financial News & Insights | 1st Call UK Financial",
  description:
    "Expert articles on UK financial planning, taxation, retirement strategies, and mortgage insights written by experienced financial advisers.",

  alternates: {
    canonical: "https://www.1stcalluk.financial/blog",
  },

  openGraph: {
    title: "UK Financial News & Insights | 1st Call UK",
    description:
      "Stay informed with the latest UK financial trends, tax efficiency tips, and wealth management strategies from 1st Call UK Financial Services.",
    url: "https://www.1stcalluk.financial/blog",
    type: "website",
    siteName: "1st Call UK Financial Services",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "1st Call UK Financial Insights Blog",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== BLOG SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "1st Call UK Financial Insights",
            url: "https://www.1stcalluk.financial/blog",
            description:
              "Expert guidance on UK financial planning, mortgage trends, pension regulations, and tax efficiency.",
            publisher: {
              "@type": "Organization",
              name: "1st Call UK Financial Services",
              logo: {
                "@type": "ImageObject",
                url: "https://www.1stcalluk.financial/1st-calluk-financial-logo.jpg"
              },
            },
          }),
        }}
      />
    </>
  );
}