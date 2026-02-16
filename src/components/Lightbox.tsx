"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const [visible, setVisible] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      setImageReady(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setImageReady(false);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
        visible ? "bg-black/70 backdrop-blur-[5px]" : "bg-transparent"
      }`}
      onClick={onClose}
    >
      {/* Prev Button */}
      {images.length > 1 && (
        <button
          className="fixed left-5 top-1/2 -translate-y-1/2 z-[10002] w-[45px] h-[45px] flex items-center justify-center rounded-full bg-black/50 border-2 border-white text-white text-[22px] leading-none cursor-pointer transition-all duration-300 hover:bg-black/80 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Predchádzajúci"
        >
          &#8249;
        </button>
      )}

      {/* Image */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          visible && imageReady
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={1200}
          height={800}
          className="max-w-[90vw] max-h-[90vh] object-contain border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          style={{ width: "auto", height: "auto" }}
          onLoad={() => setImageReady(true)}
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          className="fixed right-5 top-1/2 -translate-y-1/2 z-[10002] w-[45px] h-[45px] flex items-center justify-center rounded-full bg-black/50 border-2 border-white text-white text-[22px] leading-none cursor-pointer transition-all duration-300 hover:bg-black/80 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Nasledujúci"
        >
          &#8250;
        </button>
      )}

      {/* Close Button */}
      <button
        className="fixed top-5 right-5 z-[10001] w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border-2 border-white text-white text-[20px] leading-none cursor-pointer transition-all duration-300 hover:bg-white/20 hover:rotate-90 backdrop-blur-[10px]"
        onClick={onClose}
        aria-label="Zatvoriť"
      >
        &times;
      </button>
    </div>
  );
}
