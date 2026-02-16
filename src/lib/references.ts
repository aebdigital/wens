export interface ReferenceProject {
  name: string;
  category: string;
  description?: string;
  images: { src: string; alt: string }[];
}

// Legacy ordering per category
const LEGACY_ORDER: Record<string, string[]> = {
  dvere: [
    "Byt Bojnice",           // byt bojnice folder
    "RD Záhorská Bystrica",
    "Byt Bojnice 2",         // Byt Bojnice 2 folder
    "Kozmetický Salón",
    "Byt v Bojniciach",
    "Výstava Nitra 2018",
    "RD Bojnice",
    "Výstava Nitra 2017",
    "Predajňa R1 Bratislava",
    "RD Partizánske",
    "Byt v Bratislave",
    "Výstava Nitra 2016",
    "RD Topoľčany",
    "Byt Banská Bystrica",
    "Múzeum Danub",
    "Administratívna budova Martin",
    "Zubná ambulancia Hlohovec",
    "Výstava Nitra",
    "RD Ružinov",
    "Chata Horná Maríková",
    "Byt v Bratislave 7",
    "Byt v Bratislave 2",
    "RD Rusovce",
    "RD Devín",
    "Byt Žilina",
    "RD",
    "Byt v Bratislave 3",
    "Byt v Bratislave 4",
    "RD 2",
    "RD Bratislava",
    "RD Bojnice 2",
    "RD okres Prievidza",
    "Byt v Bratislave 5",
    "RD Dúbravka",
    "RD Bojnice 3",
    "Byt v Bratislave 6",
  ],
  schody: [
    "RD Wolfsthal",
    "RD Záhorská Bystrica",
    "RD Bratislava",
    "Administratívna budova Martin",
    "RD Záhorská Bystrica 2",
    "RD Ružinov",
    "RD Rusovce",
    "RD Rusovce 2",
    "RD Partizánske",
    "RD Bratislava 2",
    "RD okr. Prievidza",
  ],
  nabytok: [
    "Kozmetický Salón Soňa",
    "Byt Bojnice",
    "Apartmán Bojnice",
    "Predajňa WENS door",
    "RD Záhorská Bystrica",
    "Byt Bojnice 2",
    "Kozmetický Salón",
    "RD Partizánske",
    "Byt Bratislava",
    "Byt pod Slavínom",
    "Byt Banská Bystrica",
    "Múzeum moderného umenia Danub",
    "Art Cafe, Bratislava",
    "Byt Bojnice 3",
    "RD Rusovce",
    "RD Stupava",
    "RD Záhorská Bystrica 2",
    "Byt Eurovea",
    "RD Ružinov",
    "Byt v Bratislave 2",
    "Byt v Bratislave 3",
    "Rodinný dom - Partizánske 2",
    "Rodinný dom",
  ],
  celoskla: [
    "Byt Bojnice",
    "RD Partizánske",
    "RD Záhorská Bystrica",
    "Byt Bratislava",
    "RD Devín",
  ],
  obklady: [
    "Byt Bojnice",
    "Byt Bojnice 2",
    "Byt Bojnice 3",
    "Zubná ambulancia Bratislava",
    "RD Partizánske",
    "Hotel pod zámkom, Bojnice",
    "Byt Bratislava",
    "RD Ružinov",
    "Zubná ambulancia Hlohovec",
  ],
};

function sortByLegacyOrder(projects: ReferenceProject[]): ReferenceProject[] {
  return projects.sort((a, b) => {
    const orderA = LEGACY_ORDER[a.category];
    const orderB = LEGACY_ORDER[b.category];
    if (a.category !== b.category) return 0;
    if (!orderA) return 0;
    const idxA = orderA.indexOf(a.name);
    const idxB = orderB.indexOf(b.name);
    return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
  });
}

