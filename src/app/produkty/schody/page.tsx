"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProductTabs from "@/components/ProductTabs";
import Lightbox from "@/components/Lightbox";
import { PRODUCT_CATEGORIES } from "@/lib/data";

const GALLERY_IMAGES = [
  { src: "/sources/referencie/schody/RD Bratislava/9210151007285139211509973425schody-1.jpg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Rusovce/51221460740326schody-1.jpg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Rusovce 2/69511459862042schody-1.jpeg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Zahorska Bystrica/12161603264019schody.jpg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Partizanske/52351463743714RD---schody-1.jpeg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Ruzinov/54831463732895schody-1.jpg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Bratislava 2/76521459515643RD-S1.jpeg", alt: "Drevené schody" },
  { src: "/sources/referencie/schody/RD Zahorska Bystrica 2/4761460745272schody-1.jpg", alt: "Drevené schody" },
];

export default function SchodyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    { src: "/sources/Produkty/schody main.jpg", alt: "Drevené schody" },
    ...GALLERY_IMAGES,
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title="Drevené schody" image="/sources/slider2.jpg">
        <ProductTabs
          tabs={PRODUCT_CATEGORIES}
          activePath="/produkty/schody"
        />
      </PageHero>

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%] lg:px-5">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <nav className="sticky top-[120px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  Schody
                </h3>
              </nav>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-2">
                Drevené schody
              </h2>
              <p className="text-base text-[rgb(34,34,34)] mb-6">
                Kvalitné drevené schody presne podľa vašich predstáv
              </p>

              {/* Main Image */}
              <div className="mb-5 cursor-pointer" onClick={() => openLightbox(0)}>
                <Image
                  src="/sources/Produkty/schody main.jpg"
                  alt="Drevené schody"
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
