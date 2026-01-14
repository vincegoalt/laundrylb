import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laundromat Prices Long Beach | Wash & Fold Pricing 90806",
  description:
    "Transparent laundry pricing in Long Beach CA. Self-service from $3.50, wash & fold $1.65/lb. No hidden fees. Medical scrubs special pricing.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            No hidden fees, no surprises. Just clean laundry at fair prices.
          </p>
        </div>
      </section>

      {/* Self-Service Pricing */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Self-Service
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-charcoal text-white p-6">
                <h3 className="text-xl font-semibold">Washers</h3>
              </div>
              <div className="divide-y divide-border">
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Small Load</p>
                    <p className="text-sm text-muted">Everyday items</p>
                  </div>
                  <span className="text-3xl font-bold text-terracotta">
                    ${PRICING.selfService.small.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Medium Load</p>
                    <p className="text-sm text-muted">Family laundry</p>
                  </div>
                  <span className="text-3xl font-bold text-terracotta">
                    ${PRICING.selfService.medium.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Large Load</p>
                    <p className="text-sm text-muted">Comforters & bedding</p>
                  </div>
                  <span className="text-3xl font-bold text-terracotta">
                    ${PRICING.selfService.large.price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-cream-dark p-6">
                <h3 className="text-xl font-semibold text-charcoal">Dryers</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-charcoal">Per 8 Minutes</p>
                  </div>
                  <span className="text-3xl font-bold text-terracotta">
                    ${PRICING.selfService.dryer.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wash & Fold Pricing */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Wash & Fold Service
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Regular Service
                </h3>
                <p className="text-muted mb-6">Next-day turnaround</p>
                <div className="text-center py-8">
                  <span className="text-6xl font-bold text-charcoal">
                    ${PRICING.washFold.regular.price}
                  </span>
                  <span className="text-2xl text-muted">/lb</span>
                </div>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium detergent included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fabric softener included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Carefully folded
                  </li>
                </ul>
              </div>

              <div className="bg-terracotta text-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-white/80 mb-6">Drop off by 10 AM, ready by 5 PM</p>
                <div className="text-center py-8">
                  <span className="text-6xl font-bold">
                    ${PRICING.washFold.sameDay.price}
                  </span>
                  <span className="text-2xl text-white/80">/lb</span>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Drop off by 10 AM
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ready by 5 PM
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All regular benefits
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 text-center">
              <p className="text-muted">
                <span className="font-semibold text-charcoal">Minimum order:</span>{" "}
                {PRICING.washFold.minimum} lbs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Pickup & Delivery
              </h2>
            </div>

            <div className="bg-gradient-to-br from-green to-green-light text-white rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                FREE Pickup & Delivery
              </h3>
              <p className="text-6xl font-bold mb-2">
                {PRICING.pickupDelivery.freeMinimum}+ lbs
              </p>
              <p className="text-white/90 mb-6">
                Orders over {PRICING.pickupDelivery.freeMinimum} lbs get free pickup and delivery
              </p>
              <div className="bg-white/20 rounded-xl p-4 inline-block">
                <p className="text-sm">
                  Under {PRICING.pickupDelivery.freeMinimum} lbs: +${PRICING.pickupDelivery.fee}/lb delivery fee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Scrubs */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-4xl mb-4 block">🏥</span>
            <h2 className="text-3xl font-bold mb-8">Healthcare Worker Special</h2>

            <div className="bg-white/10 rounded-3xl p-8 md:p-12">
              <div className="text-6xl font-bold text-terracotta mb-4">
                ${PRICING.scrubs.price}/lb
              </div>
              <p className="text-xl text-white/90 mb-6">
                Medical scrubs cleaning with {PRICING.scrubs.discount}% off
              </p>
              <p className="text-white/70">
                Show your hospital ID at drop-off to receive your discount
              </p>
            </div>

            <Link
              href="/medical-scrubs"
              className="mt-8 inline-block bg-terracotta text-white px-8 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition-colors"
            >
              Learn More About Scrubs Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6">
            Visit us at {BUSINESS.address}
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
