// The five families that meet in the two boys.
// Every fact here is carried over from one of the five research archives.
// Written to be read out loud to a child of six, and read alone by a child of ten.

// Living people are shown by initial only, with no dates.
export const boys = [
  { name: "A", place: "Brisbane" },
  { name: "M", place: "Brisbane" },
];

export const families = [
  {
    slug: "defranceski",
    name: "Defranceski",
    key: "croatia",
    flagWord: "Croatia",
    from: "Istria & the Adriatic Sea",
    icon: "chisel",
    blurb: "Stonecutters on a hill in Croatia, who came down to the sea and then sailed to the other side of the world.",
    meaning:
      "Defranceschi just means “of the Franceschi” — the family of a man called Francesco. So lots of families made the name up on their own, all over Italy. Ours is the one from the hill village of Gračišće.",
    km: "about 16,000 km",
    kmNote: "Gračišće, Croatia → Brisbane",
    archive: "https://daviddef.github.io/TheDefranceski/",
    archiveName: "The Defranceschi Archive",
    facts: [
      {
        big: "They carved stone for a living.",
        text: "Great-great-great-great-grandpa Antonio was a lapicida — that is the old Latin word for a stonecutter. He shaped hard rock with a hammer and a chisel. His son Josip did it too, and the parish book calls him a “skilled stonemason.”",
      },
      {
        big: "Their houses had numbers instead of names.",
        text: "In the village of Gračišće the priest wrote down every family by their house number. Our family lived in house 5. Then Antonio grew up, got married, and moved into house 19.",
      },
      {
        big: "Two lines in a dusty book joined the whole family together.",
        text: "Next to Antonio’s name someone had written q. Joannis — “son of the late Giovanni.” Two little words, hiding in a book for 200 years, proved that house 19 and house 5 were the same family.",
      },
      {
        big: "Grandpa was born in a town of the big wind.",
        text: "He was born in Senj, right on the Adriatic Sea. Senj is famous for a wind called the bura, which comes roaring down off the mountains so hard that it can blow a person right over.",
      },
      {
        big: "Then they crossed the whole world — twice.",
        text: "From Croatia to Johannesburg in South Africa. Then from Johannesburg all the way to Brisbane. That is where Dad grew up, and where you were born.",
      },
    ],
    ladder: [
      { name: "A & M", where: "Brisbane, Australia", you: true },
      { name: "D", rel: "Dad", where: "Johannesburg, South Africa" },
      { name: "I", rel: "Grandpa", where: "Senj, Croatia" },
      { name: "Ivan", rel: "Great-grandpa", when: "1925–1995", where: "Crikvenica → Senj" },
      { name: "Anton Rudolf", rel: "2× great-grandpa", when: "1890–1943", where: "Klenovica, house 22" },
      { name: "Josip", rel: "3× great-grandpa", when: "1863–1951", where: "Gračišće → Crikvenica", job: "stonemason" },
      { name: "Antonio", rel: "4× great-grandpa", when: "1825–1894", where: "Gračišće, house 19", job: "stonecutter" },
      { name: "Giovanni Battista", rel: "5× great-grandpa", when: "1787–1846", where: "Gračišće, house 5", job: "farmer" },
      { name: "Giovanni", rel: "6× great-grandpa", when: "1750–1829", where: "Gologorica", last: true },
    ],
    mystery:
      "Giovanni at the very top is where the ladder stops. We think he might really be a Giovanni Battista from house 31 at Gologorica — but we cannot prove it yet.",
  },

  {
    slug: "falco",
    name: "Falco",
    key: "italy",
    flagWord: "Italy",
    from: "Arienzo, near Naples",
    icon: "falcon",
    blurb: "A family named after a bird, who farmed the same green valley for more than two hundred years.",
    meaning:
      "Falco is the Latin word for falcon — a fast, sharp-eyed hunting bird. People got the name for being quick, or sharp-eyed, or for keeping falcons.",
    km: "about 16,000 km",
    kmNote: "Arienzo, Italy → Brisbane",
    archive: "https://daviddef.github.io/TheFalco/",
    archiveName: "The Falco Archive",
    facts: [
      {
        big: "Your family is named after a falcon.",
        text: "Falco means falcon. Somewhere long ago, somebody was called “the falcon” — and the nickname stuck so well that it is still your family’s name today, hundreds of years later.",
      },
      {
        big: "A priest wrote your family down in Latin in 1767.",
        text: "On 24 October 1767, in the church of Sant’Andrea at Arienzo, a priest picked up his pen and wrote that a baby had been born to Matteo Falco and Francesca Crisci, and that he was to be called Pasquale. That single line is the oldest proof we have.",
      },
      {
        big: "They stayed put. For a very long time.",
        text: "Nine generations of Falcos were born, married and buried in the same little town. Farmers, nearly all of them, working the same valley their great-great-grandparents had worked.",
      },
      {
        big: "A saint lived in the house next door.",
        text: "From 1762 to 1775 the bishop who lived in the palace right beside the family’s church was Alfonso Maria de’ Liguori — and he is a saint now. He did not baptise anybody in our family. But he was next door.",
      },
      {
        big: "Words beat numbers.",
        text: "One record looked like it said 1780. But the priest had also written the year out in Latin words: octogesimo nono — eighty-nine. So the real year was 1789. When the words and the numbers disagree, the words win.",
      },
      {
        big: "Then one of them got on a ship to Australia.",
        text: "Carmine Antonio Falco was born in Arienzo in 1901 and is buried in Brisbane. He is the one who moved the whole family to the other side of the planet.",
      },
    ],
    ladder: [
      { name: "A & M", where: "Brisbane, Australia", you: true },
      { name: "C", rel: "Mum", where: "Brisbane, Australia" },
      { name: "G", rel: "Grandma", where: "Benevento, Italy" },
      { name: "C", rel: "Great-grandpa", where: "Forchia, Italy" },
      { name: "Carmine Antonio", rel: "2× great-grandpa", when: "1901–1988", where: "Arienzo → Brisbane" },
      { name: "Raffaele", rel: "3× great-grandpa", when: "born 1873", where: "Arienzo, Italy", job: "farmer" },
      { name: "Carmine Antonio", rel: "4× great-grandpa", when: "born 1850", where: "Arienzo, Italy" },
      { name: "Raffaele", rel: "5× great-grandpa", when: "1818–1880", where: "Arienzo, Italy" },
      { name: "Vincenzo", rel: "6× great-grandpa", when: "1793–1875", where: "Arienzo, Italy" },
      { name: "Pasquale", rel: "7× great-grandpa", when: "1765–1834", where: "Arienzo, Italy" },
      { name: "Matteo", rel: "8× great-grandpa", when: "children born from 1767", where: "Arienzo, Italy", last: true },
    ],
    mystery:
      "Above Matteo the church book has a hole in it: the pages between 1738 and 1761 are missing. To climb any higher we have to find another way round.",
  },

  {
    slug: "lerena",
    name: "Lerena",
    key: "argentina",
    flagWord: "Argentina",
    from: "Rosario, on the Paraná river",
    icon: "horse",
    blurb: "Horse people. From a river town in Argentina to the racetracks of South Africa — and one of the rarest names on Earth.",
    meaning:
      "Nobody is quite sure yet. Lerena might come from the Basque country, where -ena means “the house of.” Or it might be a short way of saying Llerena, a town in Spain.",
    km: "about 12,400 km",
    kmNote: "Rosario, Argentina → Brisbane",
    archive: "https://daviddef.github.io/TheLerena/",
    archiveName: "The Lerena Archive",
    facts: [
      {
        big: "Only 2,124 people in the whole world are called Lerena.",
        text: "That is fewer than the number of children in some schools. If you meet another Lerena anywhere on Earth, there is a very good chance you are related to them.",
      },
      {
        big: "He had three names, and everyone used a different one.",
        text: "His Argentine passport says Pablo Armando Lerena. His South African papers say Robert Paul. And at the stables, everybody just called him Bob.",
      },
      {
        big: "He trained racehorses.",
        text: "Bob was born in Rosario, Argentina, on 22 February 1882, and ended up with his own stables in Cape Town. His passport has one word for his job: Trainer. When he died, the certificate said Race Horse Owner.",
      },
      {
        big: "He taught boys to be jockeys.",
        text: "Young riders came to learn from him. One of them, Alan Higgins, went on to build a whole training centre of his own — and still told people, sixty years later, that he had been “apprenticed to Bob Lerena.”",
      },
      {
        big: "The horses never stopped.",
        text: "Bob’s son became a trainer too. His grandson Tex was a top jockey for twenty-two years. And Gavin Lerena is a champion jockey in South Africa right now — your dad’s cousin.",
      },
    ],
    ladder: [
      { name: "A & M", where: "Brisbane, Australia", you: true },
      { name: "D", rel: "Dad", where: "Johannesburg, South Africa" },
      { name: "C", rel: "Grandma", where: "Johannesburg, South Africa" },
      { name: "Nuno Fernando", rel: "Great-grandpa", when: "1924–1971", where: "Cape Town → Germiston" },
      { name: "Pablo Armando “Bob”", rel: "2× great-grandpa", when: "1882–1950", where: "Rosario → Cape Town", job: "horse trainer", last: true },
    ],
    mystery:
      "This is the shortest ladder of the five — and the biggest mystery. We know Bob was born in Rosario in 1882, but we do not yet know his mother’s or his father’s name. Somewhere in Argentina there is a book with the answer in it.",
  },

  {
    slug: "booyzen",
    name: "Booyzen",
    key: "safrica",
    flagWord: "South Africa",
    from: "The Karoo, the Cape & Johannesburg",
    icon: "ship",
    blurb: "Farmers on the dry Karoo plains, a family that changed one letter of its own name, and a gravestone that told the truth after ninety years.",
    meaning:
      "Booyzen is Booysen with the s swapped for a z. The family says one of the men changed it during a war, so nobody would mix him up with the Booysens fighting on the other side.",
    km: "about 11,500 km",
    kmNote: "Johannesburg, South Africa → Brisbane",
    archive: "https://daviddef.github.io/TheBooyzen/",
    archiveName: "The Booyzen Archive",
    facts: [
      {
        big: "Only 646 people on Earth spell it Booyzen.",
        text: "There are 53,764 Booysens — with an s. Our spelling is 83 times rarer. That is not an accident. Somebody really did change it on purpose.",
      },
      {
        big: "We caught the name changing, on paper.",
        text: "On one form, filled in on the same day in 1905, the clerk wrote BOOYSEN — and four lines further down, the son signed his own name BOOYZEN. The old spelling and the new one, on one page, four lines apart.",
      },
      {
        big: "He sailed on a ship called the Nautilus.",
        text: "George Augustus Kolbe left Gravesend in England on 3 December 1819 and landed in Africa on 14 April 1820. He was seventeen. He named his farm in the dry Karoo “Wurtemburg,” after the part of Germany his own dad had come from.",
      },
      {
        big: "His gravestone is still standing — and it was telling the truth all along.",
        text: "The stone at Burgersdorp says he was born in London on 7 December 1802. Two hundred years later we found the church book in Soho, London. It says: 7 December 1802. The very same day. A stone in Africa and a book in England, agreeing perfectly.",
      },
      {
        big: "His dad was a tailor with a shop near Bond Street.",
        text: "John Gottlob Kolbe made clothes in London and left a real business behind him — with a partner, and instructions in his will for the shop to keep going for fourteen more years.",
      },
      {
        big: "One family forgot its own grandparents in seventy years.",
        text: "In 1915 a man had to write down his mother’s parents’ names. He wrote: “Father: Kolbe, thinks James was christian name. Mother: Unknown.” Their names were George and Margaret, and their gravestone was standing forty miles away the whole time.",
      },
    ],
    ladder: [
      { name: "A & M", where: "Brisbane, Australia", you: true },
      { name: "D", rel: "Dad", where: "Johannesburg, South Africa" },
      { name: "C", rel: "Grandma", where: "Johannesburg, South Africa" },
      { name: "Catherine Mary Sophia", rel: "Great-grandma", when: "1929–2013", where: "Johannesburg" },
      { name: "George Downing Mountjoy", rel: "2× great-grandpa", when: "1901–1947", where: "South Africa", job: "railways" },
      { name: "Willem Hermanus", rel: "3× great-grandpa", when: "1851–1905", where: "Cradock → Indwe", job: "changed the name" },
      { name: "Petrus Jacobus", rel: "4× great-grandpa", when: "1812–1884", where: "Graaff-Reinet" },
      { name: "Petrus Jacobus", rel: "5× great-grandpa", when: "1788–1876", where: "Graaff-Reinet → Rustenburg" },
      { name: "Gerthardus Lodewikus", rel: "6× great-grandpa", when: "no dates at all", where: "somewhere in the Cape", last: true },
    ],
    mystery:
      "Gerthardus Lodewikus is the most frustrating person in all five families. We have his name and nothing else — no birthday, no parents, not one record. He is a locked door.",
  },

  {
    slug: "darcy",
    name: "D’Arcy",
    key: "britain",
    flagWord: "England & Ireland",
    from: "Yorkshire, Limerick → Australia",
    icon: "anchor",
    blurb: "A soldier who guarded a convict ship, a surveyor who helped draw the map of Melbourne, and a parrot that shouted “Come in!”",
    meaning:
      "D’Arcy was invented twice, and the two have nothing to do with each other. In France, d’Arcy means “from the town of Arcy.” In Ireland it comes from dorcha, which means “dark.”",
    km: "about 16,500 km",
    kmNote: "London, England → Brisbane",
    archive: "https://daviddef.github.io/TheDArcy/",
    archiveName: "The D’Arcy Archive",
    facts: [
      {
        big: "A soldier brought the family to Australia in 1826.",
        text: "Major George Pitt D’Arcy belonged to the 39th Regiment of Foot. His job on the long voyage south was to guard the convicts being sent to New South Wales.",
      },
      {
        big: "His children tell us exactly when the family crossed the world.",
        text: "One child was born at Chatham in England in 1825. The next was born at Parramatta in Australia in 1827. So the crossing happened in between — and the army’s own records agree, without ever having heard of this family.",
      },
      {
        big: "One of them helped draw the map of Melbourne.",
        text: "In 1836 the Governor picked three surveyors to go and chart Port Phillip Bay and the Yarra River. One of them was Frederick Robert D’Arcy. The city of Melbourne stands there now.",
      },
      {
        big: "Great-grandpa had a parrot that answered the door.",
        text: "Kenneth Lindsay D’Arcy kept an African Grey parrot that had learned to call out “Come in!” whenever somebody knocked. He also had a mango tree, and he lived through Cyclone Althea.",
      },
      {
        big: "There might be a castle. Or there might not.",
        text: "Above the General, the old family papers climb up to the Earls of Holderness at Hornby Castle in Yorkshire. But the papers argue with themselves — they give one man two birthdays sixty-nine years apart. So: maybe a castle. Nobody has proved it.",
      },
    ],
    ladder: [
      { name: "A & M", where: "Brisbane, Australia", you: true },
      { name: "C", rel: "Mum", where: "Brisbane, Australia" },
      { name: "I", rel: "Grandpa", where: "Brisbane, Australia" },
      { name: "Kenneth Lindsay", rel: "Great-grandpa", when: "1927–2010", where: "Sandgate, Queensland", job: "and the parrot" },
      { name: "Lindesay Atkinson", rel: "2× great-grandpa", when: "1892–1936", where: "Brisbane, Queensland", job: "clerk" },
      { name: "George Pitt", rel: "3× great-grandpa", when: "1864–1931", where: "Brisbane, Queensland", job: "chief clerk, railways" },
      { name: "George Lindsay", rel: "4× great-grandpa", when: "1829–1901", where: "Parramatta → Brisbane" },
      { name: "Major George Pitt", rel: "5× great-grandpa", when: "1783–1849", where: "Portsmouth → Parramatta", job: "soldier, 39th Foot" },
      { name: "Major-General Robert", rel: "6× great-grandpa", when: "1751–1827", where: "Yorkshire → Chatham", job: "Royal Engineers", last: true },
    ],
    mystery:
      "Above the General the trail turns into a story instead of a record. Earls, a castle, a rumour that somebody was somebody’s secret son. Lovely — but not yet true.",
  },
];

