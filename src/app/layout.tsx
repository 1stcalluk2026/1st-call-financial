import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://www.1stcalluk.financial"),

  title: {
    default: "1st Call UK Financial Services | Expert Financial Advice",
    template: "%s | 1st Call UK Financial",
  },

  description:
    "Independent financial advisers in Nottingham. Specialising in mortgage brokering, pension reviews, and wealth management services for individuals and businesses.",

  robots: "index, follow",

  openGraph: {
    type: "website",
    siteName: "1st Call UK Financial Services",
    url: "https://www.1stcalluk.financial",
    images: [
      {
        url: "https://www.1stcalluk.financial/og-image-financial.jpg",
        width: 1200,
        height: 630,
        alt: "1st Call UK Financial Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "1st Call UK Financial Services | Wealth & Mortgage Experts",
    description:
      "Expert financial planning and mortgage advice in Nottingham. Secure your future with 1st Call UK Financial Services.",
    images: ["https://www.1stcalluk.financial/og-image-financial.jpg"],
  },

  alternates: {
    canonical: "https://www.1stcalluk.financial",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-gray-900">

        <Header />
        <main>{children}</main>
        <Footer />

        <div className="bg-black text-gray-400 text-center py-4 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} 1st Call UK Financial Services. All rights reserved.
        </div>

        {/* ===== FINANCIAL SERVICE & MULTI-ENTITY SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FinancialService",
                  "@id": "https://www.1stcalluk.financial/#organization",
                  "name": "1st Call UK Financial Services",
                  "url": "https://www.1stcalluk.financial",
                  "logo": "https://www.1stcalluk.financial/1st-calluk-financial-logo.jpg",
                  "image": "https://www.1stcalluk.financial/financial-adviser-team.png",
                  "telephone": "+441158453325",
                  "email": "info@1stcalluk.financial",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "25 St James's St",
                    "addressLocality": "Nottingham",
                    "addressRegion": "Nottinghamshire",
                    "postalCode": "NG1 6FH",
                    "addressCountry": "GB",
                  },
                  "priceRange": "££",
                  "description": "Professional financial advisory firm specialising in mortgages, pensions, and wealth management. A member of the 1st Call UK Group.",
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "1st Call UK Group"
                  },
                  "relatedService": {
                    "@type": "LegalService",
                    "name": "1st Call UK Immigration Services",
                    "url": "https://www.1stcalluk.com" 
                  },
                  "sameAs": [
                    "https://facebook.com",
                    "https://linkedin.com",
                    "https://www.google.com/maps",
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.1stcalluk.financial/#website",
                  "url": "https://www.1stcalluk.financial",
                  "name": "1st Call UK Financial Services",
                  "publisher": { "@id": "https://www.1stcalluk.financial/#organization" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.1stcalluk.financial/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.1stcalluk.financial"
                    }
                  ]
                }
              ]
            }),
          }}
        />

        {/* ===== CHATBASE AI ASSISTANT ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="BpVYDLxfQ4AwaPDDs5_zr";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}
              else{window.addEventListener("load",onLoad)}
            })();`,
          }}
        />
      </body>
    </html>
  );
}