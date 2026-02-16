"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import PageHero from "@/components/PageHero";
import ProductTabs from "@/components/ProductTabs";
import Lightbox from "@/components/Lightbox";
import MobileSidebar from "@/components/MobileSidebar";
import {
  PRODUCT_CATEGORIES,
  GLASS_SERIES,
  GLASS_PAGES,
} from "@/lib/data";

export default function GlassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = GLASS_PAGES[slug];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!data) {
    notFound();
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title={data.title} image="/sources/slider2.jpg">
        <ProductTabs
          tabs={PRODUCT_CATEGORIES}
          activePath={`/produkty/celoskla/${slug}`}
        />
      </PageHero>

      <section className="py-[60px]">
        <div className="w-[90vw] mx-auto lg:max-w-[95%] lg:px-5">
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <nav className="sticky top-[120px]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                  Celosklá
                </h3>
                <ul className="flex flex-col gap-1">
                  {GLASS_SERIES.map((series) => (
                    <li key={series.slug}>
                      <Link
                        href={series.href}
                        className={`block py-2 px-4 text-sm transition-colors duration-200 ${
                          series.slug === slug
                            ? "bg-gray-100 font-semibold text-primary border-l-[3px] border-accent"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                      >
                        {series.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold text-black mb-2">{data.title}</h2>
              <p className="text-base text-[rgb(34,34,34)] mb-6">{data.description}</p>

              {/* Mobile Sidebar - Kategória + Referencie buttons */}
              <MobileSidebar
                title="Kategórie"
                links={GLASS_SERIES}
                activeSlug={slug}
                referencieHref="/referencie?tab=dvere"
              />

              {/* Main Image */}
              <div className="mb-5">
                <Image
                  src={data.mainImage}
                  alt={data.mainImageAlt}
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
              {data.gallery.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer overflow-hidden"
                      onClick={() => openLightbox(index)}
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
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={data.gallery}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + data.gallery.length) % data.gallery.length
          )
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % data.gallery.length)
        }
      />
    </>
  );
}
