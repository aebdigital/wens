// Product data for the WENS DOOR website

export const NAV_LINKS = [
  { href: "/", label: "Domov" },
  { href: "/produkty/dvere/seria-a", label: "Produkty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/referencie", label: "Referencie" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export const PRODUCT_CATEGORIES = [
  { href: "/produkty/dvere/seria-a", label: "Dvere", activePrefix: "/produkty/dvere" },
  { href: "/produkty/zarubne", label: "Zárubne" },
  { href: "/produkty/schody", label: "Drevené schody" },
  { href: "/produkty/nabytok", label: "Nábytok na mieru" },
  { href: "/produkty/celoskla/celoskla-css", label: "Celosklá", activePrefix: "/produkty/celoskla" },
  { href: "/produkty/obklady", label: "Obklady" },
];

export const DOOR_SERIES = [
  { href: "/produkty/dvere/seria-a", label: "Séria - A", slug: "seria-a" },
  { href: "/produkty/dvere/seria-e", label: "Séria - E", slug: "seria-e" },
  { href: "/produkty/dvere/seria-f", label: "Séria - F", slug: "seria-f" },
  { href: "/produkty/dvere/seria-g", label: "Séria - G", slug: "seria-g" },
  { href: "/produkty/dvere/seria-h", label: "Séria - H", slug: "seria-h" },
  { href: "/produkty/dvere/seria-i", label: "Séria - I", slug: "seria-i" },
  { href: "/produkty/dvere/seria-s", label: "Séria - S", slug: "seria-s" },
  { href: "/produkty/dvere/seria-v", label: "Séria - V", slug: "seria-v" },
  { href: "/produkty/dvere/dvere-bezfalcove", label: "Bezfalcové", slug: "dvere-bezfalcove" },
  { href: "/produkty/dvere/dvere-falcove", label: "Falcové", slug: "dvere-falcove" },
  { href: "/produkty/dvere/dvere-posuvne", label: "Posuvné", slug: "dvere-posuvne" },
];

export const GLASS_SERIES = [
  { href: "/produkty/celoskla/celoskla-css", label: "CSS", slug: "celoskla-css" },
  { href: "/produkty/celoskla/celoskla-csps", label: "CSPS", slug: "celoskla-csps" },
  { href: "/produkty/celoskla/celoskla-csp", label: "CSP", slug: "celoskla-csp" },
  { href: "/produkty/celoskla/celoskla-sk", label: "SK", slug: "celoskla-sk" },
  { href: "/produkty/celoskla/celoskla-csz", label: "CSZ", slug: "celoskla-csz" },
  { href: "/produkty/celoskla/celoskla-csal", label: "CSAL", slug: "celoskla-csal" },
];

export interface DoorPageData {
  title: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  gallery: { src: string; alt: string; label: string }[];
  slug: string;
}

export const DOOR_PAGES: Record<string, DoorPageData> = {
  "seria-a": {
    title: "Dvere séria A",
    description: "Dvere s priebežným kaleným sklom",
    mainImage: "/sources/Produkty/dvere/A main.jpg",
    mainImageAlt: "Dvere séria A - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/A1.jpg", alt: "Dvere séria A - variant 1", label: "Séria A1" },
      { src: "/sources/Produkty/dvere/A2.jpg", alt: "Dvere séria A - variant 2", label: "Séria A2" },
      { src: "/sources/Produkty/dvere/A3.jpg", alt: "Dvere séria A - variant 3", label: "Séria A3" },
      { src: "/sources/Produkty/dvere/A4.jpg", alt: "Dvere séria A - variant 4", label: "Séria A4" },
    ],
    slug: "seria-a",
  },
  "seria-e": {
    title: "Dvere séria E",
    description: "Dvere so štvorcovými a obdĺžnikovými sklami alebo kazetami",
    mainImage: "/sources/Produkty/dvere/E main.jpg",
    mainImageAlt: "Dvere séria E - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/E1.jpg", alt: "Dvere séria E - variant 1", label: "Séria E1" },
      { src: "/sources/Produkty/dvere/E2.jpg", alt: "Dvere séria E - variant 2", label: "Séria E2" },
      { src: "/sources/Produkty/dvere/E3.jpg", alt: "Dvere séria E - variant 3", label: "Séria E3" },
      { src: "/sources/Produkty/dvere/E4.jpg", alt: "Dvere séria E - variant 4", label: "Séria E4" },
      { src: "/sources/Produkty/dvere/E5.jpg", alt: "Dvere séria E - variant 5", label: "Séria E5" },
      { src: "/sources/Produkty/dvere/E6.jpg", alt: "Dvere séria E - variant 6", label: "Séria E6" },
      { src: "/sources/Produkty/dvere/E7.jpg", alt: "Dvere séria E - variant 7", label: "Séria E7" },
      { src: "/sources/Produkty/dvere/E8.jpg", alt: "Dvere séria E - variant 8", label: "Séria E8" },
    ],
    slug: "seria-e",
  },
  "seria-f": {
    title: "Dvere séria F",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/F main.jpg",
    mainImageAlt: "Dvere séria F - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/F1.jpg", alt: "Dvere séria F - variant 1", label: "Séria F1" },
      { src: "/sources/Produkty/dvere/F2.jpg", alt: "Dvere séria F - variant 2", label: "Séria F2" },
      { src: "/sources/Produkty/dvere/F3.jpg", alt: "Dvere séria F - variant 3", label: "Séria F3" },
      { src: "/sources/Produkty/dvere/F4.jpg", alt: "Dvere séria F - variant 4", label: "Séria F4" },
    ],
    slug: "seria-f",
  },
  "seria-g": {
    title: "Dvere séria G",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/G main.jpg",
    mainImageAlt: "Dvere séria G - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/G1.jpg", alt: "Dvere séria G - variant 1", label: "Séria G1" },
      { src: "/sources/Produkty/dvere/G2.jpg", alt: "Dvere séria G - variant 2", label: "Séria G2" },
      { src: "/sources/Produkty/dvere/G3.jpg", alt: "Dvere séria G - variant 3", label: "Séria G3" },
      { src: "/sources/Produkty/dvere/G4.jpg", alt: "Dvere séria G - variant 4", label: "Séria G4" },
    ],
    slug: "seria-g",
  },
  "seria-h": {
    title: "Dvere séria H",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/H main.jpg",
    mainImageAlt: "Dvere séria H - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/H1.jpg", alt: "Dvere séria H - variant 1", label: "Séria H1" },
      { src: "/sources/Produkty/dvere/H2.jpg", alt: "Dvere séria H - variant 2", label: "Séria H2" },
      { src: "/sources/Produkty/dvere/H3.jpg", alt: "Dvere séria H - variant 3", label: "Séria H3" },
      { src: "/sources/Produkty/dvere/H4.jpg", alt: "Dvere séria H - variant 4", label: "Séria H4" },
    ],
    slug: "seria-h",
  },
  "seria-i": {
    title: "Dvere séria I",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/I main.jpg",
    mainImageAlt: "Dvere séria I - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/I1.jpg", alt: "Dvere séria I - variant 1", label: "Séria I1" },
      { src: "/sources/Produkty/dvere/I2.jpg", alt: "Dvere séria I - variant 2", label: "Séria I2" },
      { src: "/sources/Produkty/dvere/I3.jpg", alt: "Dvere séria I - variant 3", label: "Séria I3" },
      { src: "/sources/Produkty/dvere/I4.jpg", alt: "Dvere séria I - variant 4", label: "Séria I4" },
    ],
    slug: "seria-i",
  },
  "seria-s": {
    title: "Dvere séria S",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/S main.jpg",
    mainImageAlt: "Dvere séria S - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/S1.jpg", alt: "Dvere séria S - variant 1", label: "Séria S1" },
      { src: "/sources/Produkty/dvere/S2.jpg", alt: "Dvere séria S - variant 2", label: "Séria S2" },
      { src: "/sources/Produkty/dvere/S3.jpg", alt: "Dvere séria S - variant 3", label: "Séria S3" },
      { src: "/sources/Produkty/dvere/S4.jpg", alt: "Dvere séria S - variant 4", label: "Séria S4" },
    ],
    slug: "seria-s",
  },
  "seria-v": {
    title: "Dvere séria V",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/V main.jpg",
    mainImageAlt: "Dvere séria V - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/V1.jpg", alt: "Dvere séria V - variant 1", label: "Séria V1" },
      { src: "/sources/Produkty/dvere/V2.jpg", alt: "Dvere séria V - variant 2", label: "Séria V2" },
      { src: "/sources/Produkty/dvere/V3.jpg", alt: "Dvere séria V - variant 3", label: "Séria V3" },
      { src: "/sources/Produkty/dvere/V4.jpg", alt: "Dvere séria V - variant 4", label: "Séria V4" },
    ],
    slug: "seria-v",
  },
  "dvere-falcove": {
    title: "Dvere falcové",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/falcove main.jpg",
    mainImageAlt: "Dvere falcové - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/falcove1.jpg", alt: "Dvere falcové - variant 1", label: "Falcové 1" },
      { src: "/sources/Produkty/dvere/falcove2.jpg", alt: "Dvere falcové - variant 2", label: "Falcové 2" },
    ],
    slug: "dvere-falcove",
  },
  "dvere-bezfalcove": {
    title: "Dvere bezfalcové",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/bezfalcove main.jpg",
    mainImageAlt: "Dvere bezfalcové - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/bezfalcove1.jpg", alt: "Dvere bezfalcové - variant 1", label: "Bezfalcové 1" },
      { src: "/sources/Produkty/dvere/bezfalcove2.jpg", alt: "Dvere bezfalcové - variant 2", label: "Bezfalcové 2" },
    ],
    slug: "dvere-bezfalcove",
  },
  "dvere-posuvne": {
    title: "Dvere posuvné",
    description: "Elegantné dizajnové riešenie pre moderné interiéry",
    mainImage: "/sources/Produkty/dvere/posuvne main.jpg",
    mainImageAlt: "Dvere posuvné - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/dvere/posuvne1.jpg", alt: "Dvere posuvné - variant 1", label: "Posuvné 1" },
      { src: "/sources/Produkty/dvere/posuvne2.jpg", alt: "Dvere posuvné - variant 2", label: "Posuvné 2" },
    ],
    slug: "dvere-posuvne",
  },
};

