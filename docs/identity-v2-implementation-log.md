# Identity v2 — Implementation Log

**Status:** Implemented — pending independent identity review
**Live URL:** https://faria-site.vercel.app/
**Commit range:** d40cf9a … 8d8f441
**Date:** 2026-06

---

> This file is the technical / change history for the v2 (cube) identity work.
> It is **not** the authoritative brand brief — `FARIA_INNOVATIONS_BRIEF.docx`
> remains the current-state brand and implementation reference. The cube
> identity is implemented and live but has **not** been treated as permanently
> approved; it is awaiting independent commercial / brand review.

---

## 1. Radar mark — "make it cooler" pass *(superseded)*

Commits: phases 1–4, comet revision, motion pass 2.

- **Motion:** rotating sweep (7 s), sonar ping waves, Fi blip pulse + echo,
  acquisition flash timed to the sweep crossing the target, blinking
  secondary contact.
- **Density:** 30° radial grid, range digits 1–4, polar coordinate stamp
  (`138° · R3`).
- **Narrative:** leader tick, navy crosshair through the blip, two
  unacquired secondary blips.
- **Shape:** outer corner-bracket scope frame.
- Dropped the comet tail (rejected by review); added origin antenna + Fi
  glow instead.

> ⚠️ **Superseded:** all radar work was **removed** when the cube identity
> was adopted (see §4). It remains in git history if it ever needs to be
> restored.

## 2. Content + polish

- Added **flightriskshow.com** under Flight Risk.
- **Patents Pending** — removed (no evidence at the time), then restored
  after the principal confirmed real filings exist.
- **Grain overlay** (0.04 opacity inline-SVG noise), **restrained hero
  stagger** (guarded by `prefers-reduced-motion: no-preference`).
- **Footer cleanup:** `SYSTEM VERSION 3.0 · ISSUED MM.YYYY · BELTSVILLE,
  MARYLAND`; Git SHA moved to `<meta>` + HTML comment only (never visible UI).

## 3. Mobile fixes

- **Header unsticky on phones** (`position: static` under 760 px) so it
  scrolls away instead of eating viewport.
- **Registry strip** stacks label-above-value with added horizontal
  breathing room on phones.
- **Radar rotation cross-browser fix** (the "line doesn't move on phone"
  bug): iterated SMIL → filler-rect → explicit `transform-box: fill-box`.
  (Now moot after the cube swap, but the technique is documented in the
  brief for reuse.)

## 4. v2 cube identity *(commit `e44dc2d`)*

Ported `faria_site_v2.zip` into the Astro site — **ported, not replaced**, so
`/parcentry`, `/flight-risk`, `/notes`, self-hosted fonts, and the
GitHub→Vercel pipeline all stayed intact.

| Change   | Detail                                                      |
| -------- | ---------------------------------------------------------- |
| Logo     | Animated radar **removed**; cube identity in                |
| Navy     | `#0A1F44` → `#00041B` (sampled to match the cube field)     |
| Accent   | Added cube blue `#3B82F6` on proof figures; sienna `#C76833` stays primary |
| Copy     | New "venture studio turning deep domain expertise…" subline |
| OG image | Rebuilt to composite the cube lockup + registry on navy    |
| Assets   | Optimized PNGs: cube 1752 → 37 KB, hero lockup 766 → 154 KB |
| Deleted  | `RadarMark.astro`, `og-image.svg`                          |

Asset normalization note: the cube PNG background was linear-mapped to
exactly `--paper` (`#00041B`) so it sits flush with no visible plate.

## 5. Hero layout + header mark *(commit `8d8f441`)*

- **Split hero** on desktop (≥ 860 px): circular cube lockup left, value
  statement + subcopy + both CTAs right — pulls the pitch and CTAs above the
  fold and fills the previously-empty right half. Stacks on mobile.
- Dropped the redundant `FARIA INNOVATIONS` eyebrow label (the lockup beside
  it already carries the name).
- **Header mark** swapped cube → **Fi element tile** (`FiBadge`, the same
  registration-frame mark as the browser-tab favicon). `FiBadge` now accepts
  a `class` prop; footer usage unchanged.
- Deleted now-unused `faria-cube-logo.png`.

## 6. Documentation

- **`FARIA_INNOVATIONS_BRIEF.docx`** — authoritative current-state brand +
  implementation brief: design system, identity geometry, every source file
  verbatim, deployment, discipline rules.
- **`docs/identity-v2-implementation-log.md`** — this file (change history).

---

## Net change

Last 6 commits: **12 files, +239 / −521 lines** (net shrink — radar and dead
assets removed).

Commit range `d40cf9a … 8d8f441` on `main`, all auto-deployed to Vercel.

---

## Open items for the identity review

- Name appears twice in close vertical succession on the homepage (header
  `Fi + FARIA INNOVATIONS`, then hero lockup `FARIA INNOVATIONS`). Candidate
  fix held pending review: shorten the header wordmark to just `FARIA`.
- Cube blue (`#3B82F6`) is a **second** accent alongside burnt sienna — a
  deliberate departure from the prior "sienna is the sole accent" rule;
  flagged for explicit sign-off.
- Favicon is still the path-based Fi tile, not the cube (intentional — the
  cube does not read at 16 px). Confirm this is acceptable.
- Footer reads `SYSTEM VERSION 3.0` while the asset bundle was labeled v2;
  version-stamp convention to be confirmed.

**Next step:** pause for independent identity review (Kiro). No further visual
changes until then.
