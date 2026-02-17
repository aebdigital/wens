"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export interface SidebarLink {
  href?: string;
  label: string;
  slug: string;
  onClick?: () => void;
}

interface MobileSidebarProps {
  title: string;
  links: SidebarLink[];
  activeSlug: string;
  referencieHref: string;
}

export default function MobileSidebar({
  title,
  links,
  activeSlug,
  referencieHref,
}: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  return (
    <>
      {/* Two buttons row - mobile only */}
      <div className="lg:hidden flex gap-2 mb-6">
        <button
          onClick={open}
          className="flex-1 py-4 px-4 bg-[#333] text-white font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-[#444] text-center"
        >
          Kategória
        </button>
        <Link
          href={referencieHref}
          className="flex-1 py-4 px-4 bg-accent text-white font-bold text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-accent-dark text-center"
        >
          Referencie
        </Link>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[10000]"
          onClick={close}
        >
          <div
            className="absolute top-0 left-0 w-[300px] h-full bg-white shadow-xl animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <button
                onClick={close}
                className="w-8 h-8 flex items-center justify-center text-2xl text-gray-500 hover:text-primary transition-colors"
                aria-label="Zatvoriť"
              >
                &times;
              </button>
            </div>
            <nav className="p-4">
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.slug}>
                    {link.onClick ? (
                      <button
                        onClick={() => {
                          link.onClick?.();
                          close();
                        }}
                        className={`block w-full text-left py-3 px-4 text-sm transition-colors duration-200 ${link.slug === activeSlug
                            ? "bg-gray-100 font-semibold text-primary border-l-[3px] border-accent"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        onClick={close}
                        className={`block py-3 px-4 text-sm transition-colors duration-200 ${link.slug === activeSlug
                            ? "bg-gray-100 font-semibold text-primary border-l-[3px] border-accent"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
