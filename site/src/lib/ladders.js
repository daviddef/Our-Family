/* THE LADDERS ARE THE ARCHIVES', IN A CHILD'S VOICE.

   Until November 2026 every ladder was typed by hand, and the archives moved on without it: a whole
   generation found above Rosario Mazza, a birth year corrected, a line shown to break. So the ladder is now
   two layers.

   THE FACTS come from data/archive-lines.json, a snapshot of each archive's own direct line made by
   scripts/sync_archives.py: who, in what order, with which years, from where, and how well the origin is known.
   A rung's `when` is always the archive's, never typed here. A generation the archive gains appears on the
   ladder by itself.

   THE VOICE stays in families.js: for each rung that already has one, the `rel` ("Grandpa"), the `where` with
   its arrows, the `job`, and the `ref` that ties it to a card in the snapshot. A `ref` is the card's person
   slug, or «name|years» for a card the archive gives no page.

   AND A BUILD THAT FAILS when the two disagree in a way a person has to look at:
     - a hand rung whose card the archive no longer has;
     - a card with no person page that no rung says what to do with (a person, or a break in the line);
     - the top of the ladder is not the one the family's `mystery` text was written for (`mysteryFor`), so
       a paragraph that says «this is where it stops» cannot go on saying so after the archive found more.

   Nothing here knows about a living person: the snapshot keeps a living card as {living: true} and nothing else. */

export const cardKey = (c) => c.person || `${c.name}|${c.years || ""}`;

export const startYear = (y) => { const m = /\d{4}/.exec(String(y || "")); return m ? Number(m[0]) : null; };

const SURNAMES = /\s+(Defranceschi|Defranceski|Falco|Bla[zž]evi[cć]|Llerena|Lerena|Booys?en|Booyzen|D'Arcy|Mazza|Prostamo|Arena|Polistena)$/;
/* «Juraj «Jurko» Blažević» is Juraj; «Francesco Antonio Arena» is Francesco Antonio */
export const forename = (n) => n.replace(/\s*«[^»]*»/g, "").replace(SURNAMES, "").trim();

/* The archive's years, said the way a child's page says them. */
export function sayYears(y) {
  let s = String(y || "").trim().replace(/\s*[–-]\s*/g, "–");
  if (!s) return "no dates yet";
  if (/^†\s*before\s+(\d{4})$/.test(s)) return s.replace(/^†\s*before/, "died before");
  if (/^d\.\s*before/.test(s)) return s.replace(/^d\.\s*before/, "died before");
  if (/^b\.\s*/.test(s)) return s.replace(/^b\.\s*/, "born ");
  if (/^named\s+/.test(s)) return s.replace(/^named\s+/, "named in ");
  s = s.replace(/\bc\.\s*/g, "about ");
  return s.replace(/–/g, "–").replace(/–after/g, " – after").replace(/about (\d{4})–/, "about $1–");
}

const relN = (rel) => {
  if (!rel) return null;
  if (/^(Dad|Mum)/.test(rel)) return -1;
  if (/^Grand(pa|ma)$/.test(rel)) return 0;
  if (/^Great-grand(pa|ma)$/.test(rel)) return 1;
  const m = /^(\d+)× great-grand/.exec(rel);
  return m ? Number(m[1]) : null;
};
const relText = (n) => (n === 1 ? "Great-grandpa" : `${n}× great-grandpa`);

/* Returns the ladder (youngest first, as it is authored) and the problems. `lines` is archive-lines.json. */
export function resolveLadder(f, lines) {
  const problems = [];
  const src = lines?.families?.[f.slug];
  if (!src) return { ladder: f.ladder, problems: [`${f.slug}: no archive line in the snapshot`] };
  const cards = src.cards.filter((c) => !c.living);               // oldest first
  const index = new Map(cards.map((c, i) => [cardKey(c), i]));
  const hand = f.ladder;
  const youngest = hand.filter((r) => !r.ref);                    // you, Dad, a living grandparent: no card
  const refd = hand.filter((r) => r.ref);

  for (const r of refd) {
    if (!index.has(r.ref)) problems.push(`${f.slug}: the rung «${r.name}» points at «${r.ref}», which the archive no longer has`);
  }
  const have = new Set(refd.map((r) => r.ref));
  const made = [];
  for (const c of cards) {
    if (have.has(cardKey(c))) continue;
    if (!c.person) {
      problems.push(`${f.slug}: the archive has a card «${c.name}» (${c.years || "no dates"}) with no person page; say in families.js whether it is a person or a break in the line`);
      continue;
    }
    made.push({ name: forename(c.name), where: c.origin, ref: cardKey(c), made: true,
      ...(c.grade === "lore" ? { told: true, toldWhy: `The archive rests this on the family's own story, not a paper: ${c.title}` } : {}) });
  }
  const rows = [...refd.filter((r) => index.has(r.ref)), ...made].sort((a, b) => index.get(b.ref) - index.get(a.ref));   // youngest first

  let prev = null;
  for (const r of youngest) if (relN(r.rel) !== null) prev = relN(r.rel);
  const out = [];
  let broken = false;                                              // above a break nobody can count the generations
  for (const r of rows) {
    const c = cards[index.get(r.ref)];
    const row = { ...r };
    if (f.handDates) { /* the archive keeps no dated cards for this family: the dates are typed here */ }
    else if (!r.break) row.when = sayYears(c.years);
    if (r.break) { row.when = sayYears(c.years); }
    if (r.break) broken = true;
    else if (broken) row.rel = "Somewhere above the gap";
    else {
      if (!row.rel) row.rel = relText((prev ?? 0) + 1);
      const n = relN(row.rel);
      if (n !== null) prev = n;
    }
    if (c.person) row.person = c.person;
    out.push(row);
  }
  if (out.length) out[out.length - 1].last = true;
  const top = cards[0];
  if (f.mysteryFor && f.mysteryFor !== cardKey(top)) {
    problems.push(`${f.slug}: the archive's line now begins at «${top.name}» (${cardKey(top)}), but the 'mystery' text was written for «${f.mysteryFor}». Read it, rewrite it, then set mysteryFor.`);
  }
  if (!f.mysteryFor) problems.push(`${f.slug}: no mysteryFor (the card the 'mystery' text was written for)`);
  return { ladder: [...youngest, ...out], problems, archiveUrl: src.archive };
}