export interface GlassPageData {
  title: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  gallery: { src: string; alt: string; label: string }[];
  slug: string;
  csalSeries?: boolean;
}

export const GLASS_PAGES: Record<string, GlassPageData> = {
  "celoskla-css": {
    title: "Celosklá CSS",
    description: "Moderné celosklené riešenia pre vaše priestory",
    mainImage: "/sources/Produkty/celoskla/css main.jpg",
    mainImageAlt: "Celosklá CSS - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/css1.jpg", alt: "Celosklá CSS - variant 1", label: "CSS 1" },
      { src: "/sources/Produkty/celoskla/css2.jpg", alt: "Celosklá CSS - variant 2", label: "CSS 2" },
      { src: "/sources/Produkty/celoskla/css3.jpg", alt: "Celosklá CSS - variant 3", label: "CSS 3" },
    ],
    slug: "celoskla-css",
  },
  "celoskla-csps": {
    title: "Celosklá CSPS",
    description: "Moderné celosklené riešenia pre vaše priestory",
    mainImage: "/sources/Produkty/celoskla/csps main.jpg",
    mainImageAlt: "Celosklá CSPS - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/csps1.jpg", alt: "Celosklá CSPS - variant 1", label: "CSPS 1" },
      { src: "/sources/Produkty/celoskla/csps2.jpg", alt: "Celosklá CSPS - variant 2", label: "CSPS 2" },
      { src: "/sources/Produkty/celoskla/csps3.jpg", alt: "Celosklá CSPS - variant 3", label: "CSPS 3" },
    ],
    slug: "celoskla-csps",
  },
  "celoskla-csp": {
    title: "Celosklá CSP",
    description: "Moderné celosklené riešenia pre vaše priestory",
    mainImage: "/sources/Produkty/celoskla/csp main.jpg",
    mainImageAlt: "Celosklá CSP - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/csp1.jpg", alt: "Celosklá CSP - variant 1", label: "CSP 1" },
      { src: "/sources/Produkty/celoskla/csp2.jpg", alt: "Celosklá CSP - variant 2", label: "CSP 2" },
      { src: "/sources/Produkty/celoskla/csp3.jpg", alt: "Celosklá CSP - variant 3", label: "CSP 3" },
    ],
    slug: "celoskla-csp",
  },
  "celoskla-sk": {
    title: "Celosklá SK",
    description: "Moderné celosklené riešenia pre vaše priestory",
    mainImage: "/sources/Produkty/celoskla/sk main.jpg",
    mainImageAlt: "Celosklá SK - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/sk1.jpg", alt: "Celosklá SK - variant 1", label: "SK 1" },
      { src: "/sources/Produkty/celoskla/sk2.jpg", alt: "Celosklá SK - variant 2", label: "SK 2" },
      { src: "/sources/Produkty/celoskla/sk3.jpg", alt: "Celosklá SK - variant 3", label: "SK 3" },
    ],
    slug: "celoskla-sk",
  },
  "celoskla-csz": {
    title: "Celosklá CSZ",
    description: "Moderné celosklené riešenia pre vaše priestory",
    mainImage: "/sources/Produkty/celoskla/csz main.jpg",
    mainImageAlt: "Celosklá CSZ - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/csz1.jpg", alt: "Celosklá CSZ - variant 1", label: "CSZ 1" },
      { src: "/sources/Produkty/celoskla/csz2.jpg", alt: "Celosklá CSZ - variant 2", label: "CSZ 2" },
      { src: "/sources/Produkty/celoskla/csz3.jpg", alt: "Celosklá CSZ - variant 3", label: "CSZ 3" },
    ],
    slug: "celoskla-csz",
  },
  "celoskla-csal": {
    title: "Celosklá CSAL",
    description: "Hliníkové celosklené systémy",
    mainImage: "/sources/Produkty/celoskla/csal main.jpg",
    mainImageAlt: "Celosklá CSAL - hlavný obrázok",
    gallery: [
      { src: "/sources/Produkty/celoskla/csal1.jpg", alt: "Celosklá CSAL - variant 1", label: "CSAL 1" },
    ],
    slug: "celoskla-csal",
    csalSeries: true,
  },
};

