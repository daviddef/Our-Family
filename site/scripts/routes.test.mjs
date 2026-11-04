/* The Roots & Routes legs against the Journeys page and the map: node --test scripts/*.test.mjs */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { legs } from "../src/data/routes.js";
import { crossings, recent } from "../src/data/journeys.js";
import { project, arc, km, BRISBANE } from "../src/lib/geo.js";
import { WORLD_R } from "../src/data/world.js";

const css = readFileSync(new URL("../public/styles.css", import.meta.url), "utf8");

test("every leg is a journey the Journeys page tells, and no journey is left off the map", () => {
  const who = new Set([...crossings, ...recent].map((c) => c.who));
  for (const l of legs) assert.ok(who.has(l.ref), `${l.id}: the Journeys page has no «${l.ref}»`);
  const mapped = new Set(legs.map((l) => l.ref));
  for (const w of who) assert.ok(mapped.has(w), `the Journeys page tells «${w}» but the map has no leg for it`);
});

test("ids are unique, years run forward, and each family colour exists", () => {
  assert.equal(new Set(legs.map((l) => l.id)).size, legs.length);
  for (const l of legs) {
    assert.ok(Number.isInteger(l.left), l.id);
    if (l.landed != null) assert.ok(l.landed >= l.left, `${l.id}: lands before it leaves`);
    assert.ok(css.includes(`--${l.k}:`), `${l.id}: no colour --${l.k}`);
    assert.ok(l.line && l.say && l.by, `${l.id}: a leg needs its words`);
  }
});

test("the days at sea on a leg match its dates", () => {
  const kolbe = legs.find((l) => l.id === "kolbe-1819");
  const days = Math.round((Date.UTC(1820, 3, 14) - Date.UTC(1819, 11, 3)) / 864e5);
  assert.equal(kolbe.days, days);
});

test("the distance from the middle of the map is the distance from Brisbane", () => {
  for (const l of legs) for (const ll of [l.fromLL, l.toLL]) {
    const [x, y] = project(ll);
    const want = (km(BRISBANE, ll) / (Math.PI * 6371)) * WORLD_R;
    assert.ok(Math.abs(Math.hypot(x, y) - want) < 0.01, `${l.id}: ${Math.hypot(x, y)} vs ${want}`);
  }
  assert.deepEqual(project(BRISBANE), [0, 0]);
});

test("a route runs from its start to its end in small steps, never jumping across the map", () => {
  for (const l of legs) {
    const a = arc(l.fromLL, l.toLL);
    const [s, e] = [project(l.fromLL), project(l.toLL)];
    assert.ok(Math.hypot(a[0][0] - s[0], a[0][1] - s[1]) < 0.01, `${l.id} start`);
    assert.ok(Math.hypot(a.at(-1)[0] - e[0], a.at(-1)[1] - e[1]) < 0.01, `${l.id} end`);
    for (let i = 1; i < a.length; i++) assert.ok(Math.hypot(a[i][0] - a[i - 1][0], a[i][1] - a[i - 1][1]) < 25, `${l.id} jumps at ${i}`);
  }
});

test("Johannesburg to Brisbane is the 11,635 km the Journeys page prints", () => {
  const l = legs.find((x) => x.id === "bne-2025");
  assert.equal(Math.round(km(l.fromLL, l.toLL)), 11635);
  assert.ok(recent.some((r) => r.km === "11,635 km"));
});
