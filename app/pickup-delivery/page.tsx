import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PRICING, NEIGHBORHOODS } from "@/lib/constants";
import FAQSection from "@/components/FAQSection";

const PICKUP_DELIVERY_FAQS = [
  {
    question: "What areas do you deliver to?",
    answer: "We deliver to Long Beach 90806 and surrounding neighborhoods including Memorial Heights, Wrigley, California Heights, and Signal Hill. Call us to confirm if we deliver to your address.",
  },
  {
    question: "Is there a delivery fee?",
    answer: "Orders over 30 lbs get FREE pickup and delivery! For smaller orders, there's a $0.25/lb delivery fee added to the regular wash & fold price.",
  },
  {
    question: "How do I schedule a pickup?",
    answer: "Simply call or text us at (562) 269-0542 to schedule your pickup. We'll arrange a time that works for you and give you instructions for leaving your laundry bag.",
  },
  {
    question: "What's the turnaround time for pickup orders?",
    answer: "Standard turnaround is 24-48 hours from pickup to delivery. Need it faster? Ask about our same-day service for orders picked up before 10 AM.",
  },
  {
    question: "How do I pay for pickup and delivery orders?",
    answer: "We accept all major credit cards, debit cards, and mobile payments. We'll weigh your laundry and charge your card on file once it's processed.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Laundry Pickup and Delivery",
  name: "Laundry Pickup & Delivery",
  description: "Free pickup and delivery for orders over 30 lbs. We come to you, wash, dry, fold, and deliver fresh laundry back to your door. Serving Long Beach 90806 and surrounding neighborhoods.",
  provider: {
    "@type": "Laundromat",
    name: "The Laundry Co.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "565 E Willow St",
      addressLocality: "Long Beach",
      addressRegion: "CA",
      postalCode: "90806",
      addressCountry: "US"
    }
  },
  areaServed: [
    {
      "@type": "City",
      name: "Long Beach",
      "@id": "https://www.wikidata.org/wiki/Q16739"
    },
    {
      "@type": "Neighborhood",
      name: "Memorial Heights"
    },
    {
      "@type": "Neighborhood",
      name: "Wrigley"
    },
    {
      "@type": "Neighborhood",
      name: "California Heights"
    },
    {
      "@type": "City",
      name: "Signal Hill"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pickup & Delivery Pricing",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wash & Fold with Delivery (under 30 lbs)"
        },
        price: "1.90",
        priceCurrency: "USD",
        unitText: "per pound"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Delivery (30+ lbs)"
        },
        price: "1.65",
        priceCurrency: "USD",
        unitText: "per pound"
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Laundry Pickup & Delivery Long Beach | Free Pickup 90806",
  description:
    "Free laundry pickup and delivery in Long Beach CA 90806. Serving Memorial Heights, Wrigley, California Heights & Signal Hill. Schedule online or call.",
};

export default function PickupDeliveryPage() {
  return (
    <div>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=1920&q=80"
            alt="Delivery service"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pickup & Delivery
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We come to you! Schedule a pickup and we&apos;ll handle everything.
              Fresh, clean laundry delivered back to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                Schedule Pickup
              </a>
              <Link href="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Areas We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {NEIGHBORHOODS.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-charcoal">{area.name}</h3>
                <p className="text-sm text-muted mt-1">{area.distance} from store</p>
              </div>
            ))}
          </div>

          <div className="bg-green/10 rounded-2xl p-8 text-center">
            <p className="text-green font-semibold text-lg">
              🚚 FREE Pickup & Delivery on orders over {PRICING.pickupDelivery.freeMinimum} lbs!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              How Pickup & Delivery Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: "📞",
                title: "Schedule",
                description: "Call or text us to schedule your pickup time",
              },
              {
                step: "2",
                icon: "🚪",
                title: "We Pickup",
                description: "Leave your bag outside - we'll grab it",
              },
              {
                step: "3",
                icon: "✨",
                title: "We Clean",
                description: "Professional wash, dry, and fold service",
              },
              {
                step: "4",
                icon: "🏠",
                title: "We Deliver",
                description: "Fresh laundry delivered back to your door",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Simple Pricing
              </h2>
              <p className="text-xl text-muted mb-8">
                Transparent pricing with no hidden fees
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">Wash & Fold + Delivery</h3>
                      <p className="text-sm text-muted">Under {PRICING.pickupDelivery.freeMinimum} lbs</p>
                    </div>
                    <span className="text-2xl font-bold text-charcoal">
                      ${PRICING.washFold.regular.price + PRICING.pickupDelivery.fee}/lb
                    </span>
                  </div>
                </div>

                <div className="bg-terracotta/10 border-2 border-terracotta rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-terracotta">FREE Delivery!</h3>
                      <p className="text-sm text-muted">{PRICING.pickupDelivery.freeMinimum}+ lbs</p>
                    </div>
                    <span className="text-2xl font-bold text-terracotta">
                      ${PRICING.washFold.regular.price}/lb
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?w=800&q=80"
                alt="Laundry bags ready for pickup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Pickup & Delivery FAQ"
        faqs={PICKUP_DELIVERY_FAQS}
        className="bg-cream-dark"
      />

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Pickup Today</h2>
          <p className="text-white/90 mb-6">
            Call or text us to get started
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="bg-white text-terracotta px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors inline-flex items-center gap-2"
          >
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