// How the five became one. Living people are shown by role only, and years that
// would give away a living person's birth date are left out.
export const joining = [
  {
    year: "1949",
    text: "Catherine Booyzen married Nuno Lerena at St Joseph’s church in Mayfair, Johannesburg. South Africa met Argentina.",
    keys: ["safrica", "argentina"],
  },
  {
    year: "then",
    text: "Their daughter — your grandma — grew up in Johannesburg, and had a son of her own there. That was your dad. Now Croatia was in the story too.",
    keys: ["argentina", "croatia"],
  },
  {
    year: "1980",
    text: "On the other side of the world, in Brisbane, your other grandma married your other grandpa. Italy met England and Ireland.",
    keys: ["italy", "britain"],
  },
  {
    year: "then",
    text: "Your mum was born in Brisbane — and she was born a twin.",
    keys: ["italy", "britain"],
  },
  {
    year: "2015",
    text: "On 19 December, in Brisbane, your mum and dad were married. That is the day all five families finally became one.",
    keys: ["croatia", "argentina", "safrica", "italy", "britain"],
    big: true,
  },
  {
    year: "then",
    text: "Then came A. And two years later, M. Both born in Brisbane — with all five families inside them.",
    keys: ["croatia", "argentina", "safrica", "italy", "britain"],
    boy: true,
  },
];

export const numbers = [
  { n: "5", label: "families", sub: "on four continents" },
  { n: "2", label: "boys", sub: "in one house in Brisbane" },
  { n: "6", label: "countries", sub: "they were born in" },
  { n: "1750", label: "our oldest", sub: "Giovanni, in Croatia" },
  { n: "646", label: "Booyzens", sub: "in the whole world" },
  { n: "2,124", label: "Lerenas", sub: "in the whole world" },
];
