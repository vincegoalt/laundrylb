"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";

export default function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname === "/es";

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo transparent.png"
              alt="The Laundry Co."
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/70 mb-4">
              {isSpanish ? BUSINESS.taglineEs : BUSINESS.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-4">
              <a
                href={`https://instagram.com/${BUSINESS.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors group"
                aria-label={isSpanish ? "Síguenos en Instagram" : "Follow us on Instagram"}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
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
            <h3 className="font-semibold text-lg mb-6">
              {isSpanish ? "Servicios" : "Services"}
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-terracotta transition-colors"
                  >
                    {isSpanish ? service.nameEs : service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/commercial"
                  className="text-white/70 hover:text-terracotta transition-colors"
                >
                  {isSpanish ? "Lavandería Comercial" : "Commercial Laundry"}
                </Link>
              </li>
              <li>
                <Link
                  href="/students"
                  className="text-white/70 hover:text-terracotta transition-colors"
                >
                  {isSpanish ? "Servicios Estudiantiles" : "Student Services"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {isSpanish ? "Áreas que Servimos" : "Areas We Serve"}
            </h3>
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
                  href={isSpanish ? "/" : "/es"}
                  className="text-terracotta hover:text-terracotta/80 transition-colors font-medium"
                >
                  {isSpanish ? "English" : "En Español"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {isSpanish ? "Contáctenos" : "Contact Us"}
            </h3>
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
                    <span className="text-sm">{isSpanish ? "Llámanos o Texteanos" : "Call or Text"}</span>
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
                    <span className="text-sm">{isSpanish ? "Escríbenos" : "Email Us"}</span>
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
                    <span className="block font-medium text-white">{isSpanish ? "Abierto Todos los Días" : "Open Daily"}</span>
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
              &copy; {new Date().getFullYear()} {BUSINESS.name}. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-white/50 hover:text-white transition-colors">
                {isSpanish ? "Nosotros" : "About"}
              </Link>
              <Link href="/faq" className="text-white/50 hover:text-white transition-colors">
                {isSpanish ? "Preguntas" : "FAQ"}
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white transition-colors">
                {isSpanish ? "Contacto" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
