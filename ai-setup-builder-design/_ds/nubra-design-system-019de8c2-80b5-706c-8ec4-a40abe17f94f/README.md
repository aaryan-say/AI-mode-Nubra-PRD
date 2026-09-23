# Nubra Design System

A design system for **Nubra** — an Indian retail-trading desktop & mobile platform for stocks, F&O, options chains, scalping, and AI-assisted strategies. The product is positioned as a fast, dense, trader-grade interface (think TradingView × Zerodha) with a signature dark "ambient" canvas and tight, monospaced numerics.

> Nubra Pro is a real Indian options-trading platform. This design system reconstructs its component library, brand language and screen-level patterns so designers and engineers can produce on-brand artifacts.

## Source materials
- **Figma file:** _Nubra Design System.fig_ (mounted as a virtual filesystem during construction). 20 pages: `Branding`, `Components`, `Button`, `Toggle-Button`, `Text-Field`, `Button-Group`, `Accordion`, `Tabs`, `Chip`, `Checkbox`, `Radio`, `Alert`, `Switch`, `Slider`, `Badge`, `Modal-Bottom-Sheet`, `Counter`, `Dropdown`, plus `Experiments` and live-product `Navigation` mockups.
- No external codebase was attached; the system is reconstructed entirely from the figma source.

## Index — what's in this folder
| Path | What |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Cross-compatible Skill manifest (Agent Skills format). |
| `colors_and_type.css` | All color, type, spacing, radius, elevation and motion tokens. |
| `assets/icons/` | 25+ Nubra product icons (SVG, monoline 20×20 grid). |
| `assets/logo-mark.svg` | Nubra "N" logo mark. |
| `preview/` | Card files surfaced in the Design System tab. |
| `ui_kits/nubra-pro/` | Hi-fi recreation of the Nubra Pro web trading terminal with click-thru screens. |
| `fonts/` | (Substituted from Google Fonts — see Caveats.) |

## Brand context
**Nubra** is a low-cost, options-first trading platform for Indian retail traders. The brand reads as: technical, blue-coded (not the typical fintech green/black), confident with numbers, and quietly futuristic — the dark ambient gradient on the trading canvas is the signature visual.

Three product surfaces in the figma:
1. **Nubra Pro Web** — desktop trading terminal (watchlist + chart + order panel layout).
2. **Nubra Mobile** — phone app with bottom-sheet patterns and tab nav.
3. **Marketing/branding** — logo exploration page; mostly identity work.

## Content & copy fundamentals
- **Tone:** plain, confident, mildly technical. Sentence-case, never SHOUTY. Short verbs ("Buy", "Sell", "Confirm", "Add to watchlist").
- **Voice:** addresses the user as "you" ("Your holdings haven't been authorized to sell yet."). Never first-person plural marketing speak.
- **Casing:** **Sentence case** for all labels, headings, buttons. Tickers (RELIANCE, NIFTY 50) are uppercase — they are data, not copy. Section labels in documentation use uppercase short tags ("VARIANTS", "STATES", "ANATOMY") with a small chip background.
- **Numbers:** always tabular-aligned. Currency rendered as `₹1,293.65`. Percent in parens: `(0.95%)`. Deltas use a leading triangle `▲` / `▼` plus a sign and absolute value.
- **Emoji:** none. The product never uses emoji. Icons are line-icon SVGs only.
- **Microcopy examples (verbatim from figma):**
  - "Buttons allow users to take actions and make choices with a single tap."
  - "Use primary for standard actions, success for confirmations, error for destructive actions, and warning for caution prompts."
  - "Confirm, submit, buy, approve." / "Delete, cancel, reject, sell."
  - "Your holding haven't been authorized to sell yet."

## Visual foundations

### Colour
- **Brand blue** is the only branded hue. `rgb(0,120,206)` is the primary CTA / Nubra blue. `rgb(5,80,135)` is the deep ink for strong text on tinted surfaces. Soft variants (`#DFF0FF`, `#EFF7FF`) are the "soft" button background and chip fill.
- **Trading semantics are colour-coded:** green = up/buy/profit, red = down/sell/loss, gold (`rgb(177,102,16)`) = commodities/MCX. These greens and reds are **distinct from the brand**: greens cluster around `(81,176,50)` and `(124,207,94)`; reds around `(241,66,66)` and `(231,0,0)`.
- **Neutrals** are warm-cool blue-greys, anchored at `rgb(245,245,255)` (canvas), `rgb(248,250,252)` (surface), and `rgb(22,28,34)` (text). Borders are alpha-blended (`rgba(0,0,0,.08)` / `.12`) — never solid grey.
- **Dark mode** is the *default* for the live trading product. The canvas uses a unique multi-stop radial gradient — green→blue→near-black — that's the visual signature of Nubra. (`var(--dark-ambient)`).

