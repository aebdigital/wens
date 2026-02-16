"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProductTabs from "@/components/ProductTabs";
import Lightbox from "@/components/Lightbox";
import { PRODUCT_CATEGORIES } from "@/lib/data";

const GALLERY_IMAGES = [
  { src: "/sources/referencie/obklady/Byt Bojnice/35661628778220lamelovy-obklad.jpg", alt: "Lamelové obklady" },
  { src: "/sources/referencie/obklady/Byt Bojnice/24061628778220obkladdvere-v-obklade.jpg", alt: "Obklady s dverami" },
  { src: "/sources/referencie/obklady/Hotel pod zamkom, Bojnice/33351488974699obklady-1.jpg", alt: "Hotelové obklady" },
  { src: "/sources/referencie/obklady/RD Partizanske/43331491831959obklad.jpg", alt: "Rezidenčné obklady" },
  { src: "/sources/referencie/obklady/Byt Bojnice 2/95191594280000Obklad.jpg", alt: "Moderné obklady" },
  { src: "/sources/referencie/obklady/Zubna ambulancia Bratislava/46591558531958obklad.jpg", alt: "Komerčné obklady" },
  { src: "/sources/referencie/obklady/RD Ruzinov/32101474286286DSC_0034.jpeg", alt: "Designové obklady" },
  { src: "/sources/referencie/obklady/Byt Bratislava/31551478865666_MG_6142.jpeg", alt: "Luxusné obklady" },
];

export default function ObkladyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    { src: "/sources/Produkty/obklady main.jpg", alt: "Drevené obklady" },
    ...GALLERY_IMAGES,
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title="Obklady" image="/sources/slider2.jpg">
        <ProductTabs
          tabs={PRODUCT_CATEGORIES}
          activePath="/produkty/obklady"
        />
      </PageHero>

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%] lg:px-5">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <nav className="sticky top-[120px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  Obklady
                </h3>
              </nav>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-2">
                Obklady
              </h2>
              <p className="text-base text-[rgb(34,34,34)] mb-6">
                Štýlové drevené obklady pre moderné interiéry
              </p>

              {/* Main Image */}
              <div className="mb-5 cursor-pointer" onClick={() => openLightbox(0)}>
                <Image
                  src="/sources/Produkty/obklady main.jpg"
                  alt="Drevené obklady"
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
                {GALLERY_IMAGES.map((item, index) => (
                  <div
                    key={index}
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
