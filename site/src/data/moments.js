// The biggest dated moments across all ten families, in order.
// Every one of these is documented in one of the archives.

const raw = [
  { y: "1697", k: "prostamo", t: "The oldest person anybody can name",
    w: "Franco Antonino Prostamo, born at Briatico on the Calabrian coast. Nine generations of Prostamos follow him in the same small town, and the line reaches ADD and MCD’s cousins through a great-grandmother. He is the oldest person in this entire website." },
  { y: "about 1717", k: "blazevic", t: "And the oldest on the other side",
    w: "Nicolaus Gerkacs, on the Croatian coast. But his name comes off a family tree, not out of a church book. The oldest ancestor with an actual record behind him is Joannis Antić, born about 1739 — and he is on this side too." },
  { y: "1605–1647", k: "blazevic", t: "A village is built on purpose",
    w: "Smokvica Krmpotska and Krivi Put were founded, not grown: families fleeing the Ottoman armies were settled in the Senj mountains to hold the frontier. Two of Hedviga's four grandparent lines come out of those villages." },
  { y: "about 1750", k: "croatia", t: "Giovanni is born — probably",
    w: "At Gologorica in Istria. He is the top of the Defranceski ladder, but this date comes off the family's own hand-drawn chart, not out of a register. What is certain is that he existed: later clerks kept calling his son “son of the late Giovanni”." },
  { y: "1751", k: "britain", t: "Robert D’Arcy is born in Yorkshire",
    w: "He grew up to command the Royal Engineers at Chatham. Above him the family papers start arguing with themselves." },
  { y: "24 Oct 1767", k: "italy", t: "A priest picks up a pen at Arienzo",
    w: "He writes that a baby has been born to Matteo Falco and Francesca Crisci, and is to be called Pasquale. That single line is the oldest Falco proof there is." },
  { y: "7 Dec 1802", k: "safrica", t: "George Augustus Kolbe is born in London",
    w: "In Soho. Two hundred years later the register was found, and it agrees to the day with a gravestone six thousand miles away in the Karoo." },
  { y: "3 Dec 1819", k: "safrica", t: "The Nautilus sails from Gravesend", age: "he was 16",
    w: "He was seventeen. Eleven months earlier he had married Margaret Downing by swearing they were both twenty-one. He was sixteen; she was fifteen." },
  { y: "14 Apr 1820", k: "safrica", t: "It lands at Algoa Bay", age: "he was 17",
    w: "He became one of the 1820 Settlers, preached across the Orange River, and named his Karoo farm “Wurtemburg” after where his own father's family came from in Germany." },
  { y: "1825", k: "croatia", t: "Antonio the stonecutter is born",
    w: "House 19, Gračišće. He shaped hard rock with a hammer and a chisel, and so did his son after him." },
  { y: "1826", k: "britain", t: "The 39th Regiment sails for New South Wales",
    w: "Major George Pitt D’Arcy is aboard, guarding convicts. One of his children was born at Chatham in 1825 and the next at Parramatta in 1827 — so the crossing is pinned exactly." },
  { y: "1836", k: "britain", t: "Three men are sent to chart Port Phillip Bay",
    w: "One of them is Frederick Robert D’Arcy. The city of Melbourne stands on the ground they surveyed." },
  { y: "1 Dec 1844", k: "safrica", t: "Kolbe dies at his farm",
    w: "The gravestone at Burgersdorp is still standing today, and still naming him and his wife." },
  { y: "4 May 1851", k: "safrica", t: "Willem Hermanus is born",
    w: "Remembered for fifty years as the man shot by the British — when in fact he died of a stomach ulcer, in bed, with a doctor and his eldest son beside him. And his baptism page is the one that shows the family name already spelled with a z." },
  { y: "1873", k: "blazevic", t: "A railway bypasses Senj",
    w: "The new line from Karlovac to Rijeka went somewhere else, and the port died. Everything the carriers used to bring over the mountain now travelled by train. Almost every job in that family afterwards is downstream of this one decision." },
  { y: "1857", k: "blazevic", t: "Josip Papić is baptised at Senj",
    w: "He grew up to be a trhonoša — one of the carriers who took packhorses over the Vratnik pass. Later he kept an inn on the same road." },
  { y: "1859", k: "blazevic", t: "Tonka is born at Krivi Put, house 136", age: "house 136",
    w: "Up on the Velebit road above the town. She came down off that road into Senj, and the family stayed." },
  { y: "22 Feb 1882", k: "argentina", t: "Bob Lerena is born at Rosario",
    w: "On the Paraná river in Argentina. He ended up with his own racing stables on the other side of the Atlantic, in Cape Town." },
  { y: "1899–1902", k: "safrica", t: "The Anglo-Boer War",
    w: "The family is living right inside it. Burgersdorp alone produced 1,048 Cape Rebels. One family wedding was held mid-war, in July 1901, in the house of a man called D. Schoeman — and a Commandant D. Schoeman led about 400 Cape Rebels one district away. It might be the same man. Nobody has proved it." },
  { y: "1892", k: "arena", t: "Two Arenas marry at Scilla",
    w: "Giuseppe Arena was born in 1892 and Anna Arena in 1893, in the same little town on the strait between Sicily and the mainland. Same surname, one year apart. Their son Rocco is the Rocco that RFM is named after." },
  { y: "1901", k: "italy", t: "Carmine Antonio Falco is born at Arienzo",
    w: "He is the one who eventually moved the whole Falco family to the other side of the planet. He is buried in Brisbane." },
  { y: "1920", k: "blazevic", t: "Milka marries Ljubomir Blažević", age: "she was 34",
    w: "She was a widow of thirty-four who rolled cigars in the tobacco factory. Their daughter Hedviga was born six years later." },
  { y: "24 Dec 1940", k: "argentina", t: "A passport is stamped in Cape Town",
    w: "The Argentine consulate issues Bob Lerena serie A no. 07962. Under “profession” it says one word: Trainer. His photograph and his signature are both still on it." },
  { y: "1945", k: "blazevic", t: "Oto Blažević dies, aged twenty-two", age: "he was 22",
    w: "In the last year of the war. His name is on the wall grave at Senj with his parents." },
  { y: "21 Apr 1925", k: "mazza", t: "A sixteen-year-old lands off the Palermo",
    w: "Michele Mazza came out of Messina and stepped ashore at Brisbane. The family tree recorded eighteen crossings and not one ship’s name; somebody went to the Australian passenger index and found nine of them, including this one." },
  { y: "4 Oct 1949", k: "mazza", t: "Sebastiano sails on the Toscana",
    w: "Out of Genoa. By 1954 all four of the Italian great-grandparents on that side were in Queensland — born 1920 to 1928, in three towns that had nothing to do with each other." },
  { y: "1949", k: "safrica", t: "Two families meet in Johannesburg",
    w: "Catherine Booyzen marries Nuno Lerena at St Joseph's, Mayfair. South Africa meets Argentina — the first of the joins that end in you." },
  { y: "1995 & 2001", k: "croatia", t: "Two deaths, six years to the day apart",
    w: "Ivan Defranceski died at Senj on 30 October 1995. Hedviga died at Johannesburg on 30 October 2001 — the very same date, six years later." },
  { y: "2015", k: "sun", t: "A wedding in Brisbane",
    w: "On 19 December. Her twin sister married the other pair's dad too — and between the two weddings, ten families became one lot of cousins.", big: true },
  { y: "1895", k: "blazevic", t: "The Hotel Therapia opens at Crikvenica",
    w: "The grandest building in the town, with sea-water baths and, within about ten years, an X-ray machine. Fifty-odd years later your great-grandma Hedviga sang in it. It is still standing — it has been called the Kvarner Palace since 2013." },
  { y: "1948", k: "croatia", t: "Ivan and Hedviga leave for Africa", age: "1948",
    w: "The year the family remembers. Europe had just been wrecked by a war and other countries were offering Europeans somewhere safer to start again — and there is a second, quieter reason the family has always suspected and nobody wrote down. It took them three countries to stop moving: Botswana, then Zimbabwe, then South Africa." },
  { y: "2025", k: "argentina", t: "A plane from Johannesburg lands at Brisbane",
    w: "Ivan and CAL moved 11,635 km in a single night — the last journey in this entire website, and the only one the four of you were alive to see." },
];

// The page says "in the order they really happened", so make that true rather
// than trusting whoever appended last. Pulls the first four-digit year out of
// the label, and uses the day and month where the label carries them.
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function when(label) {
  const year = Number((label.match(/\d{4}/) || [0])[0]);
  const day = Number((label.match(/^(\d{1,2})\s/) || [0, 0])[1]);
  const mon = MONTHS.findIndex(m => label.includes(m));
  return year + (mon < 0 ? 0 : (mon + 1) / 13) + day / 400;
}
export const moments = [...raw].sort((a, b) => when(a.y) - when(b.y));
