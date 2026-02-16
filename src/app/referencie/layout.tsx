import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referencie - WENS DOOR s.r.o. | Realizované projekty",
  description:
    "Pozrite si naše referencie a realizované projekty interiérových dverí. Kvalitné riešenia pre byty, rodinné domy a komerčné priestory.",
  keywords:
    "referencie, realizácie, interiérové dvere, projekty, WENS DOOR",
  openGraph: {
    type: "website",
    url: "https://wens.sk/referencie",
    title: "Referencie - WENS DOOR s.r.o. | Realizované projekty",
    description:
      "Pozrite si naše referencie a realizované projekty interiérových dverí.",
    images: [{ url: "/sources/slider1.jpg", width: 1920, height: 1106 }],
  },
  alternates: {
    canonical: "https://wens.sk/referencie",
  },
};

export default function ReferencieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
