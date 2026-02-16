import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SmoothScroll from "@/components/SmoothScroll";
import PricelistModal from "@/components/PricelistModal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WENS DOOR s.r.o. - Kvalitné interiérové dvere na mieru | Prievidza",
    template: "%s | WENS DOOR",
  },
  description:
    "WENS DOOR s.r.o. - 23 rokov skúseností so showroomami v Prievidzi a Bratislave. Široký výber kvalitných interiérových dverí s prírodným dyhovaným skónom. Odborné poradenstvo a profesionálna montáž.",
  keywords:
    "interiérové dvere, dvere na mieru, dyhované dvere, WENS DOOR, Prievidza, Bratislava",
  authors: [{ name: "WENS DOOR s.r.o." }],
  metadataBase: new URL("https://wens.sk"),
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://wens.sk/",
    siteName: "WENS DOOR s.r.o.",
    title: "WENS DOOR s.r.o. - Kvalitné interiérové dvere na mieru",
    description:
      "Showroomy v Prievidzi a Bratislave. Široký výber kvalitných interiérových dverí s prírodným dyhovaným skónom.",
    images: [{ url: "/sources/slider1.jpg", width: 1920, height: 1106 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WENS DOOR - Kvalitné interiérové dvere",
    description:
      "Showroomy v Prievidzi a Bratislave. Široký výber kvalitných interiérových dverí s prírodným dyhovaným skónom.",
    images: ["/sources/slider1.jpg"],
  },
  verification: {
    google: "1bHH4iCaevxeX12r6v5aAv7eA3tQBGSgOpAaABwZwWM",
  },
  icons: {
    icon: "/faviconwens.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wens.sk/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://wens.sk/#organization",
              name: "WENS DOOR s.r.o.",
              alternateName: "WENS DOOR",
              description:
                "Kvalitné interiérové dvere na mieru s prírodným dyhovaným skónom. 23 rokov skúseností, showroomy v Prievidzi a Bratislave.",
              url: "https://wens.sk/",
              logo: "https://wens.sk/sources/whitelogo.png",
              image: "https://wens.sk/sources/slider1.jpg",
              telephone: "+421902917898",
              email: "info@wens.sk",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vápenická 12",
                addressLocality: "Prievidza",
                postalCode: "971 01",
                addressCountry: "SK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "48.7769",
                longitude: "18.6283",
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
                  ],
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              sameAs: ["https://www.instagram.com/wensdoor"],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <PricelistModal />
        <CookieConsent />
      </body>
    </html>
  );
}