### Type
- **Display & UI:** Inter (Medium 14/16 dominate). Headings are Inter Bold with negative letter-spacing.
- **Numerics & dense UI:** Geist (Medium 12–14) — used in the trading product for ticker rows, prices, table cells. Geist's tabular figures align cleanly in a watchlist.
- **Charts/PnL/timestamps:** JetBrains Mono Medium 12–16 — for code-like fixed-width data on charts (OHLC, intervals).
- Inter for everything user-facing in marketing/docs; Geist + JetBrains Mono inside the live product. We treat them as a coordinated trio.

### Spacing & layout
- **4px grid.** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 64 / 80`. Documentation pages use `80px` outer padding.
- Component sizes lock to **44 / 36 / 28 px** heights for large/medium/small (button, text-field, chip, etc.).
- Trading-product layout is a fixed **48px left rail** + flex columns. The watchlist column is ~280px; chart/details fills.

### Backgrounds & imagery
- **Light surfaces** are flat (`#F8FAFC`). No textures, no illustrations, no gradient backgrounds in components.
- **Dark surface** uses the ambient radial gradient (above). This is the *only* gradient in the system and only appears on the trading canvas.
- Logo explorations include a `Noise & Texture` PNG overlay that sits on a soft purple/blue tile — purely a brand experiment, not used in product.
- No hand-drawn illustrations. No photography in the component library.

### Borders, shadows, elevation
- **Borders** are 1px, alpha-blended. Default: `rgba(0,0,0,0.12)`. Subtle dividers: `rgba(0,0,0,0.08)`.
- **Elevation** is restrained: 1–2 layers only. Cards use `0 4px 12px rgba(22,28,34,.08)`. Modals use `0 12px 32px rgba(22,28,34,.12)`.
- **Focus rings** are 4px coloured glows in the semantic colour (blue/green/red/orange) — see `--elev-glow-*`.

### Radii
- `4 / 6 / 8 / 12 / 16` and `999px` (pill).
- **Buttons & chips are pills** (`999px`). Cards & inputs are `8–12px`. Documentation containers use a giant `70px` radius — that's a doc-page shell only, not a real product surface.

### States & motion
- **Hover** = darker fill within the same colour family (no opacity hacks). **Active** = even deeper shift. **Focus** = a 4px outer glow ring. **Disabled** = muted appearance, blocks pointer events. **Loading** = inline spinner replaces the icon, button stays the same width.
- **Transitions** are short and direct: `120–320ms` with an ease-out (`cubic-bezier(0.2, 0.7, 0.2, 1)`). No bouncy or rubberband easing — this is a trading platform; precision over playfulness.

### Iconography
- **Custom monoline icon set** drawn on a 20×20 grid with a 1.5–2px effective stroke, expressed as filled SVG `<path>` (most files are single-`<Union>` boolean shapes). 56+ icons in the figma `Components` page — ~30 are copied into `assets/icons/`.
- Categories: navigation (watchlist, portfolio, order, option-chain, strategies, scalper, market-depth, signals, ai), action (add, edit, delete, share, set-alert, manage, settings, more, drag-handle, clear-circle, close), interface (chevron-{up/down/left/right}, collapse-{left/right}), and content (add-list, add-note, add-image).
- Icons come in **default** and **filled** variants (e.g. `order` / `order-filled`) for selected nav states.
- **No emoji. No unicode glyph icons.** A "Signals" badge in the live UI shows a `✦` star — but that is itself a custom SVG (`assets/icons/signals.svg`).
- Logo: a stylized **N** mark (`assets/logo-mark.svg`). Wordmark uses a lowercase "nubra" set in a custom geometric — for now we render the wordmark in Inter Medium as a fallback.

## Caveats
- **Fonts:** all three brand fonts (Inter, Geist, JetBrains Mono) are loaded from Google Fonts. The figma also shows occasional Poppins, SF Pro and Manrope — these appear in `Experiments` only and are not part of the production system.
- **Wordmark:** the figma's `Logos-v2` page is a wordmark/symbol exploration grid (35+ candidates). No single mark is locked. We use `assets/logo-mark.svg` as the working mark and render "nubra" in Inter Medium.
- **Live screens** were reconstructed from the `Components/Navigation*` frames (a fully designed trading terminal with watchlist + chart + order panel) — fidelity is high but a few values (chart candle pixel placement, scrollbar styling) are inferred.
- **Tokens** are extracted from raw `rgb(...)` values in the .jsx; we mapped them to a sensible token model rather than mirroring the figma variable names 1:1 (which were not fully resolvable).

## Ask
This system is a strong first pass. Help me iterate on:
1. **Confirm the wordmark** — which of the `Logos-v2` candidates is the locked mark? I'll redo the logo card with the chosen one.
2. **Real font files** — if Nubra has licensed Inter/Geist/JetBrains Mono variable woff2s, drop them in `fonts/`. Otherwise the Google CDN substitution stands.
3. **Anything missing from the trading-terminal UI kit?** The current kit covers watchlist + chart + scalper + option chain. Tell me which screens to add next (orders, positions, holdings, settings).
