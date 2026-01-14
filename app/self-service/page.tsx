import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Self-Service Laundry Long Beach | Coin Laundry 90806",
  description:
    "Self-service laundry in Long Beach CA 90806. Modern washers & dryers, free WiFi, air conditioning. Open 6AM-11PM. Near Long Beach Memorial Hospital.",
};

export default function SelfServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580175486077-959357d7c72e?w=1920&q=80"
            alt="Modern laundromat interior"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Self-Service Laundry
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Modern machines, clean facility, and everything you need for a quick,
              easy laundry experience. Do it yourself, your way.
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

      {/* Features Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Why Choose Our Self-Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧺",
                title: "Large Capacity Machines",
                description: "Multiple washer sizes from small loads to king-size comforters",
              },
              {
                icon: "📶",
                title: "Free WiFi",
                description: "Stay connected while your laundry runs",
              },
              {
                icon: "❄️",
                title: "Air Conditioned",
                description: "Comfortable environment year-round",
              },
              {
                icon: "💳",
                title: "Card Payments Only",
                description: "Easy card payments - credit, debit, or mobile pay",
              },
              {
                icon: "🧴",
                title: "Supplies Available",
                description: "Detergent, fabric softener, and dryer sheets on-site",
              },
              {
                icon: "🅿️",
                title: "Free Parking",
                description: "Convenient parking right outside",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted mb-8">
                No surprises. Just clean laundry at fair prices.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-charcoal">Small Washer</p>
                    <p className="text-sm text-muted">Perfect for everyday loads</p>
                  </div>
                  <p className="text-2xl font-bold text-terracotta">
                    ${PRICING.selfService.small.price}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-charcoal">Medium Washer</p>
                    <p className="text-sm text-muted">Great for family loads</p>
                  </div>
                  <p className="text-2xl font-bold text-terracotta">
                    ${PRICING.selfService.medium.price}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-charcoal">Large Washer</p>
                    <p className="text-sm text-muted">Comforters & bedding</p>
                  </div>
                  <p className="text-2xl font-bold text-terracotta">
                    ${PRICING.selfService.large.price}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <p className="font-semibold text-charcoal">Dryer</p>
                    <p className="text-sm text-muted">Per 8 minutes</p>
                  </div>
                  <p className="text-2xl font-bold text-terracotta">
                    ${PRICING.selfService.dryer.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1648627667032-d02d79b28066?w=800&q=80"
                alt="Washing machines in laundromat"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Do Your Laundry?</h2>
          <p className="text-white/90 mb-6">
            Visit us today at {BUSINESS.address}
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