const _REFERENCE_PROJECTS: ReferenceProject[] = [
  // === DVERE ===
  {
    name: "Administratívna budova Martin",
    category: "dvere",
    description: "Architekt: Mgr. Art. Zajac Mário",
    images: [
      { src: "/sources/referencie/dvere/Administrativna budova Martin/52511460748217interier-2.jpg", alt: "Dvere - Administratívna budova Martin" },
      { src: "/sources/referencie/dvere/Administrativna budova Martin/59891460748217interier-1.jpg", alt: "Dvere - Administratívna budova Martin" },
      { src: "/sources/referencie/dvere/Administrativna budova Martin/66481460748217dvere-1.jpg", alt: "Dvere - Administratívna budova Martin" },
      { src: "/sources/referencie/dvere/Administrativna budova Martin/6891460748217dvere-2.jpg", alt: "Dvere - Administratívna budova Martin" },
    ],
  },
  {
    name: "Byt Banská Bystrica",
    category: "dvere",
    description: "Architekt: Ing. arch. Vasiliak Peter",
    images: [
      { src: "/sources/referencie/dvere/Byt Banska Bystrica/26671460750163dvere-3.jpg", alt: "Dvere - Byt Banská Bystrica" },
      { src: "/sources/referencie/dvere/Byt Banska Bystrica/41871460750163dvere-4.jpg", alt: "Dvere - Byt Banská Bystrica" },
      { src: "/sources/referencie/dvere/Byt Banska Bystrica/48121460750163dvere-1.jpg", alt: "Dvere - Byt Banská Bystrica" },
      { src: "/sources/referencie/dvere/Byt Banska Bystrica/90811460750163dvere-2.jpg", alt: "Dvere - Byt Banská Bystrica" },
    ],
  },
  {
    name: "Byt Bojnice 2",
    category: "dvere",
    description: "Architekt: STUDIO e, Ing. arch. Erik Pastucha",
    images: [
      { src: "/sources/referencie/dvere/Byt Bojnice 2/21491594279440posuvne-dvere-v-obklade.jpg", alt: "Dvere - Byt Bojnice" },
      { src: "/sources/referencie/dvere/Byt Bojnice 2/35811594279440dvere-v-obklade.jpg", alt: "Dvere - Byt Bojnice" },
      { src: "/sources/referencie/dvere/Byt Bojnice 2/98441594279440satnikdvere.jpg", alt: "Dvere - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Žilina",
    category: "dvere",
    description: "Architekt: Ing. arch. Malovaný Ondřej",
    images: [
      { src: "/sources/referencie/dvere/Byt Zilina/21311459860719byt-v-Ziline-1.jpeg", alt: "Dvere - Byt Žilina" },
      { src: "/sources/referencie/dvere/Byt Zilina/46071459860719byt-v-Ziline-2.jpeg", alt: "Dvere - Byt Žilina" },
    ],
  },
  {
    name: "Byt v Bojniciach",
    category: "dvere",
    description: "Architekt: ...",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bojniciach/257715734784631.jpeg", alt: "Dvere - Byt v Bojniciach" },
      { src: "/sources/referencie/dvere/Byt v Bojniciach/456515734784632.jpeg", alt: "Dvere - Byt v Bojniciach" },
      { src: "/sources/referencie/dvere/Byt v Bojniciach/814115734784633.jpeg", alt: "Dvere - Byt v Bojniciach" },
    ],
  },
  {
    name: "Byt v Bratislave",
    category: "dvere",
    description: "Architekt: Ing.arch. Prutkayová Jankovichová Zuzana",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave/19111478861633_MG_6160.jpeg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave/52331478861633_MG_6142.jpeg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave/80871478861633_MG_6266.jpeg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 2",
    category: "dvere",
    description: "Architekt: ENY-ART",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 2/84501463740711dvere-1.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 2/91521463740711dvere-2.jpg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 3",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 3/36861459862337dvere-3.jpeg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 3/41521459862337dvere-2.jpeg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 3/58821459862337dvere-1.jpeg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 4",
    category: "dvere",
    description: "Architekt: ENY-ART",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 4/25331459860130Byt-BA-1.jpeg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 4/27911459860130Byt-BA-2.jpeg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 5",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 5/19891459859678Byt-BA-3.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 5/4011459859678Byt-BA-2.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 5/55371459859678Byt-BA-4.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 5/56941459859678Byt-BA-1.jpg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 6",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 6/19221464584949byt-BA-1.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 6/35841459513861byt-BA-2.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 6/9421464584949byt-BA-3.jpg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 7",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Byt v Bratislave 7/41961459493411Byt-v-Bratislave-3.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 7/61101459493411Byt-v-Bratislave-1.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 7/75601459493411Byt-v-Bratislave-2.jpg", alt: "Dvere - Byt v Bratislave" },
      { src: "/sources/referencie/dvere/Byt v Bratislave 7/81241459493411Byt-v-Bratislave-5.jpeg", alt: "Dvere - Byt v Bratislave" },
    ],
  },
  {
    name: "Chata Horná Maríková",
    category: "dvere",
    description: "Architekt: Ing. Žilinský Miroslav - APEX",
    images: [
      { src: "/sources/referencie/dvere/Chata Horna Marikova/24111463735045dvere-3.jpg", alt: "Dvere - Chata Horná Maríková" },
      { src: "/sources/referencie/dvere/Chata Horna Marikova/77871463735045dvere-2.jpg", alt: "Dvere - Chata Horná Maríková" },
      { src: "/sources/referencie/dvere/Chata Horna Marikova/97951463735045dvere-1.jpg", alt: "Dvere - Chata Horná Maríková" },
    ],
  },
  {
    name: "Kozmetický Salón",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Kozmeticky Salon/87321573478629salon-3.jpg", alt: "Dvere - Kozmetický Salón" },
    ],
  },
  {
    name: "Múzeum Danub",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/Muzeum Danub/23561460749197dvere-3.jpg", alt: "Dvere - Múzeum Danub" },
      { src: "/sources/referencie/dvere/Muzeum Danub/29751460749197dvere-1.jpg", alt: "Dvere - Múzeum Danub" },
      { src: "/sources/referencie/dvere/Muzeum Danub/45081460749197dvere-2.jpg", alt: "Dvere - Múzeum Danub" },
    ],
  },
  {
    name: "Predajňa R1 Bratislava",
    category: "dvere",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/dvere/Predajna R1 Bratislava/10851495448217dvere-2.jpg", alt: "Dvere - Predajňa R1 Bratislava" },
      { src: "/sources/referencie/dvere/Predajna R1 Bratislava/11361495448217dvere-3.jpg", alt: "Dvere - Predajňa R1 Bratislava" },
      { src: "/sources/referencie/dvere/Predajna R1 Bratislava/72621495448216dvere-1.jpg", alt: "Dvere - Predajňa R1 Bratislava" },
      { src: "/sources/referencie/dvere/Predajna R1 Bratislava/82031495448217dvere-4.jpg", alt: "Dvere - Predajňa R1 Bratislava" },
    ],
  },
  {
    name: "RD",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD/12711459860579RD-2.jpg", alt: "Dvere - Rodinný dom" },
      { src: "/sources/referencie/dvere/RD/33691459860579RD-1.jpg", alt: "Dvere - Rodinný dom" },
    ],
  },
  {
    name: "RD 2",
    category: "dvere",
    description: "Architekt: Ing. arch. Zornička Juraj",
    images: [
      { src: "/sources/referencie/dvere/RD 2/37331463744944RD-2.jpg", alt: "Dvere - Rodinný dom" },
      { src: "/sources/referencie/dvere/RD 2/98461463744944RD-1.jpg", alt: "Dvere - Rodinný dom" },
    ],
  },
  {
    name: "RD Bojnice",
    category: "dvere",
    description: "Architekt: Bc. Ješík Vladimír",
    images: [
      { src: "/sources/referencie/dvere/RD Bojnice/707815235396111.jpg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice/898315235396114.jpg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice/935515235396113.jpg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice/964915235396112.jpg", alt: "Dvere - RD Bojnice" },
    ],
  },
  {
    name: "RD Bojnice 2",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Bojnice 2/51911459515303RD-Bojnice-3.jpeg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice 2/57561459515303RD-Bojnice-1.jpeg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice 2/96561459515303RD-Bojnice-2.jpeg", alt: "Dvere - RD Bojnice" },
    ],
  },
  {
    name: "RD Bojnice 3",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Bojnice 3/14171459493847Rodinny-dom-Bojnice-3.jpeg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice 3/28551459493847Rodinny-dom-Bojnice-1.jpeg", alt: "Dvere - RD Bojnice" },
      { src: "/sources/referencie/dvere/RD Bojnice 3/53311459493847Rodinny-dom-Bojnice-2.jpeg", alt: "Dvere - RD Bojnice" },
    ],
  },
  {
    name: "RD Bratislava",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Bratislava/22381459515579RD-2.jpeg", alt: "Dvere - RD Bratislava" },
      { src: "/sources/referencie/dvere/RD Bratislava/63951459515579RD-4.jpeg", alt: "Dvere - RD Bratislava" },
      { src: "/sources/referencie/dvere/RD Bratislava/84581459515579RD-1.jpeg", alt: "Dvere - RD Bratislava" },
      { src: "/sources/referencie/dvere/RD Bratislava/84671459515579RD-3.jpeg", alt: "Dvere - RD Bratislava" },
    ],
  },
  {
    name: "RD Devín",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Devin/12441459861304RD-2.jpeg", alt: "Dvere - RD Devín" },
      { src: "/sources/referencie/dvere/RD Devin/42401459861304RD-3.jpeg", alt: "Dvere - RD Devín" },
      { src: "/sources/referencie/dvere/RD Devin/5151459861304RD-1.jpeg", alt: "Dvere - RD Devín" },
    ],
  },
  {
    name: "RD Dúbravka",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Dubravka/13381459494265RD-Dubravka-2.jpg", alt: "Dvere - RD Dúbravka" },
      { src: "/sources/referencie/dvere/RD Dubravka/18651459494265RD-Dubravka-4.jpg", alt: "Dvere - RD Dúbravka" },
      { src: "/sources/referencie/dvere/RD Dubravka/77991459494265RD-Dubravka-1.jpg", alt: "Dvere - RD Dúbravka" },
      { src: "/sources/referencie/dvere/RD Dubravka/80651459494265RD-Dubravka-3.jpg", alt: "Dvere - RD Dúbravka" },
    ],
  },
  {
    name: "RD Partizánske",
    category: "dvere",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/dvere/RD Partizanske/25601491831752dvere-v-obklade-7.jpg", alt: "Dvere - RD Partizánske" },
      { src: "/sources/referencie/dvere/RD Partizanske/56791491831752dvere-v-obklade-6.jpg", alt: "Dvere - RD Partizánske" },
      { src: "/sources/referencie/dvere/RD Partizanske/58221491831754dvere-v-obklade.jpg", alt: "Dvere - RD Partizánske" },
      { src: "/sources/referencie/dvere/RD Partizanske/62691491831750dvere-v-obklade-4.jpg", alt: "Dvere - RD Partizánske" },
    ],
  },
  {
    name: "RD Rusovce",
    category: "dvere",
    description: "Architekt: Bc. Veselý Andrej",
    images: [
      { src: "/sources/referencie/dvere/RD Rusovce/211459862114dvere-2.jpeg", alt: "Dvere - RD Rusovce" },
      { src: "/sources/referencie/dvere/RD Rusovce/75651459862114dvere-1.jpeg", alt: "Dvere - RD Rusovce" },
    ],
  },
  {
    name: "RD Ružinov",
    category: "dvere",
    description: "Architekt: Ing. arch. Vrtáková Alexandra",
    images: [
      { src: "/sources/referencie/dvere/RD Ruzinov/17171460741377dvere-1.jpeg", alt: "Dvere - RD Ružinov" },
      { src: "/sources/referencie/dvere/RD Ruzinov/2031463733949dvere-2.jpeg", alt: "Dvere - RD Ružinov" },
      { src: "/sources/referencie/dvere/RD Ruzinov/69451463733949dvere-4.jpg", alt: "Dvere - RD Ružinov" },
      { src: "/sources/referencie/dvere/RD Ruzinov/79441463733949dvere-v-obklde.jpeg", alt: "Dvere - RD Ružinov" },
    ],
  },
  {
    name: "RD Topoľčany",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD Topolcany/6001472217784dvere-1.jpg", alt: "Dvere - RD Topoľčany" },
      { src: "/sources/referencie/dvere/RD Topolcany/79471472217784dvere-2.jpg", alt: "Dvere - RD Topoľčany" },
    ],
  },
  {
    name: "RD Záhorská Bystrica",
    category: "dvere",
    description: "Architekt: Ing. arch. Jesenaiová Ľuba, Ing. arch. Hubová Alžbeta; foto: Lago Matúš",
    images: [
      { src: "/sources/referencie/dvere/RD Zahorska bystrica/21241603264128dvere-v-obklade-2.jpg", alt: "Dvere - RD Záhorská Bystrica" },
      { src: "/sources/referencie/dvere/RD Zahorska bystrica/22141603264128dvere-v-obklade-3.jpg", alt: "Dvere - RD Záhorská Bystrica" },
      { src: "/sources/referencie/dvere/RD Zahorska bystrica/30601603264128dvere-3.jpg", alt: "Dvere - RD Záhorská Bystrica" },
      { src: "/sources/referencie/dvere/RD Zahorska bystrica/88831603264128dvere.jpg", alt: "Dvere - RD Záhorská Bystrica" },
    ],
  },
  {
    name: "RD okres Prievidza",
    category: "dvere",
    images: [
      { src: "/sources/referencie/dvere/RD okres Prievidza/4611459514385RD-okr.Prievidza-3.jpeg", alt: "Dvere - RD okres Prievidza" },
      { src: "/sources/referencie/dvere/RD okres Prievidza/61841459514385RD-okr.Prievidza-2.jpeg", alt: "Dvere - RD okres Prievidza" },
      { src: "/sources/referencie/dvere/RD okres Prievidza/77401459514385RD-okr.Prievidza-4.jpeg", alt: "Dvere - RD okres Prievidza" },
      { src: "/sources/referencie/dvere/RD okres Prievidza/84501459514385RD-okr.Prievidza-1.jpeg", alt: "Dvere - RD okres Prievidza" },
    ],
  },
  {
    name: "Výstava Nitra",
    category: "dvere",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/dvere/Vystava Nitra/37521460747281Dvere-bezfalcove-v-obklade.jpg", alt: "Dvere - Výstava Nitra" },
      { src: "/sources/referencie/dvere/Vystava Nitra/38261460747281Dvere-v-hlinikovej-skrytej-zarubni.jpg", alt: "Dvere - Výstava Nitra" },
      { src: "/sources/referencie/dvere/Vystava Nitra/53511460747281Bezfalcove-dvere-zatvorene---otvaranie-dnu-a-von.jpg", alt: "Dvere - Výstava Nitra" },
      { src: "/sources/referencie/dvere/Vystava Nitra/54211460747281Bezfalcove-dvere-otvorene---otvaranie-dnu-a-von.jpg", alt: "Dvere - Výstava Nitra" },
    ],
  },
  {
    name: "Výstava Nitra 2016",
    category: "dvere",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/dvere/Vystava Nitra 2016/16731473597295277414725628871.jpg", alt: "Dvere - Výstava Nitra 2016" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2016/22014725628873.jpg", alt: "Dvere - Výstava Nitra 2016" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2016/277414725628871.jpg", alt: "Dvere - Výstava Nitra 2016" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2016/698714725628876.jpg", alt: "Dvere - Výstava Nitra 2016" },
    ],
  },
  {
    name: "Výstava Nitra 2017",
    category: "dvere",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/dvere/Vystava Nitra 2017/11415235344554.jpeg", alt: "Dvere - Výstava Nitra 2017" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2017/197915235344551.jpg", alt: "Dvere - Výstava Nitra 2017" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2017/39315235344553.jpg", alt: "Dvere - Výstava Nitra 2017" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2017/5615235344552.jpg", alt: "Dvere - Výstava Nitra 2017" },
    ],
  },
  {
    name: "Výstava Nitra 2018",
    category: "dvere",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/dvere/Vystava Nitra 2018/48581550663759obklad-deleny.jpeg", alt: "Dvere - Výstava Nitra 2018" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2018/57211550663823dvere-so-skrytou-a-zapustenou-zarubnou.jpeg", alt: "Dvere - Výstava Nitra 2018" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2018/59921550663730Viedenske-dvere.jpg", alt: "Dvere - Výstava Nitra 2018" },
      { src: "/sources/referencie/dvere/Vystava Nitra 2018/7611551704001dvere-v-obklade.jpeg", alt: "Dvere - Výstava Nitra 2018" },
    ],
  },
  {
    name: "Zubná ambulancia Hlohovec",
    category: "dvere",
    description: "Architekt: BENAR - Ing. Henrieta Fleischhackerová",
    images: [
      { src: "/sources/referencie/dvere/Zubna ambulancia Hlohovec/12061460747894dvere-4.jpg", alt: "Dvere - Zubná ambulancia Hlohovec" },
      { src: "/sources/referencie/dvere/Zubna ambulancia Hlohovec/1861460747894dvere-2.jpg", alt: "Dvere - Zubná ambulancia Hlohovec" },
      { src: "/sources/referencie/dvere/Zubna ambulancia Hlohovec/39781460747894dvere-3.jpg", alt: "Dvere - Zubná ambulancia Hlohovec" },
      { src: "/sources/referencie/dvere/Zubna ambulancia Hlohovec/7051460747894dvere-1.jpg", alt: "Dvere - Zubná ambulancia Hlohovec" },
    ],
  },
  {
    name: "Byt Bojnice",
    category: "dvere",
    description: "Architekt: ...",
    images: [
      { src: "/sources/referencie/dvere/byt bojnice/13001628777979dvere-v-obklade-3.jpg", alt: "Dvere - Byt Bojnice" },
      { src: "/sources/referencie/dvere/byt bojnice/57361628777979obkladdvere-v-obklade.jpg", alt: "Dvere - Byt Bojnice" },
      { src: "/sources/referencie/dvere/byt bojnice/8201628777978dvere-v-obklade-2.jpg", alt: "Dvere - Byt Bojnice" },
      { src: "/sources/referencie/dvere/byt bojnice/82141628777979dvere-v-obklade.jpg", alt: "Dvere - Byt Bojnice" },
    ],
  },

  // === SCHODY ===
  {
    name: "Administratívna budova Martin",
    category: "schody",
    description: "Architekt: Mgr. Art. Zajac Mário",
    images: [
      { src: "/sources/referencie/schody/Administrativna budova Martin/24021460748307schody-1.jpg", alt: "Schody - Administratívna budova Martin" },
    ],
  },
  {
    name: "RD Bratislava",
    category: "schody",
    description: "Architekt: Bc. Veselý Andrej; foto: Lago Matúš",
    images: [
      { src: "/sources/referencie/schody/RD Bratislava/9210151007285139211509973425schody-1.jpg", alt: "Schody - RD Bratislava" },
      { src: "/sources/referencie/schody/RD Bratislava/8775151007285147851509973426schody-2.jpg", alt: "Schody - RD Bratislava" },
      { src: "/sources/referencie/schody/RD Bratislava/1720151007285293581509973426schody-3.jpg", alt: "Schody - RD Bratislava" },
      { src: "/sources/referencie/schody/RD Bratislava/5881151007285376261509973429schody-4.jpg", alt: "Schody - RD Bratislava" },
    ],
  },
  {
    name: "RD Bratislava 2",
    category: "schody",
    description: "Architekt: Bc. Veselý Andrej",
    images: [
      { src: "/sources/referencie/schody/RD Bratislava 2/62451459515643RD-S2.jpeg", alt: "Schody - RD Bratislava" },
      { src: "/sources/referencie/schody/RD Bratislava 2/76521459515643RD-S1.jpeg", alt: "Schody - RD Bratislava" },
    ],
  },
  {
    name: "RD Partizánske",
    category: "schody",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/schody/RD Partizanske/52351463743714RD---schody-1.jpeg", alt: "Schody - RD Partizánske" },
      { src: "/sources/referencie/schody/RD Partizanske/57761463743714RD---schody-2.jpeg", alt: "Schody - RD Partizánske" },
    ],
  },
  {
    name: "RD Rusovce",
    category: "schody",
    description: "Architekt: Ing. arch. Zornička Juraj",
    images: [
      { src: "/sources/referencie/schody/RD Rusovce/40371460740326schody-4.jpeg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce/51221460740326schody-1.jpg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce/64091460740326schody-3.jpg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce/91241460740326schody-2.jpg", alt: "Schody - RD Rusovce" },
    ],
  },
  {
    name: "RD Rusovce 2",
    category: "schody",
    description: "Architekt: Bc. Veselý Andrej",
    images: [
      { src: "/sources/referencie/schody/RD Rusovce 2/15291459862042schody-6.jpeg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce 2/18281459862042schoy-5.jpeg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce 2/34671459862042schody-3.jpeg", alt: "Schody - RD Rusovce" },
      { src: "/sources/referencie/schody/RD Rusovce 2/69511459862042schody-1.jpeg", alt: "Schody - RD Rusovce" },
    ],
  },
  {
    name: "RD Ružinov",
    category: "schody",
    description: "Architekt: Ing. arch. Vrtáková Alexandra",
    images: [
      { src: "/sources/referencie/schody/RD Ruzinov/45381463732895schody-3.jpg", alt: "Schody - RD Ružinov" },
      { src: "/sources/referencie/schody/RD Ruzinov/47831463732895schody-2.jpg", alt: "Schody - RD Ružinov" },
      { src: "/sources/referencie/schody/RD Ruzinov/54831463732895schody-1.jpg", alt: "Schody - RD Ružinov" },
    ],
  },
  {
    name: "RD Wolfsthal",
    category: "schody",
    description: "Architekt: Ing. arch. Zuzana Prutkayová Jankovichová",
    images: [
      { src: "/sources/referencie/schody/RD Wolfsthal/5601603722671IMAG3847.jpg", alt: "Schody - RD Wolfsthal" },
      { src: "/sources/referencie/schody/RD Wolfsthal/86431603722671IMAG3843.jpg", alt: "Schody - RD Wolfsthal" },
    ],
  },
  {
    name: "RD Záhorská Bystrica",
    category: "schody",
    description: "Architekt: Ing. arch. Jesenaiová Ľuba, Ing. arch. Hubová Alžbeta; foto: Lago Matúš",
    images: [
      { src: "/sources/referencie/schody/RD Zahorska Bystrica/12161603264019schody.jpg", alt: "Schody - RD Záhorská Bystrica" },
      { src: "/sources/referencie/schody/RD Zahorska Bystrica/77501603264020schody-2.jpg", alt: "Schody - RD Záhorská Bystrica" },
      { src: "/sources/referencie/schody/RD Zahorska Bystrica/87231603264020schody-3.jpg", alt: "Schody - RD Záhorská Bystrica" },
    ],
  },
  {
    name: "RD Záhorská Bystrica 2",
    category: "schody",
    description: "Architekt: winwin",
    images: [
      { src: "/sources/referencie/schody/RD Zahorska Bystrica 2/4761460745272schody-1.jpg", alt: "Schody - RD Záhorská Bystrica" },
      { src: "/sources/referencie/schody/RD Zahorska Bystrica 2/67381460745272schody-2.jpg", alt: "Schody - RD Záhorská Bystrica" },
      { src: "/sources/referencie/schody/RD Zahorska Bystrica 2/97891460745272pivnica-4.jpg", alt: "Schody - RD Záhorská Bystrica" },
    ],
  },
  {
    name: "RD okr. Prievidza",
    category: "schody",
    images: [
      { src: "/sources/referencie/schody/RD okr. Prievidza/38691459514670RD-okr.-Prievidza-S1.jpeg", alt: "Schody - RD okr. Prievidza" },
      { src: "/sources/referencie/schody/RD okr. Prievidza/59921459514670RD-okr.-Prievidza-S3.jpeg", alt: "Schody - RD okr. Prievidza" },
      { src: "/sources/referencie/schody/RD okr. Prievidza/94471459514670RD-okr.-Prievidza-S2.jpeg", alt: "Schody - RD okr. Prievidza" },
    ],
  },

  // === NABYTOK ===
  {
    name: "Apartmán Bojnice",
    category: "nabytok",
    description: "Architekt: Veronika Neudecker",
    images: [
      { src: "/sources/referencie/nabytok/Apartman Bojnice/16591628756263DSC_5812.jpg", alt: "Nábytok - Apartmán Bojnice" },
      { src: "/sources/referencie/nabytok/Apartman Bojnice/16961628756263DSC_5961.jpg", alt: "Nábytok - Apartmán Bojnice" },
      { src: "/sources/referencie/nabytok/Apartman Bojnice/1831628756263DSC_5929.jpg", alt: "Nábytok - Apartmán Bojnice" },
      { src: "/sources/referencie/nabytok/Apartman Bojnice/19881628756263DSC_5873.jpg", alt: "Nábytok - Apartmán Bojnice" },
    ],
  },
  {
    name: "Art Cafe, Bratislava",
    category: "nabytok",
    description: "Architekt: Ing. arch. Chaban Peter",
    images: [
      { src: "/sources/referencie/nabytok/Art Cafe, Sturove namestie, Bratislava/24161460748651Art-cafe--bar-4.jpg", alt: "Nábytok - Art Cafe Bratislava" },
      { src: "/sources/referencie/nabytok/Art Cafe, Sturove namestie, Bratislava/24801460748651Art-cafe--bar-3.jpg", alt: "Nábytok - Art Cafe Bratislava" },
      { src: "/sources/referencie/nabytok/Art Cafe, Sturove namestie, Bratislava/52541460748651Art-cafe--bar-5.jpg", alt: "Nábytok - Art Cafe Bratislava" },
      { src: "/sources/referencie/nabytok/Art Cafe, Sturove namestie, Bratislava/52781460748651Art-cafe--bar-1.jpg", alt: "Nábytok - Art Cafe Bratislava" },
    ],
  },
  {
    name: "Byt Banská Bystrica",
    category: "nabytok",
    description: "Architekt: Ing. arch. Vasiliak Peter",
    images: [
      { src: "/sources/referencie/nabytok/Byt Banska Bystrica/16441460750225interier-4.jpg", alt: "Nábytok - Byt Banská Bystrica" },
      { src: "/sources/referencie/nabytok/Byt Banska Bystrica/59811460750225interier-1.jpg", alt: "Nábytok - Byt Banská Bystrica" },
      { src: "/sources/referencie/nabytok/Byt Banska Bystrica/65621460750225interier-3.jpg", alt: "Nábytok - Byt Banská Bystrica" },
      { src: "/sources/referencie/nabytok/Byt Banska Bystrica/7561460750225interier-2.jpg", alt: "Nábytok - Byt Banská Bystrica" },
    ],
  },
  {
    name: "Byt Bojnice",
    category: "nabytok",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bojnice/1751628778364kuchyna.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice/28291628778364satnik-spalna-2.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice/70061628778363satnik-spalna.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice/84111628778363TV-skrinka.jpg", alt: "Nábytok - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bojnice 2",
    category: "nabytok",
    description: "Architekt: STUDIO e, Ing. arch. Erik Pastucha",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bojnice 2/10341594279636Kuchyna-2.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 2/42591594279636kuchyna.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 2/83921594279636nabytok.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 2/72351594279636satnikdvere.jpg", alt: "Nábytok - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bojnice 3",
    category: "nabytok",
    description: "Architekt: Holička Ján",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bojnice 3/1321460747629Interier-3.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 3/57781460747629Interier-1.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 3/68731460747629Interier-2.jpg", alt: "Nábytok - Byt Bojnice" },
      { src: "/sources/referencie/nabytok/Byt Bojnice 3/45711460747629Interier-4.jpg", alt: "Nábytok - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bratislava",
    category: "nabytok",
    description: "Architekt: Ing. arch. Chaban Peter",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bratislava/1571478865476_MG_6152.jpeg", alt: "Nábytok - Byt Bratislava" },
      { src: "/sources/referencie/nabytok/Byt Bratislava/50511478865476_MG_6119.jpeg", alt: "Nábytok - Byt Bratislava" },
      { src: "/sources/referencie/nabytok/Byt Bratislava/62751478865476_MG_6222.jpeg", alt: "Nábytok - Byt Bratislava" },
      { src: "/sources/referencie/nabytok/Byt Bratislava/66671478865476_MG_6200.jpeg", alt: "Nábytok - Byt Bratislava" },
    ],
  },
  {
    name: "Byt Eurovea",
    category: "nabytok",
    description: "Architekt: winwin",
    images: [
      { src: "/sources/referencie/nabytok/Byt eurovea/21711460742110interier-2.jpg", alt: "Nábytok - Byt Eurovea" },
      { src: "/sources/referencie/nabytok/Byt eurovea/82611460742110interier-1.jpg", alt: "Nábytok - Byt Eurovea" },
      { src: "/sources/referencie/nabytok/Byt eurovea/87841460742110interier-3.jpg", alt: "Nábytok - Byt Eurovea" },
      { src: "/sources/referencie/nabytok/Byt eurovea/44971460742110interier-4.jpg", alt: "Nábytok - Byt Eurovea" },
    ],
  },
  {
    name: "Byt pod Slavínom",
    category: "nabytok",
    description: "Architekt: Ing. arch. Vrtáková Alexandra",
    images: [
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/499714637215021.jpg", alt: "Nábytok - Byt pod Slavínom" },
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/263614637215022.jpg", alt: "Nábytok - Byt pod Slavínom" },
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/617514637215023.jpg", alt: "Nábytok - Byt pod Slavínom" },
      { src: "/sources/referencie/nabytok/Byt pod Slavinom/785214637215024.jpg", alt: "Nábytok - Byt pod Slavínom" },
    ],
  },
  {
    name: "Kozmetický Salón Soňa",
    category: "nabytok",
    description: "Architekt: Miroslav Zlocha",
    images: [
      { src: "/sources/referencie/nabytok/Kozmeticky Salon Sona/11371629215414_DSC5179.jpg", alt: "Nábytok - Kozmetický Salón Soňa" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon Sona/4901629215414_DSC5165.jpg", alt: "Nábytok - Kozmetický Salón Soňa" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon Sona/68341629215414_DSC5177.jpg", alt: "Nábytok - Kozmetický Salón Soňa" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon Sona/18931629215414IMG_9556.jpeg", alt: "Nábytok - Kozmetický Salón Soňa" },
    ],
  },
  {
    name: "Kozmetický Salón",
    category: "nabytok",
    images: [
      { src: "/sources/referencie/nabytok/Kozmeticky Salon/48731573478717salon-4.jpg", alt: "Nábytok - Kozmetický Salón" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon/61991573478717salon-3.jpg", alt: "Nábytok - Kozmetický Salón" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon/63011573478717salon.jpg", alt: "Nábytok - Kozmetický Salón" },
      { src: "/sources/referencie/nabytok/Kozmeticky Salon/95961573478717salon-2.jpg", alt: "Nábytok - Kozmetický Salón" },
    ],
  },
  {
    name: "Múzeum moderného umenia Danub",
    category: "nabytok",
    images: [
      { src: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/15691460749378interier-2.jpg", alt: "Nábytok - Múzeum Danub" },
      { src: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/17871460749378interier-5.jpg", alt: "Nábytok - Múzeum Danub" },
      { src: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/35681460749378interier-4.jpg", alt: "Nábytok - Múzeum Danub" },
      { src: "/sources/referencie/nabytok/Muzemu moderneho umenia, Danub/97131460749378interier-1.jpg", alt: "Nábytok - Múzeum Danub" },
    ],
  },
  {
    name: "Predajňa WENS door",
    category: "nabytok",
    description: "Architekt: Wens door",
    images: [
      { src: "/sources/referencie/nabytok/Predajna WENS door/25181603718141predajna-2.jpg", alt: "Nábytok - Predajňa WENS door" },
      { src: "/sources/referencie/nabytok/Predajna WENS door/60631603718151predajna-3.jpg", alt: "Nábytok - Predajňa WENS door" },
      { src: "/sources/referencie/nabytok/Predajna WENS door/74001603718063kupelna.jpg", alt: "Nábytok - Predajňa WENS door" },
      { src: "/sources/referencie/nabytok/Predajna WENS door/961603718161predajna-4.jpg", alt: "Nábytok - Predajňa WENS door" },
    ],
  },
  {
    name: "RD Partizánske",
    category: "nabytok",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/nabytok/RD Partizanske/25921491832107Tv-skrinka.jpg", alt: "Nábytok - RD Partizánske" },
      { src: "/sources/referencie/nabytok/RD Partizanske/3751491832106satnik.jpg", alt: "Nábytok - RD Partizánske" },
      { src: "/sources/referencie/nabytok/RD Partizanske/76361491832105satnik-2.jpg", alt: "Nábytok - RD Partizánske" },
      { src: "/sources/referencie/nabytok/RD Partizanske/82771491832104obyvacka.jpg", alt: "Nábytok - RD Partizánske" },
    ],
  },
  {
    name: "RD Rusovce",
    category: "nabytok",
    description: "Architekt: Ing. arch. Chaban Peter",
    images: [
      { src: "/sources/referencie/nabytok/RD Rusovce/19901460746855pivnica-1.jpg", alt: "Nábytok - RD Rusovce" },
      { src: "/sources/referencie/nabytok/RD Rusovce/30871460746855interier-3.jpg", alt: "Nábytok - RD Rusovce" },
      { src: "/sources/referencie/nabytok/RD Rusovce/49211460746855interier-1.jpg", alt: "Nábytok - RD Rusovce" },
      { src: "/sources/referencie/nabytok/RD Rusovce/62131460746855interier-2.jpg", alt: "Nábytok - RD Rusovce" },
    ],
  },
  {
    name: "RD Ružinov",
    category: "nabytok",
    description: "Architekt: Ing. arch. Vrtáková Alexandra",
    images: [
      { src: "/sources/referencie/nabytok/RD Ruzinov/75131463734160nabytok-1.jpeg", alt: "Nábytok - RD Ružinov" },
      { src: "/sources/referencie/nabytok/RD Ruzinov/7641463734160nabytok-2.jpeg", alt: "Nábytok - RD Ružinov" },
      { src: "/sources/referencie/nabytok/RD Ruzinov/88601463734160nabytok-3.jpeg", alt: "Nábytok - RD Ružinov" },
      { src: "/sources/referencie/nabytok/RD Ruzinov/23301463734160nabytok-5.jpeg", alt: "Nábytok - RD Ružinov" },
    ],
  },
  {
    name: "RD Stupava",
    category: "nabytok",
    description: "Architekt: Ing. arch. Jesenaiová Ľubica",
    images: [
      { src: "/sources/referencie/nabytok/RD Stupava/45861460746297Interior-1.jpg", alt: "Nábytok - RD Stupava" },
      { src: "/sources/referencie/nabytok/RD Stupava/61171460746297Interior-2.jpg", alt: "Nábytok - RD Stupava" },
      { src: "/sources/referencie/nabytok/RD Stupava/56411460746297Interior-3.jpg", alt: "Nábytok - RD Stupava" },
      { src: "/sources/referencie/nabytok/RD Stupava/7791460746297Interior-4.jpg", alt: "Nábytok - RD Stupava" },
    ],
  },
  {
    name: "RD Záhorská Bystrica",
    category: "nabytok",
    description: "Architekt: Ing. arch. Jesenaiová Ľuba, Ing. arch. Hubová Alžbeta; foto: Lago Matúš",
    images: [
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/90871603263738obyvacka.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/42661603263475kuchyna.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/69631603263892spalna.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica/41921603263316deti.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
    ],
  },
  {
    name: "RD Záhorská Bystrica 2",
    category: "nabytok",
    description: "Architekt: winwin",
    images: [
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica 2/28461460744829interier-1.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica 2/36581460744829interier-2.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica 2/30241460744829interier-3.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
      { src: "/sources/referencie/nabytok/RD Zahorska Bystrica 2/13011460744829interier-4.jpg", alt: "Nábytok - RD Záhorská Bystrica" },
    ],
  },
  {
    name: "Byt v Bratislave 2",
    category: "nabytok",
    description: "Architekt: ...",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bratislava 2/25781463740590skrinka-do-kupelne.jpg", alt: "Byt v Bratislave" },
    ],
  },
  {
    name: "Byt v Bratislave 3",
    category: "nabytok",
    description: "Architekt: ...",
    images: [
      { src: "/sources/referencie/nabytok/Byt Bratislava 3/43891459862416satnik-2.jpeg", alt: "Byt v Bratislave" },
      { src: "/sources/referencie/nabytok/Byt Bratislava 3/5291459862416satnik-1.jpeg", alt: "Byt v Bratislave" },
      { src: "/sources/referencie/nabytok/Byt Bratislava 3/97221459862416stol.jpeg", alt: "Byt v Bratislave" },
    ],
  },
  {
    name: "Rodinný dom - Partizánske 2",
    category: "nabytok",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/nabytok/RD Partizanske 2/60701463742837RD---kniznica.jpeg", alt: "Rodinný dom - Partizánske" },
    ],
  },
  {
    name: "Rodinný dom",
    category: "nabytok",
    description: "Architekt: Ing. arch. Zornička Juraj",
    images: [
      { src: "/sources/referencie/nabytok/RD/82551463744861RD-3.jpg", alt: "Rodinný dom" },
    ],
  },

  // === CELOSKLA ===
  {
    name: "Byt Bojnice",
    category: "celoskla",
    images: [
      { src: "/sources/referencie/celoskla/Byt Bojnice/27351594280144Sprchovy-kut.jpg", alt: "Celosklá - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bratislava",
    category: "celoskla",
    description: "Architekt: Ing. arch. Chaban Peter",
    images: [
      { src: "/sources/referencie/celoskla/Byt Bratislava/63331463741446dvere-celosklenene-1.jpg", alt: "Celosklá - Byt Bratislava" },
      { src: "/sources/referencie/celoskla/Byt Bratislava/99531463741446dvere-celosklenene-2.jpg", alt: "Celosklá - Byt Bratislava" },
    ],
  },
  {
    name: "RD Devín",
    category: "celoskla",
    images: [
      { src: "/sources/referencie/celoskla/RD Devin/1881463734472celosklenene-dvere-1.jpeg", alt: "Celosklá - RD Devín" },
      { src: "/sources/referencie/celoskla/RD Devin/26281463734472celosklenene-dvere-2.jpeg", alt: "Celosklá - RD Devín" },
    ],
  },
  {
    name: "RD Partizánske",
    category: "celoskla",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/celoskla/RD Partizanske/2081491831559celosklo-3.jpg", alt: "Celosklá - RD Partizánske" },
      { src: "/sources/referencie/celoskla/RD Partizanske/6261491831560Celosklo.jpg", alt: "Celosklá - RD Partizánske" },
      { src: "/sources/referencie/celoskla/RD Partizanske/81071491831559celosklo-2.jpg", alt: "Celosklá - RD Partizánske" },
    ],
  },
  {
    name: "RD Záhorská Bystrica",
    category: "celoskla",
    description: "Architekt: winwin",
    images: [
      { src: "/sources/referencie/celoskla/RD Zahorska Bystrica/870714648732091.jpg", alt: "Celosklá - RD Záhorská Bystrica" },
      { src: "/sources/referencie/celoskla/RD Zahorska Bystrica/880614648732093.jpg", alt: "Celosklá - RD Záhorská Bystrica" },
      { src: "/sources/referencie/celoskla/RD Zahorska Bystrica/917514648732092.jpg", alt: "Celosklá - RD Záhorská Bystrica" },
    ],
  },

  // === OBKLADY ===
  {
    name: "Byt Bojnice",
    category: "obklady",
    images: [
      { src: "/sources/referencie/obklady/Byt Bojnice/17291628778220satnik-vstup.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice/24061628778220obkladdvere-v-obklade.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice/35661628778220lamelovy-obklad.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice/57301628778220dvere-v-obklade.jpg", alt: "Obklady - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bojnice 2",
    category: "obklady",
    description: "Architekt: STUDIO e, Ing. arch. Erik Pastucha",
    images: [
      { src: "/sources/referencie/obklady/Byt Bojnice 2/45401594280000Obklad-detail.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice 2/54141594280000obkladyskrinky.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice 2/61161603716724detail-obkladu-2.jpg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice 2/95191594280000Obklad.jpg", alt: "Obklady - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bojnice 3",
    category: "obklady",
    description: "Architekt: ...",
    images: [
      { src: "/sources/referencie/obklady/Byt Bojnice 3/527415734788253.jpeg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice 3/671915734788251.jpeg", alt: "Obklady - Byt Bojnice" },
      { src: "/sources/referencie/obklady/Byt Bojnice 3/705215734788252.jpeg", alt: "Obklady - Byt Bojnice" },
    ],
  },
  {
    name: "Byt Bratislava",
    category: "obklady",
    description: "Architekt: Ing. arch. Prutkayová Jurovichová Zuzana",
    images: [
      { src: "/sources/referencie/obklady/Byt Bratislava/29761478865666_MG_6266.jpeg", alt: "Obklady - Byt Bratislava" },
      { src: "/sources/referencie/obklady/Byt Bratislava/31551478865666_MG_6142.jpeg", alt: "Obklady - Byt Bratislava" },
    ],
  },
  {
    name: "Hotel pod zámkom, Bojnice",
    category: "obklady",
    description: "Architekt: Ing. Svitok Radoslav",
    images: [
      { src: "/sources/referencie/obklady/Hotel pod zamkom, Bojnice/27941488974699obklady-2.jpg", alt: "Obklady - Hotel pod zámkom Bojnice" },
      { src: "/sources/referencie/obklady/Hotel pod zamkom, Bojnice/33351488974699obklady-1.jpg", alt: "Obklady - Hotel pod zámkom Bojnice" },
      { src: "/sources/referencie/obklady/Hotel pod zamkom, Bojnice/611488974699obklady-3.jpg", alt: "Obklady - Hotel pod zámkom Bojnice" },
      { src: "/sources/referencie/obklady/Hotel pod zamkom, Bojnice/78241488974699obklady-5.jpg", alt: "Obklady - Hotel pod zámkom Bojnice" },
    ],
  },
  {
    name: "RD Partizánske",
    category: "obklady",
    description: "Architekt: Ing. arch. Minarovič Marián",
    images: [
      { src: "/sources/referencie/obklady/RD Partizanske/21641491831955dvere-v-obklade-4.jpg", alt: "Obklady - RD Partizánske" },
      { src: "/sources/referencie/obklady/RD Partizanske/35701491831956dvere-v-obklade-5.jpg", alt: "Obklady - RD Partizánske" },
      { src: "/sources/referencie/obklady/RD Partizanske/43331491831959obklad.jpg", alt: "Obklady - RD Partizánske" },
      { src: "/sources/referencie/obklady/RD Partizanske/99281491831958dvere-v-obklade.jpg", alt: "Obklady - RD Partizánske" },
    ],
  },
  {
    name: "RD Ružinov",
    category: "obklady",
    description: "Architekt: Ing. arch. Vrtáková Alexandra",
    images: [
      { src: "/sources/referencie/obklady/RD Ruzinov/2911474286286DSC_0028.jpeg", alt: "Obklady - RD Ružinov" },
      { src: "/sources/referencie/obklady/RD Ruzinov/32101474286286DSC_0034.jpeg", alt: "Obklady - RD Ružinov" },
      { src: "/sources/referencie/obklady/RD Ruzinov/9181474286287DSC_0039.jpeg", alt: "Obklady - RD Ružinov" },
    ],
  },
  {
    name: "Zubná ambulancia Bratislava",
    category: "obklady",
    description: "Architekt: ELEMENT - ateliér architektúry s.r.o.",
    images: [
      { src: "/sources/referencie/obklady/Zubna ambulancia Bratislava/37821558531970dvere-v-obklade.jpg", alt: "Obklady - Zubná ambulancia Bratislava" },
      { src: "/sources/referencie/obklady/Zubna ambulancia Bratislava/46591558531958obklad.jpg", alt: "Obklady - Zubná ambulancia Bratislava" },
      { src: "/sources/referencie/obklady/Zubna ambulancia Bratislava/71851558531991recepcia.jpg", alt: "Obklady - Zubná ambulancia Bratislava" },
    ],
  },
  {
    name: "Zubná ambulancia Hlohovec",
    category: "obklady",
    description: "Architekt: BENAR - Ing. Henrieta Fleischhackerová",
    images: [
      { src: "/sources/referencie/obklady/Zubna ambulancia Hlohovec/3191474285617Zubna-poliklinika-Hlohovec-3.jpg", alt: "Obklady - Zubná ambulancia Hlohovec" },
      { src: "/sources/referencie/obklady/Zubna ambulancia Hlohovec/93091474285617Zubna-poliklinika-Hlohovec-4.jpg", alt: "Obklady - Zubná ambulancia Hlohovec" },
    ],
  },
];

export const REFERENCE_PROJECTS = sortByLegacyOrder(_REFERENCE_PROJECTS);
