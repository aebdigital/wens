import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { HOME_PRODUCTS, HOME_GALLERY } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider
        slides={[
          { src: "/sources/slider1.jpg", alt: "WENS DOOR interiérové dvere 1" },
          { src: "/sources/slider2.jpg", alt: "WENS DOOR interiérové dvere 2" },
          { src: "/sources/slider3.jpg", alt: "WENS DOOR interiérové dvere 3" },
        ]}
      />

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <h2 className="text-3xl font-semibold text-black mb-5">
            Naše produkty
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {HOME_PRODUCTS.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group relative h-[200px] md:h-[300px] overflow-hidden shadow-lg hover:-translate-y-[5px] hover:shadow-xl transition-all"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <span className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)]">
                    {product.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-[120px] min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/sources/slider3.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-white">
            {/* Left Column */}
            <div>
              <div className="w-[60px] h-[3px] bg-accent mb-4" />
              <h2 className="text-3xl font-semibold mb-5">
                Interiérové dvere
              </h2>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Od roku 2007 ponúkame kolekciu moderných aj tradičných
                interiérových dverí, ktoré sú vyrobené s použitím kvalitných
                materiálov s množstvom farebných kombinácií a povrchových úprav.
                Všetky interiérové dvere sú vytvorené s dôrazom na detaily a
                kombinujú v sebe dizajn s funkčnosťou.
              </p>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Produkciou a technickým riešením sa snažíme byť vždy na čele
                firiem vyrábajúcich interiérové dvere, preto veľmi pozorne
                sledujeme najnovšie trendy v dizajne a technických možnostiach.
                Inšpiráciu a nové trendy každoročne vyhľadávame na najlepších
                európskych veľtrhoch, hlavne v Miláne.
              </p>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Vyrábame interiérové dvere v klasickej podchodnej výške, ale aj
                stále obľúbenejšie vysoké interiérové dvere. Podľa Vašich
                požiadaviek vyhotovíme falcové, bezfalcové, posuvné,
                celosklenené ako aj skladacie interiérové dvere, ktoré svojim
                vzhľadom doplnia Váš interiér.
              </p>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Keďže našimi dodávateľmi dyhy sú renomované zahraničné firmy,
                sme schopní vyrobiť interiérové dvere s akoukoľvek exotickou
                alebo domácou dyhou. Našou výhodou je, že v tesnej spolupráci s
                rakúskym výrobcom moridiel a lakov ADLER sa snažíme priblížiť
                požiadavkám klientov na zladenie interiérových dverí s
                povrchovou úpravou parkiet a nábytku. Okrem dyhovaných
                interiérových dverí sú veľmi vyhľadávané interiérové dvere s
                farebnou povrchovou úpravou. Farebná škála je takmer
                neobmedzená, záleží len na fantázii klienta. Dokážeme vyrobiť a
                dodať interiérové dvere v škále RAL a NCS, čo je výber z
                niekoľkých stoviek farebných možostí.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Pokiaľ si z nášho katalógu nevyberiete typ interiérových dverí
                ktorý by vyhovoval Vašim estetickým požiadavkám, dokážeme
                vyrobiť interiérové dvere na základe Vašej individuálnej
                požiadavky na mieru podľa Vami zadaného dizajnu a rozmerov
                stavebných otvorov. Všetky produkty firmy sú vyrobené na
                zákazku s plným servisom a profesionálnym a osobným prístupom ku
                každému zákazníkovi.
              </p>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                To je podstatný rozdiel oproti štandardne ponúkaným dverám, kedy
                sa my prispôsobujeme Vašim podmienkam a nie Vy podmienkam
                dodávateľa.
              </p>
              <p className="font-light text-white/90 leading-relaxed mb-4">
                Ďalšou časťou našou produkcie je výroba a montáž kompletných
                interiérov na mieru. Vyrobíme a namontujeme kompletné interiéry
                od malých garzóniek, sídliskových bytov, cez rodinné domy až po
                veľké luxusné vily. Interiér na mieru môže byť len skrinka pod
                televízor, vešiaková stena v chodbe až po kuchyňu, walk in
                šatníky, kompletné zariadenie obývacích izieb, detských izieb,
                spálni až po celý súbor atypického nábytku do veľkej vily.
              </p>
              <h3 className="text-2xl font-semibold mb-4 mt-6">
                Showroom v Bratislave
              </h3>
              <p className="font-light text-white/90 leading-relaxed mb-8">
                V našom showroome v R1 centre na Rožňavskej ulici 1 v Bratislave
                dokážeme klientom predviesť možnosti výroby a typy interiérových
                dverí, na nami vyrobenom vystavenom nábytku ukázať kvalitu
                povrchovej úpravy a konštrukcie interiérových dverí a nábytku.
              </p>
              <Link
                href="/produkty/dvere/seria-a"
                className="inline-block bg-red-600 text-white uppercase px-10 py-4 font-semibold tracking-wide hover:bg-red-700 transition-colors"
              >
                NAŠE PRODUKTY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 pb-[100px] bg-white overflow-hidden">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <h2 className="text-3xl font-semibold text-black mb-[50px]">
            Referencie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[5px] md:mx-[-50px] md:w-[calc(100%+100px)]">
            {HOME_GALLERY.map((item, index) => (
              <div
                key={index}
                className="group h-[150px] md:h-[250px] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}

            {/* "All references" card */}
            <Link
              href="/referencie"
              className="group relative h-[150px] md:h-[250px] overflow-hidden flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/sources/slider1.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-300" />
              <div className="relative z-10 flex items-center gap-3 text-white text-xl font-semibold">
                <span>Všetky referencie</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
