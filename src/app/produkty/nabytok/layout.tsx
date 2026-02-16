import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nábytok na mieru | WENS DOOR",
  description:
    "Kvalitný nábytok na mieru. Kuchyne, spálne, obývačky, predsiene, detské izby a firemné priestory z masívu a dyhy.",
  keywords:
    "nábytok na mieru, kuchyne, spálne, obývačky, predsiene, detské izby, firemné priestory",
  openGraph: {
    type: "website",
    url: "https://wens.sk/produkty/nabytok",
    title: "Nábytok na mieru | WENS DOOR",
    description:
      "Kvalitný nábytok na mieru. Kuchyne, spálne, obývačky, predsiene, detské izby a firemné priestory.",
    images: [{ url: "/sources/referencie/nabytok/Byt Bojnice/1751628778364kuchyna.jpg" }],
  },
  alternates: {
    canonical: "https://wens.sk/produkty/nabytok",
  },
};

export default function NabytokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
