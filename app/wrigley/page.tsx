import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laundromat Wrigley Long Beach | Coin Laundry 90806",
  description:
    "Laundromat serving Wrigley neighborhood in Long Beach CA. Family-friendly, bilingual staff. Self-service and wash & fold. Se habla español.",
};

export default function WrigleyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1648627667032-d02d79b28066?w=1920&q=80"
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
              1 mile away
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wrigley Neighborhood Laundromat
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Serving the historic Wrigley neighborhood with pride. Family-owned,
              family-friendly, and ready to help with all your laundry needs.
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

      {/* Community Focus */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Part of the Wrigley Community
              </h2>
              <p className="text-muted mb-6">
                The Wrigley neighborhood has a rich history and diverse community.
                We&apos;re proud to serve our neighbors with quality laundry services
                that fit your lifestyle and budget.
              </p>
              <ul className="space-y-4">
                {[
                  "Family-friendly environment",
                  "Bilingual Spanish/English staff",
                  "Competitive neighborhood pricing",
                  "Easy parking for quick visits",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?w=800&q=80"
                alt="Fresh laundry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Services for Wrigley Residents
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
            Visit Us from Wrigley
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
