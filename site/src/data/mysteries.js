/* THE CASE BOARD: what the ten families still cannot answer, as detective cases for children.

   Nothing here is new research. Each case is built from words the site already says: the family's `mystery` paragraph
   (families.js), the Journeys page, the moments timeline, and the archives' own notes. A clue is a thing a record or a
   person says; `kind` says which: "record" (a document), "story" (what the family remembers), "tree" (somebody else's
   family tree, not a document). A clue with no kind is simply stated by the site. A theory is only ever "might be".
   status: "open" = nothing yet points one way; "closer" = the records have narrowed it, but not closed it.
   Scripts/mysteries.test.mjs checks every case points at a real family and carries the words that make it a case. */
export const cases = [
  { id: "lerena-link", k: "argentina", slug: "lerena", status: "open",
    title: "The Case of the Missing Link",
    ask: "Whose son was Juan Carlos Lerena?",
    clues: [
      { t: "Bob Lerena was born in Rosario in 1882, and his father was a Juan Carlos Lerena.", kind: "record" },
      { t: "Juan Carlos left almost no trace anywhere." },
      { t: "Nine children of Sancho and María are named in the papers. No paper says which of them, if any, was Juan Carlos’s parent.", kind: "record" },
    ],
    theories: ["Sancho and Félix, the two Llerenas above the gap, might be his grandfather and great-grandfather. They might not."],
    next: "Somewhere in the River Plate there is a book with the answer in it." },

  { id: "booyzen-door", k: "safrica", slug: "booyzen", status: "open",
    title: "The Locked Door",
    ask: "Who were the parents of Gerthardus Lodewikus Booysen?",
    clues: [
      { t: "He is at the very top of the Booyzen ladder." },
      { t: "We have his name and nothing else: no birthday, no parents, not one record." },
    ],
    theories: [],
    next: "A first record of any kind. Until one turns up, he is the most frustrating person in all ten families." },

  { id: "defranceski-giovanni", k: "croatia", slug: "defranceski", status: "closer",
    title: "Which Giovanni?",
    ask: "Who was the Giovanni at the top of the Defranceski ladder?",
    clues: [
      { t: "A parish book writes q. Joannis next to Antonio’s name: “son of the late Giovanni”. So a Giovanni was there.", kind: "record" },
      { t: "His year, about 1750, comes off the family’s own hand-drawn chart, not out of a register.", kind: "story" },
      { t: "No page has been found for the man himself." },
    ],
    theories: ["He might really be a Giovanni Battista from house 31 at Gologorica. We cannot prove it yet."],
    next: "A register page for the man himself, or one that joins house 31 to the family." },

  { id: "falco-birthdays", k: "italy", slug: "falco", status: "closer",
    title: "Pasquale’s Two Birthdays",
    ask: "When was Pasquale Falco really born?",
    clues: [
      { t: "The baptism register says he was a newborn in October 1767.", kind: "record" },
      { t: "His death record makes him old enough to have been born in 1765.", kind: "record" },
      { t: "The church book has a hole in it: the pages between 1738 and 1761 are missing, just above Matteo." },
    ],
    theories: ["Both cannot be right. This site follows the register."],
    next: "Another way round the missing pages, to climb above Matteo." },

  { id: "darcy-general", k: "britain", slug: "darcy", status: "closer",
    title: "The General With No Father",
    ask: "Who were Robert D’Arcy’s parents?",
    clues: [
      { t: "He was buried at Chatham in 1827, aged 76. That puts his birth about 1751.", kind: "record" },
      { t: "He commanded the Royal Engineers there, and died a Major-General.", kind: "record" },
      { t: "No baptism has been found. Yorkshire, and the year 1751, are what the family says.", kind: "story" },
    ],
    theories: ["Earls, a castle, a rumour that somebody was somebody’s secret son. Lovely, but not yet true."],
    next: "A baptism, or any paper that names his father." },

  { id: "mazza-mariano", k: "mazza", slug: "mazza", status: "open",
    title: "The Man at the Top",
    ask: "Who was Mariano Mazza’s father?",
    clues: [
      { t: "Mariano was a labourer at Piedimonte Etneo in 1845, and still living there in 1871.", kind: "record" },
      { t: "He may have been born there, if he is the Mariano who married in 1836." },
    ],
    theories: ["He may be the Mariano who married in 1836."],
    next: "His father’s name. It is the same kind of locked door as Gerthardus on the Booyzen side, on another continent." },

  { id: "prostamo-1697", k: "prostamo", slug: "prostamo", status: "closer",
    title: "How Old Is the Prostamo Line?",
    ask: "Can the line really be followed back to 1697?",
    clues: [
      { t: "Franco Antonino Prostamo is the oldest person anybody can name, born at Briatico in 1697. That is said, not proved.", kind: "tree" },
      { t: "What is on paper reaches 1820.", kind: "record" },
      { t: "The last four generations of the line are remembered rather than written down.", kind: "story" },
    ],
    theories: [],
    next: "Anything older than Franco Antonino. 1697 is already a very long way back for a small town’s paper to survive at all." },

  { id: "arena-two", k: "arena", slug: "arena", status: "open",
    title: "Two Arenas in One",
    ask: "Which Arena line is which?",
    clues: [
      { t: "The ladder goes back seven generations of Arenas in one little town, to a Filippo who had died by 1830.", kind: "record" },
      { t: "Giuseppe Arena was born in 1892 and Anna Arena in 1893, in the same little town. Same surname, one year apart. They are Rocco’s parents.", kind: "record" },
    ],
    theories: ["Because both of Rocco’s parents were Arenas, two Arena lines run up out of him. The ladder follows his father’s."],
    next: "Untangling the other line is the job." },

  { id: "polistena-pontillo", k: "polistena", slug: "polistena", status: "open",
    title: "Pontillo or Polistena?",
    ask: "Is the Pontillo above Antonio the same family?",
    clues: [
      { t: "Above Antonio the name becomes Pontillo." },
      { t: "A lesson from the same family: the Australian index filed Antonino Polistena under a shortened version of his name, so nobody found his ship for years.", kind: "record" },
    ],
    theories: ["It might be the same family writing itself differently.", "It might be two families joined up by mistake."],
    next: "A record that names someone in both spellings." },

  { id: "blazevic-promise", k: "blazevic", slug: "blazevic", status: "closer",
    title: "A Promise, Not a Proof",
    ask: "How far back can the Blaževićs really be followed?",
    clues: [
      { t: "The oldest Blažević found written in a register is Toma, in 1838.", kind: "record" },
      { t: "Mateša, Grgica and Ilija, at the very top, come from other people’s family trees, not from a church book.", kind: "tree" },
    ],
    theories: ["Everything above Toma is still a promise rather than a proof."],
    next: "A register that names Mateša, Grgica or Ilija." },

  { id: "africa-year", k: "croatia", slug: "defranceski", status: "open",
    title: "1948 or 1954?",
    ask: "When did Ivan and Hedviga leave Croatia for Africa?",
    clues: [
      { t: "The family remembers 1948.", kind: "story" },
      { t: "Their three children were born in Croatia in 1948, 1951 and 1953, and the middle one has a sworn birth extract from Senj.", kind: "record" },
      { t: "A photograph of the five of them together looks like 1953 or 1954." },
      { t: "The one date that is definitely a document is the end of it: April 1975, Hedviga into South Africa, from Zimbabwe.", kind: "record" },
      { t: "The Botswana years are in no index at all, because Botswana has no searchable migration collection." },
    ],
    theories: ["The leaving was later than everybody remembers.", "Ivan went on ahead and the rest followed."],
    next: "Any paper from the crossing itself, in any of the countries." },

  { id: "ships", k: "argentina", slug: "lerena", status: "open",
    title: "The Ships Nobody Named",
    ask: "How did Bob Lerena get from Argentina to Cape Town, and why?",
    clues: [
      { t: "He was born on the Paraná river in 1882. By 1905 his son was being baptised in Cape Town.", kind: "record" },
      { t: "Nobody has found the ship, the year or the reason." },
      { t: "It is not the only missing ship: Ivan Žubrinić went to South Australia about 1884, and his ship has no name either." },
    ],
    theories: [],
    next: "A passenger list. The honest answer to why he left is: nobody knows. Maybe finding it is your job." },
];
