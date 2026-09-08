# Portfolio Design System — "Technical Blueprint" Theme

Source: extracted visually from 7 reference screenshots (a Civil BIM Engineer portfolio). Colours below are read off screenshots, not from live CSS — treat hex values as best-estimate starting points, not certified. If pixel-perfect fidelity matters, the agent should be told to eyeball-adjust against a live preview, not trust these numbers blindly.

**Hard rule for the build:** zero hardcoded colour values anywhere in components (`bg-[#...]`, `text-[#...]`, inline `style={{color:...}}` are all forbidden). Every colour comes from a Tailwind theme token, which itself resolves to a CSS variable in `:root`/`.dark`. Same for spacing where practical — prefer the Tailwind scale over magic numbers.

---

## 1. Design Principles

- **Dark, technical, blueprint-inspired.** Reads like an engineering drawing sheet, not a generic dark SaaS template.
- **Everything is labelled.** Small mono/tracked-caps meta labels annotate almost every block (scale, discipline, status, sheet number equivalents). This is the single most distinctive trait — don't skip it.
- **Two-weight type contrast.** Huge, heavy display headlines next to small, quiet mono/label text. No mid-weight filler.
- **Corner brackets as a recurring motif**, not decoration used once. They mark "this is a technical artifact" (photo frame, feature cards, forms).
- **Cyan is the only accent.** White is used for one competing high-contrast CTA. No third colour.

---

## 2. Colour System

Define as CSS variables in `:root` (this is a dark-only design — no light mode toggle implied by the reference, so variables can live directly in `:root`), then map into `tailwind.config` under `theme.extend.colors`.

```css
:root {
  /* Surfaces */
  --color-bg:            #0A0B0D;  /* page background, near-black */
  --color-surface:       #0F1113;  /* card / panel background, one step up from bg */
  --color-surface-alt:   #131619;  /* nested panel / input background */

  /* Borders */
  --color-border:        #1D2226;  /* default hairline border */
  --color-border-strong: #2A3034;  /* hover / emphasised border */
  --color-border-accent: #17B7D6;  /* cyan border on framed/active elements */

  /* Text */
  --color-text-primary:   #F5F6F7;  /* headings, primary copy */
  --color-text-secondary: #A6ACB0;  /* body copy */
  --color-text-muted:     #6B7176;  /* meta labels, captions, placeholders */

  /* Accent */
  --color-accent:         #22D3EE;  /* cyan — links, active nav, icons, borders */
  --color-accent-strong:  #38E4FF;  /* hover state of accent */
  --color-accent-fg:      #05141A;  /* text colour placed ON TOP of a solid cyan bg */

  /* Inverse (white CTA) */
  --color-inverse-bg:     #F5F6F7;
  --color-inverse-fg:     #0A0B0D;

  /* Status (used sparingly — badges) */
  --color-status-live:    #22D3EE;
}
```

Tailwind mapping (`tailwind.config.js`):

```js
theme: {
  extend: {
    colors: {
      bg:           'var(--color-bg)',
      surface:      'var(--color-surface)',
      'surface-alt':'var(--color-surface-alt)',
      border: {
        DEFAULT: 'var(--color-border)',
        strong:  'var(--color-border-strong)',
        accent:  'var(--color-border-accent)',
      },
      text: {
        primary:   'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted:     'var(--color-text-muted)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        strong:  'var(--color-accent-strong)',
        fg:      'var(--color-accent-fg)',
      },
      inverse: {
        bg: 'var(--color-inverse-bg)',
        fg: 'var(--color-inverse-fg)',
      },
    },
  },
}
```

Usage rules:
- Page background → `bg-bg`.
- Any card/panel → `bg-surface border border-border`.
- Nested field (form input, sub-panel) → `bg-surface-alt`.
- Body copy → `text-text-secondary`. Headings → `text-text-primary`. Labels/meta → `text-text-muted`, uppercase, tracked.
- Cyan is used for: active nav underline, link colour, icon strokes inside bordered icon boxes, one of the three button variants, card corner brackets, chip borders, section-eyebrow dash.
- White/inverse is used for exactly one button variant (the highest-contrast CTA, e.g. "View my work") and nothing else — don't let it creep into text or borders elsewhere.

---

## 3. Typography

Two typefaces, doing very different jobs. Load both via `next/font` or `@font-face` — no system-font fallback for the display face, it's too load-bearing.

| Role | Font | Notes |
|---|---|---|
| Display / headings | A heavy, tight, condensed grotesk — **Archivo Black**, **Anton**, or **Inter Tight (weight 900)** are close matches to the reference's "G. ABHISHEK" / "ABOUT ME" treatment | Very high weight, near-zero letter-spacing, tight line-height (~0.95–1.0) |
| Body / UI text | A clean geometric/humanist sans — **Poppins** or **Inter** | Regular 400 for paragraphs, Medium 500 for UI labels/buttons |
| Meta / labels / data | A monospace — **JetBrains Mono** or **IBM Plex Mono** | Used for: nav sub-label ("CIVIL BIM ENGINEER"), eyebrow labels, sheet/index numbers, tags, form field labels, footer meta |

