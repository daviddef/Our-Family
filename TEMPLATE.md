# Making Our Family for another child

Our Family is two layers, so a second copy is a small job.

**The facts come from the archives.** `scripts/sync_archives.py` reads each archive's own direct line
and writes `site/src/data/archive-lines.json`. A rung's years, its depth and its link to the archive page
come from there; they are never typed. `site/src/data/archive-sources.json` says which archive, which file
and which line each family comes from.

**The voice is yours.** For each family, `site/src/data/families.js` holds only what a child's page needs
that an archive cannot say: the blurb, what the name means, the facts in a child's words, and for each rung
the `rel` ("Grandpa"), the `where` with its arrows, the `job`, and the `ref` that ties the rung to the archive.

## Steps

1. Copy the repo. In `site/astro.config.mjs` set `site` and `base`; in `site/public/CNAME` the domain.
2. `site/src/data/household.json`: the site's name, the children's initials, the city.
3. `site/src/data/living.json`: who is living (initials only) and who has been released since. The build fails
   if a living person's name or birth year reaches a page.
4. For each family, with its archive:

   ```bash
   python3 scripts/new_family.py SLUG --repo TheMazza --how line:costa --archive https://mazza.defranceski.com/
   ```

   It registers the family, refreshes the snapshot and prints a skeleton with one rung for every person in the
   archive's line. Paste it into `families.js`, then write the voice.
5. `cd site && npm install && npm test && npm run build`. The build stops, with a message, if a rung points at
   a card the archive no longer has; if the archive has a card with no person page (say whether it is a person
   or a break in the line); or if the oldest person on the archive's line is not the one your `mystery`
   paragraph was written for (`mysteryFor`).

## Staying right

- Every Monday `.github/workflows/drift.yml` asks the archives again and fails if the snapshot is out of date.
  Then: `npm run sync`, look at what moved, re-read the ladder's `mystery`, set `mysteryFor`, commit.
- A line the archive shows to break (nobody can say which child carries the line on) is a `break: true` rung,
  and the generations above it are not counted.

## Still written by hand, per household

The home page's hero and the convergence tree (`BigTree.astro`, positions for ten families), `cousins.astro`,
the joining timeline and the journeys, walk, places, jobs and words pages, `pedigree.js` (the fan and the cousins picker read it; `SIDES` in `lib/fan.js` says who is whose), `mysteries.js` (the case board), the `when` and `where` of every ladder row (the Time Machine and Long Ruler parse them in `lib/lives.js`; a new date format needs a line in `parseWhen`), and the legs of `routes.js` (Roots & Routes;
the map itself is the world from the household's city, so a household elsewhere re-runs `site/scripts/make_world.mjs` and changes `BRISBANE` in `lib/geo.js`). They are the story of one household;
a second household rewrites them. Their years should come from the ladders where they can; `SpanChart` and
`BigTree` still carry a few that are typed (they were corrected on 4 November 2026).
