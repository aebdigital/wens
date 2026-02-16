"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  src: string;
  alt: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[84vh] md:h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{
            transform: `translateY(-${scrollY * 0.2}px)`,
            top: 0,
            bottom: "-20%",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-[center_20%]"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] h-full w-[90vw] mx-auto lg:max-w-[95%] flex items-end pb-16 md:items-center md:pb-0">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16">
          {/* Left: Text + CTAs */}
          <div className="max-w-[700px]">
            <h1
              className="text-[2.25rem] md:text-6xl font-bold text-white leading-tight mb-5"
              style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
            >
              Kvalitné interiérové dvere a nábytok na mieru
            </h1>
            <div className="mb-8 md:mb-12">
              <p
                className="text-white/90 text-base md:text-lg leading-relaxed"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Sme slovenská spoločnosť špecializujúca sa na výrobu
                interiérových dverí z kvalitných materiálov s množstvom farebných kombinácií
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/referencie"
                className="inline-block bg-accent text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5"
              >
                Referencie
              </Link>
              <Link
                href="/produkty/dvere/seria-a"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Produkty
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex gap-8">
            <div className="text-white text-left">
              <span
                className="text-2xl md:text-4xl font-bold block leading-none"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
              >
                5000<span className="text-white">+</span>
              </span>
              <span
                className="text-white/80 text-xs uppercase tracking-wide"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                spokojných zákazníkov
              </span>
            </div>
            <div className="text-white text-left">
              <span
                className="text-2xl md:text-4xl font-bold block leading-none"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
              >
                18<span className="text-white">+</span>
              </span>
              <span
                className="text-white/80 text-xs uppercase tracking-wide"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                rokov skúseností
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
