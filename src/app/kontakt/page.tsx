import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kontakt - WENS DOOR | Prievidza a Bratislava",
  description:
    "Kontaktujte WENS DOOR - showroomy v Prievidzi a Bratislave. Kvalitné interiérové dvere na mieru s profesionálnym poradenstvom.",
  keywords:
    "kontakt, WENS DOOR, Prievidza, Bratislava, interiérové dvere, showroom",
  openGraph: {
    type: "website",
    url: "https://wens.sk/kontakt",
    title: "Kontakt - WENS DOOR | Prievidza a Bratislava",
    description:
      "Kontaktujte WENS DOOR - showroomy v Prievidzi a Bratislave. Kvalitné interiérové dvere na mieru.",
    images: [{ url: "/sources/slider1.jpg", width: 1920, height: 1106 }],
  },
  alternates: {
    canonical: "https://wens.sk/kontakt",
  },
};

const PRIEVIDZA_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d18.6319563!3d48.7668253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dd007de2beef%3A0xc7400751ed3942e9!2sWens%20door%20Prievidza!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk";

const BRATISLAVA_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1234567890123!2d17.14397!3d48.18642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8edc9a1560b5%3A0xe07eb27db6fae3bb!2sWENS%20DOOR!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk";

function ContactLocation({
  title,
  company,
  address,
  phone,
  phone2,
  mobil,
  email,
  hours,
  image,
  imageAlt,
  mapSrc,
  mapTitle,
}: {
  title: string;
  company: string;
  address: string[];
  phone: string;
  phone2?: string;
  mobil: string;
  email: string;
  hours: { day: string; time: string; isBold?: boolean }[];
  image: string;
  imageAlt: string;
  mapSrc: string;
  mapTitle: string;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-[60px] h-[3px] bg-accent mb-4" />
      <h2 className="text-3xl font-semibold text-black mb-6">{title}</h2>
      <h3 className="text-xl font-semibold text-[rgb(34,34,34)] uppercase tracking-wide mb-4">
        {company}
      </h3>
      <div className="space-y-1 text-base text-[rgb(34,34,34)] mb-4">
        {address.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <p>Slovenská republika</p>
      </div>
      <div className="space-y-1 mb-4 text-base text-[rgb(34,34,34)]">
        <p>
          <strong>Tel/Fax:</strong> {phone}
        </p>
        {phone2 && (
          <p>
            <strong>Tel/Fax:</strong> {phone2}
          </p>
        )}
        <p>
          <strong>Mobil:</strong> <strong>{mobil}</strong>
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a
            href={`mailto:${email}`}
            className="hover:text-accent transition-colors duration-300"
          >
            {email}
          </a>
        </p>
      </div>
      <div className="mb-8">
        <p className="font-bold text-[rgb(34,34,34)] mb-1">Otváracie hodiny</p>
        {hours.map((h, i) => (
          <p key={i} className="text-sm text-[rgb(34,34,34)]">
            {h.day}: {h.isBold ? <strong>{h.time}</strong> : h.time}
          </p>
        ))}
      </div>

      <div className="mt-auto">
        {/* Location Image */}
        <div className="relative h-[450px] overflow-hidden shadow-lg mb-8 group">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Map */}
        <div className="map-container relative">
          <iframe
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapTitle}
            className="transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt" image="/sources/slider1.jpg" />

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-stretch">
            <ContactLocation
              title="Sídlo spoločnosti"
              company="WENS door - Prievidza"
              address={["Vápenická 12,", "971 01 Prievidza"]}
              phone="046 / 542 30 57"
              mobil="0902 / 917 898"
              email="info@wens.sk"
              hours={[
                { day: "Pondelok - Piatok", time: "07:00 - 15:30", isBold: true },
                { day: "Sobota", time: "zatvorené", isBold: true },
              ]}
              image="/sources/kontakt-prievidza.jpg"
              imageAlt="WENS door Prievidza showroom"
              mapSrc={PRIEVIDZA_MAP}
              mapTitle="WENS door Prievidza"
            />

            <ContactLocation
              title="Predajňa"
              company="WENS door - Bratislava"
              address={["Areál R1", "Rožňavská 1", "831 04 Nové Mesto"]}
              phone="02 / 65 45 30 16"
              mobil="0903 / 719 247"
              email="predajna.ba@wens.sk"
              hours={[
                { day: "Pondelok - Piatok", time: "09:00 - 18:00", isBold: true },
                { day: "Sobota", time: "09:00 - 13:00", isBold: true },
              ]}
              image="/sources/ba-new.JPG"
              imageAlt="WENS door Bratislava showroom"
              mapSrc={BRATISLAVA_MAP}
              mapTitle="WENS door Bratislava"
            />
          </div>
        </div>
      </section>
    </>
  );
}
