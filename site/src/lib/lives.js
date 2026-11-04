/* EVERYONE ON THE TEN LADDERS, AS A LIFE: when they were alive and where, for the Time Machine and the Long Ruler.

   The years are the ladders' (which are the archives'); nothing is added except what logic forces:
   a parent was alive when their child was born, so a man shown only as «born 1873», whose son in the line was born
   in 1901, was alive from 1873 to at least 1901. That is drawn, and said to be «at least», never as a death year.
   Anybody the ladder gives no usable years for is left off the ruler and listed as not drawn. A year the ladder
   could not read FAILS THE BUILD (lifeProblems), so a new kind of date is looked at by a person, not drawn wrongly.
   Living people have no row in a ladder with years, so they are never here. */

const norm = (s) => String(s || "").trim().replace(/\s*[–-]\s*/g, "–");

/* the shapes of «when» the ladders use: «1925–1995», «1901–1985 or 1988», «about 1809 – after 1871», «by 1758–1827»,
   «born 1873», «died 2026», «died before 1920», «named in 1791», «by 1882», «no dates yet» */
export function parseWhen(w) {
  const s = norm(w);
  let m;
  if (!s || /^no dates/i.test(s)) return { kind: "none" };
  if ((m = /^(?:(about|by) )?(\d{4})–(?:(about|after|before) )?(\d{4})(?: or (\d{4}))?$/.exec(s)))
    return { kind: "span", born: +m[2], bornQ: m[1] || "", died: +m[4], diedQ: m[3] || "", diedAlt: m[5] ? +m[5] : null };
  if ((m = /^born (\d{4})$/.exec(s))) return { kind: "born", born: +m[1] };
  if ((m = /^died (before )?(\d{4})$/.exec(s))) return { kind: "died", died: +m[2], diedQ: m[1] ? "before" : "" };
  if ((m = /^named in (\d{4})$/.exec(s))) return { kind: "seen", seen: +m[1] };
  if ((m = /^by (\d{4})$/.exec(s))) return { kind: "by", by: +m[1] };
  throw new Error(`lives: cannot read the years «${w}»`);
}

/* a place on a ladder, as the country it is in today (the flag), or null where the ladder does not say which country */
const COUNTRY = [
  ["croatia", /Gra[cč]i[sš][cć]e|Gologorica|Crikvenica|Senj|Klenovica|Smokvica|Rijeka|Croatia/i],
  ["italy", /Arienzo|Benevento|Forchia|Piedimonte|Briatico|Scilla|Italy|Sicily|Calabria/i],
  ["argentina", /Rosario|River Plate|Argentina/i],
  ["uruguay", /Canelones|Montevideo|Uruguay/i],
  ["safrica", /Cape Town|Germiston|Johannesburg|Cradock|Indwe|Graaff-Reinet|Rustenburg|the Cape|South Africa/i],
  ["australia", /Brisbane|Sandgate|Queensland|Parramatta|Australia/i],
  ["england", /Portsmouth|Chatham|Kent|England/i],
  ["unsaid", /C[oó]rdo[bv]a/i],            // «Córdova la Llana», «Córdoba»: the ladder does not say which country
];
export function flagsOf(where) {
  const chain = String(where || "").split("—")[0].split("→").map((p) => p.trim()).filter(Boolean);
  const out = [];
  for (const place of chain) {
    const hit = COUNTRY.find(([, re]) => re.test(place));
    if (!hit) throw new Error(`lives: no country for the place «${place}»`);
    const k = hit[0] === "unsaid" ? null : hit[0];
    if (!out.length || out[out.length - 1] !== k) out.push(k);
  }
  return out;
}

/* the archive records Ivan Defranceski (Grandpa) born 17 December 1951 (its roster row ivan-defranceski-1951); his
   ladder row says only «died 2026». A row is named here by its `ref`. */
const BORN = { "ivan-defranceski-1951": 1951 };

export function buildLives(families) {
  const people = [], problems = [];
  for (const f of families) {
    const rows = f.ladder;                                   // youngest first
    rows.forEach((r, i) => {
      if (r.break || !r.when) return;
      let p;
      try { p = parseWhen(r.when); } catch (e) { problems.push(`${f.slug}: ${e.message}`); return; }
      if (BORN[r.ref] && p.kind === "died") p = { kind: "span", born: BORN[r.ref], bornQ: "", died: p.died, diedQ: "", diedAlt: null };
      let flags = [];
      try { flags = flagsOf(r.where); } catch (e) { problems.push(`${f.slug}: ${e.message}`); }
      const o = { id: `${f.slug}-${i}`, key: f.key, slug: f.slug, fam: f.name, name: r.name.replace(/\s*“[^”]*”/g, ""), rel: r.rel || "",
        where: r.where || "", flags, job: r.job || "", told: !!r.told, kind: p.kind,
        born: p.born ?? null, bornQ: p.bornQ || "", died: p.died ?? null, diedQ: p.diedQ || "", diedAlt: p.diedAlt ?? null,
        seen: p.seen ?? null, by: p.by ?? null, atLeast: null };
      /* a parent was alive when the next child in the line was born (not across a break in the line) */
      if (o.born != null && o.died == null) {
        for (let j = i - 1; j >= 0; j--) {
          const c = rows[j];
          if (!c || c.break || !c.when || /^Somewhere above/.test(r.rel || "")) break;
          let cp; try { cp = parseWhen(c.when); } catch { break; }
          const cb = BORN[c.ref] ?? cp.born;
          if (cb != null) { o.atLeast = cb; break; }
          break;
        }
      }
      o.start = o.born ?? o.seen;
      o.end = o.died ?? o.atLeast ?? o.seen;
      people.push(o);
    });
  }
  return { people, problems };
}

export const alive = (p, y) => p.start != null && p.end != null && p.start <= y && y <= p.end;
export const drawn = (p) => p.start != null && p.end != null && p.kind !== "seen" && !(p.kind === "died");
