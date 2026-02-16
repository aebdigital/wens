import type { Metadata } from "next";
import { GLASS_PAGES } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = GLASS_PAGES[slug];

  if (!data) {
    return { title: "Celosklá | WENS DOOR" };
  }

  return {
    title: `${data.title} | WENS DOOR`,
    description: `Moderné celosklené riešenia ${data.title}. Kvalitné celosklé konštrukcie od WENS DOOR.`,
    keywords: `${data.title.toLowerCase()}, celosklené riešenia, sklenené konštrukcie, WENS DOOR`,
    openGraph: {
      type: "website",
      url: `https://wens.sk/produkty/celoskla/${slug}`,
      title: `${data.title} | WENS DOOR`,
      description: data.description,
      images: [{ url: data.mainImage }],
    },
    alternates: {
      canonical: `https://wens.sk/produkty/celoskla/${slug}`,
    },
  };
}

export default function CelosklaSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