export const HOME_PRODUCTS = [
  {
    href: "/produkty/dvere/seria-a",
    title: "Dvere",
    image: "/sources/referencie/dvere/RD/12711459860579RD-2.jpg",
    alt: "Interiérové dvere",
  },
  {
    href: "/produkty/zarubne",
    title: "Zárubne",
    image: "/sources/referencie/dvere/Vystava Nitra/38261460747281Dvere-v-hlinikovej-skrytej-zarubni.jpg",
    alt: "Zárubne",
  },
  {
    href: "/produkty/schody",
    title: "Drevené schody",
    image: "/sources/referencie/schody/RD Zahorska Bystrica/87231603264020schody-3.jpg",
    alt: "Drevené schody",
  },
  {
    href: "/produkty/nabytok",
    title: "Nábytok na mieru",
    image: "/sources/referencie/nabytok/Byt Bojnice/70061628778363satnik-spalna.jpg",
    alt: "Nábytok na mieru",
  },
  {
    href: "/produkty/celoskla/celoskla-css",
    title: "Celosklá",
    image: "/sources/Produkty/celoskla/css main.jpg",
    alt: "Celosklá",
  },
  {
    href: "/produkty/obklady",
    title: "Obklady",
    image: "/sources/referencie/obklady/Byt Bojnice 2/61161603716724detail-obkladu-2.jpg",
    alt: "Obklady",
  },
];

