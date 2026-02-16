import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schody na mieru | WENS DOOR",
  description:
    "Kvalitné drevené schody na mieru. Moderné dizajnové riešenia, masívne drevo, bezpečnosť a funkčnosť v jednom.",
  keywords:
    "drevené schody, schody na mieru, interiérové schody, masívne schody, moderné schody",
  openGraph: {
    type: "website",
    url: "https://wens.sk/produkty/schody",
    title: "Schody na mieru | WENS DOOR",
    description:
      "Kvalitné drevené schody na mieru. Moderné dizajnové riešenia, masívne drevo.",
    images: [{ url: "/sources/Produkty/schody main.jpg" }],
  },
  alternates: {
    canonical: "https://wens.sk/produkty/schody",
  },
};

export default function SchodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
