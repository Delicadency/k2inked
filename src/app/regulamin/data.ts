export type RichText = Inline[];

export type Inline =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string };

export const t = (text: string): Inline => ({ type: "text", text });
export const b = (text: string): Inline => ({ type: "strong", text });
export const i = (text: string): Inline => ({ type: "em", text });

export type Doc = {
  title?: string;
  lastUpdated?: string; // YYYY-MM-DD
  sections: Section[];
};

export type Section = {
  id?: string;
  title: string;
  blocks: Block[];
};
export type Block =
  | { type: "p"; content: RichText }
  | { type: "h3"; content: string }
  | { type: "ul"; content: ListItem[] }
  | { type: "ol"; content: ListItem[] };

export type ListItem = { content: RichText; children?: ListItem[] };

export const REGULATIONS: Doc = {
  title: "Regulamin i Polityka Prywatności",
  lastUpdated: "2025-08-05",
  sections: [
    {
      id: "definicje",
      title: "Definicje",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Studio "),
                t("- oznacza "),
                b(
                  "Studio Tatuażu K2.inked s.c. z siedzibą w Warszawie, NIP: 7011268827 REGON: 54208751, ",
                ),
                t(
                  "czyli firmę świadczącą usługi tatuowania i piercingu wraz z personelem i wszelkimi udogodnieniami.",
                ),
              ],
            },
            {
              content: [
                b("Klient "),
                t("– osoba fizyczna korzystająca z usług "),
                b("Studia "),
                t(", która akceptuje niniejszy "),
                b("Regulamin"),
                t(
                  ". Klientem może być wyłącznie osoba pełnoletnia, tj. w żadnym stopniu nieograniczona w zdolności do czynności prawnych.",
                ),
              ],
            },
            {
              content: [
                b("Regulamin "),
                t("– niniejszy zbiór zasad i warunków obowiązujących w "),
                b("Studio"),
                t(", określający prawa i obowiązki"),
                b("Klienta "),
                t("oraz "),
                b("Studia"),
                t("."),
              ],
            },
            {
              content: [
                b("Wizyta "),
                t("(lub "),
                b("Sesja"),
                t(
                  ") – umówiony termin wykonania usługi tatuowania lub piercingu w ",
                ),
                b("Studio"),
                t("."),
              ],
            },
            {
              content: [
                b("Zadatek "),
                t("(depozyt) – wpłata pieniężna dokonywana przez "),
                b("Klienta "),
                t("celem potwierdzenia rezerwacji terminu"),
                b("Wizyty"),
                t(". Zadatek jest zaliczany na poczet ceny tatuażu i jest "),
                b("bezzwrotny"),
                t(" chyba że niniejszy "),
                b("Regulamin"),
                t(" stanowi inaczej."),
              ],
            },
            {
              content: [
                b("Tatuator "),
                t("– osoba wykonująca usługę tatuażu w "),
                b("Studio"),
                t(" (artysta tatuażu)."),
              ],
            },
            {
              content: [
                b("Voucher "),
                t("- bon podarunkowy wydawany przez "),
                b("Studio"),
                t("uprawniający do skorzystania z usług "),
                b("Studia"),
                t(
                  " lub pokrycia kosztu usługi do wskazanej na nim wartości, zgodnie z zasadami niniejszego",
                ),
                b("Regulaminu"),
                t("."),
              ],
            },
            {
              content: [
                b("RODO "),
                t(
                  "– Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dn. 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (ogólne rozporządzenie o ochronie danych).",
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "postanowienia-ogolne",
      title: "Postanowienia ogólne",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                t("Przed skorzystaniem z usług "),
                b("Studia Klient "),
                t(
                  "zobligowany jest do zapoznania się z treścią niniejszego regulaminu. Dokonanie rezerwacji oznacza akceptację wszystkich postanowień ",
                ),
                b("Regulaminu"),
                t(" przez "),
                b("Klienta"),
                t("."),
              ],
            },
            {
              content: [
                b("Studio "),
                t("świadczy usługi tatuowania wyłącznie osobom pełnoletnim."),
              ],
            },
            {
              content: [
                b("Studio "),
                t("zastrzega sobie prawo do odmowy wykonania tatuażu u "),
                b("Klienta "),
                t(
                  "bez podania przyczyny. W szczególności odmowa lub przerwanie usługi może nastąpić, gdy",
                ),
                b(" Klient: "),
                t(
                  "(a) znajduje się pod wpływem alkoholu lub środków odurzających, (b) zachowuje się w sposób niebezpieczny albo agresywny, (c) ma przeciwwskazania zdrowotne lub stan skóry uniemożliwiający bezpieczne wykonanie tatuażu, (d) nie przestrzega niniejszego",
                ),
                b("Regulaminu"),
                t("."),
              ],
            },
            {
              content: [
                b("Studio "),
                t(
                  "dokłada najwyższej staranności, aby świadczyć usługi na najwyższym poziomie, z zachowaniem zasad higieny i bezpieczeństwa. Sprzęt używany do zabiegów jest sterylny i jednorazowy lub poddany skutecznej sterylizacji, a pigmenty spełniają normy UE.",
                ),
              ],
            },
            {
              content: [
                t("Wszelkie projekty tatuaży wykonywane w "),
                b("Studio "),
                t(
                  "stanowią utwór chroniony prawem autorskim. Kopiowanie, rozpowszechnianie lub wykorzystywanie projektów i zdjęć wykonanych tatuaży bez zgody ",
                ),
                b("Studia "),
                t("jest zabronione. "),
                b("Studio "),
                t(
                  "może wykonywać dokumentację fotograficzną tatuażu (zarówno na potrzeby portfolio, jak i dokumentacji wykonanej usługi); w przypadku zamiaru publicznego wykorzystania zdjęcia zawierającego wizerunek ",
                ),
                b("Klienta"),
                t(", "),
                b("Studio "),
                t("poprosi o odrębną zgodę "),
                b("Klienta"),
                t("."),
              ],
            },
            {
              content: [
                t(
                  "Każda praca wyceniana jest indywidualnie w oparciu o rozmiar, stopień skomplikowania, styl, kolor i przewidywany czas oraz ilość sesji. ",
                ),
                b("Klient "),
                t(
                  "otrzymuje orientacyjną wycenę przed rezerwacją. W przypadku większych projektów wymagających kilku sesji, płatność może być dzielona na etapy (sesje).",
                ),
              ],
            },
            {
              content: [
                b("Studio "),
                t(
                  "nie wykonuje kopii tatuaży innych artystów ani znanych wzorów bez modyfikacji. Projekty przygotowywane są na podstawie pomysłu ",
                ),
                b("Klienta"),
                t(", lecz zawsze z indywidualnym podejściem artystycznym "),
                b("Tatuatora"),
                t(". "),
                b("Klient "),
                t(
                  "może przed sesją zgłosić swoje preferencje i uwagi co do projektu. Ostateczny ",
                ),
                b("Wzór tatuażu "),
                t("zostanie przedstawiony "),
                b("Klientowi "),
                t(
                  "do akceptacji przed rozpoczęciem tatuowania (zwykle w dniu sesji).",
                ),
              ],
            },
            {
              content: [
                t(
                  "W ramach niniejszego regulaminu, wszelkie odniesienia do tatuatora oraz świadczenia usługi tatuażu w ",
                ),
                b("Studio"),
                t(
                  ", mają również zastosowanie do świadczenia usług piercingu.",
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "rezerwacja-wizyt",
      title: "Zasady rezerwacji wizyt (zadatki i odwołania)",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                t("Rezerwacja terminu "),
                b("Wizyty "),
                t("może zostać dokonana osobiście w "),
                b("Studio"),
                t(
                  ", telefonicznie, mailowo lub za pośrednictwem komunikatorów społecznościowych ",
                ),
                b("Studia "),
                t(
                  "(np. Facebook/Instagram), zgodnie z informacjami kontaktowymi podanymi na stronie ",
                ),
                b("Studia"),
                t("."),
              ],
            },
            {
              content: [
                t("Ustalenie wstępnego terminu "),
                b("Wizyty "),
                t("wymaga jego potwierdzenia poprzez wpłatę "),
                b("Zadatku"),
                t(". Wysokość wymaganego "),
                b("Zadatku "),
                t("jest ustalana indywidualnie i podawana "),
                b("Klientowi "),
                t(
                  "przy rezerwacji – może zależeć m.in. od przewidywanego czasu tatuażu lub liczby sesji. ",
                ),
                b("Zadatek "),
                t("można wpłacić gotówką w "),
                b("Studio "),
                t("lub przelewem na konto bankowe "),
                b("Studia "),
                t("(dane do płatności zostaną przekazane "),
                b("Klientowi "),
                t("podczas rezerwacji)."),
              ],
            },
            {
              content: [
                t("Termin wpłaty "),
                b("Zadatku "),
                t("wynosi 3 dni od momentu ustalenia wstępnej "),
                b("Wizyty"),
                t(", o ile nie uzgodniono inaczej. Brak wpłaty "),
                b("Zadatku "),
                t(
                  "w ustalonym terminie spowoduje automatyczne anulowanie wstępnej rezerwacji. ",
                ),
                b("Studio "),
                t("nie gwarantuje utrzymania niezadatkowanego terminu."),
              ],
            },
            {
              content: [
                t("Wpłacenie "),
                b("Zadatku "),
                t("jest równoznaczne z akceptacją niniejszego "),
                b("Regulaminu"),
                t(". Po zaksięgowaniu "),
                b("Zadatku Klient "),
                t("otrzyma potwierdzenie rezerwacji terminu "),
                b("Wizyty "),
                t("(np. w formie wiadomości e-mail lub SMS). "),
                b("Zadatek "),
                t("zostanie odliczony od ostatecznej ceny za wykonany tatuaż."),
              ],
            },
            {
              content: [
                b("Zadatek "),
                t("ma charakter bezzwrotny, co oznacza, że "),
                b("Studio "),
                t("zatrzymuje wpłaconą kwotę w przypadku odwołania "),
                b("Wizyty "),
                t("przez "),
                b("Klienta"),
                t(", jego nieobecności lub naruszenia warunków "),
                b("Regulaminu "),
                t(
                  "skutkującego odmową wykonania usługi (np. stawienie się pod wpływem alkoholu – patrz sekcja ",
                ),
                b("Spóźnienia i rezygnacja"),
                t("). Wyjątkiem są sytuacje, gdy odwołanie "),
                b("Wizyty "),
                t("następuje z inicjatywy "),
                b("Studia "),
                t("(np. choroba "),
                b("Tatuatora "),
                t("lub inne zdarzenie losowe) – wówczas "),
                b("Zadatek "),
                t("zostanie zwrócony "),
                b("Klientowi "),
                t("w całości lub, za zgodą "),
                b("Klienta"),
                t(", przeniesiony na nowy termin."),
              ],
            },
            {
              content: [
                b("Klient "),
                t(
                  "zapisujący się na kilka sesji (np. przy dużym projekcie) może zostać poproszony o wpłacenie ",
                ),
                b("Zadatku "),
                t("na pierwsze dwie zaplanowane sesje. Jeśli jednak "),
                b("Klient "),
                t(
                  "nie stawi się na którejkolwiek z umówionych sesji lub je odwoła z naruszeniem niniejszego ",
                ),
                b("Regulaminu"),
                t(", kolejne terminy mogą wymagać ponownej wpłaty "),
                b("Zadatku "),
                t("lub pełnej zapłaty za usługę (przedpłata)."),
              ],
            },
            {
              content: [
                b("Klient "),
                t("ma prawo jednorazowo przełożyć (zmienić termin) umówioną "),
                b("Wizytę "),
                t("bez utraty "),
                b("Zadatku"),
                t(", pod warunkiem poinformowania "),
                b("Studia "),
                t(
                  "z odpowiednim wyprzedzeniem. Minimalny termin powiadomienia o przełożeniu ",
                ),
                b("Wizyty "),
                t(
                  "wynosi 5 dni przed pierwotną datą sesji (chyba że ustalono inaczej). Przełożenie wizyty w terminie krótszym niż 5 dni przed sesją lub kolejne przesunięcie terminu może skutkować przepadkiem ",
                ),
                b("Zadatku"),
                t(
                  " – w takiej sytuacji w celu rezerwacji nowego terminu wymagana będzie wpłata nowego ",
                ),
                b("Zadatku"),
                t("."),
              ],
            },
            {
              content: [
                t("Całkowita rezygnacja przez "),
                b("Klienta "),
                t("z umówionej "),
                b("Wizyty "),
                t(
                  "(odwołanie bez zamiaru umawiania nowego terminu) skutkuje utratą wpłaconego ",
                ),
                b("Zadatku"),
                t(". "),
                b("Studio "),
                t(
                  "zastrzega sobie prawo odmowy ponownej rezerwacji terminu dla ",
                ),
                b("Klienta"),
                t(
                  ", który nie odwoła wizyty z odpowiednim wyprzedzeniem lub nie stawi się bez uprzedzenia. W szczególności w przypadku powtarzanej nieobecności ",
                ),
                b("Klienta"),
                t(
                  ", przy kolejnym zapisie może on zostać poproszony o wpłacenie ",
                ),
                b("Zadatku "),
                t("na pierwsze dwie zaplanowane sesje."),
              ],
            },
            {
              content: [
                b("Studio "),
                t("dołoży starań, aby przypomnieć "),
                b("Klientowi "),
                t(
                  "o zbliżającym się terminie (np. poprzez kontakt telefoniczny lub wiadomość SMS/E-mail kilka dni przed sesją). Brak potwierdzenia ze strony ",
                ),
                b("Klienta "),
                t("na prośbę "),
                b("Studia "),
                t(
                  "o potwierdzenie wizyty może zostać uznany za rezygnację – wówczas ",
                ),
                b("Studio "),
                t("ma prawo anulować termin, a "),
                b("Zadatek "),
                t("przepada. Dlatego uprasza się "),
                b("Klientów "),
                t(
                  "o bieżące sprawdzanie wiadomości i potwierdzanie terminu, jeśli ",
                ),
                b("Studio "),
                t("o to poprosi."),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "przygotowanie-do-zabiegu",
      title: "Zasady przygotowania do zabiegu",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Klient "),
                t(
                  "powinien odpowiednio przygotować się do sesji tatuowania, co zwiększy jego komfort i bezpieczeństwo, a także ułatwi pracę ",
                ),
                b("Tatuatora"),
                t(". "),
                b("Studio "),
                t("zaleca w szczególności:"),
              ],
              children: [
                {
                  content: [
                    b("Unikanie używek: "),
                    t(
                      "Co najmniej 2–3 dni przed sesją nie należy spożywać alkoholu ani zażywać narkotyków czy innych substancji odurzających. W dniu zabiegu zaleca się ograniczenie nadmiernej ilości kofeiny (np. napojów energetycznych).",
                    ),
                  ],
                },
                {
                  content: [
                    b("Wypoczynek i nawodnienie: "),
                    b("Klient "),
                    t(
                      "powinien być wypoczęty. Warto też pić odpowiednią ilość wody w dniach poprzedzających zabieg, aby skóra była dobrze nawodniona.",
                    ),
                  ],
                },
                {
                  content: [
                    b("Posiłek: "),
                    t("W dniu "),
                    b("Wizyty "),
                    t(
                      "należy zjeść pełnowartościowy posiłek. Zabieg tatuowania trwa kilka godzin i jest obciążający dla organizmu – przyjście na czczo lub głodnym może spowodować osłabienie, zawroty głowy, a nawet omdlenie. Można także zabrać ze sobą małą przekąskę lub napój (np. sok, słodki napój) na sesję, szczególnie przy dłuższych tatuażach, aby utrzymać poziom cukru we krwi.",
                    ),
                  ],
                },
                {
                  content: [
                    b("Stan skóry: "),
                    t(
                      "Na około tydzień przed sesją nie należy opalać skóry w miejscu planowanego tatuażu (dotyczy zarówno słońca, jak i solarium). Świeża opalenizna lub poparzenie słoneczne uniemożliwią wykonanie tatuażu i będą podstawą do odwołania sesji z winy ",
                    ),
                    b("Klienta "),
                    t(
                      "(zadatek w takiej sytuacji przepada). Zaleca się również, by przez kilka dni przed zabiegiem dbać o skórę. Bezpośrednio przed sesją nie ",
                    ),
                    b("należy samodzielnie golić "),
                    t("miejsca tatuowania – w razie potrzeby "),
                    b("Tatuator "),
                    t("zrobi to w "),
                    b("Studio "),
                    t(
                      "tuż przed zabiegiem, aby unikać podrażnień lub mikrourazów skóry.",
                    ),
                  ],
                },
                {
                  content: [
                    b("Zdrowie: "),
                    b("Klient "),
                    t(
                      "powinien być zdrowy w dniu zabiegu. W przypadku wystąpienia choroby (gorączka, infekcja) lub pogorszenia stanu zdrowia tuż przed terminem – należy skontaktować się ze ",
                    ),
                    b("Studiem"),
                    t(
                      ". Tatuaż obciąża układ odpornościowy, dlatego lepiej go nie wykonywać podczas ostrej choroby. ",
                    ),
                    b("Klient "),
                    t(
                      "nie powinien przyjmować leków rozrzedzających krew, np. aspiryny, bezpośrednio przed zabiegiem. Jeśli ",
                    ),
                    b("Klient "),
                    t(
                      "musi zażyć takie leki lub inne silne leki, ma obowiązek poinformowania o tym ",
                    ),
                    b("Tatuatora"),
                    t("."),
                  ],
                },
                {
                  content: [
                    b("Inne przygotowania: "),
                    b("Klient "),
                    t("powinien zabrać ze sobą na sesję "),
                    b("dowód tożsamości "),
                    t(
                      "(w celu weryfikacji pełnoletności oraz do ewentualnych formalności). Warto ubrać się wygodnie, w rzeczy które łatwo odsłonią miejsce tatuażu, a jednocześnie nie będą szkodzić podczas zabiegu.",
                    ),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "przebieg-wizyty",
      title: "Przebieg wizyty i obowiązki klienta",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Punktualność i obecność: "),
                b("Klient "),
                t("jest zobowiązany stawić się w "),
                b("Studio "),
                t("punktualnie, o ustalonej godzinie "),
                b("Wizyty"),
                t(
                  ". Rekomendujemy przybycie kilka minut wcześniej, aby dopełnić formalności (wypełnienie ankiety, konsultacja projektu). W przypadku przewidywanego spóźnienia ",
                ),
                b("Klient "),
                t("powinien "),
                b("niezwłocznie poinformować "),
                t("o tym "),
                b("Studio "),
                t(
                  "(telefonicznie). Zasady postępowania przy spóźnieniach szczegółowo opisano w sekcji ",
                ),
                b("Spóźnienia i rezygnacja"),
                t("."),
              ],
            },
            {
              content: [
                b("Konsultacja i projekt: "),
                t("Na początku "),
                b("Wizyty Klient "),
                t("wraz z "),
                b("Tatuatorem "),
                t(
                  "omówią ostateczny projekt tatuażu (wzór, rozmiar, umiejscowienie na ciele). ",
                ),
                b("Klient "),
                t(
                  "ma prawo zgłaszać uwagi i drobne korekty projektu przed rozpoczęciem tatuowania. Większe zmiany koncepcji (odbiegaące od ustaleń przy rezerwacji) mogą skutkować przełożeniem ",
                ),
                b("Wizyty "),
                t("i koniecznością opłacenia nowego projektu lub dodatkowego "),
                b("Zadatku"),
                t(
                  " – dlatego zachęcamy, aby wszelkie istotne decyzje odnośnie wzoru były przemyślane ",
                ),
                b("przed "),
                t("dniem sesji. Po akceptacji wzoru przez "),
                b("Klienta "),
                t(
                  "i przeniesieniu go na skórę (np. kalką), dalsze zmiany nie będą możliwe.",
                ),
              ],
            },
            {
              content: [
                b("Ankieta zdrowotna i zgoda: "),
                t("Przed przystąpieniem do zabiegu "),
                b("Klient "),
                t("wypełnia w "),
                b("Studio "),
                t("stosowną dokumentację – "),
                b("ankietę zdrowia oraz zgodę na wykonanie tatuażu"),
                t(
                  ". W ankiecie należy zgodnie z prawdą odpowiedzieć na pytania dotyczące stanu zdrowia, przebytych chorób, alergii, przyjmowanych leków itp. (szczegóły w sekcji ",
                ),
                b("Higiena, przeciwwskazania i ankieta zdrowia"),
                t(
                  "). Dane te są poufne i służą wyłącznie ocenie, czy nie istnieją przeciwwskazania do zabiegu. ",
                ),
                b("Klient "),
                t(
                  "jest zobowiązany udzielić prawdziwych informacji – zatajenie istotnych informacji (np. chorób, leków) może zagrażać jego zdrowiu podczas tatuowania i skutkować przerwaniem zabiegu na koszt ",
                ),
                b("Klienta"),
                t(". Po pozytywnym przejściu kwalifikacji zdrowotnej "),
                b("Klient "),
                t(
                  "podpisuje formularz świadomej zgody na zabieg tatuażu, potwierdzając, że rozumie jego charakter, ewentualne ryzyko i zobowiązuje się do przestrzegania zaleceń.",
                ),
              ],
            },
            {
              content: [
                b("Zachowanie w studio: "),
                b("Studio "),
                t("dba o komfort wszystkich klientów, dlatego "),
                b("Klient "),
                t(
                  "powinien przestrzegać zasad kultury osobistej i poleceń personelu. Na terenie ",
                ),
                b("Studia "),
                t(
                  "obowiązuje zakaz palenia tytoniu, spożywania alkoholu oraz innych używek. ",
                ),
                b("Klient nie może być pod wpływem "),
                t("alkoholu ani środków odurzających – jeśli "),
                b("Tatuator "),
                t("stwierdzi, że "),
                b("Klient "),
                t("jest nietrzeźwy lub odurzony, odmówi wykonania usługi (a "),
                b("Zadatek "),
                t("przepada, patrz sekcja "),
                b("Spóźnienia i rezygnacja"),
                t("). W trakcie sesji "),
                b("Klient "),
                t("powinien współpracować z "),
                b("Tatuatorem"),
                t(
                  ": starać się pozostawać nieruchomym, informować o swoim samopoczuciu (np. poprosić o przerwę, gdy źle się poczuje), nie przeszkadzać w pracy (np. unikać gwałtownych ruchów czy nieprzewidzianego dotykania sprzętu). Z uwagi na sterylność i bezpieczeństwo, ",
                ),
                b("Klientowi "),
                t(
                  "oraz osobom towarzyszącym nie wolno dotykać stanowiska pracy, narzędzi ani powierzchni zarezerwowanych wyłącznie dla personelu.",
                ),
              ],
            },
            {
              content: [
                b("Osoby towarzyszące: "),
                b("Klient "),
                t("może przyjść na "),
                b("Wizytę "),
                t(
                  "z jedną osobą towarzyszącą, o ile wcześniej poinformuje o tym ",
                ),
                b("Studio/Tatuatora "),
                t(
                  "i uzyska zgodę. Obecność osoby towarzyszącej w pracowni ogranicza się do wyznaczonego obszaru – w pomieszczeniu zabiegowym zwykle przebywa tylko ",
                ),
                b("Klient "),
                t("oraz "),
                b("Tatuator"),
                t("."),
              ],
            },
            {
              content: [
                b("Komfort i przerwy: "),
                t(
                  "Sesja tatuażu może trwać od kilkudziesięciu minut do kilku godzin, w zależności od projektu. ",
                ),
                b("Tatuator "),
                t(
                  "zwykle planuje krótkie przerwy (np. co 1,5–2 godziny lub według potrzeb ",
                ),
                b("Klienta"),
                t("). "),
                b("Klient "),
                t(
                  "może poprosić o przerwę w dowolnym momencie, jeśli czuje taką potrzebę (np. żeby się napić, zjeść batonik, rozprostować się). Prosimy jednak o niewyznaczanie sobie w czasie ",
                ),
                b("Wizyty "),
                t(
                  "innych pilnych zobowiązań – zabieg tatuowania to proces artystyczny, który wymaga czasu i skupienia. Postaraj się zrelaksować i zaufać doświadczeniu ",
                ),
                b("Tatuatora"),
                t("."),
              ],
            },
            {
              content: [
                b("Dokumentacja: "),
                t("W trakcie i po zakończeniu sesji "),
                b("Tatuator "),
                t(
                  "może wykonać zdjęcia tatuażu (oraz ewentualnie procesu jego tworzenia). Służą one dokumentacji wykonanej usługi oraz celom promocyjnym ",
                ),
                b("Studia "),
                t(
                  "(np. publikacja w portfolio na stronie lub w mediach społecznościowych). Jeśli ",
                ),
                b("Klient "),
                t(
                  "nie wyraża zgody na publikację zdjęć przedstawiających rozpoznawalny fragment jego ciała lub wizerunku, proszony jest o poinformowanie o tym ",
                ),
                b("Tatuatora"),
                t(" – szanujemy prywatność "),
                b("Klientów "),
                t(
                  "i stosownie przytniemy/zanonimizujemy zdjęcia lub zaniechamy ich publikacji.",
                ),
              ],
            },
            {
              content: [
                b("Płatność: "),
                t("Po zakończeniu tatuowania "),
                b("Klient "),
                t(
                  "dokonuje rozliczenia za usługę, pomniejszonego o wcześniej wpłacony ",
                ),
                b("Zadatek"),
                t(
                  ". Płatność odbywa się zgodnie z ustaleniami (gotówką, kartą, przelewem – w zależności od dostępnych opcji w ",
                ),
                b("Studio"),
                t("). W przypadku dłuższych projektów rozliczanych etapowo, "),
                b("Klient "),
                t("płaci za każdą sesję osobno zgodnie z ustaleniem. "),
                b("Studio "),
                t(
                  "nie przewiduje możliwości odmowy zapłaty za wykonany tatuaż z powodu subiektywnej zmiany decyzji ",
                ),
                b("Klienta"),
                t(
                  " – tatuaż jest usługą indywidualną i nie podlega „zwrotowi”.",
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "spoznienia-rezygnacja",
      title: "Spóźnienia i rezygnacja",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Spóźnienie na wizytę: "),
                b("Klient "),
                t(
                  "powinien dołożyć starań, aby przybyć na umówiony tatuaż punktualnie. W razie przewidywanego spóźnienia należy bezzwłocznie skontaktować się ze ",
                ),
                b("Studiem "),
                t("(telefonicznie). "),
                b("Studio "),
                t(
                  "rozumie, że mogą zdarzyć się nieprzewidziane okoliczności, jednak spóźnienie przekraczające 15–30 minut (w zależności od długości zarezerwowanej sesji) może skutkować skróceniem czasu ",
                ),
                b("Wizyty "),
                t("lub jej odwołaniem. Decyzję podejmuje "),
                b("Tatuator "),
                t("lub obsługa "),
                b("Studia "),
                t("w zależności od sytuacji. Jeśli z powodu spóźnienia "),
                b("Klienta "),
                t(
                  "pełne wykonanie tatuażu w zaplanowanym czasie okaże się niemożliwe, ",
                ),
                b("Studio "),
                t(
                  "ma prawo przerwać zabieg i wyznaczyć nowy termin dokończenia, co może wiązać się z koniecznością wniesienia kolejnej opłaty (np. nowego ",
                ),
                b("Zadatku "),
                t("lub kosztu dodatkowej sesji)."),
              ],
            },
            {
              content: [
                b("Nieobecność (nieodwołanie wizyty): "),
                t("Brak stawienia się "),
                b("Klienta "),
                t("na umówioną "),
                b("Wizytę "),
                t(
                  "bez wcześniejszego odwołania jest traktowany jako poważne naruszenie zasad. W takiej sytuacji wpłacony ",
                ),
                b("Zadatek "),
                t("przepada na rzecz "),
                b("Studia "),
                t("(pokrywając m.in. straty czasu "),
                b("Tatuatora "),
                t("przygotowanego na zarezerwowaną sesję). "),
                b("Studio "),
                t("może odmówić ponownego umówienia terminu takim "),
                b("Klientom "),
                t("lub zażądać pełnej przedpłaty przy kolejnej rezerwacji."),
              ],
            },
            {
              content: [
                b("Odwołanie lub zmiana terminu przez klienta: "),
                t("Jeśli "),
                b("Klient "),
                t("chce odwołać "),
                b("Wizytę "),
                t(
                  "lub przełożyć ją na inny dzień, ma obowiązek poinformować o tym ",
                ),
                b("Studio "),
                t("najpóźniej 5 dni przed terminem (zgodnie z sekcją "),
                b("Rezerwacja wizyt"),
                t(
                  "). Odwołanie wizyty z krótkim wyprzedzeniem (mniejszym niż 5 dni) lub częste przekładanie terminów może skutkować utratą ",
                ),
                b("Zadatku "),
                t("i trudnością w ponownym umówieniu dogodnej daty. "),
                b("Studio "),
                t(
                  "stara się być wyrozumiałe w nagłych sytuacjach (choroba, wypadek), ale brak poszanowania dla czasu ",
                ),
                b("Tatuatora "),
                t("odbije się na dalszej współpracy z "),
                b("Klientem"),
                t("."),
              ],
            },
            {
              content: [
                b("Rezygnacja w trakcie sesji: "),
                t("W wyjątkowych przypadkach "),
                b("Klient "),
                t(
                  "może zdecydować o przerwaniu już rozpoczętej sesji (np. z powodu złego samopoczucia). Jeśli przerwanie następuje z przyczyn niezależnych od ",
                ),
                b("Studia "),
                t("(np. "),
                b("Klient "),
                t(
                  "nie wytrzyma bólu lub zmienia zdanie co do tatuażu w trakcie pracy), ",
                ),
                b("Klient "),
                t(
                  "jest zobowiązany do uiszczenia opłaty za dotychczas wykonany czas pracy ",
                ),
                b("Tatuatora "),
                t(
                  "oraz zużyte materiały. Dokończenie tatuażu w innym terminie będzie traktowane jako nowa ",
                ),
                b("Wizyta "),
                t("i może wymagać kolejnego "),
                b("Zadatku"),
                t(". "),
                b("Studio "),
                t("zastrzega, że rezygnacja "),
                b("Klienta "),
                t(
                  "z dokończenia tatuażu oznacza przerwanie usługi na jego życzenie – dalsze dopigmentowanie lub zakrywanie niedokończonego wzoru leży już po stronie ",
                ),
                b("Klienta"),
                t(" (na jego koszt)."),
              ],
            },
            {
              content: [
                b("Odwołanie lub zmiana terminu przez studio: "),
                b("Studio "),
                t("zastrzega sobie prawo do zmiany terminu "),
                b("Wizyty "),
                t(
                  "lub jej odwołania z przyczyn od niego niezależnych, takich jak nagła choroba ",
                ),
                b("Tatuatora"),
                t(", awaria w "),
                b("Studio"),
                t(", zdarzenia losowe (np. powódź, pożar). W takiej sytuacji "),
                b("Studio "),
                t("skontaktuje się z "),
                b("Klientem "),
                t(
                  "tak szybko, jak to możliwe, proponując nowy termin. Wpłacony ",
                ),
                b("Zadatek "),
                t("zostanie w porozumieniu z "),
                b("Klientem "),
                t("przeniesiony na nowy termin; jeśli zmiana uniemożliwia "),
                b("Klientowi "),
                t("skorzystanie z usługi, ma on prawo do zwrotu "),
                b("Zadatku"),
                t(". "),
                b("Studio "),
                t(
                  "nie odpowiada za dodatkowe roszczenia (np. koszty dojazdu) i ogranicza swoją odpowiedzialność do zwrotu ",
                ),
                b("Zadatku "),
                t("lub wykonania usługi w innym terminie."),
              ],
            },
            {
              content: [
                b("Zachowanie terminów: "),
                b("Studio "),
                t("dokłada wszelkich starań, aby rozpocząć "),
                b("Wizytę "),
                t(
                  "punktualnie o ustalonej godzinie. Niemniej ze względu na artystyczny charakter pracy mogą wystąpić drobne opóźnienia (np. poprzednia sesja się przedłużyła). ",
                ),
                b("Klient "),
                t(
                  "jest proszony o wyrozumiałość – zapewniamy, że każdemu poświęcamy należytą uwagę. Ewentualne opóźnienie w rozpoczęciu ",
                ),
                b("Wizyty "),
                t("z winy "),
                b("Studia "),
                t("nie wpływa na skrócenie czasu tatuowania "),
                b("Klienta "),
                t(
                  "(np. jeśli zaczniemy 30 min później, sesja przesunie się o 30 min tego dnia). W przypadku poważniejszego opóźnienia ",
                ),
                b("Klient "),
                t("zostanie poinformowany i otrzyma możliwość przełożenia "),
                b("Wizyty "),
                t("na inny termin, jeśli oczekiwanie byłoby zbyt uciążliwe."),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "odpowiedzialnosc-klienta-i-studia",
      title: "Odpowiedzialność klienta i studia",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Odpowiedzialność i obowiązki Klienta: "),
                b("Klient "),
                t(
                  "ponosi odpowiedzialność za świadome podjęcie decyzji o wykonaniu tatuażu i jest zobowiązany do współdziałania z ",
                ),
                b("Studio "),
                t("dla osiągnięcia najlepszego efektu. W szczególności "),
                b("Klient "),
                t("zobowiązuje się do:"),
              ],
              children: [
                {
                  content: [
                    t(
                      "Udzielenia pełnych i prawdziwych informacji o swoim stanie zdrowia, przebytych chorobach, alergiach i przyjmowanych lekach podczas wypełniania ankiety zdrowotnej. ",
                    ),
                    b("Studio "),
                    t("nie odpowiada za negatywne skutki wynikłe z faktu, że "),
                    b("Klient "),
                    t("zataił przed "),
                    b("Tatuatorem "),
                    t("istotne informacje o swoim zdrowiu."),
                  ],
                },
                {
                  content: [
                    t(
                      "Przestrzegania wszystkich zaleceń przekazywanych przez ",
                    ),
                    b("Tatuatora "),
                    t(
                      "przed zabiegiem, w trakcie jego trwania oraz po jego zakończeniu.",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "Zapoznania się z przedstawionym projektem tatuażu przed rozpoczęciem tatuowania i wyrażenia jednoznacznej akceptacji.",
                    ),
                  ],
                },
                {
                  content: [
                    t("Realistycznego oczekiwania co do efektu – "),
                    b("Klient "),
                    t(
                      "powinien być świadomy, że tatuaż jest formą sztuki i jego wygląd może różnić się od projektu.",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "Świadomego podjęcia decyzji o trwałym ozdobieniu ciała – ",
                    ),
                    b("Studio "),
                    t("nie ponosi odpowiedzialności za przyszłe decyzje "),
                    b("Klienta "),
                    t("o zmianie lub usunięciu tatuażu."),
                  ],
                },
                {
                  content: [
                    t("Dbałości o tatuaż po wyjściu ze "),
                    b("Studia "),
                    t("zgodnie z przekazanymi instrukcjami."),
                  ],
                },
                {
                  content: [
                    t(
                      "Przestrzegania Regulaminu – jego rażące naruszenie (np. przyjście na sesję pod wpływem substancji odurzających, agresywne zachowanie) zwalnia ",
                    ),
                    b("Studio "),
                    t("z obowiązku wykonania usługi."),
                  ],
                },
              ],
            },
            {
              content: [
                b("Odpowiedzialność i zobowiązania Studia: "),
                b("Studio "),
                t(
                  "zobowiązuje się do wykonania usługi z należytą starannością, w profesjonalny sposób i zgodnie z aktualnymi standardami.",
                ),
              ],
              children: [
                {
                  content: [
                    t(
                      "Zapewnienie sterylnych narzędzi, jednorazowych igieł i materiałów, stosowanie certyfikowanych tuszów/pigmentów zgodnych z przepisami.",
                    ),
                  ],
                },
                {
                  content: [
                    t("Przeprowadzenie konsultacji i kwalifikacji "),
                    b("Klienta "),
                    t("do zabiegu – w razie przeciwwskazań "),
                    b("Studio "),
                    t("ma prawo odmówić wykonania usługi."),
                  ],
                },
                {
                  content: [
                    t("Współpraca z "),
                    b("Klientem "),
                    t("przy ustalaniu projektu – "),
                    b("Tatuator "),
                    t("doradza, przygotowuje autorski projekt, a "),
                    b("Studio "),
                    t("gwarantuje unikalność wzoru."),
                  ],
                },
                {
                  content: [
                    t("Odpowiedzialność za jakość wykonania – "),
                    b("Studio "),
                    t(
                      "zapewnia zgodność z zaakceptowanym projektem i poprawki w razie błędów.",
                    ),
                  ],
                },
                {
                  content: [
                    b("Studio "),
                    t(
                      "udziela ograniczonej gwarancji na drobne dopigmentowania w ciągu 1–3 miesięcy od sesji.",
                    ),
                  ],
                },
                {
                  content: [b("Studio nie ponosi odpowiedzialności za:")],
                  children: [
                    {
                      content: [
                        t("naturalne procesy gojenia i reakcje organizmu "),
                        b("Klienta"),
                      ],
                    },
                    {
                      content: [
                        t(
                          "zdarzenia wynikłe z nieprzestrzegania zaleceń przez ",
                        ),
                        b("Klienta"),
                      ],
                    },
                    {
                      content: [
                        t("decyzje "),
                        b("Klienta "),
                        t("podjęte wbrew radom "),
                        b("Tatuatora"),
                      ],
                    },
                    {
                      content: [
                        t("subiektywne odczucia "),
                        b("Klienta "),
                        t(
                          "co do estetyki tatuażu, o ile zgodny z zaakceptowanym projektem.",
                        ),
                      ],
                    },
                    {
                      content: [
                        t("ewentualne reakcje alergiczne "),
                        b("Klienta "),
                        t(
                          "na barwniki/środki, mimo użycia certyfikowanych materiałów.",
                        ),
                      ],
                    },
                  ],
                },
                {
                  content: [
                    t(""),
                    b("Studio "),
                    t("nie odpowiada za prywatne ustalenia między "),
                    b("Klientem "),
                    t("a "),
                    b("Tatuatorem"),
                    t(", jeśli są sprzeczne z Regulaminem."),
                  ],
                },
                {
                  content: [
                    t(""),
                    b("Studio "),
                    t("nie ponosi odpowiedzialności za rzeczy osobiste "),
                    b("Klienta "),
                    t("pozostawione bez opieki na terenie Studia."),
                  ],
                },
              ],
            },
            {
              content: [
                b("Ograniczenie odpowiedzialności: "),
                t(
                  "Tatuaż jest usługą artystyczną, wykonywaną na indywidualne zamówienie ",
                ),
                b("Klienta"),
                t(
                  ". Ostateczny rezultat może różnić się nieznacznie od założeń – projekty i wizualizacje nie oddają w pełni efektu na żywej skórze. ",
                ),
                b("Studio "),
                t(
                  "zobowiązuje się wykonać usługę najlepiej jak potrafi, oferując dopigmentowanie i konsultacje, ale nie dokonuje zwrotów pieniędzy za wykonane tatuaże.",
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "procedura-reklamacyjna",
      title: "Procedura reklamacyjna",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Studio "),
                t("dokłada wszelkich starań, by "),
                b("Klient "),
                t("był zadowolony z wykonanego tatuażu. Jeśli jednak "),
                b("Klient "),
                t(
                  "uważa, że usługa została wykonana wadliwie lub niezgodnie z ustaleniami, ma prawo do złożenia reklamacji.",
                ),
              ],
            },
            {
              content: [
                t("Reklamację (skargę) należy zgłosić "),
                b("pisemnie"),
                t(
                  " – preferowaną formą jest wiadomość e-mail wysłana na adres ",
                ),
                b("Studia "),
                t(
                  "(podany na stronie internetowej), ewentualnie listownie na adres siedziby ",
                ),
                b("Studia"),
                t(
                  ". W zgłoszeniu należy podać swoje dane, datę wykonania tatuażu, imię ",
                ),
                b("Tatuatora"),
                t(
                  ", opis wady/problemu oraz dołączyć dokumentację fotograficzną jeśli to możliwe.",
                ),
              ],
            },
            {
              content: [
                b("Termin na zgłoszenie reklamacji: "),
                t("Zaleca się, by wady zgłaszać "),
                b("niezwłocznie "),
                t(
                  "po ich zauważeniu. Wady związane z wykonaniem tatuażu (np. pominięty fragment wzoru, krzywa linia) powinny być zgłoszone najlepiej ",
                ),
                b("do 7 dni od wygojenia tatuażu"),
                t(
                  ", a nawet wcześniej. Kwestie związane z gojeniem (np. ubytek tuszu) należy ocenić po pełnym wygojeniu, ale nie później niż w ciągu ",
                ),
                b("1–3 miesięcy "),
                t("od wykonania. Ogólnie "),
                b("Klient "),
                t("powinien zgłaszać zastrzeżenia w terminie "),
                b("do 3 miesięcy "),
                t("od daty zabiegu."),
              ],
            },
            {
              content: [
                b("Rozpatrywanie reklamacji: "),
                b("Studio "),
                t("ustosunkuje się do otrzymanej reklamacji w terminie "),
                b("do 14 dni roboczych "),
                t("od jej otrzymania. W tym czasie może skontaktować się z "),
                b("Klientem "),
                t(
                  "w celu dodatkowych informacji lub zaprosić na oględziny tatuażu na żywo.",
                ),
              ],
            },
            {
              content: [
                b("Sposób załatwienia reklamacji: "),
                t("Jeśli reklamacja zostanie uznana za zasadną, "),
                b("Studio "),
                t("w pierwszej kolejności zaproponuje "),
                b("Klientowi "),
                t(
                  "bezpłatne dopigmentowanie tatuażu. Jeśli nie jest to możliwe, ",
                ),
                b("Studio "),
                t(
                  "może zaproponować inną formę rekompensaty (np. częściowy zwrot kosztów tatuażu, bon na zabieg). ",
                ),
                b("Studio "),
                t("nie dokonuje pełnych refundacji."),
              ],
            },
            {
              content: [
                b("Studio "),
                t("zastrzega, że w przypadku wykonania tatuażu techniką "),
                b("fineline "),
                t("i "),
                b("single needle"),
                t(
                  ", delikatne ubytki są częstym procesem gojenia i nie podlegają reklamacji.",
                ),
              ],
            },
            {
              content: [
                t("Jeśli reklamacja zostanie "),
                b("odrzucona"),
                t(" (np. "),
                b("Studio "),
                t(
                  "uzna, że tatuaż został wykonany prawidłowo, a wskazane przez ",
                ),
                b("Klienta "),
                t(
                  "kwestie wynikają z naturalnych procesów gojenia lub z zaniedbań pielęgnacji), ",
                ),
                b("Klient "),
                t("zostanie o tym poinformowany wraz z uzasadnieniem decyzji."),
              ],
            },
            {
              content: [b("Wyłączenia reklamacji: ")],
              children: [
                {
                  content: [
                    b("Klient "),
                    t(
                      "nie przestrzegał zaleceń pozabiegowych i pielęgnacyjnych, co doprowadziło do pogorszenia jakości tatuażu.",
                    ),
                  ],
                },
                {
                  content: [
                    t("Reklamacja dotyczy "),
                    b("subiektywnego odczucia estetycznego "),
                    t("(np. zmiana zdania co do koloru lub wzoru)."),
                  ],
                },
                {
                  content: [
                    t("Naturalne cechy indywidualne "),
                    b("Klienta "),
                    t(
                      "wpłynęły na efekt (np. tusz gorzej przyjął się przez grubą/gumowatą skórę, bliznowacenie, silna reakcja immunologiczna).",
                    ),
                  ],
                },
                {
                  content: [
                    b("Klient "),
                    t(
                      "żądał rozwiązania niezgodnego z wiedzą profesjonalną, został uprzedzony o możliwych skutkach i one faktycznie wystąpiły (np. nalegał na bardzo mały tatuaż z mikrotekstem).",
                    ),
                  ],
                },
              ],
            },
            {
              content: [
                b("Dalsze kroki: "),
                t("W przypadku sporu co do zasadności reklamacji "),
                b("Klient "),
                t(
                  "ma prawo skorzystać z mediacji przy rzeczniku konsumentów lub skierować sprawę na drogę sądową. ",
                ),
                b("Studio "),
                t("dąży do polubownego rozwiązania sporu."),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "higiena-przeciwwskazania",
      title: "Higiena, przeciwwskazania i ankieta zdrowia",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Standardy higieny w Studiu: "),
                b("Studio "),
                t(
                  "utrzymuje najwyższe standardy higieniczne wymagane przy zabiegach tatuowania. Stanowisko pracy ",
                ),
                b("Tatuatora "),
                t(
                  "jest dezynfekowane przed każdym zabiegiem, używane są wyłącznie sterylne igły i jednorazowe materiały (rękawiczki, folie ochronne, pojemniki na tusz itp.). ",
                ),
                b("Klient "),
                t(
                  "ma prawo poprosić o informację na temat stosowanych środków i procedur higienicznych. ",
                ),
                b("Studio "),
                t(
                  "prowadzi usługi zgodnie z wytycznymi sanitarno-epidemiologicznymi (Sanepid) i dba o bezpieczeństwo zarówno ",
                ),
                b("Klienta"),
                t(", jak i personelu."),
              ],
            },
            {
              content: [
                b("Higiena osobista klienta: "),
                b("Klient "),
                t(
                  "także powinien zadbać o higienę – zalecane jest przyjście na sesję czystym i odświeżonym. Unikaj stosowania tuż przed sesją silnie perfumowanych kosmetyków, olejków czy kremów w miejscu tatuowania (skóra ma być czysta). Dobra higiena osobista zmniejsza ryzyko infekcji i zwiększa komfort pracy ",
                ),
                b("Tatuatora."),
              ],
            },
            {
              content: [
                b("Przeciwwskazania medyczne: "),
                t(
                  "Tatuaż jest zabiegiem inwazyjnym naruszającym ciągłość skóry, dlatego istnieją sytuacje, w których nie powinien być wykonywany. Do głównych ",
                ),
                b("przeciwwskazań "),
                t("należą m.in.:"),
              ],
              children: [
                {
                  content: [
                    t(
                      "poważne choroby przewlekłe osłabiające organizm (np. aktywna choroba nowotworowa, niewyrównana cukrzyca, niewydolność nerek, poważne choroby serca i nadciśnienie – szczególnie jeśli nie są kontrolowane leczeniem)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "choroby autoimmunologiczne i dermatologiczne skutkujące problemami skórnymi (np. łuszczyca, AZS, bielactwo w miejscu tatuażu, skłonność do keloidów/bliznowców)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "zaburzenia krzepnięcia krwi (hemofilia, choroba von Willebranda i inne skazy krwotoczne), przyjmowanie leków przeciwkrzepliwych lub sterydowych",
                    ),
                  ],
                },
                { content: [t("ciąża i okres karmienia piersią")] },
                {
                  content: [
                    t(
                      "padaczka (epilepsja) – z uwagi na ryzyko wystąpienia ataku podczas stresu/zabiegu, tatuaż możliwy tylko za zgodą lekarza i przy zapewnieniu odpowiednich środków ostrożności",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "świeże rany, oparzenia, aktywne zmiany skórne w miejscu planowanego tatuażu (np. infekcje bakteryjne – czyraki, liszaje; infekcje wirusowe – opryszczka, półpasiec; infekcje grzybicze itp.)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "ogólne infekcje i stany zapalne organizmu (gorączka, przeziębienie, grypa – tatuaż należy odłożyć do czasu pełnego wyzdrowienia)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "przyjmowanie niektórych leków i substancji, w tym retinoidów (pochodne witaminy A, stosowane np. w terapii trądziku – należy odczekać min. 6 miesięcy po zakończeniu kuracji), silnych antybiotyków (tatuaż najlepiej wykonać minimum 2 tygodnie po antybiotykoterapii), świeże szczepienia (po szczepieniu np. na COVID-19 zaleca się odczekać ok. 2–4 tygodni przed tatuażem)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "uczulenie na składniki farb/tuszów tatuażowych (jeśli Klient wie o uczuleniu na metale ciężkie czy barwniki – musi bezwzględnie poinformować o tym Tatuatora; w razie wątpliwości można wykonać test alergiczny przed zabiegiem)",
                    ),
                  ],
                },
                {
                  content: [
                    t(
                      "inne poważne schorzenia, które zdaniem lekarza mogą stanowić przeciwwskazanie do tatuowania",
                    ),
                  ],
                },
              ],
            },
            {
              content: [
                b("Zatajanie przeciwwskazań: "),
                b("Klient "),
                t("zataił przed "),
                b("Studiem "),
                t(
                  "swoje dolegliwości, choroby lub okoliczności stanowiące przeciwwskazanie – robi to na własną odpowiedzialność. ",
                ),
                b("Studio "),
                t(
                  "nie ponosi odpowiedzialności za komplikacje zdrowotne powstałe w wyniku przemilczenia przez ",
                ),
                b("Klienta "),
                t("istotnych informacji. "),
                b("Studio "),
                t(
                  "zastrzega sobie prawo przerwania zabiegu – w takiej sytuacji ",
                ),
                b("Zadatek "),
                t("przepada."),
              ],
            },
            {
              content: [
                b("Ankieta zdrowotna: "),
                t(
                  "Ankieta zawiera pytania m.in. o choroby przewlekłe, alergie, leki, skłonność do omdleń, stan odżywienia, ciążę, bycie pod wpływem substancji, posiadanie tatuaży/PMU itd. ",
                ),
                b("Klient "),
                t(
                  "jest zobowiązany udzielić zgodnych z prawdą odpowiedzi i podpisać ankietę oraz formularz zgody. ",
                ),
                b("Studio "),
                t("kwalifikuje "),
                b("Klienta "),
                t("do zabiegu."),
              ],
            },
            {
              content: [
                b("Po zakończeniu zabiegu: "),
                b("Tatuator "),
                t("zabezpiecza świeży tatuaż opatrunkiem oraz udziela "),
                b("Klientowi "),
                t(
                  "instrukcji dotyczących pielęgnacji. Najważniejsze zasady: pozostawienie opatrunku wskazany czas, mycie delikatnym mydłem, unikanie sauny/basenu przez 2 tygodnie, unikanie ekspozycji na słońce, noszenie czystej przewiewnej odzieży. ",
                ),
                b("Klient "),
                t("otrzymuje szczegółowe wytyczne."),
              ],
            },
            {
              content: [
                b("Higiena po zabiegu: "),
                b("Klient "),
                t("jest odpowiedzialny za utrzymanie czystości tatuażu. "),
                b("Studio "),
                t(
                  "oferuje wysokiej jakości produkty do pielęgnacji (kremy, folie). Ważne: używać nowych, czystych produktów, unikać dotykania brudnymi rękami, stosować ręczniki papierowe zamiast materiałowych. ",
                ),
                b("Studio "),
                t(
                  "nie ponosi odpowiedzialności za zakażenia wynikłe z zaniedbania higieny przez ",
                ),
                b("Klienta."),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "rodo",
      title: "Zasady przetwarzania danych osobowych (RODO)",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                b("Administrator danych: "),
                t(
                  "Administratorem danych osobowych Klientów jest Karina Charytoniuk oraz Klaudia Śmietana prowadzące działalność gospodarczą w ramach spółki K2.Inked s.c....",
                ),
              ],
            },
            {
              content: [
                b("Zakres zbieranych danych: "),
                b("Studio "),
                t(
                  "zbiera imię, nazwisko, datę urodzenia, kontakt, dane zdrowotne z ankiety, zgody, zdjęcia tatuaży...",
                ),
              ],
            },
            {
              content: [b("Cele i podstawa prawna przetwarzania: ")],
              children: [
                {
                  content: [
                    b("Świadczenie usługi tatuażu – "),
                    t(
                      "umawianie wizyt, wykonanie tatuażu, dokumentacja, kontakt z Klientem...",
                    ),
                  ],
                },
                {
                  content: [
                    b("Wypełnienie obowiązków prawnych – "),
                    t(
                      "np. faktury, ankiety zdrowia, zgodnie z przepisami prawa...",
                    ),
                  ],
                },
                {
                  content: [
                    b("Cele marketingowe i archiwalne – "),
                    t(
                      "np. publikacja zdjęć w portfolio, wysyłka informacji – tylko za zgodą Klienta...",
                    ),
                  ],
                },
                {
                  content: [
                    b("Ochrona prawna – "),
                    t("np. dochodzenie roszczeń, obrona przed roszczeniami..."),
                  ],
                },
              ],
            },
            {
              content: [
                b("Dobrowolność podania danych: "),
                t(
                  "Podanie danych jest dobrowolne, ale niezbędne do realizacji usług; brak danych = odmowa wykonania tatuażu...",
                ),
              ],
            },
            {
              content: [
                b("Udostępnianie danych: "),
                t(
                  "Dane są poufne, nie sprzedaje się ich, udostępnia się tylko zgodnie z prawem (np. urzędom, księgowości)...",
                ),
              ],
            },
            {
              content: [
                b("Okres przechowywania danych: "),
                t(
                  "Dane przechowywane są tylko tak długo, jak wymagają przepisy; dane marketingowe do cofnięcia zgody; zdjęcia tatuaży bezterminowo w portfolio...",
                ),
              ],
            },
            {
              content: [
                b("Prawa Klienta: "),
                t(
                  "Dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw, cofnięcie zgody, przenoszenie danych...",
                ),
              ],
            },
            {
              content: [
                b("Realizacja praw: "),
                t(
                  "Kontakt mailowy lub osobisty ze Studiem; odpowiedź max 1 miesiąc...",
                ),
              ],
            },
            {
              content: [
                b("Bezpieczeństwo danych: "),
                t(
                  "Zabezpieczenia techniczne i organizacyjne, dostęp tylko dla uprawnionych osób...",
                ),
              ],
            },
            {
              content: [
                b("Skargi dot. danych: "),
                t(
                  "Prawo wniesienia skargi do PUODO, ale preferowany kontakt bezpośrednio ze Studiem...",
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      id: "postanowienia-koncowe",
      title: "Postanowienia końcowe",
      blocks: [
        {
          type: "ul",
          content: [
            {
              content: [
                t(
                  "Regulamin obowiązuje od 5 sierpnia 2025 i dostępny jest na stronie internetowej oraz w siedzibie Studia. Studio może wprowadzać zmiany – publikacja zmian na stronie internetowej, wchodzą w życie z dniem publikacji, chyba że określono inny termin. Rezerwacje dokonane przed zmianą podlegają zasadom obowiązującym w chwili dokonania, chyba że nowe postanowienia są korzystniejsze dla Klienta.",
                ),
              ],
            },
            {
              content: [
                t(
                  "W sprawach nieuregulowanych Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeks Cywilny oraz ustawy o prawach konsumenta.",
                ),
              ],
            },
            {
              content: [
                t(
                  "Jeżeli jakiekolwiek postanowienie Regulaminu zostanie uznane za nieważne lub bezskuteczne, pozostałe pozostają w mocy.",
                ),
              ],
            },
            {
              content: [
                t(
                  "Studio dokłada starań, aby spory i nieporozumienia z Klientami rozwiązywać polubownie. W razie braku porozumienia, właściwy do rozstrzygania jest sąd powszechny według miejsca zamieszkania Klienta.",
                ),
              ],
            },
            {
              content: [
                t(
                  "Regulamin stanowi integralną część umowy o usługę tatuażu zawieranej pomiędzy Klientem a Studiem. Klient potwierdza zapoznanie się i akceptację z chwilą rezerwacji lub przystąpienia do zabiegu. Studio może odmówić wykonania usługi osobom, które nie zaakceptują Regulaminu.",
                ),
              ],
            },
            {
              content: [
                t(
                  "Wszelkie pytania i wątpliwości należy kierować do Studia. Celem Studia jest zapewnienie bezpieczeństwa, higieny i satysfakcji usług.",
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
