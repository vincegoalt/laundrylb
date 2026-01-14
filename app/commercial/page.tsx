import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Laundry Service Long Beach | Business Laundry 90806",
  description:
    "Commercial laundry service in Long Beach CA. Airbnb, hotels, restaurants, gyms. Reliable business laundry with pickup & delivery available.",
};

export default function CommercialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1920&q=80"
            alt="Commercial laundry"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-terracotta font-medium mb-4">Servicio Comercial</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Commercial Laundry Service
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Reliable laundry solutions for your business. From Airbnb rentals
              to restaurants, we handle your commercial laundry needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted">Industrias que servimos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Airbnb & Short-Term Rentals",
                titleEs: "Airbnb y Alquileres",
                description: "Quick turnaround for sheets, towels, and linens between guests",
              },
              {
                icon: "🏨",
                title: "Hotels & Motels",
                titleEs: "Hoteles y Moteles",
                description: "Reliable linen service for hospitality businesses",
              },
              {
                icon: "🍽️",
                title: "Restaurants & Cafes",
                titleEs: "Restaurantes y Cafés",
                description: "Tablecloths, napkins, kitchen towels, and uniforms",
              },
              {
                icon: "💪",
                title: "Gyms & Fitness Centers",
                titleEs: "Gimnasios",
                description: "Towels and workout gear for your members",
              },
              {
                icon: "💈",
                title: "Salons & Spas",
                titleEs: "Salones y Spas",
                description: "Towels, capes, and linens for beauty businesses",
              },
              {
                icon: "🏥",
                title: "Medical Offices",
                titleEs: "Consultorios Médicos",
                description: "Scrubs, lab coats, and medical linens",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-1">{item.title}</h3>
                <p className="text-sm text-terracotta mb-3">{item.titleEs}</p>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why Choose Us for Your Business?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Reliable Turnaround",
                    description: "Consistent service you can count on, every time",
                  },
                  {
                    title: "Competitive Pricing",
                    description: "Volume discounts for regular business accounts",
                  },
                  {
                    title: "Pickup & Delivery",
                    description: "We come to you - save time and focus on your business",
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Work with your schedule, not against it",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80"
                alt="Clean linens"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Discuss Your Business Needs
          </h2>
          <p className="text-white/90 mb-6">
            Call us for a custom quote tailored to your business
          </p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-white text-terracotta px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
