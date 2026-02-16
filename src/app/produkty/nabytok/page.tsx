"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProductTabs from "@/components/ProductTabs";
import Lightbox from "@/components/Lightbox";
import { PRODUCT_CATEGORIES } from "@/lib/data";

interface NabytokCategory {
  id: string;
  label: string;
  mainImage: string;
  images: { src: string; alt: string }[];
}

const NABYTOK_CATEGORIES: NabytokCategory[] = [
  {
    id: "kuchyne",
    label: "Kuchyne",
    mainImage: "/sources/referencie/nabytok/Byt Bojnice 2/10341594279636Kuchyna-2.jpg",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bojnice/1751628778364kuchyna.jpg", alt: "Kuchyňa" },
      { src: "/sources/referencie/nabytok/Byt Bojnice/3311628778364kuchyna-2.jpg", alt: "Kuchyňa" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 2/91151603717181_DSC6594.jpg", alt: "Kuchyňa" },
      { src: "/sources/referencie/nabytok/Byt Bratislava/66671478865476_MG_6200.jpeg", alt: "Kuchyňa" },
    ],
  },
  {
    id: "spalna",
    label: "Spálne",
    mainImage: "/sources/referencie/nabytok/Byt Bojnice/70061628778363satnik-spalna.jpg",
    images: [
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/7209146372150210.jpg", alt: "Spálňa" },
      { src: "/sources/referencie/nabytok/Byt Bojnice/28291628778364satnik-spalna-2.jpg", alt: "Spálňa" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/19311603263892spalna-7.jpg", alt: "Spálňa" },
      { src: "/sources/referencie/nabytok/Byt Bratislava/50511478865476_MG_6119.jpeg", alt: "Spálňa" },
    ],
  },
  {
    id: "obyvacka",
    label: "Obývačky",
    mainImage: "/sources/referencie/nabytok/Byt Bojnice/84111628778363TV-skrinka.jpg",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bratislava/62751478865476_MG_6222.jpeg", alt: "Obývačka" },
      { src: "/sources/referencie/nabytok/Apartman Bojnice/82171628756263DSC_5899.jpg", alt: "Obývačka" },
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/320314637215029.jpg", alt: "Obývačka" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/14401603263738obyvacka-3.jpg", alt: "Obývačka" },
    ],
  },
  {
    id: "predsiene",
    label: "Predsiene",
    mainImage: "/sources/referencie/nabytok/Byt Bojnice/59341628778363satnik-vstup.jpg",
    images: [
      { src: "/sources/referencie/nabytok/Apartman Bojnice/95991628756263DSC_5917.jpg", alt: "Predsieň" },
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/263614637215022.jpg", alt: "Predsieň" },
      { src: "/sources/referencie/nabytok/RD Rusovce/49211460746855interier-1.jpg", alt: "Predsieň" },
      { src: "/sources/referencie/nabytok/RD Rusovce/30871460746855interier-3.jpg", alt: "Predsieň" },
    ],
  },
  {
    id: "detska",
    label: "Detské izby",
    mainImage: "/sources/referencie/nabytok/RD Zahorska Bystrica/41921603263316deti.jpg",
    images: [
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/48401603263348deti-2.jpg", alt: "Detská izba" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/99781603263406deti-4.jpg", alt: "Detská izba" },
      { src: "/sources/referencie/nabytok/RD Stupava/56941460746297Interior-5.jpg", alt: "Detská izba" },
      { src: "/sources/referencie/nabytok/RD Stupava/45861460746297Interior-1.jpg", alt: "Detská izba" },
    ],
  },
  {
    id: "firemne",
    label: "Firemné priestory",
    mainImage: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/97131460749378interier-1.jpg",
    images: [
      { src: "/sources/referencie/nabytok/Kozmeticky Salon Sona/11371629215414_DSC5179.jpg", alt: "Firemný priestor" },
      { src: "/sources/referencie/nabytok/Art Cafe, Sturove namestie, Bratislava/52781460748651Art-cafe--bar-1.jpg", alt: "Firemný priestor" },
      { src: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/35681460749378interier-4.jpg", alt: "Firemný priestor" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon/63011573478717salon.jpg", alt: "Firemný priestor" },
    ],
  },
];

export default function NabytokPage() {
  const [activeCategory, setActiveCategory] = useState("kuchyne");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const category = useMemo(
    () => NABYTOK_CATEGORIES.find((c) => c.id === activeCategory)!,
    [activeCategory]
  );

  const allImages = useMemo(
    () => [{ src: category.mainImage, alt: category.label }, ...category.images],
    [category]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title="Nábytok na mieru" image="/sources/slider2.jpg">
        <ProductTabs
          tabs={PRODUCT_CATEGORIES}
          activePath="/produkty/nabytok"
        />
      </PageHero>

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%] lg:px-5">
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <nav className="sticky top-[120px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  Nábytok
                </h3>
                <ul className="flex flex-col gap-1">
                  {NABYTOK_CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className={`block w-full text-left py-2 px-4 text-sm transition-colors duration-200 ${cat.id === activeCategory
                            ? "bg-gray-100 font-semibold text-primary border-l-[3px] border-accent"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Mobile Category Dropdown */}
            <div className="lg:hidden w-full mb-6">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-medium text-primary bg-white focus:outline-none focus:border-accent"
              >
                {NABYTOK_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-2">
                {category.label}
              </h2>
              <p className="text-base text-[rgb(34,34,34)] mb-6">
                Kvalitný nábytok presne podľa vašich predstáv
              </p>

              {/* Main Image */}
              <div className="mb-5 cursor-pointer" onClick={() => openLightbox(0)}>
                <Image
                  src={category.mainImage}
                  alt={category.label}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>

              {/* Cenník Button */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-pricelist-modal"))}
                className="block w-full max-w-[300px] mx-auto my-5 py-4 px-8 bg-accent text-white font-bold text-[1.1rem] text-center uppercase tracking-wider transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)]"
              >
                Vyžiadať cenník
              </button>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {category.images.map((item, index) => (
                  <div
                    key={item.src}
                    className="group cursor-pointer overflow-hidden"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={allImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + allImages.length) % allImages.length
          )
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % allImages.length)
        }
      />
    </>
  );
}