Type scale (Tailwind `fontSize` — adjust to `rem`):

```
display-xl   : 72px / 1.0  / 900 weight   → hero name (H1)
display-lg   : 48px / 1.0  / 900 weight   → section headlines ("ABOUT ME")
display-md   : 32px / 1.05 / 800 weight   → card group titles, stat numbers
heading-lg   : 24px / 1.2  / 700 weight   → card titles
heading-md   : 18px / 1.3  / 700 weight   → sub-card titles
body-lg      : 18px / 1.6  / 400 weight   → intro paragraphs
body-md      : 16px / 1.6  / 400 weight   → standard body copy
body-sm      : 14px / 1.5  / 400 weight   → secondary/support copy
label        : 12px / 1.4  / 600 weight   → mono, uppercase, tracking-[0.15em] — the small tagged labels
caption      : 11px / 1.4  / 500 weight   → mono, uppercase, tracking-[0.1em] — nav sub-label, footer meta
```

Rules:
- Every eyebrow/section label is: mono font, uppercase, `letter-spacing` wide (~0.15em), `text-muted` or `text-accent` colour, preceded by a short horizontal cyan dash (`—`, ~24px wide, 1–2px tall).
- Headlines frequently mix regular + italic weight within one line for emphasis on a single word/phrase (see "About" hero copy pattern). Reproduce this as inline `<em>`/`<span class="italic font-light">` inside otherwise heavy headline — this is a real design decision, not a mistake in the reference, keep it.
- Nav links, button labels, and tag chips are uppercase with medium tracking (`tracking-wide`), body copy is sentence case.

---

## 4. Spacing & Layout Grid

