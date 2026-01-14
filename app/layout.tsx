import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Laundry Co. | Laundromat in Long Beach CA 90806",
    template: "%s | The Laundry Co.",
  },
  description:
    "Your neighborhood laundromat near Long Beach Memorial Hospital. Self-service, wash & fold, pickup & delivery. Bilingual staff. Se habla español.",
  keywords: [
    "laundromat Long Beach",
    "laundromat 90806",
    "wash and fold Long Beach",
    "laundry service Long Beach",
    "lavandería Long Beach",
    "laundromat near Long Beach Memorial Hospital",
    "scrubs laundry Long Beach",
  ],
  authors: [{ name: "The Laundry Co." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    url: "https://laundrylb.com",
    siteName: "The Laundry Co.",
    title: "The Laundry Co. | Laundromat in Long Beach CA",
    description:
      "Your neighborhood laundromat near Long Beach Memorial Hospital. Se habla español.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Laundry Co. - Long Beach Laundromat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Laundry Co. | Laundromat Long Beach",
    description: "Your neighborhood laundromat. Se habla español.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "", // Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Laundromat",
              name: "The Laundry Co.",
              image: "https://laundrylb.com/logo.png",
              "@id": "https://laundrylb.com",
              url: "https://laundrylb.com",
              telephone: "(562) 269-0542",
              address: {
                "@type": "PostalAddress",
                streetAddress: "565 E Willow St",
                addressLocality: "Long Beach",
                addressRegion: "CA",
                postalCode: "90806",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.8067,
                longitude: -118.1853,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "06:00",
                  closes: "23:00",
                },
              ],
              priceRange: "$",
              servesCuisine: "Laundry Services",
              acceptsReservations: false,
              paymentAccepted: "Cash, Credit Card",
              currenciesAccepted: "USD",
              areaServed: [
                "Long Beach",
                "Memorial Heights",
                "Wrigley",
                "California Heights",
                "Signal Hill",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Laundry Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Self-Service Laundry",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wash and Fold",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pickup and Delivery",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Medical Scrubs Cleaning",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased bg-cream`}>
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
