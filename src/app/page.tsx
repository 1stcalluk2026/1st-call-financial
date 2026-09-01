import Image from "next/image";
import HomeFaqSection from "./components/HomeFaqSection";
import { homeFaqPageSchema } from "@/lib/home-faqs";

export const metadata = {
  title: "Accountants & Tax Advisers Nottingham | 1st Call UK",
  description:
    "Professional accountants in Nottingham. Experts in Xero, MTD, payroll, and VAT. Trusted business advisory and tax services for UK SMEs.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqPageSchema()),
        }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* ===== Hero Section ===== */}
        <header className="relative min-h-[240px] sm:h-[50vh] md:h-[55vh] overflow-hidden mb-8">
          <Image
            src="/financial-services-team.jpg"
            alt="Professional accountants and financial advisers in Nottingham"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2d459c]/80 flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-10 animate-fade-in">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-snug">
              Trusted Accountants & Financial Advisers in Nottingham
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl mt-1">
              Your success is our priority.
            </p>
            <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl mt-1">
              Speak to our expert team today for clear, practical financial advice.
            </p>
          </div>
        </header>

        {/* ===== Welcome Section ===== */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-gray-700 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#2d459c]">
              Welcome to 1st Call UK Financial Services
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              <span className="text-[#2d459c] font-semibold">
                Trusted Accountants & Financial Advisers in Nottingham
              </span>
              {" — "}
              A modern, digital-first accountancy practice supporting individuals, contractors, landlords, and growing businesses across the UK.
            </p>

            <p>
              1st Call UK Financial Services provides clear, reliable, and forward-thinking accounting
              and tax solutions from our Nottingham base. Our team includes ACCA and AAT qualified
              professionals who combine technical expertise with a practical understanding of real-world
              business challenges.
            </p>

            <p>
              We work with clients at every stage — from sole traders and start-ups to limited companies
              and established organisations. Whether you require ongoing bookkeeping, year-end accounts,
              tax planning, payroll, or specialist support with Making Tax Digital (MTD), we deliver a
              service that is proactive, compliant, and tailored to your needs.
            </p>

            <p>
              As certified Xero partners, we specialise in cloud accounting and digital finance systems.
              We help clients transition smoothly to Xero, providing full software implementation,
              training, and ongoing support. For those already using Sage, QuickBooks, or other platforms,
              we are equally happy to work with your existing systems.
            </p>

            <p>
              Our approach is built on transparency and long-term relationships. You will always know
              where you stand financially, what your obligations are, and how to plan confidently for
              the future. We believe good financial advice should be understandable, accessible, and
              genuinely useful.
            </p>

            <div className="pt-2">
              <a
                href="/team"
                className="text-[#2d459c] font-semibold hover:underline"
              >
                Meet Our Financial Team →
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-md md:self-start mt-20">
            <Image
              src="/homepage-body-team.jpg"
              alt="Digital accounting and financial services"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2d459c]/30 via-[#2d459c]/50 to-[#2d459c]/70"></div>
          </div>
        </section>

        {/* ===== Why Choose Us Section ===== */}
        <section className="bg-gradient-to-b from-[#dfe4f3] to-[#f3f4f8] py-16 px-6 md:px-10 text-center">
          <h3 className="text-3xl font-bold text-[#2d459c] mb-8">
            Why Choose 1st Call UK Financial Services?
          </h3>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-700">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
                Qualified & Regulated Professionals
              </h4>
              <p>
                Our accountants are ACCA and AAT qualified, delivering compliant, up-to-date advice you
                can trust in an ever-changing regulatory environment.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
                Digital & MTD-Ready
              </h4>
              <p>
                We are specialists in cloud accounting and Making Tax Digital, helping clients stay
                compliant while improving efficiency and financial visibility.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
                Practical, Personal Service
              </h4>
              <p>
                We take time to understand your circumstances, offering clear advice, fixed-fee options,
                and responsive support whenever you need it.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-4 px-8 rounded-md shadow-lg transition duration-300"
            >
              Speak to an Adviser
            </a>
          </div>
        </section>

        {/* ===== Professional Accreditation Section ===== */}
        <section className="bg-gray-50 py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d459c] mb-4">
              Professional Standards You Can Trust
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-14">
              Our services are delivered in line with recognised professional standards,
              supported by accredited expertise in accounting, payroll, taxation, and
              digital finance systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
              <div className="flex justify-center">
                <Image src="/aat.jpeg" alt="AAT Professional Accountant" width={160} height={160} className="object-contain" />
              </div>
              <div className="flex justify-center">
                <Image src="/Payroll specialist01.png" alt="Payroll Specialist" width={200} height={140} className="object-contain" />
              </div>
              <div className="flex justify-center">
                <Image src="/Tax specialist capsule.png" alt="Tax Specialist" width={260} height={120} className="object-contain" />
              </div>
              <div className="flex justify-center">
                <Image src="/Xero Certified.png" alt="Xero Certified Advisor" width={180} height={180} className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        <HomeFaqSection />
      </main>
    </>
  );
}
