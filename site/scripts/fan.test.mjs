/* The fan: every place is somebody the site already names, and the counts are the counts. node --test scripts/*.test.mjs */
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildFan, named, sector, SIDES } from "../src/lib/fan.js";
import { gen2, gen3, gen45 } from "../src/data/pedigree.js";

for (const side of Object.keys(SIDES)) {
  test(`${side}: ring n has room for 2^n and no more`, () => {
    const { rings } = buildFan(side);
    rings.forEach((r, i) => assert.equal(r.length, 2 ** (i + 1), `ring ${i + 1}`));
  });
}

test("ADD & MCD: twelve of the sixteen 2× great-grandparents have a name; RFM & MJM: nine", () => {
  assert.equal(named(buildFan("add").rings[3]), 12);
  assert.equal(named(buildFan("rfm").rings[3]), 9);
  assert.equal(named(buildFan("add").rings[2]), 8);
  assert.equal(named(buildFan("rfm").rings[2]), 8);
});

test("the two sides share exactly D'Arcy and Falco, the way the Cousins page says", () => {
  const keys = (side) => new Set(buildFan(side).rings.flat().filter((p) => p.slug).map((p) => p.k));
  const [a, b] = [keys("add"), keys("rfm")];
  assert.deepEqual([...a].filter((k) => b.has(k)).sort(), ["britain", "italy"]);
});

test("nobody living is named: parents and living grandparents are initials", () => {
  for (const side of Object.keys(SIDES)) {
    const { rings } = buildFan(side);
    for (const p of [...rings[0], ...rings[1]]) {
      if (p.when) continue;
      assert.match(p.name, /^[A-Z]{2,3}$/, `${p.name} should be initials`);
    }
  }
});

test("every great-grandparent shown is in the pedigree, with the years it gives", () => {
  const { rings } = buildFan("add");
  for (const p of rings[2].filter((p) => p.k !== "other" && !p.unknown)) {
    const src = gen3.find((g) => g.k === p.k && g.name === p.name);
    assert.ok(src, p.name);
    assert.equal(p.when, src.when);
  }
  for (const p of rings[3].filter((p) => p.slug && !p.unknown && p.rel === "2× great-grandpa")) assert.ok(gen2.find((g) => g.name === p.name && g.k === p.k), p.name);
  assert.ok(gen45.length >= 10);
});

test("sectors tile the half circle without overlapping", () => {
  for (let n = 1; n <= 4; n++) {
    let prev = null;
    for (let j = 0; j < 2 ** n; j++) {
      const s = sector(n, j);
      if (prev !== null) assert.ok(s.deg < prev, `ring ${n} segment ${j} runs the wrong way`);
      prev = s.deg;
    }
  }
});
