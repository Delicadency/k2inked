export type Opinion = {
  id: string;
  opinion: string;
  author: string;
  rate: number;
  date: string;
  avatar: string;
};

export const paragraphs: string[] = [
  "Każdy tatuaż i każde przekłucie, to spotkanie, historia i emocje. Zaufanie, jakim obdarzyło nas już tak wiele osób, jest dla nas największym wyróżnieniem 🤍",
  "Wasze słowa i polecenia sprawiają, że wiemy, iż to, co robimy, ma znaczenie. Każda pozytywna opinia to dla nas motywacja, by ozdabiać Wasze ciała jeszcze piękniej – i za każdą z nich jesteśmy szczerze wdzięczne!",
] as const;

export const opinionsData = [
  {
    id: "op1",
    opinion: "Byłem w tym studiu tatuażu w Warszawie i serio – sztos! 😎 Mega miła ekipa, zero spiny, a przy tym pełen profesjonalizm. Wszystko czysto, sprzęt pierwsza klasa, a tatuaż wyszedł dokładnie tak lepiej niż tego oczekiwałem. Atmosfera taka, że człowiek od razu czuje się jak u znajomych. Polecam każdemu, kto chce mieć cudowną dziarkę i miło spędzić czas. Pozdrawiam!",
    author: "Michał Pasik",
    rate: 4,
    date: "2025-08-12",
    avatar: "/images/opinions/michal_pasik.png",
  },
  {
    id: "op2",
    opinion: "Świetne studio z luźnym, przyjaznym podejściem – czujesz się, jakbyś był u dobrej znajomej, a jednocześnie wszystko odbywa się w pełni profesjonalnie. Każdy etap jest dokładnie wytłumaczony, szczególnie jak dbać o świeżą dziarkę.Jeśli, tak jak ja, tatuujecie dłonie – przygotujcie się, że będą was za nie długo trzymać! 😂",
    author: "Jan Tomaszewski",
    rate: 5,
    date: "2025-08-10",
    avatar: "/images/opinions/jan_tomaszewski.png",
  },
  {
    id: "op3",
    opinion: "Z całego serca polecam 🩷🩷🩷🩷🩷🩷!!! Super atmosfera, a dziewczyny robią świetną robotę! Przekłucie goi się znakomicie, a w razie pytań i obaw zawsze mogę liczyć na szybką odpowiedź i pomoc 🫶🏻☺️",
    author: "Oliwia Sęcz",
    rate: 5,
    date: "2025-07-22",
    avatar: "/images/opinions/oliwia_secz.png",
  },
  {
    id: "op4",
    opinion: "Wspaniała atmosfera i świetne dziewczyn a do tego mega profesjonalne. Od Kari mam wszystkie 8 już tatuaży, a najlepsze, że moja mama przekonała się dzięki nim i sama zrobiła sobie kilka w wieku 60 lat.Robiłam również kolczyki u Emi, szybko sprawnie, profesjonalnie i w cudownym towarzystwie. Polecam!",
    author: "KENDI MROCZKOVSKA",
    rate: 5,
    date: "2025-07-10",
    avatar: "/images/opinions/kendi_mroczkovska.png",
  },
  {
    id: "op5",
    opinion: "Sonia to mistrzyni detali! Jej precyzjZrobiłem 3 przekłucia u Emilki nostrila i 2x brew oraz u Kari na 4 tatuażach na dłoni i przedramieniu. Wzorowo się zagoiło, super atmosfera i mega profesjonalne podejście do tematu wszystkich dziewczyn ze studia. Polecam wszystkim jeśli zależy wam na jakościowym wykonaniu i najlepszej opiece profesjonalistek i dbałość o każdy element tatuażu są imponujące. Mój tatuaż jest nie tylko piękny, ale także trwały i starannie wykonany. Sonia sprawiła, że cały proces był przyjemny i bezstresowy. Zdecydowanie polecam K2 Inked każdemu, kto ceni sobie jakość i profesjonalizm.",
    author: "Igor Święty",
    rate: 5,
    date: "2025-07-25",
    avatar: "/images/opinions/igor_swiety.png",
  },
  {
    id: "op6",
    opinion: "Lepszego miejsca na przekłucie wybrać nie mogłam, Emi świetna dziewczyna, która poprowadzi Cię przez cały proces od A do Z w super atmosferze. Dbała o mój komfort i samopoczucie na każdym etapie, a cała procedura przebiegła szybko i bezboleśnie. Efekt końcowy przerósł moje oczekiwania, zdecydowanie polecam i na pewno wrócę po więcej! :Du, kto ceni sobie jakość i profesjonalizm.",
    author: "Iwona Damętka",
    rate: 5,
    date: "2025-07-12",
    avatar: "/images/opinions/iwona_dametka.png",
  },
] satisfies Opinion[]
