import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Zásady ochrany osobných údajov spoločnosti WENS DOOR s.r.o.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Ochrana osobných údajov" image="/sources/slider2.jpg" />

      <section className="py-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="prose prose-lg max-w-none text-[rgb(34,34,34)]">
            <h2 className="text-2xl font-semibold mb-6">Prevádzkovateľ</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm leading-relaxed">
              <p className="mb-1">
                <strong>WENS DOOR s.r.o.</strong>
              </p>
              <p className="mb-1">Vápenická 12, 971 01 Prievidza</p>
              <p className="mb-1">IČO: 36825476</p>
              <p className="mb-1">
                E-mail:{" "}
                <a href="mailto:info@wens.sk" className="text-accent">
                  info@wens.sk
                </a>
              </p>
              <p>
                Telefón:{" "}
                <a href="tel:+421902917898" className="text-accent">
                  +421 902 917 898
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Účel spracovania osobných údajov
            </h2>
            <p className="mb-6 leading-relaxed">
              Osobné údaje spracovávame za účelom poskytovania našich služieb,
              spracovania objednávok, komunikácie so zákazníkmi a plnenia
              zákonných povinností. Údaje sú spracovávané v súlade s
              Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a
              zákonom č. 18/2018 Z.z. o ochrane osobných údajov.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Právny základ spracovania
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
              <li>
                Plnenie zmluvy - spracovanie objednávok a poskytovanie služieb
              </li>
              <li>
                Oprávnený záujem - priamy marketing existujúcim zákazníkom
              </li>
              <li>Súhlas - zasielanie newsletterov a marketingových oznámení</li>
              <li>
                Zákonná povinnosť - účtovné a daňové povinnosti
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Doba uchovávania údajov
            </h2>
            <p className="mb-6 leading-relaxed">
              Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu, pre
              ktorý boli získané. Účtovné doklady uchovávame 10 rokov v súlade
              so zákonom o účtovníctve. Údaje spracovávané na základe súhlasu
              uchovávame do odvolania súhlasu.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Práva dotknutej osoby
            </h2>
            <p className="mb-4 leading-relaxed">
              Ako dotknutá osoba máte právo:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
              <li>Na prístup k osobným údajom</li>
              <li>Na opravu nesprávnych údajov</li>
              <li>Na vymazanie údajov (právo na zabudnutie)</li>
              <li>Na obmedzenie spracovania</li>
              <li>Na prenosnosť údajov</li>
              <li>Namietať proti spracovaniu</li>
              <li>
                Podať sťažnosť na Úrade na ochranu osobných údajov SR
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-4 leading-relaxed">
              Naša webová stránka používa cookies na zabezpečenie základnej
              funkčnosti, analýzu návštevnosti a personalizáciu obsahu. Cookies
              môžete spravovať prostredníctvom nastavení vo vašom prehliadači
              alebo prostredníctvom nastavení cookies na tejto stránke.
            </p>
            <p className="leading-relaxed">
              <strong>Nevyhnutné cookies</strong> - zabezpečujú základné
              fungovanie stránky a nemožno ich vypnúť.
              <br />
              <strong>Analytické cookies</strong> - pomáhajú nám porozumieť, ako
              návštevníci používajú stránku.
              <br />
              <strong>Marketingové cookies</strong> - používajú sa na zobrazenie
              relevantných reklám.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
