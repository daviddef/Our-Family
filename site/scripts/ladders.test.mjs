// The gate on the ladders, proved: it must fail on each way the archives can move away from the page.
// Run:  npm test   (node:test, no dependencies)
import test from "node:test";
import assert from "node:assert/strict";
import { resolveLadder, sayYears } from "../src/lib/ladders.js";

const lines = (cards) => ({ families: { x: { archive: "https://x/", cards } } });
const A = { name: "Anna X", years: "1800–1870", person: "anna", origin: "Town", grade: "doc" };
const B = { name: "Ben X", years: "b. 1830", person: "ben", origin: "Town", grade: "doc" };
const fam = (over = {}) => ({ slug: "x", mysteryFor: "anna", ladder: [
  { name: "ME", you: true }, { name: "Dad", rel: "Dad" },
  { name: "Ben", rel: "Great-grandpa", ref: "ben", where: "Town → Brisbane" },
  { name: "Anna", rel: "2× great-grandpa", ref: "anna", where: "Town" }], ...over });

test("years come from the archive, not from the page", () => {
  const { ladder, problems } = resolveLadder(fam(), lines([A, B]));
  assert.deepEqual(problems, []);
  assert.equal(ladder.find((r) => r.ref === "ben").when, "born 1830");
  assert.equal(ladder.at(-1).last, true);
});

test("a generation the archive gains appears by itself, numbered, and stops the build until the mystery is re-read", () => {
  const C = { name: "Cara X", years: "c. 1770–1840", person: "cara", origin: "Hill", grade: "doc" };
  const { ladder, problems } = resolveLadder(fam(), lines([C, A, B]));
  const cara = ladder.find((r) => r.ref === "cara");
  assert.equal(cara.rel, "3× great-grandpa");
  assert.equal(cara.when, "about 1770–1840");
  assert.equal(problems.length, 1);
  assert.match(problems[0], /mystery.*written for «anna»/);
});

test("a rung whose card the archive has withdrawn fails", () => {
  const { problems } = resolveLadder(fam(), lines([B]));
  assert.ok(problems.some((p) => /no longer has/.test(p)));
});

test("a card with no person page needs a decision", () => {
  const gap = { name: "Their children", years: "1790–1810", origin: "Town", grade: "doc" };
  const { problems } = resolveLadder(fam(), lines([gap, A, B]));
  assert.ok(problems.some((p) => /no person page/.test(p)));
});

test("a break stops the count of generations above it", () => {
  const gap = { name: "Their children", years: "1790–1810", origin: "Town", grade: "doc" };
  const C = { name: "Cara X", years: "1770–1840", person: "cara", origin: "Hill", grade: "doc" };
  const f = fam({ mysteryFor: "cara" });
  f.ladder.splice(3, 0, { name: "A gap", break: true, ref: "Their children|1790–1810", gap: "…" });
  const { ladder, problems } = resolveLadder(f, lines([C, gap, A, B]));
  assert.deepEqual(problems, []);
  assert.equal(ladder.find((r) => r.ref === "cara").rel, "Somewhere above the gap");
});

test("how years are said to a child", () => {
  assert.equal(sayYears("b. 1850"), "born 1850");
  assert.equal(sayYears("† before 1920"), "died before 1920");
  assert.equal(sayYears("d. before 1830"), "died before 1830");
  assert.equal(sayYears("named 1791"), "named in 1791");
  assert.equal(sayYears("c. 1809 – after 1871"), "about 1809 – after 1871");
  assert.equal(sayYears("1901–1985 or 1988"), "1901–1985 or 1988");
  assert.equal(sayYears(""), "no dates yet");
});
