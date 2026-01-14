import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES, NEIGHBORHOODS, PRICING } from "@/lib/constants";

// Washing Machine Icon Component
function WashingMachineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Machine body */}
      <rect
        x="15"
        y="10"
        width="70"
        height="80"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Control panel */}
      <rect x="15" y="10" width="70" height="20" rx="8" fill="currentColor" opacity="0.1" />
      <circle cx="30" cy="20" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="45" cy="20" r="4" fill="currentColor" opacity="0.5" />
      <rect x="55" y="17" width="20" height="6" rx="2" fill="currentColor" opacity="0.3" />
      {/* Door circle */}
      <circle cx="50" cy="58" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Inner drum */}
      <circle cx="50" cy="58" r="18" stroke="currentColor" strokeWidth="2" fill="none" className="animate-spin-slow origin-center" style={{ transformOrigin: '50px 58px' }} />
      {/* Water waves */}
      <path
        d="M35 58 Q42 52 50 58 Q58 64 65 58"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

// Service Icons
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    washer: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <circle cx="12" cy="13" r="5" strokeWidth="2" />
        <circle cx="12" cy="13" r="2" strokeWidth="2" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    fold: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h10M4 18h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 14l-3 3 3 3" />
      </svg>
    ),
    truck: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17h8M8 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 104 0 2 2 0 00-4 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      </svg>
    ),
    medical: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.5l3-3 3 3 6-6 3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 6.5h5v5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.washer}</>;
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580175486077-959357d7c72e?w=1920&q=80"
            alt="Modern laundromat interior"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-white">
              {/* Bilingual Badge */}
              <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up">
                <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                Se Habla Español
              </div>

              {/* Main Headline */}
              <div className="space-y-4 animate-fade-in-up animation-delay-100">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Your Neighborhood
                  <span className="block text-terracotta">Laundromat</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg text-white/80 max-w-xl animate-fade-in-up animation-delay-200">
                Modern machines, friendly bilingual staff, and convenient location
                near Long Beach Memorial Hospital. Serving Memorial Heights, Wrigley,
                California Heights & Signal Hill.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Us Today
                </Link>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-400">
                <div>
                  <p className="text-3xl font-bold text-white">6AM</p>
                  <p className="text-sm text-white/70">Early Open</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">11PM</p>
                  <p className="text-sm text-white/70">Late Close</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-terracotta">$1.65</p>
                  <p className="text-sm text-white/70">/lb Wash & Fold</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue/10 rounded-full blur-3xl" />

                {/* Main washing machine illustration */}
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-border">
                  <WashingMachineIcon className="w-full h-auto text-charcoal animate-float" />

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-green text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Open Now
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-terracotta text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Free WiFi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Worker Callout */}
      <section className="bg-gradient-to-r from-green to-green-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏥</span>
              <div>
                <p className="font-semibold text-lg">Healthcare Workers Get 10% Off!</p>
                <p className="text-white/90">Specialized scrubs cleaning near Long Beach Memorial Hospital</p>
              </div>
            </div>
            <Link
              href="/medical-scrubs"
              className="bg-white text-green px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              From self-service to full-service, we&apos;ve got your laundry needs covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-border card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose
                <span className="block text-terracotta">The Laundry Co.?</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                We&apos;re not just another laundromat. We&apos;re your neighbors,
                committed to making laundry day easier for Long Beach families.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🗣️",
                    title: "Bilingual Staff",
                    description: "Spanish and English speaking team ready to help",
                  },
                  {
                    icon: "🏥",
                    title: "Near the Hospital",
                    description: "Just minutes from Long Beach Memorial",
                  },
                  {
                    icon: "⏰",
                    title: "Extended Hours",
                    description: "Open 6AM-11PM for shift workers",
                  },
                  {
                    icon: "💰",
                    title: "Transparent Pricing",
                    description: "No hidden fees, competitive rates",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Preview */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Quick Pricing
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <p className="font-medium">Self-Service Wash</p>
                  <p className="text-2xl font-bold">${PRICING.selfService.small.price}+</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <p className="font-medium">Wash & Fold</p>
                  <p className="text-2xl font-bold">${PRICING.washFold.regular.price}/lb</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <p className="font-medium">Medical Scrubs</p>
                  <p className="text-2xl font-bold text-terracotta">${PRICING.scrubs.price}/lb</p>
                </div>
              </div>

              <Link
                href="/pricing"
                className="block w-full text-center mt-8 bg-terracotta text-white py-4 rounded-xl font-medium hover:bg-terracotta-dark transition-colors"
              >
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Serving Your Neighborhood
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Proudly serving Long Beach 90806 and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEIGHBORHOODS.map((area) => (
              <Link
                key={area.id}
                href={area.href}
                className="group bg-white rounded-2xl p-6 shadow-md border border-border hover:border-terracotta hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted">{area.distance}</span>
                </div>
                <h3 className="font-semibold text-lg text-charcoal group-hover:text-terracotta transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-muted mt-2">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <a
              href={`https://instagram.com/${BUSINESS.social?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal group-hover:text-terracotta transition-colors">
                  Follow Us on Instagram
                </h2>
                <p className="text-muted">@{BUSINESS.social?.instagram}</p>
              </div>
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1580175486077-959357d7c72e?w=400&q=80",
              "https://images.unsplash.com/photo-1648627667032-d02d79b28066?w=400&q=80",
              "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=400&q=80",
              "https://images.unsplash.com/photo-1668417863230-64f268d1d252?w=400&q=80",
              "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=400&q=80",
              "https://images.unsplash.com/photo-1469504512102-900f29606341?w=400&q=80",
            ].map((src, index) => (
              <a
                key={index}
                href={`https://instagram.com/${BUSINESS.social?.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://instagram.com/${BUSINESS.social?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold transition-colors"
            >
              View More on Instagram
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-terracotta to-terracotta-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Fresh, Clean Laundry?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Stop by today or give us a call. We&apos;re here to make laundry day
            the easiest part of your week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-terracotta px-8 py-4 rounded-xl font-semibold hover:bg-cream transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Get Directions
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-charcoal text-white px-8 py-4 rounded-xl font-semibold hover:bg-charcoal-light transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
