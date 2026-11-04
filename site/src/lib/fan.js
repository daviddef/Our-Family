/* A CHILD'S PEDIGREE AS A FAN: ring n has room for 2^n people, so the tree can be seen to run out of names.

   The people are the ones the site already names (data/pedigree.js, the same as the Big Tree); nothing is added.
   A place in the fan is one of
     - a person of one of the ten families (`k`), with their years where the records give them;
     - a spouse the line names but the site does not follow (`k: "other"`: named, not followed);
     - nobody yet (`unknown`): the line does not say who stood there.
   Living people are the initials the Big Tree uses, and nothing more. */
import { gen2, gen3, gen45 } from "../data/pedigree.js";

export const KEY_SLUG = { croatia: "defranceski", blazevic: "blazevic", argentina: "lerena", safrica: "booyzen",
  britain: "darcy", italy: "falco", mazza: "mazza", prostamo: "prostamo", arena: "arena", polistena: "polistena" };
/* a spouse the line names who is herself one of the ten families */
const SPOUSE_FAMILY = { "Anna Arena": "arena" };

const person = (p, rel) => ({ name: p.name, rel: rel ?? p.rel, when: p.when || "", k: p.k, slug: KEY_SLUG[p.k], sp: p.sp });
const living = (p) => ({ ...person(p), initials: true });
const spouse = (of, rel) => {
  const k = SPOUSE_FAMILY[of.sp] || "other";
  return { name: of.sp, rel, when: "", k, slug: KEY_SLUG[k] };
};
const unknown = (rel) => ({ unknown: true, name: "", rel, when: "", k: "unknown" });

const g45 = (k, rel) => { const p = gen45.find((x) => x.k === k && x.rel === rel); if (!p) throw new Error(`pedigree: no ${rel} for ${k}`); return p; };
const g3 = (k) => { const p = gen3.find((x) => x.k === k); if (!p) throw new Error(`pedigree: no great-grandparent for ${k}`); return p; };
const g2 = (k) => gen2.find((x) => x.k === k);

/* What each side of the family is made of: the two parents, the four grandparents, and for each grandparent the pair
   of their parents (a family's own person, or the wife the line names for them, `{sp: k}`). */
export const SIDES = {
  add: { kids: "ADD & MCD", parents: [["croatia", "Dad"], ["italy", "Mum"]],
    grand: [["croatia", "Grandpa"], ["argentina", "Grandma"], ["britain", "Grandpa"], ["italy", "Grandma"]],
    great: [["croatia"], ["blazevic"], ["argentina"], ["safrica"], ["britain"], { sp: "britain" }, ["italy"], { sp: "italy" }] },
  rfm: { kids: "RFM & MJM", parents: [["mazza", "Dad"], ["britain", "Mum"]],
    grand: [["mazza", "Grandpa"], ["arena", "Grandma"], ["britain", "Grandpa"], ["italy", "Grandma"]],
    great: [["mazza"], ["prostamo"], ["arena"], ["polistena"], ["britain"], { sp: "britain" }, ["italy"], { sp: "italy" }] },
};

/* rings[1..4]: parents, grandparents, great-grandparents, 2× great-grandparents */
export function buildFan(side) {
  const s = SIDES[side];
  const r1 = s.parents.map(([k, rel]) => living(g45(k, rel)));
  const r2 = s.grand.map(([k, rel]) => { const p = g45(k, rel); return p.when ? { ...person(p), initials: false } : living(p); });
  const r3 = s.great.map((g) => Array.isArray(g) ? person(g3(g[0])) : spouse(g3(g.sp), "Great-grandma"));
  const r4 = r3.flatMap((p) => {
    const c = p.k !== "other" && g2(p.k);                  // a spouse the site does not follow has no parents here
    if (!c) return [unknown("2× great-grandpa"), unknown("2× great-grandma")];
    return [person(c), c.sp ? spouse(c, "2× great-grandma") : unknown("2× great-grandma")];
  });
  return { kids: s.kids, rings: [r1, r2, r3, r4] };
}

export const named = (ring) => ring.filter((p) => !p.unknown).length;

/* geometry: the fan is the upper half of a circle; ring n (1 to 4) is a band of width W outside a disc of radius R0 */
export const R0 = 52, W = 64;
const pt = (r, a) => [r * Math.cos(a), -r * Math.sin(a)];
const f = (n) => n.toFixed(1);
/* segment j of ring n (n >= 1), j counting from the left */
export function sector(n, j) {
  const count = 2 ** n, step = Math.PI / count;
  const a1 = Math.PI - j * step, a0 = a1 - step;           // a1 is the left edge, a0 the right
  const ri = R0 + (n - 1) * W, ro = ri + W - 2;
  const [x0, y0] = pt(ro, a1), [x1, y1] = pt(ro, a0), [x2, y2] = pt(ri, a0), [x3, y3] = pt(ri, a1);
  const d = `M${f(x0)},${f(y0)}A${ro},${ro} 0 0 1 ${f(x1)},${f(y1)}L${f(x2)},${f(y2)}A${ri},${ri} 0 0 0 ${f(x3)},${f(y3)}Z`;
  const am = (a0 + a1) / 2, rm = (ri + ro) / 2;
  const [cx, cy] = pt(rm, am);
  return { d, cx, cy, deg: (am * 180) / Math.PI, rm, widthPx: step * rm, depth: ro - ri };
}
