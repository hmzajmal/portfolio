# Design system

The small set of rules every screen on hamzajamal.design follows. Tokens
live in `src/app/globals.css`. `npm run lint:tokens` fails the build on
anything that bypasses them.

## Typography

One font, Google Sans Flex, with optical sizing left to the browser. Text
is sized only through these roles. Each role fixes size, weight, tracking
and leading together, so a role is the whole decision.

| Role | Use | Size | Weight |
|---|---|---|---|
| `h1` | page title | 40 to 64 | 500 |
| `h2` | section title | 28 to 44 | 500 |
| `h3` | sub-section title, big number | 22 | 500 |
| `title` | card and list item titles | 18, 20 from md | 500 |
| `body-lg` | lead paragraph | 18, 20 from md | 400 |
| `body-text` | paragraph | 16 | 400 |
| `body-sm` | caption, meta | 14 | 400 |
| `label` | emphasised label, name, table cell | 16 | 500 |
| `label-sm` | emphasised small label | 14 | 500 |
| `eyebrow` | small caps section label | 14 | 500 |

Rules

- 14px is the floor. Nothing on a page is smaller. Product mockups that
  draw a fake app UI are the one exemption.
- 500 is the weight ceiling. The face reads heavy above it.
- The hero uses `h1` at a reduced size on purpose. There is no display role.
- Never write `text-[Npx]`, `fontVariationSettings`, `"opsz"` or `"wdth"`.
- To change weight on a single element, add `wt-light`, `wt-regular` or
  `wt-medium` to the role. Do not invent a new role for one screen.
- `strong` is inline emphasis inside body copy. `stat` adds tabular
  figures to any role for numbers that line up or tick.

## Text colour

Five ink roles on light surfaces, three on dark. Use the class, never the
variable or a hex value.

| Class | Use |
|---|---|
| `text-ink` | headings, primary copy |
| `text-ink-muted` | paragraphs, secondary copy |
| `text-ink-quiet` | meta, captions, glue words |
| `text-ink-faint` | hints, disabled |
| `text-ink-inverse` | primary on dark |
| `text-ink-inverse-muted` | paragraphs on dark |
| `text-ink-inverse-quiet` | meta on dark |

The `eyebrow` role sets its own colour, `ink-muted`. Add `text-ink` or an
inverse role after it only when the label sits on a dark surface.

## Not yet covered

Spacing, radii, surfaces (liquid glass, frames), brand accents and the
case study primitives are the next passes. Until then, those still use
Tailwind utilities and `var(--color-*)` directly.
