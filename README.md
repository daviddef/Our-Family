# Our Family

The landing site for the family archives — and the only one written for children.

**Live:** https://ourfamily.defranceski.com/

Two boys were born in Brisbane. Six separately researched families meet in them. This site tells that
story in a way a six-year-old can follow and a ten-year-old can read alone, and then hands the reader
off to the grown-up archive behind each family.

**Everyone still living is shown by initial only, with no dates** — the boys as *A* and *M*, their
parents, grandparents and any great-grandparent without a recorded death likewise. Where a year would
give away a living person's birth date, the timeline says *then* instead.

| | Family | From | Archive |
|---|---|---|---|
| 🔵 | **Defranceski** | Istria, Croatia | [The Defranceschi Archive](https://archive.defranceski.com/) |
| 🟢 | **Falco** | Arienzo, Campania, Italy | [The Falco Archive](https://falco.defranceski.com/) |
| 🌸 | **Blažević** | Senj & Smokvica Krmpotska, Croatia | [The Blažević Archive](https://blazevic.defranceski.com/) |
| 🟠 | **Lerena** | Rosario, Argentina | [The Lerena Archive](https://lerena.defranceski.com/) |
| 🔴 | **Booyzen** | The Karoo and the Cape, South Africa | [The Booyzen Archive](https://booyzen.defranceski.com/) |
| 🟣 | **D'Arcy** | Yorkshire and Limerick → Australia | [The D'Arcy Archive](https://darcy.defranceski.com/) |
| 🟤 | **Mazza** | Piedimonte Etneo, Sicily | [The Mazza Archive](https://mazza.defranceski.com/) |
| 🟦 | **Prostamo** | Briatico, Calabria — reaches 1697 | [The Mazza Archive](https://mazza.defranceski.com/) |
| 🟪 | **Arena** | Scilla, Calabria | [The Mazza Archive](https://mazza.defranceski.com/) |
| 🟩 | **Polistena** | Scilla, Calabria | [The Mazza Archive](https://mazza.defranceski.com/) |

## Four cousins, ten families

The hinge is a pair of **twin sisters**: one is the mother of ADD and MCD, the other the mother of RFM and
MJM. So ADD and MCD, and their cousins RFM and MJM, share one set of grandparents
exactly — and therefore share **D'Arcy and Falco** all the way back. On their fathers' sides they
share nothing at all: four families across Croatia, Argentina and South Africa on one side, four
across Sicily and Calabria on the other.

That is the whole story, and `/cousins/` is the page that tells it.

## How the families join

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

Anyone with a recorded death is named; anyone without one is treated as living. That set shrinks as
the family tells us: the Croatian grandfather, the Falco great-grandfather (1930–2026) and Dell
Murdoch (d. 2022) have all been named since this site was first built.

**Public figures are the exception.** The Lerena racing dynasty — Tex and Gavin Lerena — are named,
because they are published sportsmen already named in the Lerena archive and in the racing press. The
relative is given as "your dad's cousin", which names no one in the household.

## Pages

`/` the landing page · `/routes/` Roots & Routes: every journey as a line on a map of the world from Brisbane, with
a Play button and a year slider (the legs are `site/src/data/routes.js`, checked against the Journeys page by
`scripts/routes.test.mjs`; the land is generated once by `site/scripts/make_world.mjs`) ·
`/journeys/` how they crossed the world and why they left ·
`/grow/` the family as a real tree: the children are the crown and every family is a root going down. A rung the ladder does not
mark `told` is a thick brown root, a `told` rung a thin dotted «we think» root with the ladder's own `toldWhy`, a `break` a gap
(`lib/roottree.js`, `components/RootTree.astro`, `scripts/roottree.test.mjs`; nothing is typed there, the roots are the ladders).
A second tab is the fan that doubles ring by ring and shows where the names run out (people from `site/src/data/pedigree.js`,
shared with the Big Tree, drawn by `lib/fan.js`) · `/mysteries/` the unsolved questions as case files
(`data/mysteries.js`, built from words the site already says; `scripts/mysteries.test.mjs` keeps them tied to the families) ·
`/cousins/` also has a picker: choose two of the four and see which families and which places in the trees are shared ·
`/places/` what those places are actually like, and what is still standing ·
`/picture/` a find-it game on the front-page illustration · `/cards/` one card per ancestor ·
`/words/` the family's own Croatian, Latin and Afrikaans · `/when/` how far back each line goes ·
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

## The hero illustration

`site/public/hero.webp` (1800 px) and `hero-sm.webp` (900 px, served below 700 px). One imaginary
landscape read left to right, with a single road running through six real places: the Istrian hill
village with a stonecutter's mallet, the bare mountain with packhorses and a boat at a stone quay,
the Italian valley with a falcon over it, the river town with horses and a stable, the dry plain
with a windmill and a railed monument and a ship on the horizon, and the Queenslander on stilts
with its mango tree.

Generated to a prompt built from the research, then processed: the dead cream margins cropped off,
and the illustration's own background (#FFF3DD) shifted to sit exactly on the site's `--ground`
(#FFF7E6) so it bleeds edge to edge with no frame and no seam. Measured afterwards — the image's
corner pixels land within 1–2 of the page background.

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
npm run dev      # http://localhost:4325/
npm test         # the ladder gate
npm run build    # static output in site/dist
npm run sync     # refresh the archive snapshot, then re-read each ladder's `mystery`
```

Deploys to GitHub Pages on every push to `main`, at https://ourfamily.defranceski.com/ (`site/public/CNAME`).
A pull request builds and runs every gate but does not deploy.

## Layout

```
site/src/data/families.js       the ten families in a child's voice (ladders are merged with archive-lines.json)
site/src/data/archive-lines.json  the archives' direct lines, made by scripts/sync_archives.py
site/src/lib/ladders.js         builds a ladder from the two, and says when they disagree
site/src/components/BigTree     the convergence tree on the home page
site/src/components/Icon        the five emblems
site/src/pages/index.astro      the landing page
site/src/pages/[slug].astro     one page per family
site/public/styles.css          the bright palette — the archives' own hues, turned up
```

## The ladders come from the archives

Until November 2026 every ladder was typed by hand, and the archives moved on without it (a whole generation
found above Rosario Mazza, a birth year corrected, a line shown to break). Now `scripts/sync_archives.py`
reads each archive's own direct line into `site/src/data/archive-lines.json`, and `site/src/lib/ladders.js`
builds every ladder from it: the years, the depth, a link to the archive's page. `families.js` keeps only the
child's voice. The build fails when the two disagree in a way a person must look at, and a weekly workflow
(`drift.yml`) fails when an archive has moved on. `TEMPLATE.md` says how to make the site for another child.

## Keeping up with the research

The six archives move. This site is downstream of them, so it has to be re-read against them
periodically — and that is not only about adding new findings. It is mostly about **taking things
back**.

The clearest example so far: this site told children, as a headline fact, that the family
deliberately changed Booysen to Booyzen during the Anglo-Boer War. A better scan of an 1851
baptism register then showed the z already present, and the same clerk on the same page spelling
an unrelated family PIETERZEN — so `-zen` was ordinary Cape-Dutch orthography and nobody invented
anything. The page now carries the retraction as a fact in its own right, because a child learning
that research means changing your mind is worth more than a tidy story.

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
