# faria-site

The website of **Faria Innovations** — `fariainnovations.com`.

**v2 — a calm, credible signature above the work.**

This is the parent-brand site. It is a quiet signature above the
ventures (Parcentry, Flight Risk) — an editorial index of the work, not
a manifesto, not a portfolio grid, not a startup landing page.

It is a small static site built with Astro. The whole identity lives in
typography, spacing, ruled catalog structure, and small metadata labels.
Editing it should feel like editing a catalog, not a CMS.

---

## v2 brand direction

- **Parent brand = quiet signature.** The site does not manifesto, does
  not carry sub-brand personality, does not try to be loud or funny.
- **Ventures speak for themselves.** Parcentry stays sober and premium.
  Flight Risk stays feral and cartoon-industrial. The parent site does
  not absorb either.
- **Editorial index, not directory.** Ventures and Labs are presented
  as ruled catalog entries with category prefixes — not cards, not
  thumbnails, not status boards.
- **Warm paper, single accent.** Light-only. No dark mode.

---

## Stack

- [Astro 5](https://astro.build) — static site generator
- MDX for notes (`@astrojs/mdx`)
- RSS for `/notes/rss.xml` (`@astrojs/rss`)
- Self-hosted fonts via `@fontsource` (Fraunces, Familjen Grotesk)
- Zero client JS by default
- No analytics, no trackers, no cookies

Deploys cleanly to any static host. Designed for Vercel by default.

---

## Tokens

All defined in `src/styles/global.css` as CSS custom properties.

### Color

| Token        | Value     | Role                                              |
|--------------|-----------|---------------------------------------------------|
| `--paper`    | `#f6f3ec` | default site background                           |
| `--ink`      | `#16161a` | primary text                                      |
| `--navy`     | `#22304d` | structural secondary; favicon background          |
| `--charcoal` | `#3a3a42` | supporting text, small labels                     |
| `--accent`   | `#6f2c3a` | Oxblood — sole accent                             |
| `--rule`     | `rgba(22,22,26,0.13)` | thin hairlines                        |

**Oxblood usage:** only on section numbers, slash marks, separator dots,
the Fi corner tab, link underlines, and very small accent moments.
Never large surfaces, never gradients, never the wordmark.

There is no dark mode. The brand surface is warm paper.

### Type

Two faces only.

| Token            | Family                    | Use                                         |
|------------------|---------------------------|---------------------------------------------|
| `--font-display` | `Fraunces`                | wordmark, lockup, venture names, page titles |
| `--font-text`    | `Familjen Grotesk`        | body, UI, nav, labels, metadata             |

Fraunces stays special. Do not set body copy in Fraunces.
Do not introduce a third typeface. No Inter, no JetBrains Mono.

---

## Local development

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the built site locally
```

---

## How to edit common things

All copy is in plain files. There is no admin UI.

### Edit homepage copy

The homepage is a single file: `src/pages/index.astro`.

The hero, About, and Contact text are inline. Venture and Lab rows are
data-driven (see below).

### Add a venture

Open `src/data/ventures.ts` and add an entry:

```ts
{
  category: 'category in lowercase',
  name: 'Venture Name',                 // Fraunces, title case
  description: 'one line, restrained.',
  entry: '/venture-slug',               // internal detail page
  external: { href: 'https://example.com', label: 'example.com →' },
}
```

Then create the detail page at `src/pages/<slug>.astro` (use
`src/pages/parcentry.astro` as the pattern). Operational metrics belong
on the detail page only — never on the homepage row.

### Add or edit a Lab row

Open `src/data/labs.ts`:

```ts
{
  prefix: 'IN PROGRESS',          // free-form small label
  name:   'labs-archive',         // shown verbatim
  description: 'one quiet line.',
}
```

The format renders as `IN PROGRESS · labs-archive · one quiet line.`
with oxblood separators. Do not reintroduce ACTIVE/DORMANT colored
status tags or mono fonts — the brand register here is annotation, not
status board.

### Publish a note

Notes live in `src/content/notes/`. Create a file using the
date-slug convention:

```
src/content/notes/YYYY-MM-DD-your-slug.mdx
```

Frontmatter:

```mdx
---
title: your title (sentence case is fine)
date: 2026-07-04
description: optional one-line summary shown in the index
---

Body in prose. MDX supported.
```

The note will automatically:

- appear at `/notes` (reverse chronological)
- be served at `/notes/YYYY-MM-DD-your-slug/`
- show up in `/notes/rss.xml`

No build flags, no plugins, no manual registration.

### Update contact info

`src/data/site.ts` — `email`, `phone`, `phoneHref`, `location`,
`founder`. The header, footer, and contact section read from here.

### Update the "last filed" stamp

`src/data/site.ts` — `lastUpdated` (format: `YYYY-MM-DD`). Bump this when
you push a meaningful change. It appears in two places:

- the hero **INDEX STATE** line (`… / LAST UPDATED <date>`)
- the footer **LAST FILED · <date>** stamp

The venture and lab-note counts on that hero line are derived
automatically from the `ventures` and `labs` arrays, so they don't need
to be touched manually.

### How the Fi tile is used

The Fi index tile is a quiet support device. It should read as
catalog/index, not as a periodic-table element.

It appears in **exactly two places**:

1. **Favicon** — `public/favicon.svg`. A rounded Deep Navy square with
   a white Fraunces "Fi". No corner tab on the favicon.
2. **Footer badge** — `src/components/FiBadge.astro`. An outlined
   square on Paper with a small Oxblood corner tab containing "01" and
   a centered Fraunces "Fi" in Ink.

Do **not** place the Fi tile in the hero, beside venture rows, as a
large brand illustration, or as decorative repetition.

### Wordmark / lockup

- The wordmark is **Faria**, title case, Fraunces, hand-kerned.
- The formal lockup adds **INNOVATIONS** much smaller beneath, with
  Familjen Grotesk letterspaced caps. Used only in the hero and legal
  footer contexts.
- The company is always **Faria Innovations**. Legal name:
  **Faria Innovations LLC**. Never "Faria Studio", "Faria Labs", or
  "Faria Systems".

---

## Routes

| URL                             | Source                              |
|---------------------------------|-------------------------------------|
| `/`                             | `src/pages/index.astro`             |
| `/parcentry`                    | `src/pages/parcentry.astro`         |
| `/flight-risk`                  | `src/pages/flight-risk.astro`       |
| `/notes`                        | `src/pages/notes/index.astro`       |
| `/notes/<slug>`                 | `src/pages/notes/[...slug].astro`   |
| `/notes/rss.xml`                | `src/pages/notes/rss.xml.ts`        |
| `/writing*` → `/notes*`         | static redirects in `astro.config.mjs` |

### Anchors on the homepage

| Anchor       | Section                |
|--------------|------------------------|
| `#ventures`  | 01 / Index of Ventures |
| `#labs`      | 02 / Labs              |
| `#about`     | 03 / About             |
| `#contact`   | 04 / Contact           |

---

## Directory map

```
faria-site/
├── astro.config.mjs
├── package.json
├── public/
│   └── favicon.svg                  # navy rounded square, white Fi
├── src/
│   ├── components/
│   │   ├── Header.astro             # wordmark + nav
│   │   ├── Footer.astro             # index strip + Fi badge + legal
│   │   ├── FiBadge.astro            # the Fi index tile
│   │   └── SectionMarker.astro      # "NN / LABEL" with rule
│   ├── content/
│   │   └── notes/
│   │       └── 2026-05-25-on-starting-a-log.mdx
│   ├── content.config.ts
│   ├── data/
│   │   ├── site.ts                  # contact + site-wide values
│   │   ├── ventures.ts              # Index of Ventures entries
│   │   └── labs.ts                  # Lab catalog rows
│   ├── layouts/
│   │   ├── BaseLayout.astro         # base HTML shell
│   │   └── NoteLayout.astro         # single-note reading shell
│   ├── pages/
│   │   ├── index.astro              # homepage
│   │   ├── parcentry.astro          # /parcentry detail
│   │   ├── flight-risk.astro        # /flight-risk placeholder
│   │   └── notes/
│   │       ├── index.astro
│   │       ├── [...slug].astro
│   │       └── rss.xml.ts
│   └── styles/
│       └── global.css               # full stylesheet, single file
└── README.md
```

The whole stylesheet is intentionally in one file. If it grows, split
it — but do not reach for a CSS framework. The identity lives in the
type and spacing decisions, not in utility classes.

---

## Design notes (read before adding anything)

- **Typography first.** Don't sacrifice spacing or measure for a visual
  decoration. The site is type-led.
- **Restraint over expression.** This is the parent brand. Personality
  belongs to the ventures.
- **One accent.** Oxblood only, used sparingly. No second accent.
- **No dark mode.** The brand surface is warm paper.
- **No marketing scaffolding.** No newsletter signup, no cookie banner,
  no social icons, no "Read Our Blog" button, no portfolio grid.
- **The phone number is real.** A direct reachable line. Never frame
  it as an AI Call Center or support infrastructure.
- **Restrained metric placement.** The 281K+ parcels figure for
  Parcentry appears only on `/parcentry`, never on the homepage.
- **Labs are catalog annotations.** Not a status board, not a terminal.
  No bright status colors. No mono typeface.
- **Motion is minimal.** Subtle fades only if needed. No parallax, no
  scroll choreography.

---

## Deployment

The site builds to a static `dist/` directory. Any host works.

**Vercel (default):**

```bash
vercel
```

Or connect the GitHub repo at vercel.com — Vercel auto-detects Astro
and needs no extra config. Canonical domain: `fariainnovations.com`.

**Netlify / Cloudflare Pages:** point at the repo, build command
`npm run build`, publish directory `dist/`.

**Anywhere else:** run `npm run build` and serve `dist/`. Redirects
from `/writing*` are emitted as static meta-refresh pages and work on
any host.

---

## License & ownership

© Faria Innovations LLC. All rights reserved.
