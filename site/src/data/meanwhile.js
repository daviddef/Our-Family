// Meanwhile — three things at once, for each stretch of time: what your family
// was doing, who was in charge of the ground they were standing on, and what
// the rest of the world was up to.
//
// The Croatian "who was in charge" bands come out of the Defranceski archive's
// sovereignty chart. The rest are the plain, well-known facts of who ruled
// where. World events are chosen for one reason only: a child has heard of them.

// One village, and everybody who claimed it. Gračišće never moved.
export const rulers = [
  { from: 1374, to: 1805, who: "Austria", note: "the County of Pazin", c: "hab" },
  { from: 1805, to: 1815, who: "Napoleon", note: "for ten years", c: "nap" },
  { from: 1815, to: 1918, who: "Austria again", note: "Austria–Hungary", c: "hab" },
  { from: 1920, to: 1943, who: "Italy", note: "and it changed the names", c: "ita" },
  { from: 1943, to: 1945, who: "Germany", note: "two years", c: "ger" },
  { from: 1945, to: 1991, who: "Yugoslavia", note: "forty-six years", c: "yug" },
  { from: 1991, to: null, who: "Croatia", note: "ever since", c: "cro" },
];

export const eras = [
  {
    id: "before1700",
    span: "Before 1700",
    title: "The oldest names anybody has",
    lead: "This is as far back as ten families and seven archives can reach. Past this line there are certainly people, and no names for them.",
    family: [
      { y: "1697", k: "prostamo", t: "Franco Antonino is born at Briatico, in Calabria. He is the oldest person anybody in this whole website can name." },
      { y: "1644", k: "croatia", t: "The priest at Gologorica starts a book of baptisms. Somebody had to start writing things down, or none of this would exist." },
      { y: "1605–1647", k: "blazevic", t: "Villages are built on purpose in the Senj mountains for families running from an invading army. Your family is put there deliberately, to hold a frontier." },
    ],
    charge: [
      { where: "Istria", who: "Austria — and it had been Austrian since 1374" },
      { where: "Senj and the coast", who: "the Frankopan lords, then the Croatian crown" },
      { where: "the bottom of Italy", who: "the Kingdom of Naples, ruled from Spain" },
    ],
    world: [
      { y: "1620", t: "The Mayflower sails for America." },
      { y: "1666", t: "The Great Fire of London — 136 years before George Kolbe was born a few streets from where it started." },
      { y: "about 1680", t: "The last dodo dies." },
      { y: "1687", t: "Isaac Newton writes down how gravity works." },
    ],
  },
  {
    id: "1700s",
    span: "1700 – 1800",
    title: "Priests with pens",
    lead: "Almost everything known about this century comes from one kind of object: a parish register. A man in a church, writing your family down in Latin, by hand, because it was his job.",
    family: [
      { y: "1711", k: "croatia", t: "The year cut over a doorway on the square at Gologorica — on a house nobody has yet proved is ours." },
      { y: "1751", k: "britain", t: "Robert D'Arcy is born in Yorkshire." },
      { y: "24 Oct 1767", k: "italy", t: "A priest at Arienzo picks up a pen and writes Pasquale Falco into a book. That page still exists." },
      { y: "1787", k: "croatia", t: "Giovanni Battista is baptised at Gologorica on 13 August. He grew up to be a farmer at house 5." },
      { y: "1788", k: "safrica", t: "Petrus Jacobus Booyzen — the first Booyzen with a real date." },
    ],
    charge: [
      { where: "Istria", who: "still Austria, the whole century" },
      { where: "the Cape", who: "a Dutch trading company, until the British took it in 1806" },
      { where: "Australia", who: "nobody from Europe at all, until 1788" },
    ],
    world: [
      { y: "1770", t: "Captain Cook sails up the east coast of Australia, past where Brisbane is now." },
      { y: "1783", t: "The first hot-air balloon goes up, in France." },
      { y: "1788", t: "The First Fleet lands at Sydney — the same year one of your ten families gets its first real date. Australia and the Booyzens start counting in the same twelve months." },
      { y: "1791", t: "Mozart dies, having written music since he was five." },
    ],
  },
  {
    id: "1800s",
    span: "1800 – 1860",
    title: "The century everybody got on a boat",
    lead: "Four of the ten families crossed an ocean in these sixty years, in ships with no engines. If the wind stopped, they stopped.",
    family: [
      { y: "7 Dec 1802", k: "safrica", t: "George Augustus Kolbe is born in Soho, London." },
      { y: "1819–20", k: "safrica", t: "He sails on the Nautilus at sixteen and turns seventeen at sea. 133 days without setting foot on land." },
      { y: "1825", k: "croatia", t: "Antonio is born at Gračišće. He became a stonecutter — lapicida, in the register." },
      { y: "1825–27", k: "britain", t: "A D'Arcy child is born at Chatham in England, and the next at Parramatta in Australia. That gap is the crossing." },
      { y: "1836", k: "britain", t: "Three men are sent to chart an empty bay. One of them is family. The bay is now Melbourne." },
      { y: "1851", k: "safrica", t: "Willem Hermanus is born in South Africa." },
    ],
    charge: [
      { where: "Istria", who: "Napoleon takes it in 1805, keeps it ten years, then Austria takes it back" },
      { where: "the Cape", who: "Britain, from 1806" },
      { where: "Argentina", who: "its own country, from 1816" },
      { where: "Italy", who: "not a country yet — it becomes one in 1861" },
    ],
    world: [
      { y: "1804", t: "The first steam locomotive runs. Trains change everything, including who your family is — a railway later kills the town of Senj." },
      { y: "1815", t: "Waterloo. Napoleon is finished, and Istria goes back to Austria." },
      { y: "1837", t: "Victoria becomes queen at eighteen." },
      { y: "1859", t: "Darwin publishes On the Origin of Species." },
    ],
  },
  {
    id: "1860s",
    span: "1860 – 1914",
    title: "Two countries are invented, and one town dies",
    lead: "In this stretch Italy becomes a country, Australia becomes a country, and a railway line quietly destroys the trade your Croatian family lived on.",
    family: [
      { y: "1857", k: "blazevic", t: "Josip Papić is baptised at Senj. He carried other people's goods over a mountain on packhorses." },
      { y: "1859", k: "blazevic", t: "Tonka is born up on the crooked road, in house 136." },
      { y: "1873", k: "blazevic", t: "A new railway bypasses Senj completely. Everything that used to go over the mountain now goes by train, somewhere else. The whole town's work vanishes." },
      { y: "1882", k: "argentina", t: "Pablo Armando Lerena — Bob — is born at Rosario, on the Paraná." },
      { y: "1892", k: "arena", t: "Two Arenas marry each other at Scilla, under the castle." },
      { y: "1895", k: "blazevic", t: "The Hotel Therapia opens at Crikvenica. Hedviga sings there fifty years later." },
      { y: "1901", k: "italy", t: "Carmine Antonio Falco is born at Arienzo — the man who eventually moved the whole family to Australia." },
    ],
    charge: [
      { where: "Italy", who: "becomes one single country in 1861. Before that, the Falcos and the Mazzas lived in different countries." },
      { where: "Australia", who: "becomes one single country in 1901" },
      { where: "Croatia", who: "still Austria–Hungary, and will be until 1918" },
    ],
    world: [
      { y: "1869", t: "The Suez Canal opens and the journey from Europe to Australia gets much shorter." },
      { y: "1886", t: "Somebody finds gold on a farm. The city that grows on it is Johannesburg — where, sixty years later, two of your families meet. The city is younger than several people in this website." },
      { y: "1895", t: "X-rays are discovered. Ten years later there is an X-ray machine in the hotel your great-grandma sang in." },
      { y: "1903", t: "The Wright brothers fly for twelve seconds." },
      { y: "1912", t: "The Titanic sinks." },
    ],
  },
  {
    id: "wars",
    span: "1914 – 1945",
    title: "The bit where the world goes wrong",
    lead: "Two world wars in thirty-one years, and this family is standing in the middle of both of them. This is the stretch where things happen to people instead of people doing things.",
    family: [
      { y: "1920", k: "blazevic", t: "Milka marries Ljubomir at Senj. She is thirty-four and already a widow; she rolls cigars in the tobacco factory." },
      { y: "21 Apr 1925", k: "mazza", t: "Michele Mazza steps off the Palermo at Brisbane. He is sixteen and he is on his own." },
      { y: "1925", k: "croatia", t: "Ivan is born at Crikvenica." },
      { y: "1926", k: "blazevic", t: "Hedviga is born at Senj, on 3 August." },
      { y: "21 Oct 1941", k: "croatia", t: "Ivan starts work in a German factory, aged sixteen. He did not choose to go. He got home again, and the family carries on through him." },
      { y: "1945", k: "blazevic", t: "Oto Blažević dies, aged twenty-two, in the last year of the war. His name is on the wall grave at Senj." },
    ],
    charge: [
      { where: "Istria", who: "becomes Italy in 1920 — and the government makes people change the spelling of their own surnames" },
      { where: "Istria, again", who: "occupied by Germany 1943–45, then Yugoslavia" },
      { where: "Croatia", who: "the empire it belonged to for 544 years simply stops existing in 1918" },
    ],
    world: [
      { y: "1914–18", t: "The First World War." },
      { y: "1928", t: "Penicillin is discovered by accident, in a dish somebody forgot to wash up." },
      { y: "1936", t: "The first proper television broadcasts." },
      { y: "1939–45", t: "The Second World War. Every single one of the ten families is somewhere inside it." },
    ],
  },
  {
    id: "after",
    span: "1945 – 2000",
    title: "Everybody leaves",
    lead: "In fifty years, all ten families end up on a continent none of them started on. Most of that happens in one twelve-year burst after the war.",
    family: [
      { y: "1948", k: "croatia", t: "Ivan and Hedviga leave Croatia for Africa. It took them three countries to stop moving: Botswana, then Zimbabwe, then South Africa." },
      { y: "17 Jun 1949", k: "polistena", t: "Antonino Polistena sails from Naples on the Surriento." },
      { y: "4 Oct 1949", k: "mazza", t: "Sebastiano Mazza sails from Genoa on the Toscana." },
      { y: "1949", k: "safrica", t: "Catherine Booyzen marries Nuno Lerena in Johannesburg. South Africa marries Argentina." },
      { y: "1957", k: "italy", t: "The Falcos sail for Brisbane, and Francessco Prostamo sails on the Roma — two of your families crossing the world in the same twelve months, neither knowing the other existed." },
      { y: "Apr 1975", k: "blazevic", t: "Hedviga comes into South Africa from Zimbabwe. It is the one date in that whole journey that is written on a document." },
      { y: "1995", k: "croatia", t: "Ivan dies at Senj — back in the country he started in, which nobody else in this story managed." },
    ],
    charge: [
      { where: "Croatia", who: "Yugoslavia until 1991, then Croatia. The village never moved. The country changed its name again." },
      { where: "South Africa", who: "under apartheid until 1994, when everybody could vote for the first time — while your family was living there" },
    ],
    world: [
      { y: "1953", t: "Everest is climbed." },
      { y: "1969", t: "People walk on the Moon. Hedviga was 43 and watching from Africa; Ivan was 44." },
      { y: "1989", t: "The Berlin Wall comes down." },
      { y: "1994", t: "South Africa's first election where everybody could vote." },
    ],
  },
  {
    id: "now",
    span: "2000 – now",
    title: "And then you",
    lead: "Three hundred and thirty years after Franco Antonino was born in a small town in Calabria, ten separate families arrive at the same address.",
    family: [
      { y: "2001", k: "blazevic", t: "Hedviga dies at Johannesburg on 30 October — the same date her husband died, six years later to the day." },
      { y: "2015", k: "sun", t: "A wedding in Brisbane on 19 December. Her twin sister married the other pair's dad too, and ten families became one lot of cousins." },
      { y: "2025", k: "argentina", t: "A plane from Johannesburg lands at Brisbane. The last journey in the entire story, and the only one you were all alive to see." },
      { y: "now", k: "sun", t: "Four cousins in one city, holding all ten of these families between them." },
    ],
    charge: [
      { where: "everywhere in this story", who: "for the first time ever, all of it is one country away instead of an empire away" },
    ],
    world: [
      { y: "yours", t: "Whatever happens next goes in this row. Somebody will read it in a hundred years and want to know what it was like — so it is worth writing down." },
    ],
  },
];
