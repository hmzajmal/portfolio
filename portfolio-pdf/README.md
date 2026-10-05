# Portfolio PDF

Source for `portfolio.pdf`, a 47 page, 16:9 deck built from
hamzajamal.design.

## Build

```bash
node gen.mjs      # writes src/index.html from the content in gen.mjs
node build.mjs    # quality checks, out/pages/NN.png, out/portfolio.pdf
```

`build.mjs` uses the installed Google Chrome through Playwright (channel
"chrome"), so there is nothing to download. It exits non-zero if a check
fails: em or en dashes, banned words, text past a margin, more than 90
words of body copy on a page, an upscaled or broken image, or an index
page number that does not match.

From the repo root, `npm run pdf` runs both steps and copies the result
to `public/hamza-jamal-portfolio.pdf`, which the site serves.

## Where things live

- `gen.mjs`: all copy, the page order, and the layout templates. Edit
  text here. Each case study is one object in `STUDIES`; each page is one
  template call.
- `src/styles.css`: the design system. Tokens at the top, then the grid,
  type scale, recurring pieces, templates.
- `src/img/<slug>/`: compressed copies of the site's images (1600px,
  JPEG q80). Regenerate from `assets/` with the snippet in
  `scripts/crawl.py`'s neighbour below if a source changes.
- `assets/<slug>/`: originals downloaded from the site, one folder per
  page. Not needed to build; kept for reference.
- `content/`: the crawl. One markdown file per page, `images.json`, and
  `inventory.md` with every fact the deck draws on.
- `src/fonts/`: Google Sans Flex, the site's typeface, served locally so
  the build works offline and the PDF embeds it.

## Templates

`caseCover`, `split` (text left, images right), `band` (text on top,
images in a row), `roleConstraints`, `research` (text and a bar chart),
`outcome` (stats and lessons, optional image), `outcomeFunnel`, `fixes`,
`quotePage`, `listPage`. Images are placed at their own aspect ratio
inside the space the template gives them, so nothing is cropped or
stretched. The generator reads each JPEG's pixel size to do that; the
photo tiles on the "Beyond the work" page are the one place that crops.

## Re-making the image copies

```bash
python3 - <<'EOF'
import os, subprocess
for slug in os.listdir("assets"):
    d = os.path.join("assets", slug)
    if not os.path.isdir(d): continue
    os.makedirs(f"src/img/{slug}", exist_ok=True)
    for f in os.listdir(d):
        base, ext = os.path.splitext(f)
        if ext.lower() in (".svg", ".gif"): continue
        subprocess.run(["sips", "-Z", "1600", "-s", "format", "jpeg", "-s", "formatOptions", "80", os.path.join(d, f), "--out", f"src/img/{slug}/{base}.jpg"], capture_output=True)
EOF
```
