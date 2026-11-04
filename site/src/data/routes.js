/* ROOTS & ROUTES, FOR CHILDREN: every journey on the Journeys page, as a line on a map and a place on a timeline.

   The legs are the Journeys page's, not new research: each `ref` is the `who` of a crossing in journeys.js, the years
   are the ones that page gives (or says it does not), and the lines are one or two of that page's sentences. A leg is
   `dash`ed when one end of it is not a recorded place (the Australian port, «the Croatian coast», the Botswana years)
   and `about` when the year is a best guess; the page says so and never draws a guess as a fact. The kilometres are
   not typed: they are worked out from the two places (scripts/routes.test.mjs checks every leg against the Journeys page).

   Living people are named as the Journeys page names them: by initials. Ivan (Grandpa) died in 2026 (living.json). */
const BNE = [-27.4698, 153.0251];
const P = {
  gravesend: ["Gravesend, England", [51.4415, 0.3687]],
  algoa: ["Algoa Bay, South Africa", [-33.9608, 25.6022]],
  chatham: ["Chatham, England", [51.3811, 0.527]],
  parramatta: ["Parramatta, New South Wales", [-33.815, 151.0011]],
  rosario: ["Rosario, Argentina", [-32.9587, -60.6931]],
  capetown: ["Cape Town, South Africa", [-33.9249, 18.4241]],
  crikvenica: ["Crikvenica, Croatia", [45.1767, 14.6908]],
  reutlingen: ["Reutlingen, Germany", [48.4914, 9.2043]],
  arienzo: ["Arienzo, Italy", [41.0261, 14.5044]],
  brisbane: ["Brisbane, Australia", BNE],
  messina: ["Messina, Sicily", [38.1938, 15.554]],
  naples: ["Naples, Italy", [40.8518, 14.2681]],
  genoa: ["Genoa, Italy", [44.4056, 8.9463]],
  scilla: ["Italy", [38.2539, 15.7144]],
  sydney: ["Sydney, Australia", [-33.8688, 151.2093]],
  fremantle: ["Fremantle, Western Australia", [-32.0569, 115.7439]],
  coast: ["the Croatian coast", [44.9893, 14.9015]],
  portpirie: ["Port Pirie, South Australia", [-33.1858, 138.017]],
  senj: ["Senj, Croatia", [44.9893, 14.9015]],
  harare: ["Harare, Zimbabwe", [-17.8252, 31.0335]],
  joburg: ["Johannesburg, South Africa", [-26.2041, 28.0473]],
  australia: ["Australia", BNE],
};
const leg = (o) => ({ ...o, from: P[o.from][0], fromLL: P[o.from][1], to: P[o.to][0], toLL: P[o.to][1] });

