"use client";

import { useState } from "react";
import Image from "next/image";

import PageHero from "@/components/PageHero";
import ProductTabs from "@/components/ProductTabs";
import Lightbox from "@/components/Lightbox";
import { PRODUCT_CATEGORIES } from "@/lib/data";

const GALLERY_IMAGES = [
  { src: "/sources/Produkty/zarubne/zarubna1.jpg", alt: "Zárubne" },
  { src: "/sources/Produkty/zarubne/zarubna2.jpg", alt: "Zárubne" },
  { src: "/sources/Produkty/zarubne/zarubna3.jpg", alt: "Zárubne" },
];

export default function ZarubnePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title="Zárubne" image="/sources/slider2.jpg">
        <ProductTabs
          tabs={PRODUCT_CATEGORIES}
          activePath="/produkty/zarubne"
        />
      </PageHero>

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%] lg:px-5">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <nav className="sticky top-[120px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  Zárubne
                </h3>
              </nav>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-2">
                Zárubne
              </h2>
              <p className="text-base text-[rgb(34,34,34)] mb-6">
                Kvalitné zárubne pre dokonalé riešenie
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {GALLERY_IMAGES.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer overflow-hidden"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cenník Button */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-pricelist-modal"))}
                className="block w-full max-w-[300px] mx-auto my-5 py-4 px-8 bg-accent text-white font-bold text-[1.1rem] text-center uppercase tracking-wider transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)]"
              >
                Vyžiadať cenník
              </button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={GALLERY_IMAGES}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (prev) =>
              (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
          )
        }
        onNext={() =>
          setLightboxIndex(
            (prev) => (prev + 1) % GALLERY_IMAGES.length
          )
        }
      />
    </>
  );
}