- Base spacing unit: 4px (standard Tailwind scale, no custom scale needed).
- Max content width: `1440px`–`1480px` container, centred, with `px-6` mobile / `px-10` desktop side padding.
- Section vertical rhythm: large sections use `py-24`–`py-32` between major blocks; the reference has noticeably generous whitespace above/below section headers (roughly 96–140px) — don't compress this.
- Section header pattern spacing: eyebrow label → `mb-3` → headline → `mb-2` (headline sits close under its eyebrow, then a larger gap of `mb-12`–`mb-16` before the section body starts).
- Card grids: 2-col or 4-col grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`), gap `gap-6`.
- Card internal padding: `p-6`–`p-8`.

---

## 5. Borders, Radius, Elevation

- **Radius: 0 everywhere, except pill-shaped tag chips and small icon-avatar squares which use a very small radius (2–4px) — never fully rounded.** This is a sharp-cornered, technical-drawing aesthetic; don't default to Tailwind's rounded-lg/rounded-xl anywhere.
- Border width: `1px` hairline as the default everywhere (`border border-border`). No heavy 2px+ borders except the deliberate cyan-accent frame on the hero photo / active elements, which can go to `1.5–2px`.
- No drop shadows / no glassmorphism / no blur. Depth is communicated entirely through border colour + background-luminance steps (`bg` → `surface` → `surface-alt`), never `box-shadow`.
- Dividers between stacked content use a plain `border-t border-border`, full width, no gradient fade.

---

## 6. Signature Motifs (don't skip these — they're what make it look "on-brand")

**A. Corner brackets.** An open-cornered rectangle drawn with 4 small L-shaped marks (top-left, top-right, bottom-left, bottom-right), 1–1.5px, cyan, ~16–20px arm length, offset slightly outside the element's own border so it reads as a "targeting frame" laid over the card. Used on: the hero photo frame, the "featured/active" project card, the contact form panel. Build as a reusable `<CornerFrame>` wrapper component (absolutely-positioned SVG or 4 pseudo-corner `<span>`s), not copy-pasted per instance.

**B. Blueprint annotation strip.** A thin bar (mono text, `text-[11px]`, `text-muted`/`text-accent`, uppercase) sitting on/over an image or panel, e.g. `SHEET: GA-BIM-01   SCALE: 1:1   DISCIPLINE: CIVIL/BIM`. Reproduce as a small flex row with `justify-between`, muted background chip behind it (`bg-bg/80`) so it stays legible over photos.

**C. Index numbering.** Cards in a grid (skills/expertise/projects) carry a 2-digit index (`01`, `02`…) top-right, mono font, `text-muted`, small.

**D. Tag chips.** `border border-border` (or `border-border-accent` when meaningfully "primary"), no fill, small caps mono text, `px-3 py-1`, radius `2px`, sometimes prefixed with a small check/circle icon.

**E. Faint background grid.** A very low-opacity (≈4–6%) fine grid/graph-paper pattern behind the hero section only — subtle, not present on every section. Implement as a repeating CSS background pattern or a fixed SVG, `pointer-events-none`, `opacity-5`.

---

## 7. Components

### Navbar
- Fixed/sticky top, `bg-bg` (or `bg-bg/90 backdrop-blur` if you want it float-over-content — reference looks solid, not blurred), `border-b border-border`, height ~72–80px.
- Left: square logo mark (single letter, cyan border, `border border-border-accent`, `w-9 h-9`, centered mono/display letter) + stacked name (display, small) / role (caption, muted, tracked).
- Centre: nav links, uppercase, `text-sm`, `tracking-wide`, `text-text-secondary`; active link is `text-text-primary` with a `2px` cyan underline sitting a few px below the text (not a full-width tab underline — just under the label width).
- Right: primary CTA button (solid cyan, see Buttons) + one icon-only ghost button (bordered square, `w-10 h-10`).

### Buttons — 3 variants, always used with an icon
1. **Inverse (white)** — `bg-inverse-bg text-inverse-fg`, no border, bold label, small leading icon. Reserved for the single strongest CTA per view.
2. **Ghost/outline** — `bg-transparent border border-border text-text-primary`, hover → `border-border-strong`.
3. **Accent (cyan)** — `bg-accent text-accent-fg`, bold label, hover → `bg-accent-strong`. Used for the "commit" action (Download Resume / Send Message).

All buttons: `px-6 py-3`, radius `2px` (not 0 — buttons get the tiniest radius in the whole system, everything else is 0), uppercase or title-case label depending on button (reference mixes both — keep CTA labels title-case with icon, nav/tag text uppercase).

### Section header
`— EYEBROW LABEL` (mono, tracked, muted/accent) → big display headline (mixed weight/italic allowed) → optional right-aligned meta block (2 lines, mono, muted, right-aligned, small) sitting at the same baseline as the headline on desktop, stacking below on mobile.

### Stat block (hero strip)
4-column row, each: large display number/word (`display-md`) → caption label (mono, muted) → sub-label (`body-sm`, secondary). No card border around these — they sit directly on the page background, separated by generous gaps, with a `border-t border-border` rule above the whole strip.

### Feature/expertise card
`bg-surface border border-border p-6`, icon in a small bordered square top-left (`w-10 h-10 border border-border-accent`, cyan icon), 2-digit index top-right (mono, muted), title (`heading-lg`), description (`body-sm`, secondary), `border-t border-border` divider, "PRIMARY TOOLS" label + chip row, `border-t` divider, "KEY OUTPUTS" label + bullet list (small cyan dot marker).

### Skill card (skills page)
Simpler card: title + status badge (bordered chip, colour varies by tier — but still only cyan/muted/white borders, never new hues) top-right, one-line description below.

### Tabs (skills filter bar)
Pill-less segmented control: first tab active = inverse (white bg/black text), inactive tabs = `bg-transparent border border-border text-text-secondary`. All same height, `px-5 py-2`, radius `2px`.

### Timeline / experience entry
Left column: role + org (display/heading weight) + date range (mono, muted). Right/body column: bullet list of achievements, each bullet bold-highlighting key nouns/tools inline (`<strong>`) rather than a plain list — reference bolds tool names and metrics inline within sentences.

### Project/case-study card
Large image with the blueprint annotation strip overlaid (motif B), corner frame (motif A) on the "featured" one only, meta grid below image (2×2 label/value pairs, mono labels + text-primary values), tag row at the bottom for "inputs/assets".

### Contact form
`bg-surface`, corner-frame motif, mono field labels above each input, inputs are `bg-surface-alt border border-border`, radius `2px`, focus state → `border-border-accent`. Submit button = accent variant, full width, centered icon+label.

### Footer
`border-t border-border`, `pt-16`, 2–3 column layout: identity block (logo/name/role/one-line stack summary), nav link repeat, contact/social links (accent-coloured on hover). Bottom row: copyright + location, small mono, `text-muted`, `justify-between`.

---

## 8. Iconography

Line icons, 1.5px stroke, ~20–24px, no fill — matches Lucide/Feather style. Icons are always cyan when inside an accent context (bordered icon box, links) and `text-text-secondary` when purely functional (form field icons, footer icons).

---

## 9. Responsive Behaviour

- Breakpoints: standard Tailwind (`sm/md/lg/xl`).
- Nav collapses to a hamburger below `md`; CTA button in the mobile menu becomes full-width.
- 4-column stat strips and 4-column card grids collapse to 2-col at `md`, 1-col at `sm`.
- Section header's right-aligned meta block moves below the headline and left-aligns on mobile.
- Display-xl hero name should fluid-scale (`clamp()`) rather than jump between two fixed sizes at the breakpoint.

## 10. Accessibility

- Verify `text-muted` (#6B7176) on `bg-surface` (#0F1113) meets at least WCAG AA for the label/caption size — at 12px this pairing is borderline; the agent should bump `--color-text-muted` slightly lighter if an automated contrast check fails, rather than leaving it.
- Focus states: every interactive element needs a visible `focus-visible` ring using `--color-accent`, since the design has no drop-shadow language to lean on otherwise.
- Don't rely on colour alone for the active-nav-link state — the underline (already specified) covers this, keep it mandatory even if a future colour token changes.
