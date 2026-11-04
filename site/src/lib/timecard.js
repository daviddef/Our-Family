/* One family's card for one year, as HTML. Used on the page (to render the year it opens on) and by the script that
   moves the slider, so the two can never say different things. */
import { alive } from "./lives.js";

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export const flagHtml = (k) => k ? `<svg class="fl" viewBox="-1 -3 36 27" aria-hidden="true"><use href="#fl-${k}"/></svg>` : `<span class="fl none" title="the ladder does not say which country">?</span>`;
const FLAGNAME = { croatia: "Croatia", italy: "Italy", argentina: "Argentina", uruguay: "Uruguay", safrica: "South Africa", australia: "Australia", england: "England" };

const years = (p) => {
  const b = p.born != null ? `${p.bornQ ? p.bornQ + " " : ""}${p.born}` : "";
  const d = p.died != null ? `${p.diedQ ? p.diedQ + " " : ""}${p.died}${p.diedAlt ? " or " + p.diedAlt : ""}` : (p.atLeast ? `alive in ${p.atLeast}` : "");
  return b && d ? `${b}–${d}` : b || d;
};
export const sayYear = (p) => years(p);

export function familyRange(people) {
  const s = people.filter((p) => p.start != null);
  return { first: Math.min(...s.map((p) => p.start)), last: Math.max(...s.map((p) => p.end ?? p.start)) };
}

export function cardBody(fam, people, y) {
  const who = people.filter((p) => alive(p, y)).sort((a, b) => a.start - b.start);
  if (!who.length) {
    const { first, last } = fam;
    if (y < first) return `<p class="tm-none">Nobody found yet. The oldest name on this line was born in ${first}.</p>`;
    if (y > last) return `<p class="tm-none">The line goes on with people who are living now, named by initials only.</p>`;
    return `<p class="tm-none">Somebody in this line was alive now, but the records give us no name or dates for this year.</p>`;
  }
  return who.map((p) => {
    const fl = p.flags.map(flagHtml).join('<span class="tm-arw" aria-hidden="true">→</span>');
    const flagWords = p.flags.map((k) => (k ? FLAGNAME[k] : "a country the ladder does not name")).join(" then ");
    return `<div class="tm-who${p.told ? " told" : ""}"><div class="tm-name"><b>${esc(p.name)}</b>${p.job ? `, ${esc(p.job)}` : ""}${p.told ? ' <span class="tm-we">we think</span>' : ""}</div>` +
      `<div class="tm-rel">${esc(p.rel)}${years(p) ? " · " + esc(years(p)) : ""}</div>` +
      `<div class="tm-where"><span class="tm-flags" role="img" aria-label="${esc(flagWords)}">${fl}</span> ${esc(p.where.split("—")[0].trim())}</div></div>`;
  }).join("");
}
