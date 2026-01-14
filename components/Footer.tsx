import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="The Laundry Co."
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/70 mb-4">
              {BUSINESS.tagline}
              <br />
              <span className="text-terracotta">{BUSINESS.taglineEs}</span>
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{BUSINESS.address}</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-terracotta transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/commercial"
                  className="text-white/70 hover:text-terracotta transition-colors"
                >
                  Commercial Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/students"
                  className="text-white/70 hover:text-terracotta transition-colors"
                >
                  Student Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Areas We Serve</h3>
            <ul className="space-y-3">
              {NEIGHBORHOODS.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.href}
                    className="text-white/70 hover:text-terracotta transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/es"
                  className="text-terracotta hover:text-terracotta/80 transition-colors font-medium"
                >
                  Página en Español
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-3 text-white/70 hover:text-terracotta transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/30 transition-colors">
                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block font-medium text-white">{BUSINESS.phone}</span>
                    <span className="text-sm">Call or Text</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-terracotta transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/30 transition-colors">
                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block font-medium text-white">{BUSINESS.email}</span>
                    <span className="text-sm">Email Us</span>
                  </div>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-3 text-white/70">
                  <span className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block font-medium text-white">Open Daily</span>
                    <span className="text-sm">{BUSINESS.hours.weekday}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-white/50 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
