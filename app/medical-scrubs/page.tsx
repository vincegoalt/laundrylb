import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Scrubs Laundry Service Long Beach | Healthcare Worker Cleaning",
  description:
    "Specialized scrubs laundry service near Long Beach Memorial Hospital. 10% healthcare worker discount. Same-day service available. Antimicrobial treatment options.",
};

export default function MedicalScrubsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80"
            alt="Healthcare worker in scrubs"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green/20 text-green-light px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🏥</span>
              Near Long Beach Memorial Hospital
            </div>
            <p className="text-terracotta font-medium mb-4">Uniformes Médicos</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Medical Scrubs Laundry
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Specialized cleaning for healthcare workers. We understand the demands
              of your job - let us handle the laundry so you can focus on what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Worker Discount Banner */}
      <section className="bg-gradient-to-r from-green to-green-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">
                {PRICING.scrubs.discount}% OFF for Healthcare Workers
              </h2>
              <p className="text-white/90">
                Show your hospital ID and save on every visit
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">${PRICING.scrubs.price}</p>
              <p className="text-white/90">per pound</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Workers Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Why Healthcare Workers Choose Us
            </h2>
            <p className="text-xl text-muted">
              Por qué los trabajadores de salud nos eligen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Steps from Memorial Hospital",
                titleEs: "Cerca del Hospital Memorial",
                description: "Located just minutes from Long Beach Memorial - perfect for shift workers",
              },
              {
                icon: "⏰",
                title: "Extended Hours",
                titleEs: "Horario Extendido",
                description: "Open 6AM-11PM to accommodate early and late shifts",
              },
              {
                icon: "⚡",
                title: "Same-Day Service",
                titleEs: "Servicio Mismo Día",
                description: "Drop off before 10AM, pick up by 5PM - ready for your next shift",
              },
              {
                icon: "🧬",
                title: "Antimicrobial Treatment",
                titleEs: "Tratamiento Antimicrobiano",
                description: "Optional deep sanitization for extra peace of mind",
              },
              {
                icon: "💰",
                title: "Special Pricing",
                titleEs: "Precios Especiales",
                description: `Just $${PRICING.scrubs.price}/lb with healthcare worker ID`,
              },
              {
                icon: "🗣️",
                title: "Bilingual Staff",
                titleEs: "Personal Bilingüe",
                description: "Spanish-speaking team ready to help",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-terracotta mb-3">{feature.titleEs}</p>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Healthcare */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&q=80"
                alt="Clean medical scrubs"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Services for Healthcare Professionals
              </h2>
              <p className="text-muted mb-8">
                Servicios para profesionales de la salud
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Scrubs Wash & Fold",
                    price: `$${PRICING.scrubs.price}/lb`,
                    description: "Professional cleaning for all scrub types",
                  },
                  {
                    title: "Antimicrobial Add-On",
                    price: "+$0.25/lb",
                    description: "Extra sanitization treatment",
                  },
                  {
                    title: "Lab Coat Cleaning",
                    price: "$5.00 each",
                    description: "White coat specialist cleaning",
                  },
                  {
                    title: "Same-Day Rush",
                    price: `$${PRICING.washFold.sameDay.price}/lb`,
                    description: "When you need it fast",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow"
                  >
                    <div>
                      <h3 className="font-semibold text-charcoal">{service.title}</h3>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                    <span className="text-xl font-bold text-terracotta whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 text-terracotta mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8">
            &ldquo;After a 12-hour shift, the last thing I want to worry about is laundry.
            The Laundry Co. is right by the hospital and they always have my scrubs
            ready when I need them.&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold">Maria G.</p>
            <p className="text-white/70">RN, Long Beach Memorial</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Healthcare Worker? Get Your Discount Today
          </h2>
          <p className="text-white/90 mb-6">
            Just show your hospital ID at drop-off
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Get Directions
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-charcoal text-white px-8 py-3 rounded-lg font-semibold hover:bg-charcoal-light transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
