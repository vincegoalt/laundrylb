import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | The Laundry Co. Long Beach",
  description:
    "Frequently asked questions about The Laundry Co. laundromat in Long Beach CA 90806. Hours, pricing, services, and more.",
};

const faqs = [
  {
    question: "What are your hours?",
    questionEs: "¿Cuáles son sus horarios?",
    answer: `We're open 7 days a week, ${BUSINESS.hours.weekday}. Last wash is 1 hour before closing.`,
  },
  {
    question: "Do you offer wash & fold service?",
    questionEs: "¿Ofrecen servicio de lavado y doblado?",
    answer: `Yes! Our wash & fold service starts at $${PRICING.washFold.regular.price}/lb with a ${PRICING.washFold.minimum} lb minimum. Same-day service is available for $${PRICING.washFold.sameDay.price}/lb if you drop off by 10 AM.`,
  },
  {
    question: "Do you have pickup and delivery?",
    questionEs: "¿Tienen recogida y entrega?",
    answer: `Yes! We offer pickup and delivery in Long Beach 90806 and surrounding areas. Orders over ${PRICING.pickupDelivery.freeMinimum} lbs get free delivery. Call us to schedule.`,
  },
  {
    question: "What payment methods do you accept?",
    questionEs: "¿Qué métodos de pago aceptan?",
    answer: "We accept cash, credit/debit cards, and mobile payments. Our machines accept coins and cards.",
  },
  {
    question: "Do you offer any discounts?",
    questionEs: "¿Ofrecen descuentos?",
    answer: `Yes! Healthcare workers with valid ID receive ${PRICING.scrubs.discount}% off our wash & fold service. We also have special pricing for medical scrubs at $${PRICING.scrubs.price}/lb.`,
  },
  {
    question: "Do you have Spanish-speaking staff?",
    questionEs: "¿Tienen personal que habla español?",
    answer: "¡Sí! We have bilingual staff who speak both English and Spanish. We're proud to serve our diverse community.",
  },
  {
    question: "Can I wash large items like comforters?",
    questionEs: "¿Puedo lavar artículos grandes como edredones?",
    answer: "Absolutely! We have large-capacity washers that can handle comforters, blankets, and bedding. Prices start at $7.00 for our largest machines.",
  },
  {
    question: "Is there parking available?",
    questionEs: "¿Hay estacionamiento disponible?",
    answer: "Yes, we have free parking right outside our location. Easy in and out for your convenience.",
  },
  {
    question: "Do you provide laundry supplies?",
    questionEs: "¿Proporcionan suministros de lavandería?",
    answer: "Yes! We sell detergent, fabric softener, dryer sheets, and laundry bags on-site. Premium detergent is included with all wash & fold orders.",
  },
  {
    question: "How does same-day service work?",
    questionEs: "¿Cómo funciona el servicio del mismo día?",
    answer: "Drop off your laundry before 10 AM and it will be ready by 5 PM the same day. Same-day service is $2.00/lb.",
  },
  {
    question: "Do you clean medical scrubs?",
    questionEs: "¿Limpian uniformes médicos?",
    answer: `Yes! We specialize in medical scrubs cleaning with optional antimicrobial treatment. Healthcare workers pay just $${PRICING.scrubs.price}/lb. We're located near Long Beach Memorial Hospital for your convenience.`,
  },
  {
    question: "What if I have a complaint or concern?",
    questionEs: "¿Qué pasa si tengo una queja o inquietud?",
    answer: `Please call us at ${BUSINESS.phone} or email ${BUSINESS.email}. We take customer satisfaction seriously and will work to resolve any issues quickly.`,
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-terracotta font-medium mb-4">Preguntas Frecuentes</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">FAQ</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about The Laundry Co.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-1">
                  {faq.question}
                </h3>
                <p className="text-sm text-terracotta mb-4">{faq.questionEs}</p>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-white/90 mb-6">
            We&apos;re here to help! Call or visit us anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors">
              Contact Us
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
