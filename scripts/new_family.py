#!/usr/bin/env python3
"""Add a family to Our Family: a few lines of voice, and everything else comes from the archive.

  python3 scripts/new_family.py SLUG --repo TheMazza --how line:costa --archive https://mazza.defranceski.com/ \
          [--file site/src/data/family-lines.json]

  --how   ribbon          the ribbon in the archive's story.json (the default file)
          line:ID         a surname line in family-lines.json
          direct-line     direct-line.json (names only; the dates are then typed in families.js)

It registers the family in site/src/data/archive-sources.json, refreshes the snapshot, and prints a skeleton
for site/src/data/families.js: one rung for each person in the archive's line, each tied to the archive by `ref`,
and `mysteryFor` set to the oldest of them. What is left for a person to write is the voice: the blurb, the
meaning of the name, the facts in a child's words, and the `rel` and `where` of the rungs they want to say
differently. A rung with no `when` gets the archive's years.
"""
import argparse, json, pathlib, subprocess, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "site/src/data/archive-sources.json"
sys.path.insert(0, str(ROOT / "scripts"))

ap = argparse.ArgumentParser()
ap.add_argument("slug"); ap.add_argument("--repo", required=True); ap.add_argument("--how", default="ribbon")
ap.add_argument("--file"); ap.add_argument("--archive", required=True)
a = ap.parse_args()
file = a.file or ("site/src/data/family-lines.json" if a.how.startswith("line:")
                  else "site/src/data/direct-line.json" if a.how == "direct-line" else "site/src/data/story.json")
doc = json.loads(SRC.read_text())
doc["families"][a.slug] = {"repo": a.repo, "file": file, "how": a.how, "archive": a.archive}
SRC.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n")
subprocess.run([sys.executable, str(ROOT / "scripts/sync_archives.py")], check=True)
cards = [c for c in json.loads((ROOT / "site/src/data/archive-lines.json").read_text())["families"][a.slug]["cards"] if not c.get("living")]
key = lambda c: c.get("person") or f'{c["name"]}|{c.get("years","")}'
print(f'\n// ---- paste into site/src/data/families.js, then write the voice ----\n  {{\n    slug: "{a.slug}", name: "TODO", key: "TODO", flagWord: "TODO", from: "TODO", icon: "TODO",\n    blurb: "TODO", meaning: "TODO", km: "TODO", kmNote: "TODO",\n    archive: "{a.archive}", archiveName: "TODO", facts: [], photos: [],\n    ladder: [\n      {{ name: "ME", where: "TODO", you: true }},')
for c in reversed(cards):
    print(f'      {{ name: "{c["name"].rsplit(" ",1)[0] if " " in c["name"] else c["name"]}", ref: {json.dumps(key(c), ensure_ascii=False)}, where: "{c.get("origin","")}" }},   // {c.get("years") or "no dates"}')
print(f'    ],\n    mysteryFor: {json.dumps(key(cards[0]), ensure_ascii=False)},\n    mystery: "TODO: what is still unknown at the top of this line",\n  }},')
