import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wash and Fold Service Long Beach | Drop-Off Laundry 90806",
  description:
    "Professional wash and fold laundry service in Long Beach CA. $1.65/lb. Same-day available. Drop off your laundry, we handle the rest. Se habla español.",
};

export default function WashAndFoldPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1920&q=80"
            alt="Folded laundry"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-terracotta font-medium mb-4">Lavado y Doblado</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wash & Fold Service
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Drop off your laundry and let us handle the rest. Professional washing,
              drying, and folding - ready when you need it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                Call {BUSINESS.phone}
              </a>
              <Link href="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted">
              Cómo Funciona - Simple as 1, 2, 3
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Drop Off",
                titleEs: "Deja Tu Ropa",
                description: "Bring your laundry to us anytime during business hours",
                icon: "📦",
              },
              {
                step: "2",
                title: "We Clean",
                titleEs: "Nosotros Lavamos",
                description: "We wash, dry, and carefully fold your items",
                icon: "✨",
              },
              {
                step: "3",
                title: "Pick Up",
                titleEs: "Recógela",
                description: "Your fresh, clean laundry is ready - often same day!",
                icon: "🎉",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-terracotta text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-terracotta mb-2">{item.titleEs}</p>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80"
                alt="Clean folded towels"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Affordable Pricing
              </h2>
              <p className="text-xl text-muted mb-8">
                Precios accesibles para toda la familia
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Regular Service</h3>
                    <span className="text-3xl font-bold text-terracotta">
                      ${PRICING.washFold.regular.price}/lb
                    </span>
                  </div>
                  <p className="text-muted">
                    Next-day turnaround. Perfect for weekly laundry.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-terracotta">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Same-Day Service</h3>
                      <span className="text-sm text-terracotta">Servicio del mismo día</span>
                    </div>
                    <span className="text-3xl font-bold text-terracotta">
                      ${PRICING.washFold.sameDay.price}/lb
                    </span>
                  </div>
                  <p className="text-muted">
                    Drop off by 10 AM, ready by 5 PM. When you need it fast.
                  </p>
                </div>

                <div className="bg-charcoal text-white rounded-2xl p-6">
                  <p className="text-sm text-white/70 mb-2">Minimum order</p>
                  <p className="text-xl font-semibold">{PRICING.washFold.minimum} lbs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              What&apos;s Included
            </h2>
            <p className="text-xl text-muted">Qué está incluido</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧼", title: "Premium Detergent", titleEs: "Detergente Premium" },
              { icon: "🌸", title: "Fabric Softener", titleEs: "Suavizante" },
              { icon: "👔", title: "Careful Folding", titleEs: "Doblado Cuidadoso" },
              { icon: "🛍️", title: "Bagged & Ready", titleEs: "Embolsado y Listo" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="text-sm text-terracotta">{item.titleEs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let Us Handle Your Laundry</h2>
          <p className="text-white/90 mb-6">
            Drop off today and enjoy fresh, clean clothes tomorrow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
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