export const legs = [
  leg({ id: "kolbe-1819", k: "safrica", fam: "booyzen", ref: "George Augustus Kolbe", who: "George Kolbe, aged 16",
    from: "gravesend", to: "algoa", left: 1819, landed: 1820, say: "3 December 1819 – 14 April 1820", by: "the sailing ship Nautilus", days: 133,
    line: "He turned seventeen out on the Atlantic and did not stand on land for four months. There was no engine: if the wind stopped, the ship stopped." }),
  leg({ id: "darcy-1825", k: "britain", fam: "darcy", ref: "Major George Pitt D’Arcy", who: "Major George Pitt D’Arcy",
    from: "chatham", to: "parramatta", left: 1825, landed: 1826, about: true, say: "1825–26", by: "a convict transport",
    line: "His job on board was guarding the convicts. We know when they crossed only because a child was born at Chatham in 1825 and the next at Parramatta in 1827." }),
  leg({ id: "zubrinic-1884", k: "blazevic", fam: "blazevic", ref: "Ivan Žubrinić", who: "Ivan Žubrinić",
    from: "coast", to: "portpirie", left: 1884, about: true, dash: true, say: "about 1884", by: "a ship nobody has named",
    line: "He went to South Australia seventy years before anyone else in the family reached Australia. His name changed spelling on arrival and stayed changed, so there are Zubrinichs in Australia because of him." }),
  leg({ id: "lerena-1904", k: "argentina", fam: "lerena", ref: "Pablo Armando Lerena", who: "Pablo Armando Lerena, in his early twenties",
    from: "rosario", to: "capetown", left: 1904, about: true, say: "some time before 1905", by: "a ship nobody has found",
    line: "He was born on the Paraná river in 1882, and by 1905 his son was being baptised in Cape Town. Nobody has found the ship, the year or the reason." }),
  leg({ id: "mazza-1925", k: "mazza", fam: "mazza", ref: "Michele Mazza", who: "Michele Mazza, aged 16",
    from: "messina", to: "brisbane", left: 1925, say: "21 April 1925", by: "the Palermo",
    line: "Sixteen years old and on his own. The rest of his family came twenty-four years later." }),
  leg({ id: "croatia-1941", k: "croatia", fam: "defranceski", ref: "Ivan", who: "Ivan, aged 16",
    from: "crikvenica", to: "reutlingen", left: 1941, say: "21 October 1941", by: "not a ship, a war",
    line: "The one journey on this page that nobody chose. He started work in a German factory at sixteen, and he got home again." }),
  leg({ id: "polistena-1949", k: "polistena", fam: "polistena", ref: "Antonino Polistena", who: "Antonino Polistena",
    from: "naples", to: "australia", left: 1949, dash: true, say: "17 June 1949", by: "the Surriento",
    line: "Nobody had found this crossing before, because the Australian list had written his name in a shorter form." }),
  leg({ id: "mazza-1949", k: "mazza", fam: "mazza", ref: "Sebastiano Mazza", who: "Sebastiano Mazza, aged 29",
    from: "genoa", to: "australia", left: 1949, dash: true, say: "4 October 1949", by: "the Toscana",
    line: "The family tree counted eighteen crossings and not a single ship’s name. This one was found to the exact day." }),
  leg({ id: "arena-1953", k: "arena", fam: "arena", ref: "Rocco Arena", who: "Rocco Arena, aged 29",
    from: "scilla", to: "sydney", left: 1953, dash: true, say: "27 December 1953", by: "a ship called the Sydney",
    line: "He landed two days after Christmas. His wife Angela Polistena had come out four years before him, from the same town." }),
  leg({ id: "africa-1954", k: "croatia", fam: "defranceski", ref: "Ivan Defranceski and Hedviga Blažević", who: "Ivan and Hedviga, with three children",
    from: "senj", to: "harare", left: 1954, about: true, dash: true, say: "the family says 1948; the papers say later", by: "three moves, not one",
    line: "They went to Botswana first, then up to Zimbabwe, and only then south. The family remembers 1948, but the children’s birth papers and a photograph point to about 1954." }),
  leg({ id: "falco-1957", k: "italy", fam: "falco", ref: "the Falcos", who: "the Falcos, with a two-year-old",
    from: "arienzo", to: "brisbane", left: 1957, about: true, say: "about 1957", by: "a migrant ship",
    line: "A husband, a wife and a little girl, from a valley near Naples to the other side of the world." }),
  leg({ id: "prostamo-1957", k: "prostamo", fam: "prostamo", ref: "Francessco Prostamo", who: "Francessco Prostamo, aged 57",
    from: "genoa", to: "fremantle", left: 1957, say: "10 October 1957", by: "the Roma",
    line: "The same year the Falcos sailed. Two of the ten families crossed the world in the same twelve months without knowing the other existed." }),
  leg({ id: "grandpa-1970", k: "croatia", fam: "defranceski", ref: "Ivan, the grandpa", who: "Ivan, the grandpa, as a young man",
    from: "harare", to: "joburg", left: 1970, about: true, say: "no year recorded; the family map shows the move", by: "some way nobody wrote down",
    line: "Born at Senj, carried to Africa as a small boy, then a move of his own, down to Johannesburg. That is where he met CAL, whose grandfather had come from Rosario." }),
  leg({ id: "bne-2025", k: "argentina", fam: "lerena", ref: "Ivan and CAL", who: "Ivan and CAL, grandparents by then",
    from: "joburg", to: "brisbane", left: 2025, say: "2025", by: "a plane, overnight",
    line: "George Kolbe needed 133 days at sea to cross from one continent to another. This took one night with the window blind down. The family was already waiting at the airport." }),
];
