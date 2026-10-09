import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/**
 * FINAL brand identity — activated 2026-09-25.
 *
 * Assets are the ChatGPT-generated WDM identity (13 files retrieved
 * 2026-09-25, see workspace/brand/wdm/final/SELECTION.md):
 *   - logo-mark.png      — W-D-M interlocked monogram (navy/orange) on a
 *                          transparent background, for LIGHT backgrounds.
 *   - logo-mark-dark.png — app-icon version (white/orange monogram on a navy
 *                          rounded square, transparent corners), for DARK
 *                          backgrounds (navbar + footer are dark navy).
 *   - logo.png           — full stacked lockup (monogram + "We Digital Mitra"
 *                          wordmark), transparent bg — for docs/OG/about use.
 *
 * PNG, not SVG, deliberately: the mark is AI-generated raster artwork with
 * gradients — hand-tracing it into SVG would fabricate geometry, so the real
 * pixels ship instead. The text wordmark beside the mark stays set in the
 * brand display font (unchanged from the interim design).
 */
const FINAL_LOGO = {
  ready: true,
  // variant "dark"  = rendered on light backgrounds -> navy/orange mark
  darkSrc: "/brand/logo-mark.png",
  darkWidth: 1193,
  darkHeight: 818,
  // variant "light" = rendered on dark backgrounds -> white-on-navy app icon
  lightSrc: "/brand/logo-mark-dark.png",
  lightWidth: 167,
  lightHeight: 138,
};

export function BrandLogo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light"; // dark = for light backgrounds, light = for dark backgrounds
  className?: string;
}) {
  const isDark = variant === "dark";
  const src = isDark ? FINAL_LOGO.darkSrc : FINAL_LOGO.lightSrc;
  const width = isDark ? FINAL_LOGO.darkWidth : FINAL_LOGO.lightWidth;
  const height = isDark ? FINAL_LOGO.darkHeight : FINAL_LOGO.lightHeight;
  const textColor = isDark ? "text-brand-navy" : "text-white";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={src}
        alt={`${SITE.name} logo`}
        width={width}
        height={height}
        className="h-9 w-auto"
        priority
      />
      <span className="leading-tight">
        <span
          className={cn("font-display block text-[17px] font-extrabold tracking-tight", textColor)}
        >
          We Digital Mitra
        </span>
        <span className="block text-[10px] font-medium tracking-[0.14em] text-brand-slate uppercase">
          Your Growth, Our Responsibility
        </span>
      </span>
    </span>
  );
}
