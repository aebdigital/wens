"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const threshold = window.innerHeight * 0.1;
    setScrolled(window.scrollY > threshold);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      setMobileOpen(false);
      document.body.classList.remove("no-scroll");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    if (next) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled
          ? "bg-white/90 shadow-md border-b border-transparent"
          : "bg-white/15 backdrop-blur-[10px] border-b border-white/30"
          }`}
      >
        <nav className="w-[90vw] mx-auto lg:max-w-[95%] py-3 md:py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/sources/logo2.png" : "/sources/whitelogo.png"}
              alt="WENS DOOR"
              width={1541}
              height={162}
              className={`transition-all duration-300 ${scrolled ? "h-[22px]" : "h-[28px]"
                } w-auto`}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`uppercase font-medium text-sm tracking-wide relative transition-colors duration-300 ${scrolled
                    ? "text-primary hover:text-accent"
                    : "text-white hover:text-white"
                    } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "after:bg-accent" : "after:bg-white"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-[30px] h-[30px] gap-[5px] z-[1001] relative"
            onClick={toggleMobile}
            aria-label="Menu"
          >
            <span
              className={`block w-[25px] h-[2px] transition-all duration-300 origin-center ${mobileOpen
                ? "bg-primary rotate-45 translate-y-[7px]"
                : scrolled
                  ? "bg-primary"
                  : "bg-white"
                }`}
            />
            <span
              className={`block w-[25px] h-[2px] transition-all duration-300 ${mobileOpen
                ? "opacity-0"
                : scrolled
                  ? "bg-primary"
                  : "bg-white"
                }`}
            />
            <span
              className={`block w-[25px] h-[2px] transition-all duration-300 origin-center ${mobileOpen
                ? "bg-primary -rotate-45 -translate-y-[7px]"
                : scrolled
                  ? "bg-primary"
                  : "bg-white"
                }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/[0.98] backdrop-blur-[20px] z-[999] transition-transform duration-300 md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <nav className="pt-[100px] px-8">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-gray-200">
                <Link
                  href={link.href}
                  onClick={closeMobile}
                  className="block font-bold text-[20.8px] py-[18px] text-primary transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
