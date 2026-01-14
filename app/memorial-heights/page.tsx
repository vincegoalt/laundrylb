import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laundromat Memorial Heights Long Beach | Near Memorial Hospital",
  description:
    "Laundromat in Memorial Heights Long Beach 90806. Just minutes from Long Beach Memorial Hospital. Self-service, wash & fold, medical scrubs cleaning.",
};

export default function MemorialHeightsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1638949493140-edb10b7be2f3?w=1920&q=80"
            alt="Laundromat"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              0.5 miles away
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Memorial Heights Laundromat
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Your neighborhood laundromat just steps from Long Beach Memorial Hospital.
              Perfect for residents, hospital workers, and families in Memorial Heights.
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

      {/* Why Memorial Heights Residents Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Why Memorial Heights Residents Choose Us
            </h2>
            <p className="text-muted">Serving our neighbors with pride</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "Near the Hospital",
                description: "Just minutes from Long Beach Memorial - perfect for healthcare workers on break or after shifts",
              },
              {
                icon: "🗣️",
                title: "Bilingual Service",
                description: "Spanish and English speaking staff to serve our diverse community",
              },
              {
                icon: "⏰",
                title: "Convenient Hours",
                description: "Open 6AM-11PM daily - perfect for early risers and night owls",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Services Available for Memorial Heights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-charcoal mb-2">{service.name}</h3>
                <p className="text-sm text-muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Your Memorial Heights Laundromat
          </h2>
          <p className="text-white/90 mb-6">{BUSINESS.address}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors">
              Get Directions
            </Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-charcoal text-white px-8 py-3 rounded-lg font-semibold hover:bg-charcoal-light transition-colors">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
