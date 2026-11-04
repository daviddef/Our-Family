/* The root tree draws the ladders as they are: sure is thick, we-think is thin, a gap is a gap, and nothing is added. node --test scripts/*.test.mjs */
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRoots, stepCounts, layoutRoots, rootKeys, stepOf, shortName } from "../src/lib/roottree.js";
import { SIDES } from "../src/lib/fan.js";

const row = (rel, name, extra = {}) => ({ rel, name, when: "1900–1950", ...extra });
const ladder = [row("Dad", "DID"), row("Grandpa", "Ivan", { when: "died 2026" }), row("Great-grandpa", "Ivan", { person: "a" }),
  row("2× great-grandpa", "Anton Rudolf", { person: "b" }), row("3× great-grandpa", "Giovanni", { told: true, toldWhy: "named as a father", person: "c" })];
const brokenLadder = [row("Great-grandpa", "Nuno", { person: "a" }), row("2× great-grandpa", "Pablo", { person: "b" }),
  { rel: "A gap in the line", name: "A gap in the line", when: "1791–1815", break: true }, row("Somewhere above the gap", "Sancho", { person: "c" })];
const fixture = (key, l) => ({ key, slug: key, name: key, ladder: l });
const families = ["croatia", "blazevic", "argentina", "safrica", "britain", "italy", "mazza", "prostamo", "arena", "polistena"].map((k) => fixture(k, k === "argentina" ? brokenLadder : ladder));

test("the roots of a side are the families of its great-grandparents, once each", () => {
  assert.deepEqual(rootKeys("add"), ["croatia", "blazevic", "argentina", "safrica", "britain", "italy"]);
  assert.deepEqual(rootKeys("rfm"), ["mazza", "prostamo", "arena", "polistena", "britain", "italy"]);
  for (const s of Object.keys(SIDES)) assert.equal(new Set(rootKeys(s)).size, rootKeys(s).length);
});

test("a root starts at the great-grandparents: Dad, Mum and the grandparents are the trunk", () => {
  const r = buildRoots("add", families)[0];
  assert.deepEqual(r.rungs.map((x) => x.rel), ["Great-grandpa", "2× great-grandpa", "3× great-grandpa"]);
  assert.deepEqual(r.rungs.map((x) => x.step), [1, 2, 3]);
  assert.equal(stepOf("Dad"), null);
  assert.equal(stepOf("Grandma"), null);
  assert.equal(stepOf("Great-grandma"), 1);
  assert.equal(stepOf("8× great-grandpa"), 8);
});

test("a rung is sure unless the ladder marks it told, and a told rung keeps the ladder's own reason", () => {
  const r = buildRoots("add", families)[0];
  assert.deepEqual(r.rungs.map((x) => x.sure), [true, true, false]);
  assert.equal(r.rungs[2].why, "named as a father");
  assert.equal(r.rungs[0].why, "");
});

test("a break row is a gap, never sure, and the root past it is drawn as no sure link", () => {
  const r = buildRoots("add", families).find((x) => x.key === "argentina");
  assert.deepEqual(r.rungs.map((x) => [x.gap, x.sure]), [[false, true], [false, true], [true, false], [false, true]]);
  const lay = layoutRoots(buildRoots("add", families)).roots.find((x) => x.key === "argentina");
  assert.deepEqual(lay.segs.map((s) => s.sure), [true, true, false, false], "the link into the gap and the link out of it are both dotted");
});

test("the counts are the counts of the rungs", () => {
  const c = stepCounts(buildRoots("add", families));
  assert.deepEqual(c.map((x) => x.lines), [6, 6, 6, 1]);
  assert.deepEqual(c[2], { step: 3, lab: "3× great-grandparents", lines: 6, sure: 0, think: 5, gap: 1 });
  assert.equal(c[0].lab, "Great-grandparents");
});

test("names fit their label and the nickname stays off", () => {
  assert.equal(shortName("Pablo Armando “Bob”"), "Pablo Armando");
  assert.equal(shortName("Catherine Mary Sophia"), "Catherine Mary");
  assert.equal(shortName("Gerthardus Lodewikus"), "Gerthardus");
});

test("every node is inside the drawing and each root has a node for each rung", () => {
  const { W, H, roots } = layoutRoots(buildRoots("rfm", families));
  for (const r of roots) {
    assert.equal(r.pts.length, r.rungs.length);
    assert.equal(r.segs.length, r.rungs.length);
    for (const p of r.pts) { assert.ok(p.x > 0 && p.x < W - 100, `x ${p.x}`); assert.ok(p.y < H, `y ${p.y}`); }
  }
});

test("a family that is missing is an error, not a quiet gap", () => {
  assert.throws(() => buildRoots("add", families.slice(1)), /no family/);
});
