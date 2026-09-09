# Our Family

The landing site for the family archives — and the only one of the six written for children.

**Live:** https://daviddef.github.io/Our-Family/

Two boys were born in Brisbane. Six separately researched families meet in them. This site tells that
story in a way a six-year-old can follow and a ten-year-old can read alone, and then hands the reader
off to the grown-up archive behind each family.

**Everyone still living is shown by initial only, with no dates** — the boys as *A* and *M*, their
parents, grandparents and any great-grandparent without a recorded death likewise. Where a year would
give away a living person's birth date, the timeline says *then* instead.

| | Family | From | Archive |
|---|---|---|---|
| 🔵 | **Defranceski** | Istria, Croatia | [The Defranceschi Archive](https://daviddef.github.io/TheDefranceski/) |
| 🟢 | **Falco** | Arienzo, Campania, Italy | [The Falco Archive](https://daviddef.github.io/TheFalco/) |
| 🌸 | **Blažević** | Senj, Croatia | [The Senj Line](https://daviddef.github.io/TheDefranceski/senj-line/) — research just begun |
| 🟠 | **Lerena** | Rosario, Argentina | [The Lerena Archive](https://daviddef.github.io/TheLerena/) |
| 🔴 | **Booyzen** | The Karoo and the Cape, South Africa | [The Booyzen Archive](https://daviddef.github.io/TheBooyzen/) |
| 🟣 | **D'Arcy** | Yorkshire and Limerick → Australia | [The D'Arcy Archive](https://daviddef.github.io/TheDArcy/) |

## How the five join

Each family badge passes down through the one great-grandparent who actually carried that surname,
then into a grandparent. The six pair off into four grandparents: Booyzen and Lerena both arrive
through the same grandmother (her parents were Catherine Booyzen and Nuno Lerena, married at
St Joseph's, Mayfair, in 1949), and Defranceski and Blažević both arrive through the same
grandfather (his parents were Ivan Defranceski of Crikvenica and Hedviga Blažević of Senj).

```
 D'Arcy    Falco     Booyzen   Lerena    Defranceski  Blažević
    |        |           |       |            |          |
 Kenneth     C      Catherine  Nuno        Ivan      Hedviga   <- great-grandparents
    |        |            \    /              \        /
    I        G           Grandma C            Grandpa I        <- grandparents
     \      /                     \            /
      Mum C                          Dad D
         \                          /
          \________________________/
                       |
                    A  ·  M
                    Brisbane
```

## Living people

All five research archives **omit living people from the build entirely**. This one cannot — it is a
site *about* two living children, made for them. So it takes the next-strictest line instead:

- no forenames or surnames for anyone living — an initial only;
- no birth years, and no event year that would reveal one;
- birthplaces and the family roles (Mum, Dad, Grandma, Grandpa) are kept, because they carry the story
  and neither identifies a person on its own;
- the deceased are named in full, as in the sibling archives.

Anyone with a recorded death is named; anyone without one is treated as living, including the Falco
great-grandfather born in 1930.

**Public figures are the exception.** The Lerena racing dynasty — Tex and Gavin Lerena — are named,
because they are published sportsmen already named in the Lerena archive and in the racing press. The
relative is given as "your dad's cousin", which names no one in the household.

## Pages

`/` the landing page · `/when/` how far back each line goes and the moments in order ·
`/jobs/` what everybody did for a living · and one page per family.

The landing page carries the convergence tree (a wide SVG on desktop, a vertical HTML layout
below 760px, because the SVG showed only a third of itself on a phone), a compass of true
bearings and distances from Brisbane, a strip of faces, and the timeline of how the six joined.

`/when/` answers the question a date cannot: it puts all six families on one scale, so it is
visible at a glance that Defranceski and D'Arcy reach the 1750s while Lerena starts in 1882 —
and that the Lerena bar is short because the research is young, not the family. Faded
extensions mark where a line goes deeper through the mothers (Blažević to about 1690 at
Karlobag) or through something untested (Booyzen to 1683 in England). Below it, 23 dated
moments in the order they happened.

`/jobs/` groups all 22 recorded occupations by what the work actually was rather than by
surname — the things made by hand, the things carried, the things grown, the horses, the
soldiers, the desks. Where a register gave the original word it is kept: *lapicida*,
*trhonoša*, *agricola*, *gostioničar*, *radnica u tvornici duhana*.

## Photographs

Ten images in `site/public/photos/`, all carried from the archives and all of people who are dead.
No photograph of a living person appears anywhere on this site.

| Family | Images |
|---|---|
| Defranceski | Josip and Ana (the hand-tinted pair), Ursula, and the *Status Animarum* page for house 5 |
| Falco | Filomena Annecchino; and the couple the Falco archive could not identify, captioned as such |
| Lerena | Bob Lerena's 1940 Argentine passport — face, consular stamp and his own signature |
| Booyzen | George Augustus Kolbe (a painting), Margaret Downing, and the grave at Burgersdorp |
| Blažević | The wall grave at Senj — Ljubomir, Milka, and two of their sons |
| D'Arcy | **None.** The page says so, and says it is the next thing to look for. |

Confidence is carried across with the pictures. Margaret Downing is captioned "probably" because
the Booyzen archive marks her *Plausible*. The Falco couple is captioned as unidentified because
that archive found the same photograph filed twice under two different couples' names, and
declined to choose. The wrongly-named file that started out as "Carminantonio and Filomena" was
dropped once that audit was read.

## Every fact is carried, not invented

Nothing here was researched fresh. Each statement was lifted from one of the five archives and rewritten
for a child — the stonecutter's Latin job title, the *Nautilus* sailing on 3 December 1819, the clerk who
wrote BOOYSEN four lines above a signature reading BOOYZEN, the surveyor sent to chart the Yarra, the
parrot that said "Come in". Where an archive says something is uncertain, this site says so too, in the
"the bit we still can't solve" panel on each page.

## Running it

```bash
cd site
npm install
npm run dev      # http://localhost:4325/Our-Family
npm run build    # static output in site/dist
```

Deploys to GitHub Pages on every push to `main`.
To serve from a custom domain, set `base: '/'` and `site:` to that domain in `site/astro.config.mjs`.

## Layout

```
site/src/data/families.js       all five families: facts, ladders, the joining timeline
site/src/components/BigTree     the convergence tree on the home page
site/src/components/Icon        the five emblems
site/src/pages/index.astro      the landing page
site/src/pages/[slug].astro     one page per family
site/public/styles.css          the bright palette — the archives' own hues, turned up
```

## Legibility

The palette was audited against WCAG AA and it failed badly, which is worth recording because
the failures were invisible to the eye: every family colour used as small text was under 4.5:1,
amber worst at **2.26:1**, and `--ink-3` was under too. White text on the bright fills — the
buttons and the numbered fact badges — was also short.

Fixed by separating the two jobs a colour does. The bright hue stays for **fills**: icons, dots,
borders, chips, the tree branches, the compass spokes. A darker `-deep` variant does all the
**text**, solved so that it clears 4.5:1 against its own wash — the hardest background it ever
sits on — and so that white clears 4.5:1 against it when it is used as a button. `--ink-3`
was darkened to #796F60.

A sweep of every text node on all nine pages, measuring computed colour against computed
background, now reports **zero failures**. The site did not get duller: nothing that carries
colour rather than words was changed.

## Design

Same brand family as the five archives: EB Garamond for names and titles, a warm paper ground, and the
archives' own region colours. Turned bright, set in Nunito at 19px, and given rounded corners, thick
borders and one emblem per family — because the reader is six.
