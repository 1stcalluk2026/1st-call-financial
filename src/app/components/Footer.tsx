import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d459c] text-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">

        {/* Column 1 — Logo & Help */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="https://www.accaglobal.com/gb/en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/acca-logo02.png"
              alt="ACCA qualified accountants and financial professionals"
              width={200}
              height={200}
              className="w-28 h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            />
          </a>

          <h3 className="text-xl font-bold">We Can Help</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            At 1st Call UK Financial Services, your success is our priority and
            supporting your financial journey is at the heart of what we do.
            <br /><br />
            We provide clear, reliable, and expert accounting and financial
            advice. Whatever your tax, bookkeeping, payroll, or business
            accounting needs, we are here to help.
          </p>

          <a
            href="/services"
            className="mt-2 inline-block text-sm font-semibold underline hover:text-white transition"
          >
            View All Financial Services →
          </a>

          <p className="text-gray-400 text-xs mt-4">
            Website by –{" "}
            <a
              href="https://www.karoldigital.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Karol Digital
            </a>
          </p>
        </div>

        {/* Middle Section — Sister Companies + Advantages + Legal */}
        <div className="md:col-span-2 space-y-10">

          {/* Sister Companies — WITH LOGOS */}
          <div>
            <p className="text-gray-300 text-sm mb-4 text-center md:text-left">
              Visit our sister companies:
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* Immigration Services */}
              <a
                href="https://www.1stcalluk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 flex items-center justify-center w-[180px] h-[100px]"
              >
                <Image
                  src="/1st-calluk-immigration-logo.jpg"
                  alt="1st Call UK Immigration Services"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </a>

             {/* 1st Call UK Group */}
<a
  href="/1stcalluk-group"
  className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 flex items-center justify-center w-[180px] h-[100px]"
>
  <Image
    src="/1stCallUK_group_logo02.jpg"
    alt="1st Call UK Group"
    width={170} // Increased from 150
    height={85} // Increased from 60
    className="object-contain"
  />
</a>
</div>
</div>

          {/* Advantages + Legal */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Our Advantages */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Advantages</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  "Free initial financial consultation",
                  "Secure online and Microsoft Teams meetings available",
                  "Clients confidently refer us to friends and family",
                  "Transparent, affordable, and high-quality service",
                  "Family-owned and professionally run practice",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><a href="/legal/consumer-contracts-regulations-2013" className="hover:underline">Consumer Contracts Regulations 2013</a></li>
                <li><a href="/legal/disclaimer" className="hover:underline">Disclaimer</a></li>
                <li><a href="/legal/gdpr-data-privacy-notice" className="hover:underline">GDPR Data Privacy Notice</a></li>
                <li><a href="/legal/cookie-policy" className="hover:underline">Cookie Policy</a></li>
                <li><a href="/legal/terms-of-website-use" className="hover:underline">Terms of Website Use</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Column 4 — Contact + Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            📍 The Old Coach House, 25 Noel Street,<br />
            Forest Fields, Nottingham NG7 6AQ
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="mailto:info@1stcalluk.financial"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ✉ Email
            </a>
            <a
              href="tel:+441158453265"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ☎ Call
            </a>
          </div>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {/* Social icons unchanged */}
          </div>
        </div>

      </div>
    </footer>
  );
}
