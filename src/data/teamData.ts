import { path, type ArtistPath, type ArtistSlug } from "@/routes";

type BaseTeamMember = {
  name: string;
  imgSrc: string;
  hoverImgSrc?: string;
  style: string;
  paragraph: string[];
  gallery?: string[];
  instagramUsername?: string;
};

export const buildGallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => 
    `/images/artists/${slug}/image${String(i + 1).padStart(5, "0")}.jpeg`
  );

export const TEAM = {
  klaudia: {
    name: "Klaudia",
    imgSrc: "/images/team/image00006.jpeg",
    hoverImgSrc: "/images/team/image00005.jpeg",
    style: "fineline / single needle",
    paragraph: [
      "Hej! Mam na imię Klaudia, ale wszyscy mówią do mnie śmietanka :)",
      "Jestem tą czarniejszą połową K².inked, jeśli ktoś woli - coownerem.",
      "Tatuażem zajmuję się od 2019 roku. Od samego początku wiedziałam w jakim stylu chcę pracować. Fineline oraz singleneedle to mój świat. W duszy jestem oldschoolem, więc wszystkie prace wykonuję odręcznie moim cienkim i ostrym jak szabla ołóweczkiem. Lubię dopracowywać wszystkie szczegóły i detale do perfekcji. Moje prace na ciele również oddają ołówkowy charakter. Lubię wykonywać małe, delikatne dziarki, ale też jak każda kobieta jestem zmienna i od czasu do czasu mam ochotę na większy projekt. W dużych tatuażach lubię pobawić się w szczegóły i detale, co na koniec daje wspaniały efekt.",
      "Poza tatuowaniem rysuję grafiki. Jestem też ogromną fanką jedzenia :b. Jeśli można mnie czymś przekupić to właśnie tym. Lubię czytać nowinki z zakresu biohackingu, diety, dbania o swoje ciało i zdrowie. Poza studiem można spotkać mnie na siłowni, bo skoro lubię jeść to wiecie... :). I tak na koniec z moich zainteresowań to tak jak każdy oczywiście uwielbiam podróżować, jeśli czas na to pozwala. Przecież trzeba eksplorować lokalne kuchnie prawda?",
      "To chyba tyle o mnie, wpadajcie i poznajcie mnie na żywo!",
    ],
    gallery: buildGallery("klaudia", 12),
    instagramUsername: "klaudiasmietanka",
  },
  kari: {
    name: "Kari",
    imgSrc: "/images/team/image00009.jpeg",
    hoverImgSrc: "/images/team/image00010.jpeg",
    style: "blackwork / realism",
    paragraph: [],
    gallery: buildGallery("kari", 26),
    instagramUsername: "karrchar",
  },
  sonia: {
    name: "Sonia",
    imgSrc: "/images/team/image00003.jpeg",
    hoverImgSrc: "/images/team/image00004.jpeg",
    style: "ornaments / fineline",
    paragraph: [
      "Z wykształcenia graficzka, a od 4 lat tatuatorka. Rozwijam swój warsztat traktując tatuaż nie tylko jako sztukę, ale też sposób na podkreślenie piękna i wyjątkowości każdej osoby.",
      "Moją największą pasją są delikatne i zdobne wzory – kwiaty, ornamenty w stylu secesyjnym i wszelkie detale, które sprawiają, że tatuaż nabiera wyjątkowego charakteru. Moim celem jest to by projekt idealnie pasował do osoby, która go nosi. W pracy stawiam na elegancję i estetykę, ale też na przyjazną atmosferę.",
      "Tworząc, dbam o to, by w studiu panowała atmosfera luzu i zaufania – tak, aby każdy mógł czuć się komfortowo i wyjść z tatuażem, który będzie miał dla niego prawdziwe znaczenie.",
      "W wolnym czasie maluję obrazy i spaceruję po lesie z moim psem, o którym na pewno nie raz wspomnę podczas tatuowania. Mam też słabość do starych hitów z lat 80 i bardzo suchych żartów.",
    ],
    gallery: buildGallery("sonia", 9),
    instagramUsername: "ink.sonique",
  },
  ewelina: {
    name: "Ewelina",
    imgSrc: "/images/team/image00011.jpeg",
    hoverImgSrc: "/images/team/image00012.jpeg",
    style: "dotwork",
    paragraph: [
      "Hej, nazywam się Ewelina – w sieci znajdziecie mnie jako @limerencja.tattoo",
      "Od dziecka byłam zanurzona w procesie twórczym – malowałam, szyłam i eksperymentowałam z różnymi formami sztuki. W 2020 roku sięgnęłam po maszynkę do tatuażu (na własne ryzyko moich znajomych 😉). Zaczynałam od oldschoolowych projektów, ale z czasem moja kreska ewoluowała w stronę fineline, by w końcu przerodzić się w soft dotwork.",
      "Projekty tworzę ręcznie, zanim przeniosę go na skórę. Dzięki temu moje tatuaże są lekkie, organiczne i zbudowane z tysięcy drobnych harmonijnych kropeczek.",
      "Prywatnie kocham modę, sport, operę, antyki, muzykę techno, a także francuskie komedie i skandynawskie kryminały. Jedyną rzeczą, której szczerze nienawidzę, jest… masło. (tak, wiem – dziwny wybór, ale mam z nim wieczną wojnę). ",
      "Jeśli chcesz poznać moją twórczość bliżej – zapraszam do świata kropek, subtelnych linii i projektów, które powstają z serca.",
    ],
    gallery: buildGallery("ewelina", 11),
    instagramUsername: "limerencja.tattoo",
  },
  mirella: {
    name: "Mirella",
    imgSrc: "/images/team/image00007.jpeg",
    hoverImgSrc: "/images/team/image00008.jpeg",
    style: "fineline / microrealism",
    paragraph: [
      "Tatuaż to moja pasja od 2016 roku.",
      "Od lat rozwijam swój warsztat, eksperymentując z różnymi stylami, by z czasem odnaleźć swoją prawdziwą estetykę: fineline i microrealizm – to właśnie w nich czuję się najlepiej i w pełni mogę oddać dbałość o każdy detal.",
      "Mam za sobą setki godzin pracy, tysiące igieł i ogromne doświadczenie, które przekłada się nie tylko na jakość tatuażu, ale też komfort moich klientów. Tatuuję delikatnie – tak, że niektórzy… po prostu zasypiają.",
      "Jeśli szukasz lekkiej, subtelnej kreski, realistycznych detali i atmosfery, w której można się po prostu zrelaksować – zapraszam do mnie.",
    ],
    gallery: buildGallery("mirella", 24),
    instagramUsername: "mirella.tattoo",
  },
  emi: {
    name: "Emi",
    imgSrc: "/images/team/image00001.jpeg",
    hoverImgSrc: "/images/team/image00002.jpeg",
    style: "piercing",
    paragraph: [
      "Emilia to pełna pasji i zaangażowania certyfikowana piercerka, która swoim doświadczeniem i profesjonalizmem szybko zdobyła uznanie w świecie modyfikacji ciała.",
      "Wielokrotnie występowała też na scenie, robiąc pokazy playpiercing oraz needleplay gdzie w performatywny sposób bada granicę bólu i przybliża świat piercingu szerszej publiczności.",
      "Jednocześnie to przemiły, ciepły człowiek o indywidualnym podejściu do klienta pięknym fokusie swojej pracy 🤍",
      "Jeśli marzysz o nietuzinkowym, eleganckim a przede wszystkim bezpiecznym i profesjonalnym piercingu to Emi będzie idealnym wyborem 🫶🏽",
    ],
    gallery: buildGallery("emi", 18),
    instagramUsername: "black.peony.piercing",
  },
} satisfies Record<ArtistSlug, BaseTeamMember>;

export type TeamMember = {
  id: ArtistSlug;
  route: ArtistPath;
} & BaseTeamMember;

export const TEAM_BY_SLUG: Record<ArtistSlug, TeamMember> = (
  Object.entries(TEAM) as [ArtistSlug, BaseTeamMember][]
).reduce(
  (acc, [slug, data]) => {
    acc[slug] = { id: slug, route: path.artist(slug), ...data };
    return acc;
  },
  {} as Record<ArtistSlug, TeamMember>,
);

export const TEAM_LIST: TeamMember[] = Object.values(TEAM_BY_SLUG);
