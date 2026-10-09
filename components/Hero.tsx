import { MessageCircle, ArrowRight } from "lucide-react";
import { SITE, LINKS } from "@/lib/site";

const TICKER_ITEMS = [
  "WEBSITE DEVELOPMENT",
  "LEAD PIPELINES",
  "WHATSAPP AUTOMATION",
  "GOOGLE BUSINESS PROFILE",
  "SOCIAL MEDIA SYSTEMS",
] as const;

/**
 * Hero — mission-control intro. Dark-first, no fabricated metrics,
 * no testimonial/stats grid. Copy is English per the redesign brief.
 */
export function Hero() {
  return (
    <section id="top" className="blueprint-grid relative overflow-hidden bg-ink">
      {/* saffron glow accents (signal only — never large fills) */}
      <div className="pointer-events-none absolute -top-40 right-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-saffron/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-8%] h-96 w-96 rounded-full bg-brand-saffron/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
        {/* Kicker — mono status line */}
        <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] text-brand-saffron">
          <span className="status-dot inline-block size-2 rounded-full bg-brand-saffron" />
          SYSTEMS ONLINE — NORTH BENGAL
        </div>

        {/* H1 */}
        <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-brand-mist sm:text-6xl lg:text-7xl">
          Your business, on autopilot.
        </h1>

        {/* Terminal identity line */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-brand-navy-deep/80 px-4 py-2.5 font-mono text-sm">
          <span className="text-brand-saffron">$</span>
          <span className="text-brand-mist">whoami</span>
          <span className="text-brand-slate">→</span>
          <span className="text-brand-mist">growth-engine</span>
          <span className="terminal-caret inline-block h-4 w-2 bg-brand-saffron" aria-hidden="true" />
        </div>

        {/* Value prop */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
          An AI-powered growth agency run by {SITE.founder} —{" "}
          <span className="text-brand-mist">{SITE.positioning}</span>, built for local
          businesses. Websites, lead pipelines, and automation that quietly bring
          customers in while you run the shop.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={LINKS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-brand-saffron px-8 py-4 text-base font-bold text-brand-navy-deep shadow-xl shadow-brand-saffron/20 transition-all hover:bg-brand-saffron-deep hover:-translate-y-0.5 sm:w-auto"
          >
            <MessageCircle className="size-5" />
            Chat on WhatsApp
          </a>
          <a
            href="#process"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-brand-mist transition-all hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
          >
            See how it works
            <ArrowRight className="size-5" />
          </a>
        </div>

        {/* Status strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.2em] text-brand-slate">
          <span className="flex items-center gap-2">
            <span className="status-dot inline-block size-1.5 rounded-full bg-brand-saffron" />
            OPEN FOR NEW CLIENTS
          </span>
          <span className="hidden sm:inline">/</span>
          <span>PANBARI BAZAR, MAYNAGURI</span>
          <span className="hidden sm:inline">/</span>
          <span>REPLIES WITHIN HOURS</span>
        </div>
      </div>

      {/* Services marquee ticker */}
      <div className="relative border-y border-white/10 bg-brand-navy-deep/60 py-4 backdrop-blur">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                aria-hidden={i >= TICKER_ITEMS.length}
                className="flex items-center gap-8 font-mono text-xs tracking-[0.3em] text-brand-slate"
              >
                {item}
                <span className="text-brand-saffron">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
