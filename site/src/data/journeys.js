// How they actually got here, and why they went.
// Days at sea are counted from the dates in the archives.

export const crossings = [
  {
    k: "safrica", who: "George Augustus Kolbe", age: "aged 16",
    from: "Gravesend, England", to: "Algoa Bay, South Africa",
    left: "3 December 1819", landed: "14 April 1820",
    days: 133, ship: "the Nautilus",
    now: "A plane does it in about 15 hours",
    times: 213,
    text: "He got on the ship four days before his seventeenth birthday — so he turned seventeen at sea, somewhere out in the Atlantic, and did not stand on land again for another four months. There was no engine. If the wind stopped, the ship stopped.",
  },
  {
    k: "britain", who: "Major George Pitt D’Arcy", age: "aged about 42",
    from: "Chatham, England", to: "Parramatta, New South Wales",
    left: "1825", landed: "1826",
    days: null, ship: "a convict transport",
    text: "We know the crossing happened because his children bracket it: one was born at Chatham in 1825 and the next at Parramatta in 1827. His job on board was guarding the convicts the ship was carrying.",
  },
  {
    k: "argentina", who: "Pablo Armando Lerena", age: "in his early twenties",
    from: "Rosario, Argentina", to: "Cape Town, South Africa",
    left: "some time before 1905", landed: "before 1905",
    days: null, ship: "unknown",
    text: "He was born on the Paraná river in 1882, and by 1905 his son was being baptised in Cape Town — so he crossed the whole Atlantic somewhere in between. Nobody has found the ship, or the year, or the reason.",
  },
  {
    k: "croatia", who: "Ivan", age: "aged 16",
    from: "Crikvenica, Croatia", to: "Reutlingen, Germany",
    left: "1941", landed: "21 October 1941",
    days: null, ship: "not a ship — a war",
    text: "He started work on 21 October 1941, at sixteen, as an unskilled hand in a German factory. This is the one journey on this page that nobody chose. He got home again, and the family carries on through him.",
  },
  {
    k: "italy", who: "the Falcos", age: "with a two-year-old",
    from: "Arienzo, Italy", to: "Brisbane, Australia",
    left: "about 1957", landed: "about 1957",
    days: null, ship: "a migrant ship",
    text: "A husband, a wife and a little girl of about two, going from a valley near Naples to the other side of the world. The Australian file that records them arriving is still sitting in the National Archives, unopened.",
  },
  {
    k: "mazza", who: "Michele Mazza", age: "aged 16",
    from: "Messina, Sicily", to: "Brisbane, Australia",
    left: "1925", landed: "21 April 1925",
    days: null, ship: "the Palermo",
    text: "Sixteen years old, off a ship out of Messina, on his own. He came twenty-four years before the rest — two emigrations from the same family, a generation apart.",
  },
  {
    k: "mazza", who: "Sebastiano Mazza", age: "aged 29",
    from: "Genoa, Italy", to: "Australia",
    left: "4 October 1949", landed: "October 1949",
    days: null, ship: "the Toscana",
    text: "The family tree recorded eighteen crossings and not a single ship’s name. Somebody went to the Australian passenger index and pulled out nine of them — this one exactly to the day.",
  },
  {
    k: "prostamo", who: "Francessco Prostamo", age: "aged 57",
    from: "Genoa, Italy", to: "Fremantle, Australia",
    left: "10 October 1957", landed: "10 October 1957",
    days: null, ship: "the Roma",
    text: "The same year the Falcos sailed for Brisbane from the other end of Italy. Two of the ten families crossed the world in the same twelve months without knowing the other existed.",
  },
  {
    k: "polistena", who: "Antonino Polistena", age: "",
    from: "Naples, Italy", to: "Australia",
    left: "17 June 1949", landed: "17 June 1949",
    days: null, ship: "the Surriento",
    text: "Nobody had found this crossing before, because the Australian index had filed him under a shortened version of his name.",
  },
  {
    k: "blazevic", who: "Ivan Žubrinić", age: "",
    from: "the Croatian coast", to: "Port Pirie, South Australia",
    left: "about 1884", landed: "about 1884",
    days: null, ship: "unknown",
    text: "A relative on this side went to South Australia seventy years before anyone else in the family reached Australia — and the spelling of his name changed on arrival and stayed changed. There are Zubrinichs in Australia because of him.",
  },
];

