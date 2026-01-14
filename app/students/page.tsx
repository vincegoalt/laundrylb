import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PRICING } from "@/lib/constants";
import FAQSection from "@/components/FAQSection";

const STUDENT_FAQS = [
  {
    question: "Do you offer student discounts?",
    answer: "While we don't have a formal student discount, our self-service prices are already budget-friendly starting at just $3.50 for a small washer. Nursing students can also take advantage of our healthcare worker discount on scrubs cleaning!",
  },
  {
    question: "Can I do laundry between classes?",
    answer: "Absolutely! A typical wash cycle takes about 30-40 minutes and drying takes another 30-45 minutes. Our extended hours (6AM-11PM) make it easy to fit laundry into your schedule. Many students drop off wash & fold and pick up later.",
  },
  {
    question: "Do you have WiFi for studying while I wait?",
    answer: "Yes! We offer free WiFi throughout our facility. Many students use their laundry time to study, catch up on coursework, or stream videos while they wait. We also have a comfortable, air-conditioned space to make waiting pleasant.",
  },
  {
    question: "Is it safe to leave my laundry unattended?",
    answer: "We have a friendly staff on duty during all business hours who keep an eye on things. However, we recommend staying nearby if possible, especially for the self-service option. For worry-free laundry, try our wash & fold service - drop off and we'll take care of everything!",
  },
  {
    question: "What's the cheapest way to do laundry here?",
    answer: "For the most budget-friendly option, use our self-service machines starting at $3.50 for small loads. Pro tip: bring your own detergent bought in bulk to save extra. If time is more valuable than money, our wash & fold at $1.65/lb lets you focus on studying.",
  },
];

export const metadata: Metadata = {
  title: "Student Laundry Service Long Beach | CSULB Laundromat",
  description:
    "Affordable laundry service for college students near CSULB and Long Beach nursing schools. Self-service and wash & fold. Student-friendly prices.",
};

export default function StudentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=1920&q=80"
            alt="Laundromat"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue/20 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🎓</span>
              Student Friendly
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Student Laundry Service
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Affordable laundry for students at CSULB and Long Beach nursing schools.
              We understand the student budget - clean clothes without breaking the bank.
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

      {/* Why Students Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Why Students Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "Budget Friendly",
                description: "Competitive prices that work with a student budget",
              },
              {
                icon: "📶",
                title: "Free WiFi",
                description: "Study or stream while your laundry runs",
              },
              {
                icon: "⏰",
                title: "Extended Hours",
                description: "Open late for those late-night study breaks",
              },
              {
                icon: "📍",
                title: "Convenient Location",
                description: "Easy to reach from campus",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-lg font-semibold text-charcoal mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Students */}
      <section className="py-16 bg-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl block mb-4">🩺</span>
          <h2 className="text-3xl font-bold mb-4">
            Nursing Students - We&apos;ve Got You Covered!
          </h2>
          <p className="text-white/90 mb-6">
            Special pricing on scrubs cleaning at ${PRICING.scrubs.price}/lb.
            Keep your clinical uniforms fresh and professional.
          </p>
          <Link href="/medical-scrubs" className="bg-white text-green px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors inline-block">
            Learn About Scrubs Service
          </Link>
        </div>
      </section>

      {/* Quick Pricing */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Student-Friendly Prices
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="divide-y divide-border">
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Self-Service Wash</p>
                    <p className="text-sm text-muted">Do it yourself</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    From ${PRICING.selfService.small.price}
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Wash & Fold</p>
                    <p className="text-sm text-muted">We do it for you</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    ${PRICING.washFold.regular.price}/lb
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Dryer</p>
                    <p className="text-sm text-muted">Per 8 minutes</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    ${PRICING.selfService.dryer.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-2">
              Student Laundry Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tip: "Bring your own detergent",
                description: "Save money by buying detergent in bulk and bringing it with you",
              },
              {
                tip: "Sort before you arrive",
                description: "Save time by sorting lights and darks before coming",
              },
              {
                tip: "Use our wash & fold",
                description: "Focus on studying - let us handle your laundry",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-terracotta font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{item.tip}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Student Laundry FAQ"
        faqs={STUDENT_FAQS}
        className="bg-cream-dark"
      />

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Us Near Campus
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
