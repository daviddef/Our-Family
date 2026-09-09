# Our Family

The landing site for the five family archives — and the only one of the six written for children.

**Live:** https://daviddef.github.io/Our-Family/

Alessio (b. 14 March 2017) and Mateo (b. 12 September 2019) were born in Brisbane. Five separately
researched families meet in them. This site tells that story in a way a six-year-old can follow and a
ten-year-old can read alone, and then hands the reader off to the grown-up archive behind each family.

| | Family | From | Archive |
|---|---|---|---|
| 🔵 | **Defranceski** | Istria, Croatia | [The Defranceschi Archive](https://daviddef.github.io/TheDefranceski/) |
| 🟢 | **Falco** | Arienzo, Campania, Italy | [The Falco Archive](https://daviddef.github.io/TheFalco/) |
| 🟠 | **Lerena** | Rosario, Argentina | [The Lerena Archive](https://daviddef.github.io/TheLerena/) |
| 🔴 | **Booyzen** | The Karoo and the Cape, South Africa | [The Booyzen Archive](https://daviddef.github.io/TheBooyzen/) |
| 🟣 | **D'Arcy** | Yorkshire and Limerick → Australia | [The D'Arcy Archive](https://daviddef.github.io/TheDArcy/) |

## How the five join

Four of them arrive through the four grandparents. The fifth, Booyzen, arrives one generation higher —
through Catherine Mary Sophia Booyzen, who married Nuno Fernando Lerena at St Joseph's, Mayfair, in 1949.

```
D'Arcy   Falco        Booyzen   Lerena        Defranceski
   \      /               \      /                 |
    \    /              Catherine  Nuno            |
     \  /                     \    /               |
     Cristina                  Cheryl ———————— Ivan
      (Mum)                          \          /
         \                            \        /
          \                            David (Dad)
           \                          /
            \________________________/
                        |
               Alessio  ·  Mateo
                   Brisbane
```

## The rule this site does not follow

All five research archives **omit living people from the build entirely**. This one cannot — it is a
site *about* two living children, made for them, at their father's request. It therefore names the boys,
their parents and their grandparents, and nobody else who is living.

That is a deliberate exception, not an oversight. If it should be narrowed, or the repository made
private, that is a one-line change and a settings toggle.

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

## Design

Same brand family as the five archives: EB Garamond for names and titles, a warm paper ground, and the
archives' own region colours. Turned bright, set in Nunito at 19px, and given rounded corners, thick
borders and one emblem per family — because the reader is six.
