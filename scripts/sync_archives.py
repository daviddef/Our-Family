#!/usr/bin/env python3
"""Snapshot of each archive's direct line, for the ladders on this site.

Our Family used to type every ladder by hand. The archives kept moving (a whole generation found above
Rosario Mazza, a birth year corrected, a line shown to break) and the ladders did not, so a child was
being told things the archives had already taken back. This script is the one way the ladders get
their dates and their depth: it reads each archive's own direct line (the ribbon in `story.json`, or
a surname line in `family-lines.json`, or `direct-line.json` for the Defranceski) from the archive's
public repo, and writes site/src/data/archive-lines.json.

  python3 scripts/sync_archives.py            write the snapshot
  python3 scripts/sync_archives.py --check    fetch again and fail if the snapshot is out of date
                                              (the weekly workflow runs this)

What is kept: the card's name, years, origin, how well the origin is known, the person's slug (so a
rung can link to the archive page), and the archive's own one-line evidence. A card the archive marks
as living is kept as `{living: true}` and nothing else: no name, no year. Nothing is added or inferred.
"""
import json, sys, urllib.request, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "site/src/data/archive-lines.json"

# family slug -> (repo, file, how to find the cards, archive url): read from site/src/data/archive-sources.json
SOURCES = ROOT / "site/src/data/archive-sources.json"

def load_spec():
    return {s: (v["repo"], v["file"], v["how"], v["archive"]) for s, v in json.loads(SOURCES.read_text())["families"].items()}

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "our-family-sync"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()

def card(c):
    if c.get("living"):
        return {"living": True}
    return {k: v for k, v in {
        "name": c.get("name"), "years": c.get("years") or "", "origin": c.get("origin") or "",
        "grade": c.get("originGrade") or "", "person": c.get("person") or "", "title": c.get("title") or "",
    }.items() if v != "" or k in ("years",)}

def cards_of(doc, how):
    if how == "ribbon":
        return [card(c) for c in doc["ribbon"]["cards"]]
    if how.startswith("line:"):
        want = how.split(":", 1)[1]
        fam = next(f for f in doc["families"] if f["id"] == want)
        return [card(c) for c in fam["cards"]]
    if how == "direct-line":
        # the Defranceski archive keeps no dated cards here: names and generations only
        return [({"living": True} if p["name"] in ("David Defranceski",) else
                 {"name": p["name"], "years": "", "person": p["slug"]})
                for p in sorted(doc["people"], key=lambda p: p["generation"])]
    raise SystemExit(f"unknown spec {how}")

def build():
    fams, seen = {}, {}
    for slug, (repo, path, how, url) in load_spec().items():
        if (repo, path) not in seen:
            seen[(repo, path)] = json.loads(get(f"https://raw.githubusercontent.com/daviddef/{repo}/main/{path}"))
        fams[slug] = {"repo": f"daviddef/{repo}", "file": path, "source": how, "archive": url,
                      "cards": cards_of(seen[(repo, path)], how)}
    return fams

if __name__ == "__main__":
    fams = build()
    if "--check" in sys.argv:
        old = json.loads(OUT.read_text())["families"]
        bad = [s for s in fams if fams[s] != old.get(s)]
        if bad:
            print("OUT OF DATE: the archives have moved on for:", ", ".join(bad))
            print("Run  python3 scripts/sync_archives.py  then check each ladder and its 'mystery' text.")
            sys.exit(1)
        print("ok: the snapshot matches the archives"); sys.exit(0)
    doc = {"_note": "Made by scripts/sync_archives.py from the archives' own direct lines; do not edit by hand. "
                    "Living people are kept as {living: true} and nothing else.",
           "syncedAt": datetime.date.today().isoformat(), "families": fams}
    OUT.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n")
    print("wrote", OUT.relative_to(ROOT), {s: len(f["cards"]) for s, f in fams.items()})
