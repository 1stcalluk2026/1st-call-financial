"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) return null;

  const services = [
    { href: "/services/audit-and-assurance", label: "Audit & Assurance" },
    { href: "/services/business-startup", label: "Business Startup" },
    { href: "/services/hmrc-investigation", label: "HMRC Investigation" },
    { href: "/services/inheritance-tax-planning", label: "Inheritance Tax Planning" },
    { href: "/services/lifestyle-services", label: "Lifestyle Services" },
    { href: "/services/payroll", label: "Payroll" },
  ];

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="text-white shadow-lg relative z-50">

   {/* GROUP BAR */}
<div className="bg-[#233a86]">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-end">
    <Link
      href="https://1st-call-uk-group.vercel.app/"
      className="inline-flex items-center rounded-full bg-white text-[#233a86] border border-white/30 px-4 py-1.5 text-xs font-medium shadow-sm hover:bg-white/90 transition-all duration-200"
    >
      1st Call UK Group
    </Link>
  </div>
</div>



      {/* MAIN HEADER */}
      <div className="bg-[#2d459c]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">

          {/* LOGO + CONTACT */}
          <div className="flex flex-col items-start gap-3 pl-4 md:pl-6">
            <Link href="/">
              <div className="w-[260px] h-[100px] relative bg-white rounded-xl shadow-md border border-white/40 overflow-hidden">
                <Image
                  src="/1st-call-financial-services.jpg"
                  alt="1st Call UK Financial Services Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* DESKTOP CONTACT BUTTONS */}
            <div className="hidden md:flex gap-4 w-[260px] justify-center">
              <a
                href="tel:+441158453265"
                className="bg-white text-[#2d459c] font-semibold py-2.5 w-1/2 rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                📞 Call Us
              </a>
              <a
                href="mailto:info@1stcalluk.financial"
                className="bg-white text-[#2d459c] font-semibold py-2.5 w-1/2 rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                ✉ Email Us
              </a>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
            <NavLink href="/" label="Home" />
            <NavLink href="/about-us" label="About" />

            {/* SERVICES DROPDOWN */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 transition ${
                  isServicesActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`}
              >
                Services <span className="text-sm">▾</span>
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 mt-3 bg-white text-[#2d459c] rounded-xl shadow-xl w-64 overflow-hidden"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map(service => {
                    const isActive = pathname === service.href;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-5 py-3 text-sm transition ${
                          isActive
                            ? "bg-yellow-100 font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {service.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink href="/team" label="Our Team" />
            <NavLink href="/document-management" label="DMS" />
            <Link href="/financial-blog" className="hover:text-yellow-300 transition">Blog</Link>
            <NavLink href="/latest-news" label="Media" />
            <NavLink href="/contact" label="Contact" />
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#2d459c] px-6 py-6 space-y-4 text-base">
          <MobileLink href="/" label="Home" close={() => setMenuOpen(false)} />
          <MobileLink href="/about-us" label="About" close={() => setMenuOpen(false)} />

          {/* MOBILE SERVICES ACCORDION */}
          <div className="border border-white/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileServicesOpen(v => !v)}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold text-yellow-300 bg-white/10"
            >
              <span>Services</span>
              <span className="text-sm">
                {mobileServicesOpen ? "▲" : "▼"}
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="bg-white/5 px-2 py-2 space-y-1">
                {services.map(service => (
                  <MobileLink
                    key={service.href}
                    href={service.href}
                    label={service.label}
                    close={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <MobileLink href="/team" label="Our Team" close={() => setMenuOpen(false)} />
          <MobileLink href="/document-management" label="DMS" close={() => setMenuOpen(false)} />
          <MobileLink href="/financial-blog" label="Blog" close={() => setMenuOpen(false)} />
          <MobileLink href="/latest-news" label="Media" close={() => setMenuOpen(false)} />
          <MobileLink href="/contact" label="Contact" close={() => setMenuOpen(false)} />

          {/* MOBILE CONTACT BUTTONS */}
          <div className="flex gap-3 pt-4">
            <a
              href="tel:+441158453325"
              className="bg-white text-[#2d459c] px-4 py-2 rounded-lg"
            >
              📞 Call
            </a>
            <a
              href="mailto:info@1stcalluk.financial"
              className="bg-white text-[#2d459c] px-4 py-2 rounded-lg"
            >
              ✉ Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ===== Helpers ===== */

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition font-medium ${
        isActive ? "text-yellow-300" : "hover:text-yellow-300"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={close}
      className={`block px-4 py-2 rounded-md text-sm transition ${
        isActive
          ? "bg-white text-[#2d459c] font-semibold"
          : "text-white hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );
}
