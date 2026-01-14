import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About The Laundry Co. | Long Beach Laundromat",
  description:
    "Learn about The Laundry Co., your neighborhood laundromat in Long Beach CA 90806. Family-owned, bilingual service, serving the community.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your neighborhood laundromat, serving Long Beach with pride.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Your Neighborhood Laundromat
              </h2>
              <p className="text-muted mb-6">
                The Laundry Co. was founded with a simple mission: to provide
                the Long Beach community with a clean, friendly, and convenient
                place to do laundry. We understand that laundry day can be a chore,
                so we&apos;ve created a space where you can get in, get it done, and
                get on with your day.
              </p>
              <p className="text-muted mb-6">
                Located near Long Beach Memorial Hospital, we proudly serve
                Memorial Heights, Wrigley, California Heights, and Signal Hill.
                Our bilingual staff is always ready to help, whether you&apos;re
                dropping off a load for our wash & fold service or doing it
                yourself with our modern machines.
              </p>
              <p className="text-muted">
                We&apos;re more than just a laundromat - we&apos;re your neighbors,
                committed to making your life a little easier.
              </p>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469504512102-900f29606341?w=800&q=80"
                alt="Inside The Laundry Co."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Community First",
                description: "We're invested in our neighborhood and the people we serve every day.",
              },
              {
                icon: "🗣️",
                title: "Bilingual Service",
                description: "Spanish and English speaking staff to serve our diverse community.",
              },
              {
                icon: "✨",
                title: "Quality & Cleanliness",
                description: "We maintain the highest standards for our facility and your laundry.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <span className="text-5xl block mb-4">{value.icon}</span>
                <h3 className="text-xl font-semibold text-charcoal mb-1">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-white/70">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="text-terracotta hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Hours</h2>
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Sunday</span>
                    <span className="font-semibold">{BUSINESS.hours.weekday}</span>
                  </div>
                </div>
                <p className="text-sm text-white/60 mt-6">
                  Open 7 days a week for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Come Visit Us!</h2>
          <p className="text-white/90 mb-6">
            We&apos;d love to meet you and help with your laundry needs.
          </p>
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
