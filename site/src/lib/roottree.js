/* THE FAMILY AS A REAL TREE: the children are the crown, and every family line is a root going down.

   A root is one family's ladder (data/families.js, which comes from the archives): one node for every person from the
   great-grandparents back, nearest the trunk first. Nothing is added here and nothing is guessed:
     - a rung the ladder does not mark `told` is a SURE root: thick, brown, a solid node (the archive records them);
     - a rung marked `told` is a «WE THINK» root: thin, dotted, an open node, with the ladder's own `toldWhy` as its reason;
     - a `break` row is a GAP: a dotted stretch with a «?», and the link across it is never drawn as sure;
     - where a line stops there is a short dotted tip and a «?»: the root goes on, we have not found where.
   The ladder rows nearer than the great-grandparents (Dad, Mum, the grandparents) are living people or the people just
   after them, and they are the trunk: they have no root of their own and no name is drawn for them. */
import { SIDES } from "./fan.js";

export const GROUND = 330, FIRST = 112, STEP = 60, COL = 172, X0 = 52;
/* which families are the roots of a side: the families of the fan's great-grandparents, in the fan's order */
export const rootKeys = (side) => [...new Set(SIDES[side].great.filter(Array.isArray).map((g) => g[0]))];

/* the step back a ladder row stands for: Great-grandpa is 1 and 2× great-grandpa is 2; Dad, Mum and the grandparents are the trunk */
export const stepOf = (rel) => {
  const r = String(rel || "");
  if (/^Great-grand(pa|ma)$/.test(r)) return 1;
  const m = /^(\d+)× great-grand(pa|ma)$/.exec(r);
  return m ? Number(m[1]) : null;
};
export const stepWord = (s) => (s === 1 ? "Great-grandparents" : `${s}× great-grandparents`);

/* «Pablo Armando “Bob”» is Pablo Armando; the roots have room for a first name and years */
export const shortName = (n) => {
  const w = String(n || "").replace(/\s*[“"«][^”"»]*[”"»]/g, "").trim().split(/\s+/);
  let s = w[0];
  for (const x of w.slice(1)) { if ((s + " " + x).length > 14) break; s += " " + x; }
  return s;
};

export function buildRoots(side, families) {
  const out = [];
  for (const key of rootKeys(side)) {
    const f = families.find((x) => x.key === key);
    if (!f) throw new Error(`roottree: no family for ${key}`);
    const rungs = [];
    let on = false;
    for (const r of f.ladder) {
      if (!on) { if (stepOf(r.rel) === 1) on = true; else continue; }
      const step = rungs.length + 1;
      rungs.push({
        step, name: r.break ? "" : shortName(r.name), full: r.name, rel: r.rel, when: r.when || "", where: r.where || "",
        gap: !!r.break, sure: !r.break && !r.told, why: r.told ? (r.toldWhy || "") : "", person: r.person || "",
      });
    }
    if (!rungs.length) throw new Error(`roottree: ${key} has no rung from the great-grandparents back`);
    out.push({ key, slug: f.slug, name: f.name, rungs });
  }
  return out;
}

/* How many lines reach each step back, and how many of those are sure, we-think or a gap (the words under the tree). */
export function stepCounts(roots) {
  const top = Math.max(...roots.map((r) => r.rungs.length));
  return Array.from({ length: top }, (_, i) => {
    const here = roots.map((r) => r.rungs[i]).filter(Boolean);
    return { step: i + 1, lab: stepWord(i + 1), lines: here.length, sure: here.filter((x) => x.sure).length,
      think: here.filter((x) => !x.sure && !x.gap).length, gap: here.filter((x) => x.gap).length };
  });
}

/* Geometry. Column i is root i; row s is step s back. A little wobble, the same every build, so a root is not a ruler line. */
const wob = (i, s) => (((s * 37 + i * 19) % 7) - 3) * 4;
const f1 = (n) => Math.round(n * 10) / 10;
export function layoutRoots(roots) {
  const trunkX = X0 + ((roots.length - 1) * COL) / 2 + 40;
  const W = X0 * 2 + (roots.length - 1) * COL + 150;
  const lay = roots.map((root, i) => {
    const x = X0 + i * COL;
    const pts = root.rungs.map((r, k) => ({ x: x + wob(i, k + 1), y: GROUND + FIRST + k * STEP }));
    const segs = root.rungs.map((r, k) => {
      const [ax, ay] = k === 0 ? [trunkX, GROUND + 2] : [pts[k - 1].x, pts[k - 1].y];
      const b = pts[k];
      const prevGap = k > 0 && root.rungs[k - 1].gap;
      const sure = r.sure && !prevGap;
      const d = k === 0
        ? `M${f1(ax)},${f1(ay)}C${f1(ax + (b.x - ax) * 0.15)},${f1(ay + 60)} ${f1(b.x)},${f1(b.y - 56)} ${f1(b.x)},${f1(b.y)}`
        : `M${f1(ax)},${f1(ay)}C${f1(ax)},${f1(ay + 24)} ${f1(b.x)},${f1(b.y - 24)} ${f1(b.x)},${f1(b.y)}`;
      return { d, sure, gap: r.gap || prevGap, step: r.step };
    });
    const last = pts[pts.length - 1];
    const tip = { d: `M${f1(last.x)},${f1(last.y)}C${f1(last.x)},${f1(last.y + 14)} ${f1(last.x + 6)},${f1(last.y + 24)} ${f1(last.x + 4)},${f1(last.y + 38)}`,
      qx: last.x + 4, qy: last.y + 52, step: root.rungs.length };
    return { ...root, x, pts, segs, tip };
  });
  const H = GROUND + FIRST + (Math.max(...roots.map((r) => r.rungs.length)) - 1) * STEP + 84;
  return { W, H, trunkX, roots: lay };
}