// The journeys that are not from the age of sail — the ones people alive today
// actually made, ending with one the four cousins were here to see.
export const recent = [
  {
    k: "blazevic", who: "Ivan Defranceski and Hedviga Blažević", age: "with three children",
    from: "Senj, Croatia", to: "Botswana, then Zimbabwe, then South Africa",
    left: "Croatia in 1948", ship: "three moves, not one",
    text: "They did not go to Africa in one go. They went to Botswana first, then up to Zimbabwe, and only then south — about nine thousand kilometres in three hops, moving each time to somewhere the family had never been. Ivan is recorded dying back in Croatia, at Senj, in 1995. Out of every single person on this page, he is the only one who ended up in the country he started in.",
    proof: "The family remembers the year as 1948, and the paper argues with it — so keep both. Their three children were born in Croatia in 1948, 1951 and 1953, and the middle one has a sworn birth extract from Senj to prove it, and there is a photograph of the five of them together that looks like 1953 or 1954. So either the leaving was later than everybody remembers, or Ivan went on ahead and the rest followed. The one date here that is definitely a document is the end of it: April 1975, Hedviga into South Africa, from Zimbabwe. The Botswana years are in no index at all — somebody went looking, and Botswana has no searchable migration collection to look in.",
  },
  {
    k: "croatia", who: "Ivan, the grandpa", age: "as a young man",
    from: "Harare, Zimbabwe", to: "Johannesburg, South Africa",
    left: "Zimbabwe as a young man", ship: "some way nobody wrote down",
    text: "Born at Senj in 1951, carried to Africa as a small boy, and then he made a move of his own — down to Johannesburg. That is where he met CAL, whose own grandfather had come from Rosario in Argentina. A Croatian and an Argentinian family met in a South African city, which is not something either of them could have planned.",
    proof: "The family map marks the move and not the year.",
  },
  {
    k: "argentina", who: "Ivan and CAL", age: "grandparents by then",
    from: "Johannesburg, South Africa", to: "Brisbane, Australia",
    left: "2025", ship: "a plane, overnight",
    km: "11,635 km",
    text: "The last journey in the whole story, and the shortest by a very long way. George Kolbe needed 133 days at sea to move between two continents. This was one night with the window blind down. And it is the only crossing on this page that you were all alive for — every other family in this website arrived somewhere nobody knew them. This time the family was already at the airport.",
  },
];

export const reasons = [
  { k: "safrica", q: "Why did the Booyzens go to Africa?",
    a: "Because the British government was paying people to. In 1820 it wanted families settled on the eastern frontier of the Cape, and it offered free passage to anyone who would go. About four thousand took it. A sixteen-year-old London tailor’s son was one of them." },
  { k: "britain", q: "Why did the D’Arcys go to Australia?",
    a: "Because the army told them to. He was an officer of the 39th Regiment of Foot, the regiment was ordered to New South Wales, and officers went where the regiment went. His family went with him." },
  { k: "blazevic", q: "Why were the Blaževićs on that mountain in the first place?",
    a: "Because somebody put them there. Their villages were not old villages that grew slowly — they were founded between about 1605 and 1647, settled with families fleeing the Ottoman armies and planted in the Senj mountains on purpose, to hold the frontier." },
  { k: "blazevic", q: "And why did they come down off it?",
    a: "Because of a railway. In 1873 the new line from Karlovac to Rijeka bypassed Senj completely. Everything that used to come over the mountain on packhorses now went by train, somewhere else, and the port died. The carriers had to find something else to be." },
  { k: "croatia", q: "Why did Ivan go to Germany?",
    a: "He didn’t. He was sixteen, it was 1941, and he was put to work. Of all the journeys on this page, it is the only one where nobody in the family made a choice." },
  { k: "italy", q: "Why did the Falcos leave a place they had farmed for two hundred years?",
    a: "Italy after the Second World War was poor, and Australia was asking for people. Hundreds of thousands of Italians went. The Falcos had been in the same valley for nine documented generations, and then in about 1957 they were on a boat." },
  { k: "mazza", q: "Why did the Sicilians and Calabrians go?",
    a: "Because Italy after the war was poor and Australia was asking for people — the same reason the Falcos went. Four grandparents born between 1920 and 1928, in three towns that had no connection to each other, and every one of them was in Queensland by 1954." },
  { k: "croatia", q: "Why did Ivan and Hedviga go to Africa?",
    a: "There are two answers, and only one of them is the kind that gets written down. The public one: the war had just ended, Europe was wrecked and frightening, and other countries were offering Europeans somewhere safer and easier to start again. Plenty of people took it. The private one is a family suspicion and nothing more. Ivan’s father Anton died in 1943, and afterwards his mother Ursula was with a man whose surname was Carr — and the family has always half-wondered whether the leaving was partly a getting-away from that too. Nobody wrote it down. Suspicions are not evidence, but they are worth keeping, because they are usually pointing at something." },
  { k: "argentina", q: "Why did Bob Lerena leave Argentina?",
    a: "Nobody knows. This is the honest answer, and it is worth saying out loud: there is a real gap here, and finding what fills it is somebody’s job — maybe yours." },
];