export const HOME_GALLERY = [
  { image: "/sources/referencie/schody/RD Bratislava/9210151007285139211509973425schody-1.jpg", alt: "WENS DOOR - drevené schody" },
  { image: "/sources/referencie/nabytok/Kozmeticky Salon Sona/11371629215414_DSC5179.jpg", alt: "WENS DOOR - nábytok na mieru" },
  { image: "/sources/referencie/celoskla/RD Partizanske/2081491831559celosklo-3.jpg", alt: "WENS DOOR - celosklenené dvere" },
  { image: "/sources/referencie/dvere/Byt v Bratislave/19111478861633_MG_6160.jpeg", alt: "WENS DOOR - moderné dvere" },
  { image: "/sources/referencie/nabytok/Byt Bojnice/70061628778363satnik-spalna.jpg", alt: "WENS DOOR - šatníkové riešenia" },
  { image: "/sources/referencie/schody/RD Zahorska Bystrica/12161603264019schody.jpg", alt: "WENS DOOR - kvalitné schody" },
  { image: "/sources/referencie/celoskla/RD Zahorska Bystrica/870714648732091.jpg", alt: "WENS DOOR - celosklenené riešenia" },
];

export const REFERENCE_TABS = [
  { id: "dvere", label: "Dvere" },
  { id: "schody", label: "Schody" },
  { id: "nabytok", label: "Nábytok" },
  { id: "celoskla", label: "Celosklá" },
  { id: "obklady", label: "Obklady" },
];
