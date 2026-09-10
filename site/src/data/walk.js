// The Walk — every place in this website that is still standing, in the order
// you could actually visit them, ending at the front door.
//
// The grown-up archives have itineraries like this for researchers: which
// archive to write to six weeks ahead, which parish office holds which book.
// This is the children's version of the same idea. The rule is the same too:
// if a thing is not certainly there, or not certainly ours, the stop says so.
//
// access: "open"  — walk up to it, any day, for nothing
//         "ask"   — somebody has to let you in
//         "maybe" — it is probably there, but nobody in the family has checked

export const legs = [
  {
    n: 1,
    name: "England",
    flag: "england",
    sub: "London and the Medway",
    km: "about 50 km between the two",
    lead: "Start here, because two of the ten families walked out of England and never came back — and both of the buildings they walked out of are still up.",
    stops: [
      {
        k: "safrica", place: "St Anne's, Soho", land: "London",
        what: "George Augustus Kolbe was born a few streets from here in December 1802 and christened in this church. Two hundred years later somebody found the page, and it gave the same birthday as his gravestone on the other side of the world.",
        see: "The church was bombed in the war and only partly rebuilt — but the tower is still standing, and the registers survived.",
        look: "Then walk ten minutes to Conduit Street, off Bond Street. His father made clothes there. It is one of the smartest shopping streets in London, and for years the family thought the shop was somewhere else entirely.",
        access: "open",
      },
      {
        k: "britain", place: "Chatham Dockyard", land: "on the Medway, Kent",
        what: "Major George Pitt D'Arcy's regiment was ordered to New South Wales, and this is the sort of place a regiment left from. His son was born at Chatham in 1825; the next child was born at Parramatta in 1827. Those two birthplaces are the only proof of the crossing there is.",
        see: "A whole Georgian naval dockyard, kept as it was — ropewalks, dry docks and all.",
        look: "A rope walk a quarter of a mile long, because that is how long a ship's rope had to be made.",
        access: "open",
      },
    ],
  },
  {
    n: 2,
    name: "Croatia",
    flag: "croatia",
    sub: "Istria, then down to the sea",
    km: "110 km covers all six stops",
    lead: "This is the tightest part of the whole walk. Six stops, two families, four hundred years — and the entire lot fits inside a shorter drive than Brisbane to the Gold Coast and back.",
    stops: [
      {
        k: "croatia", place: "The archive at Pazin", land: "central Istria",
        what: "The parish books of Gračišće are kept here. One of them is a ruled table called the Status Animarum — “the state of the souls” — where a priest wrote down every household in the village: who lived in which house, and when each of them was born, married and died. Four generations of your family are on those pages.",
        see: "The actual books, if you write to the archive first. Somebody in the family has already done it — the pages were sent out in 2021.",
        look: "The castle above the town stands on the edge of a chasm where a whole river vanishes into the ground. Jules Verne liked it so much he put it in a book.",
        access: "ask",
      },
      {
        k: "croatia", place: "Gologorica", land: "a hill village, 9 km from Pazin",
        what: "On the square beside the church there is a big two-storey stone house with a balcony, a coat of arms and a carving of Jesus, and the year 1711 cut over the door. It belonged to a family called De Franceschi.",
        see: "The house, from the outside, any day you like.",
        look: "Look at the date and then be careful, because this is the most honest stop on the walk: nobody has proved those De Franceschis are your De Franceschis. It is the biggest unfinished question in that whole archive. Go and stand in front of it — but do not call it ours yet.",
        access: "open",
      },
      {
        k: "croatia", place: "Gračišće — houses 5 and 19", land: "Gallignana, in Italian",
        what: "A stone village on a hilltop, small enough that nobody ever needed street names. The priest wrote families down by their house number instead. Yours lived at house 5, where Giovanni Battista was a farmer, and later at house 19, where his son Antonio cut stone for a living.",
        see: "The village is about four hundred people even now, and the house numbers are still on the houses.",
        look: "Find number 5 and number 19. That is your address, written down in a book in 1846.",
        access: "open",
      },
      {
        k: "blazevic", place: "The Hotel Therapia", land: "Crikvenica, on the coast",
        what: "The grand hotel on the seafront, where people came from all over the empire to take the sea cure. Your great-grandma Hedviga sang here. Your great-grandpa Ivan was born in this town in 1925, and his first daughter in 1948.",
        see: "It is still there and still a hotel. It opened in 1895, took the name Therapia in 1899, and an Austrian company bought it in 2013 and renamed it the Kvarner Palace. So the name she sang under is gone. The room is not.",
        look: "It had a machine that could photograph your bones about ten years after anybody had worked out how to do that.",
        access: "open",
      },
      {
        k: "blazevic", place: "The cemetery wall at Senj", land: "under the mountain",
        what: "Ljubomir and Milka are in the wall here, with two of their sons. One of them is Oto, who was twenty-two when he died in 1945, in the last year of the war. Ivan is in this town too, under a slab cut IVAN DEFRANČESKI — with the Croatian č, which is the spelling this branch settled on in the end.",
        see: "For a while nobody could read the wall stone at all, until a photograph turned up that had been taken in soft light instead of hard sun.",
        look: "Above the town is the Vratnik pass — the road over the mountain that is the only reason Senj exists. Your family carried other people's goods up it on packhorses. And if the wind is up, hold on: the bura here can turn a lorry over.",
        access: "open",
      },
      {
        k: "blazevic", place: "Krivi Put and Smokvica Krmpotska", land: "in the hills behind Senj",
        what: "Villages built on purpose in the 1600s for families running from an invading army. Toma was born in house 114. Tonka was born in house 136, on a road whose name means “crooked road”.",
        see: "The road, the houses, and how far it is down to the sea — which they walked.",
        look: "House numbers again. Two of them, in two villages, twenty minutes apart.",
        access: "maybe",
      },
    ],
  },
  {
    n: 3,
    name: "Italy",
    flag: "italy",
    sub: "Naples, Sicily, and the toe",
    km: "about 490 km, north to south",
    lead: "Five of the ten families come out of Italy — one near Naples, and four from the very bottom of it. They did not know each other. Their great-grandchildren are cousins.",
    stops: [
      {
        k: "italy", place: "Sant'Andrea at Arienzo", land: "a green valley near Naples",
        what: "On 24 October 1767 a priest in this church picked up a pen and wrote Pasquale Falco into a book. Nine documented generations of Falcos were born, married and buried in this one valley.",
        see: "The church is still there and still a church.",
        look: "The bishop who lived in the palace next door from 1762 to 1775 is now a saint. He was there while your family was.",
        access: "open",
      },
      {
        k: "mazza", place: "Piedimonte Etneo", land: "Catania, Sicily",
        what: "The village the Mazzas come from. The name means, plainly, “the foot of Etna” — and that is exactly where it is.",
        see: "The volcano above it, still active and still smoking.",
        look: "The ground around a volcano is famously good for growing things. That is why anybody lives somewhere so obviously dangerous.",
        access: "open",
      },
      {
        k: "arena", place: "Scilla", land: "Reggio Calabria",
        what: "A fishing town on the strait between Sicily and the mainland, with a castle on a rock above the water. Two of the ten families come from this one town — the Arenas and the Polistenas — and in 1892 two Arenas married each other here.",
        see: "The castle, the beach under it, and the swordfish boats.",
        look: "Those boats have a prow sticking out further than the boat is long, so the man with the harpoon can stand right out over the water. And in very old Greek stories, a monster called Scylla lived on this exact stretch of sea.",
        access: "open",
      },
      {
        k: "prostamo", place: "Briatico", land: "Vibo Valentia, Calabria",
        what: "A small white town above a beach. Nine straight generations of Prostamos were born, married and buried here without leaving — back to Franco Antonino in 1697, who is the oldest person anybody in this whole website can name.",
        see: "The town, the sea, and how small a place can hold three hundred years of one family.",
        look: "This is the deepest root on the walk, and it arrives through a great-grandmother — not through anybody's surname.",
        access: "open",
      },
    ],
  },
  {
    n: 4,
    name: "Argentina",
    flag: "argentina",
    sub: "the long jump across the Atlantic",
    km: "11,200 km from the last stop",
    lead: "One stop, and the biggest single hop on the walk — and the only place on it where nobody knows why the family left.",
    stops: [
      {
        k: "argentina", place: "Rosario, on the Paraná", land: "Argentina",
        what: "Pablo Armando Lerena — Bob — was born in this river city on 22 February 1882. By 1905 his son was being baptised in Cape Town, so somewhere in between he crossed the entire Atlantic. Nobody has found the ship, or the year, or the reason.",
        see: "The Paraná, which is over 4,800 km long. Ships come up it from the sea even here, hundreds of kilometres inland.",
        look: "Stand on the river and think about it being a gap rather than an answer. Filling that gap is a real job, and it is nobody's yet.",
        access: "open",
      },
    ],
  },
  {
    n: 5,
    name: "South Africa",
    flag: "safrica",
    sub: "the Karoo, then the city",
    km: "about 560 km between the two",
    lead: "Four of the ten families ended up in one South African city, and two of them met there. This is where the walk starts turning towards you.",
    stops: [
      {
        k: "safrica", place: "The gravestone at Burgersdorp", land: "the Karoo",
        what: "George Kolbe — the boy who sailed from London at sixteen and turned seventeen at sea — is here with Margaret Downing, under a cut-stone monument inside an iron railing.",
        see: "It is still standing, and it says he was born in London on 7 December 1802. Two hundred years later somebody found the London church book, and it says exactly the same day. That is what a proof looks like: two pieces of paper, ten thousand kilometres apart, agreeing.",
        look: "All round you is the Karoo — hot in the day, cold at night, so flat and open you can watch a storm coming for an hour. He named his farm out here Wurtemburg, after the part of Germany his own father came from.",
        access: "open",
      },
      {
        k: "argentina", place: "Johannesburg", land: "on the Rand",
        what: "In 1949 Catherine Booyzen married Nuno Lerena at St Joseph's, Mayfair — South Africa marrying Argentina, the first of the joins that end in you. Later a Croatian family came down from Zimbabwe, and Ivan met CAL here. Hedviga died here in 2001.",
        see: "A whole city that exists because somebody found gold in 1886 — which is to say, it is younger than several people in this website.",
        look: "This is the airport the last journey in the entire story left from, in 2025.",
        access: "open",
      },
    ],
  },
  {
    n: 6,
    name: "Australia",
    flag: "australia",
    sub: "Sydney, then home",
    km: "730 km, and then a bus ride",
    lead: "The last leg. Everybody in this website was walking towards this bit without knowing it.",
    stops: [
      {
        k: "britain", place: "Parramatta", land: "up the river from Sydney",
        what: "The D'Arcys' next child was born here in 1827, two years after the one born at Chatham. That is how we know when they crossed the world — the children bracket it.",
        see: "The oldest European buildings in Australia are in this suburb, because this is where the food was grown that kept the first settlement alive.",
        look: "One of this family helped chart the ground that Melbourne now stands on. He was sent to look at an empty bay in 1836.",
        access: "open",
      },
      {
        k: "mazza", place: "Nudgee, Brisbane — plots V-1026 to V-1029", land: "your own city",
        what: "RFM and MJM's four Italian great-grandparents are buried in four consecutive plots, in the order they died, with nineteen years between the first and the last.",
        see: "Four graves in a row. Born in three towns at the bottom of Italy that had never heard of each other, and they ended up side by side.",
        look: "Count the years on the stones. Nineteen, from the first to the last.",
        access: "open",
      },
      {
        k: "britain", place: "Toowong and Dutton Park", land: "Brisbane",
        what: "Two Brisbane cemeteries hold four generations of D'Arcys, including the surveyor who was sent to chart Port Phillip Bay.",
        see: "Four generations of one family in two cemeteries in one city.",
        look: "This is the family that both of the mums come from — so this stop belongs to all four of you at once.",
        access: "open",
      },
      {
        k: "sun", place: "Your own front door", land: "Brisbane",
        what: "Thirty-four thousand kilometres, ten families, six countries and about three hundred and thirty years, and this is where every single line of it arrives.",
        see: "The shortest stop on the walk, and the only one you can do today.",
        look: "Every person on this website was, without knowing it, walking towards this street.",
        access: "open",
        last: true,
      },
    ],
  },
];

export const totals = [
  { n: "34,000 km", label: "the whole walk", sub: "five sixths of the way round the world" },
  { n: "18", label: "stops", sub: "in six countries" },
  { n: "110 km", label: "holds six of them", sub: "the entire Croatian leg" },
  { n: "1697", label: "the oldest stop", sub: "Briatico, in Calabria" },
];
