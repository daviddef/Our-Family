/* Reading the ladders' years and places. node --test scripts/*.test.mjs */
import { test } from "node:test";
import assert from "node:assert/strict";
import { parseWhen, flagsOf, buildLives, alive } from "../src/lib/lives.js";

/* every «when» and «where» the ladders held on 5 November 2026 */
const WHENS = ["1925–1995", "died 2026", "1890–1943", "1863–1951", "1825–1894", "1787–1846", "1750–1829", "1930–2026", "1901–1985 or 1988",
  "born 1873", "born 1850", "1818–1880", "1792–1875", "1767–1834", "about 1747–1802", "1926–2001", "1892–1966", "died before 1920", "1838–1907",
  "no dates yet", "born 1790", "born 1770", "born 1750", "1924–1971", "1882–1950", "by 1882", "1791–1815", "about 1767 – after 1812", "named in 1791",
  "1929–2013", "1901–1947", "1851–1905", "1812–1884", "about 1788–1876", "1920–2002", "1873–1929", "1845–1924", "about 1809 – after 1871",
  "1928–2010", "1900–1983", "born 1858", "born 1820", "born 1785", "1760–1829", "born 1726", "born 1697", "1892–1984", "1819–1901", "born 1793",
  "about 1751–1830", "1925–2018", "born 1883", "1927–2010", "1892–1936", "1864–1931", "1829–1901", "1780–1849", "by 1758–1827"];
const WHERES = ["Senj, Croatia", "Crikvenica → Senj", "Klenovica, house 22", "Gračišće → Crikvenica", "Gračišće, house 19", "Gologorica", "Benevento, Italy",
  "Forchia, Italy", "Arienzo → Brisbane", "Arienzo, Italy", "Smokvica Krmpotska", "Senj → Johannesburg", "Rijeka → Senj", "Croatia", "Cape Town → Germiston",
  "Rosario → Cape Town", "the River Plate — near Rosario, we think", "Canelones and Montevideo, Uruguay", "Córdova la Llana", "Córdoba", "Johannesburg",
  "South Africa", "Cradock → Indwe", "Graaff-Reinet", "Graaff-Reinet → Rustenburg", "somewhere in the Cape", "Piedimonte Etneo → Brisbane",
  "Piedimonte Etneo, Sicily", "Briatico → Brisbane", "Briatico, Calabria", "Scilla → Brisbane", "Scilla, Calabria", "Scilla", "Sandgate, Queensland",
  "Brisbane, Queensland", "Parramatta → Brisbane", "Portsmouth → Parramatta", "Chatham, Kent — Yorkshire, the family says", "Australia"];

test("every kind of years the ladders use is read", () => { for (const w of WHENS) parseWhen(w); });
test("an unknown kind of years is refused, not guessed", () => { assert.throws(() => parseWhen("flourished 1850")); });
test("every place the ladders name has a country, or is said to have none", () => { for (const p of WHERES) flagsOf(p); assert.throws(() => flagsOf("Atlantis")); });

test("what the years say", () => {
  assert.deepEqual(parseWhen("1901–1985 or 1988"), { kind: "span", born: 1901, bornQ: "", died: 1985, diedQ: "", diedAlt: 1988 });
  assert.equal(parseWhen("about 1767 – after 1812").diedQ, "after");
  assert.equal(parseWhen("by 1758–1827").bornQ, "by");
  assert.equal(parseWhen("died before 1920").diedQ, "before");
});
test("a journey is a pair of flags, a stay is one", () => {
  assert.deepEqual(flagsOf("Arienzo → Brisbane"), ["italy", "australia"]);
  assert.deepEqual(flagsOf("Gračišće → Crikvenica"), ["croatia"]);
  assert.deepEqual(flagsOf("Chatham, Kent — Yorkshire, the family says"), ["england"]);
  assert.deepEqual(flagsOf("Córdoba"), [null]);
});

const fam = (rows) => ({ slug: "x", key: "croatia", name: "X", ladder: rows });
test("a parent shown only as born is alive until their child was born, and no further is claimed", () => {
  const { people } = buildLives([fam([
    { name: "Carmine", rel: "Great-grandpa", when: "1901–1985", where: "Arienzo" },
    { name: "Raffaele", rel: "2× great-grandpa", when: "born 1873", where: "Arienzo" },
  ].reverse().reverse())]);
  const raff = people.find((p) => p.name === "Raffaele");
  assert.equal(raff.atLeast, 1901); assert.equal(raff.died, null);
  assert.ok(alive(raff, 1890)); assert.ok(!alive(raff, 1950));
});
test("above a break in the line nobody is given a child's birth", () => {
  const { people } = buildLives([fam([
    { name: "Gap", break: true, when: "1791–1815", where: "Montevideo" },
    { name: "Sancho", rel: "Somewhere above the gap", when: "about 1767 – after 1812", where: "Córdoba" },
  ])]);
  assert.equal(people.find((p) => p.name === "Sancho").atLeast, null);
});
test("Ivan (Grandpa) gets the birth year the archive holds", () => {
  const { people } = buildLives([fam([{ name: "Ivan", rel: "Grandpa", ref: "ivan-defranceski-1951", when: "died 2026", where: "Senj, Croatia" }])]);
  assert.equal(people[0].born, 1951); assert.equal(people[0].died, 2026);
});
