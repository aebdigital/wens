"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PRIEVIDZA_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d18.6319563!3d48.7668253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dd007de2beef%3A0xc7400751ed3942e9!2sWens%20door%20Prievidza!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk";

const BRATISLAVA_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1234567890123!2d17.14397!3d48.18642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8edc9a1560b5%3A0xe07eb27db6fae3bb!2sWENS%20DOOR!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk";

function MapContainer({ src, title }: { src: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`map-container relative ${active ? "active" : ""}`}
      onClick={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <iframe
        src={src}
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isKontakt = pathname === "/kontakt";

  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-white border-t-[3px] border-accent shadow-[0_-8px_16px_rgba(0,0,0,0.1)]">
        <div className="max-w-[95%] mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <h2 className="text-[1.8rem] font-semibold text-[rgb(34,34,34)] text-center md:text-left">
            Potrebujete interiérové dvere a nábytok na mieru?
          </h2>
          <Link
            href="/kontakt"
            className="inline-block bg-accent text-white font-semibold px-6 py-3 uppercase tracking-wide text-base transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 flex-shrink-0"
          >
            Kontakt
          </Link>
        </div>
      </section>

      {/* Maps Section */}
      {!isKontakt && (
        <section className="bg-[#f5f5f5]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <MapContainer src={PRIEVIDZA_MAP} title="Wens door Prievidza" />
            <MapContainer src={BRATISLAVA_MAP} title="WENS DOOR Bratislava" />
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="bg-black pt-[60px] pb-[60px]">
        <div className="max-w-[95%] mx-auto h-px bg-[#333]" />
      </div>

      {/* Footer Bottom */}
      <section className="bg-black text-white pb-5">
        <div className="max-w-[95%] mx-auto px-2.5">
          <div className="flex flex-col md:flex-row items-start gap-[60px] mb-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/footerlogo.png"
                alt="WENS DOOR Logo"
                width={1541}
                height={162}
                className="h-[30px] w-auto"
                unoptimized
              />
            </div>

            {/* Nav Links */}
            <div className="flex flex-col text-left">
              <h4 className="text-base font-semibold mb-2.5">
                Navigácia
              </h4>
              <div className="flex flex-col gap-[15px]">
              {[
                { href: "/", label: "Domov" },
                { href: "/o-nas", label: "O nás" },
                { href: "/produkty/dvere/seria-a", label: "Produkty" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/referencie", label: "Referencie" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm hover:text-gray-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-8 text-left">
              <div>
                <h4 className="text-base font-semibold mb-2.5">
                  Sídlo spoločnosti
                </h4>
                <p className="text-white text-sm leading-normal mb-4">
                  Vápenická 12<br />
                  971 01 Prievidza
                </p>
                <p className="text-white text-sm leading-normal">
                  <a href="tel:+421902917898" className="hover:text-gray-400 transition-colors duration-300">+421 902 917 898</a><br />
                  <a href="mailto:info@wens.sk" className="hover:text-gray-400 transition-colors duration-300">info@wens.sk</a>
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-2.5">
                  Predajňa
                </h4>
                <p className="text-white text-sm leading-normal mb-4">
                  Areál R1<br />
                  Ružinovská 1<br />
                  831 04 Bratislava
                </p>
                <p className="text-white text-sm leading-normal">
                  <a href="tel:+421903719247" className="hover:text-gray-400 transition-colors duration-300">+421 903 719 247</a><br />
                  <a href="mailto:predajna.ba@wens.sk" className="hover:text-gray-400 transition-colors duration-300">predajna.ba@wens.sk</a>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/wensdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:scale-[1.15] transition-transform duration-300"
              >
                <Image
                  src="/sources/instagram-icon-white.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-5 pt-5 text-[#999] text-sm">
            <p>
              &copy; WENS DOOR s.r.o. 2025 &nbsp;&nbsp;
              <Link
                href="/ochrana-osobnych-udajov"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Ochrana osobných údajov
              </Link>
              &nbsp;&nbsp;
              <button
                className="hover:text-gray-400 transition-colors duration-300"
                onClick={() => {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }}
              >
                Nastavenia cookies
              </button>
            </p>
            <p>
              Tvorba webu -{" "}
              <a
                href="https://aebdigital.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                AEB Digital
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
