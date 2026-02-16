import type { Metadata } from "next";
import { DOOR_PAGES } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = DOOR_PAGES[slug];

  if (!data) {
    return { title: "Dvere | WENS DOOR" };
  }

  return {
    title: `${data.title} | WENS DOOR`,
    description: `Kvalitné interiérové ${data.title.toLowerCase()} - ${data.description}. Elegantné dizajnové riešenie pre moderné interiéry.`,
    keywords: `${data.title.toLowerCase()}, interiérové dvere, dvere na mieru, WENS DOOR`,
    openGraph: {
      type: "website",
      url: `https://wens.sk/produkty/dvere/${slug}`,
      title: `${data.title} | WENS DOOR`,
      description: data.description,
      images: [{ url: data.mainImage }],
    },
    alternates: {
      canonical: `https://wens.sk/produkty/dvere/${slug}`,
    },
  };
}

export default function DvereSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
