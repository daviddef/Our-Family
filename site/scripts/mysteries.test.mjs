/* The case board stays tied to the families and to the words the site already says. node --test scripts/*.test.mjs */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { cases } from "../src/data/mysteries.js";

const src = (f) => readFileSync(new URL(`../src/${f}`, import.meta.url), "utf8");
const families = src("data/families.js");
const css = readFileSync(new URL("../public/styles.css", import.meta.url), "utf8");

test("every case belongs to a family, with its colour, and has what a case needs", () => {
  assert.equal(new Set(cases.map((c) => c.id)).size, cases.length);
  for (const c of cases) {
    assert.ok(families.includes(`slug: "${c.slug}"`), `${c.id}: no family ${c.slug}`);
    assert.ok(css.includes(`--${c.k}:`), `${c.id}: no colour ${c.k}`);
    assert.ok(["open", "closer"].includes(c.status), c.id);
    assert.ok(c.title && c.ask && c.next, c.id);
    assert.ok(c.clues.length >= 2, `${c.id}: a case needs two clues`);
    for (const k of c.clues) assert.ok(!k.kind || ["record", "story", "tree"].includes(k.kind), `${c.id}: kind ${k.kind}`);
  }
});

test("each family's own 'mystery' paragraph is a case on the board", () => {
  const slugs = [...families.matchAll(/mysteryFor: "[^"]+"/g)].length;
  const covered = new Set(cases.map((c) => c.slug));
  for (const m of families.matchAll(/slug: "([a-z]+)",[\s\S]*?mysteryFor:/g)) assert.ok(covered.has(m[1]), `no case for the ${m[1]} mystery`);
  assert.equal(slugs, 10);
});

test("the claims that matter are stated the way the archives state them", () => {
  const text = JSON.stringify(cases);
  assert.ok(text.includes("Major-General"), "D'Arcy's rank is documented");
  assert.ok(text.includes("Yorkshire, and the year 1751, are what the family says"), "Yorkshire and 1751 are family story");
  assert.ok(text.includes("Nine children of Sancho and María"), "Lerena's break");
  assert.ok(!/Alessio|Mateo|Cheryl|David\b/.test(text), "no living person's name");
});
