import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zárubne | WENS DOOR",
  description:
    "Kvalitné zárubne pre dvere. Drevené zárubne na mieru s profesionálnou montážou a vysokou kvalitou spracovania.",
  keywords:
    "zárubne, drevené zárubne, zárubne na mieru, montáž zárubní, kvalitné zárubne",
  openGraph: {
    type: "website",
    url: "https://wens.sk/produkty/zarubne",
    title: "Zárubne | WENS DOOR",
    description:
      "Kvalitné zárubne pre dvere. Drevené zárubne na mieru s profesionálnou montážou.",
    images: [{ url: "/sources/Produkty/zarubne/zarubna1.jpg" }],
  },
  alternates: {
    canonical: "https://wens.sk/produkty/zarubne",
  },
};

export default function ZarubneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
