export const HOME_FAQS = [
  {
    question: "Why should I choose professional accountants and tax advisers in Nottingham?",
    answer:
      "Choosing local accountants and tax advisers in Nottingham like 1st Call UK ensures you have face-to-face support and deep knowledge of UK tax legislation. Professional advisers help you navigate complex HMRC requirements, ensuring that your business remains compliant while identifying legal opportunities to reduce your overall tax liability. This level of expertise is essential for avoiding penalties and maximizing your financial growth.",
  },
  {
    question: "What specific services do your accountants and tax advisers provide?",
    answer:
      "Our comprehensive suite of services includes statutory year-end accounts, proactive tax planning, VAT returns, and expert payroll management. We also specialize in digital transformations, helping clients set up and manage Xero cloud accounting. Whether you are a small business, a contractor, or a landlord, our tax advisers provide the strategic insight needed to manage property tax, corporate tax, and personal self-assessments efficiently.",
  },
  {
    question: "How do you support businesses with Making Tax Digital (MTD)?",
    answer:
      "As forward-thinking accountants and tax advisers, we prioritize MTD readiness. We guide our clients through the process of moving from manual records to HMRC-compliant digital software. Our team handles the transition to Xero or other platforms, ensuring your digital records are accurate and that your quarterly submissions are handled seamlessly and on time.",
  },
  {
    question: "Can your tax advisers help with HMRC investigations?",
    answer:
      "Yes. Having experienced accountants and tax advisers on your side is critical if you are facing an HMRC inquiry. We act as your professional representatives, managing all correspondence, preparing necessary documentation, and ensuring your interests are protected throughout the investigation process. Our goal is to resolve enquiries efficiently while minimizing stress and potential costs.",
  },
  {
    question: "Do you offer fixed-fee packages for accounting services?",
    answer:
      "Transparency is a core value for our accountants and tax advisers. We offer clear, fixed-fee pricing so you can budget effectively without worrying about hidden costs. This allows us to build long-term partnerships with our clients, providing ongoing advice and support throughout the financial year, not just at year-end.",
  },
  {
    question: "How can I switch my accounting to 1st Call UK Financial Services?",
    answer:
      "Switching to 1st Call UK is a simple and stress-free process. Our accountants and tax advisers handle everything, including contacting your previous accountant and arranging the transfer of all relevant financial records. We then perform a full review of your current position to ensure your tax planning is optimized from day one.",
  },
] as const;

export function homeFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
