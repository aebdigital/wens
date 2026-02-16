import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "O nás - WENS DOOR s.r.o. | Kvalitné interiérové dvere",
  description:
    "Spoznajte WENS DOOR s.r.o. - spoločnosť s tradíciou v oblasti interiérových dverí. 23 rokov skúseností, showroomy v Prievidzi a Bratislave.",
  keywords:
    "o nás, WENS DOOR, história, showroom, interiérové dvere, Prievidza, Bratislava",
  openGraph: {
    type: "website",
    url: "https://wens.sk/o-nas",
    title: "O nás - WENS DOOR s.r.o. | Kvalitné interiérové dvere",
    description:
      "Spoznajte WENS DOOR s.r.o. - spoločnosť s tradíciou v oblasti interiérových dverí.",
    images: [{ url: "/sources/slider1.jpg", width: 1920, height: 1106 }],
  },
  alternates: {
    canonical: "https://wens.sk/o-nas",
  },
};

export default function ONasPage() {
  return (
    <>
      <PageHero title="O nás" image="/sources/slider2.jpg" />

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-8">
                WENS DOOR s.r.o.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[rgb(34,34,34)]">
                <p>
                  Spoločnosť WENS DOOR s.r.o. bola založená v roku 2007 a
                  špecializuje sa na výrobu kvalitných interiérových dverí a
                  nábytku na mieru. S viac ako 18 ročnými skúsenosťami ponúkame
                  široký výber produktov s dôrazom na kvalitu, dizajn a
                  funkčnosť.
                </p>
                <p>
                  Naše showroomy v Prievidzi a Bratislave ponúkajú klientom
                  možnosť osobne si prezrieť naše produkty a získať odborné
                  poradenstvo od nášho tímu.
                </p>
                <p>
                  Vyrábame interiérové dvere, zárubne, schody, nábytok na mieru
                  a celosklenené riešenia. Všetky produkty sú vyrobené s
                  použitím kvalitných materiálov s dôrazom na detaily a
                  individuálny prístup ku každému zákazníkovi.
                </p>
                <p>
                  Inšpiráciu a nové trendy každoročne vyhľadávame na najlepších
                  európskych veľtrhoch, hlavne v Miláne, aby sme mohli našim
                  zákazníkom ponúknuť najmodernejšie riešenia pre ich
                  interiéry.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden group">
              <Image
                src="/sources/slider1.jpg"
                alt="WENS DOOR showroom"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
