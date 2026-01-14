"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="The Laundry Co."
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal/80 hover:text-terracotta transition-colors font-medium link-underline"
              >
                {isSpanish ? link.labelEs : link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language toggle, Phone, CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setIsSpanish(!isSpanish)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-terracotta transition-colors text-sm font-medium"
              aria-label="Toggle language"
            >
              <span className={!isSpanish ? "text-terracotta" : "text-muted"}>
                EN
              </span>
              <span className="text-muted">/</span>
              <span className={isSpanish ? "text-terracotta" : "text-muted"}>
                ES
              </span>
            </button>

            {/* Phone */}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-charcoal hover:text-terracotta transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">{BUSINESS.phone}</span>
            </a>

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary">
              {isSpanish ? "Contáctanos" : "Contact Us"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-charcoal hover:text-terracotta transition-colors font-medium py-2"
                >
                  {isSpanish ? link.labelEs : link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border flex flex-col gap-4">
                {/* Language Toggle - Mobile */}
                <button
                  onClick={() => setIsSpanish(!isSpanish)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <span
                    className={!isSpanish ? "text-terracotta" : "text-muted"}
                  >
                    English
                  </span>
                  <span className="text-muted">|</span>
                  <span className={isSpanish ? "text-terracotta" : "text-muted"}>
                    Español
                  </span>
                </button>

                {/* Phone - Mobile */}
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 text-terracotta font-semibold text-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
