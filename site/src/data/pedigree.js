/* THE PEDIGREE BEHIND THE BIG TREE, one place. Read by BigTree.astro (positions are its own) and by lib/fan.js, which
   draws the same people as a fan for «Grow the tree» and counts the cousins' shared families for /cousins/.
   gen2 / gen3 are the 2× great-grandparents and the great-grandparents, deceased, with their years; `sp` is the
   spouse the line names. gen45 is the grandparents and parents, living people shown by initials and nothing more. */
// these two rows carry dates, because every one of them is in the records
export const gen2 = [
  { x: 1450,  k: "mazza",     rel: "2× great-grandpa",  name: "Salvatore",       when: "1873–1929" },
  { x: 1650,  k: "prostamo",  rel: "2× great-grandpa",  name: "Francessco",      when: "1900–1983" },
  { x: 1850,  k: "arena",     rel: "2× great-grandpa",  name: "Giuseppe",        when: "1892–1984", sp: "Anna Arena" },
  { x: 2050,  k: "polistena", rel: "2× great-grandpa",  name: "Giovanni",        when: "born 1883" },
  { x: 1000, k: "britain",   rel: "2× great-grandpa",  name: "Lindesay",        when: "1892–1936", sp: "Ivy Sneyd" },
  { x: 1200, k: "italy",     rel: "2× great-grandpa",  name: "Carmine Antonio", when: "1901–1985 or 1988", sp: "Filomena Annecchino" },
  { x: 150, k: "safrica",   rel: "2× great-grandpa",  name: "George",          when: "1901–1947", sp: "Anna Pretorius" },
  { x: 350, k: "argentina", rel: "2× great-grandpa",  name: "Pablo Armando",   when: "1882–1950", sp: "Mary Septima Taylor" },
  { x: 550, k: "croatia",   rel: "2× great-grandpa",  name: "Anton",           when: "1890–1943", sp: "Ursula Kovačina" },
  { x: 750, k: "blazevic",  rel: "2× great-grandpa",  name: "Ljubomir",        when: "1892–1966", sp: "Milka Papić" },
];
export const gen3 = [
  { x: 1450,  k: "mazza",     rel: "Great-grandpa", name: "Sebastiano", when: "1920–2002", sp: "Domenica Prostamo" },
  { x: 1650,  k: "prostamo",  rel: "Great-grandma", name: "Domenica",   when: "1928–2010", sp: "Sebastiano Mazza" },
  { x: 1850,  k: "arena",     rel: "Great-grandpa", name: "Rocco",      when: "1924–1999", sp: "Angela Polistena" },
  { x: 2050,  k: "polistena", rel: "Great-grandma", name: "Angela",     when: "1925–2018", sp: "Rocco Arena" },
  { x: 1000, k: "britain",   rel: "Great-grandpa", name: "Kenneth",    when: "1927–2010", sp: "Dell Murdoch" },
  { x: 1200, k: "italy",     rel: "Great-grandpa", name: "Carmine",    when: "1930–2026", sp: "Francesca Zampiello" },
  { x: 150, k: "safrica",   rel: "Great-grandma", name: "Catherine",  when: "1929–2013", sp: "Nuno Lerena" },
  { x: 350, k: "argentina", rel: "Great-grandpa", name: "Nuno",       when: "1924–1971", sp: "Catherine Booyzen" },
  { x: 550, k: "croatia",   rel: "Great-grandpa", name: "Ivan",       when: "1925–1995", sp: "Hedviga Blažević" },
  { x: 750, k: "blazevic",  rel: "Great-grandma", name: "Hedviga",    when: "1926–2001", sp: "Ivan Defranceski" },
];
// grandparents, then the two sisters and the two men they married
export const gen45 = [
  { x: 1550,  y: 422, k: "mazza",     rel: "Grandpa", name: "FM" },
  { x: 1950,  y: 422, k: "arena",     rel: "Grandma", name: "NA" },
  { x: 1000, y: 422, k: "britain",   rel: "Grandpa", name: "IKD" },
  { x: 1200, y: 422, k: "italy",     rel: "Grandma", name: "GF" },
  { x: 250, y: 422, k: "argentina", rel: "Grandma", name: "CAL" },
  { x: 650, y: 422, k: "croatia",   rel: "Grandpa", name: "Ivan", when: "died 2026" },
  { x: 1750,  y: 534, k: "mazza",     rel: "Dad", name: "MRM" },
  { x: 1250,  y: 534, k: "britain",   rel: "Mum", name: "SFD" },
  { x: 950, y: 534, k: "italy",     rel: "Mum", name: "CAD" },
  { x: 450, y: 534, k: "croatia",   rel: "Dad", name: "DID" },
];

