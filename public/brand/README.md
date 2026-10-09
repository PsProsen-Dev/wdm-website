# public/brand/ — Brand assets (FINAL, activated 2026-09-25)

Real logo/identity artwork from the ChatGPT logo sessions (13 files retrieved
2026-09-25 — see `workspace/brand/wdm/final/SELECTION.md`).

## Files

| File                   | Use                                                        |
|------------------------|------------------------------------------------------------|
| `logo-mark.png`        | W-D-M monogram (navy/orange), transparent bg — **light** backgrounds |
| `logo-mark-dark.png`   | App-icon version (white/orange monogram on navy rounded square, transparent corners) — **dark** backgrounds |
| `logo.png`             | Full stacked lockup (monogram + "We Digital Mitra" wordmark), transparent bg — docs / OG / about |
| `favicon.ico`          | Browser tab icon (multi-size 16/32/48)                     |
| `favicon-16x16.png`    | Tab icon, small                                            |
| `favicon-32x32.png`    | Tab icon, standard                                         |
| `apple-touch-icon.png` | iOS home-screen icon (180x180)                              |

## Why PNG, not SVG

The mark is AI-generated raster artwork with gradients. Hand-tracing it into
SVG would fabricate geometry, so the real pixels ship instead. `next/image`
serves them responsively; nothing else in the codebase needs to change —
every surface reads through `BrandLogo`.

## Activation (done 2026-09-25)

- `components/BrandLogo.tsx` → `FINAL_LOGO.ready = true`
- `app/layout.tsx` → `metadata.icons` points at `/brand/favicon.ico` (+ PNG sizes, Apple touch icon)
