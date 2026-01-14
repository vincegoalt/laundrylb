import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lavandería Long Beach CA | Servicio de Lavandería 90806",
  description:
    "Lavandería cerca de ti en Long Beach CA 90806. Autoservicio, lavado y doblado, recogida y entrega. Personal bilingüe. Cerca del Hospital Memorial.",
};

export default function SpanishPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580175486077-959357d7c72e?w=1920&q=80"
            alt="Interior de lavandería moderna"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🇲🇽</span>
              Se Habla Español
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tu Lavandería del Vecindario
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Bienvenido a The Laundry Co. Somos tu lavandería local en Long Beach,
              cerca del Hospital Memorial. Personal bilingüe listo para ayudarte.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                Llámanos: {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                Cómo Llegar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted">
              Todo lo que necesitas para tu ropa limpia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <span className="text-3xl">
                    {service.icon === "washer" && "🧺"}
                    {service.icon === "fold" && "👕"}
                    {service.icon === "truck" && "🚚"}
                    {service.icon === "medical" && "🩺"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  {service.nameEs}
                </h3>
                <p className="text-muted">{service.descriptionEs}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Precios Transparentes
            </h2>
            <p className="text-xl text-muted">
              Sin sorpresas, sin cargos ocultos
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="divide-y divide-border">
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Lavado Autoservicio</p>
                    <p className="text-sm text-muted">Lavadoras pequeñas a grandes</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    Desde ${PRICING.selfService.small.price}
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Lavado y Doblado</p>
                    <p className="text-sm text-muted">Nosotros lo hacemos todo</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    ${PRICING.washFold.regular.price}/lb
                  </span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <div>
                    <p className="font-semibold text-charcoal">Servicio Mismo Día</p>
                    <p className="text-sm text-muted">Deja antes de 10AM</p>
                  </div>
                  <span className="text-2xl font-bold text-terracotta">
                    ${PRICING.washFold.sameDay.price}/lb
                  </span>
                </div>
                <div className="flex justify-between items-center p-6 bg-green/10">
                  <div>
                    <p className="font-semibold text-charcoal">Uniformes Médicos</p>
                    <p className="text-sm text-muted">Descuento para trabajadores de salud</p>
                  </div>
                  <span className="text-2xl font-bold text-green">
                    ${PRICING.scrubs.price}/lb
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="btn-primary inline-block"
              >
                Ver Todos los Precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🗣️",
                title: "Personal Bilingüe",
                description: "Hablamos español e inglés",
              },
              {
                icon: "📍",
                title: "Ubicación Conveniente",
                description: "Cerca del Hospital Memorial",
              },
              {
                icon: "⏰",
                title: "Horario Extendido",
                description: "Abierto 6AM - 11PM todos los días",
              },
              {
                icon: "💰",
                title: "Precios Justos",
                description: "Competitivos y sin sorpresas",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Visítanos Hoy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Dirección</h3>
                    <p className="text-muted">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Horario</h3>
                    <p className="text-muted">Lunes - Domingo: {BUSINESS.hours.weekday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Teléfono</h3>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="text-terracotta hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469504512102-900f29606341?w=800&q=80"
                alt="Interior de lavandería"
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
            ¿Listo para Ropa Limpia?
          </h2>
          <p className="text-white/90 mb-6">
            Visítanos hoy o llámanos para más información
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Cómo Llegar
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-charcoal text-white px-8 py-3 rounded-lg font-semibold hover:bg-charcoal-light transition-colors"
            >
              Llamar: {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
