import Link from "next/link";
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
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-cream via-cream to-cream-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Bilingual Badge */}
              <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up">
                <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                Se Habla Español
              </div>

              {/* Main Headline */}
              <div className="space-y-4 animate-fade-in-up animation-delay-100">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
                  Your Neighborhood
                  <span className="block text-terracotta">Laundromat</span>
                </h1>
                <p className="text-xl md:text-2xl text-charcoal/60 font-medium">
                  Tu Lavandería del Vecindario
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted max-w-xl animate-fade-in-up animation-delay-200">
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
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-outline inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in-up animation-delay-400">
                <div>
                  <p className="text-3xl font-bold text-charcoal">6AM</p>
                  <p className="text-sm text-muted">Early Open</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-charcoal">11PM</p>
                  <p className="text-sm text-muted">Late Close</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-terracotta">$1.65</p>
                  <p className="text-sm text-muted">/lb Wash & Fold</p>
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
              <span className="block text-terracotta mt-2">Nuestros Servicios</span>
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
                <p className="text-sm text-terracotta mb-2">{service.nameEs}</p>
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
                    titleEs: "Personal Bilingüe",
                    description: "Spanish and English speaking team ready to help",
                  },
                  {
                    icon: "🏥",
                    title: "Near the Hospital",
                    titleEs: "Cerca del Hospital",
                    description: "Just minutes from Long Beach Memorial",
                  },
                  {
                    icon: "⏰",
                    title: "Extended Hours",
                    titleEs: "Horario Extendido",
                    description: "Open 6AM-11PM for shift workers",
                  },
                  {
                    icon: "💰",
                    title: "Transparent Pricing",
                    titleEs: "Precios Transparentes",
                    description: "No hidden fees, competitive rates",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                        <span className="text-terracotta text-sm ml-2">({item.titleEs})</span>
                      </h3>
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
                <span className="block text-terracotta text-lg font-normal">Precios Rápidos</span>
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <div>
                    <p className="font-medium">Self-Service Wash</p>
                    <p className="text-sm text-white/60">Lavado Autoservicio</p>
                  </div>
                  <p className="text-2xl font-bold">${PRICING.selfService.small.price}+</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <div>
                    <p className="font-medium">Wash & Fold</p>
                    <p className="text-sm text-white/60">Lavado y Doblado</p>
                  </div>
                  <p className="text-2xl font-bold">${PRICING.washFold.regular.price}/lb</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <div>
                    <p className="font-medium">Medical Scrubs</p>
                    <p className="text-sm text-white/60">Uniformes Médicos</p>
                  </div>
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
              <span className="block text-terracotta mt-2">Sirviendo a Tu Vecindario</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-terracotta to-terracotta-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Fresh, Clean Laundry?
          </h2>
          <p className="text-xl text-white/90 mb-4">
            ¿Listo para Ropa Limpia y Fresca?
          </p>
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
