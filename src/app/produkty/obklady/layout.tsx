import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obklady | WENS DOOR",
  description:
    "Štýlové drevené obklady pre moderné interiéry. Kvalitné lamelové obklady a stenové panely na mieru.",
  keywords:
    "drevené obklady, lamelové obklady, stenové panely, interiérové obklady, obklady na mieru, moderné obklady",
  openGraph: {
    type: "website",
    url: "https://wens.sk/produkty/obklady",
    title: "Obklady | WENS DOOR",
    description:
      "Štýlové drevené obklady pre moderné interiéry. Kvalitné lamelové obklady a stenové panely na mieru.",
    images: [{ url: "/sources/Produkty/obklady main.jpg" }],
  },
  alternates: {
    canonical: "https://wens.sk/produkty/obklady",
  },
};

export default function ObkladyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
