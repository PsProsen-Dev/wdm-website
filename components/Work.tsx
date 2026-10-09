import {
  Globe,
  MessageCircle,
  MapPin,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { SITE, LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * FIG. 04 — WORK
 * One featured case study (the only verifiable client at redesign time).
 * Honesty rule: describe work DELIVERED, never results invented.
 */

type Deliverable = {
  icon: React.ElementType;
  title: string;
  detail: string;
  link?: string;
  linkLabel?: string;
};

const DELIVERABLES: Deliverable[] = [
  {
    icon: Globe,
    title: "Website — designed & launched",
    detail:
      "Poora hotel ab online hai — rooms, tariffs, menu, gallery, location aur direct booking buttons. Mobile-first, tez loading.",
    link: "https://indiahotelmaynaguri.com",
    linkLabel: "indiahotelmaynaguri.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business + catalog",
    detail:
      "Business profile, auto-replies, aur room/menu catalog — taaki enquiry aate hi turant jawab mile, raat ko bhi.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile — claimed & optimized",
    detail:
      "Google Maps par listing claim ki, photos aur details update kiye — 'hotel near Maynaguri' search me dikhne layak.",
  },
  {
    icon: BarChart3,
    title: "GA4 + Search Console wired",
    detail:
      "Visitor tracking aur Google indexing dono connected — har visit ka data ab measurable hai.",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — FIG. 04 */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs tracking-[0.25em] text-brand-saffron">
            FIG. 04 — WORK
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-mist sm:text-4xl">
            Proof, <span className="text-brand-saffron">not promises</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Slides me bade daave karna aasaan hai. Hum seedha kaam dikhate hain —
            jo deliver hua, wahi yahan hai. Numbers invent nahi karte, kaam bataate hain.
          </p>
        </div>

        {/* Featured case-study card */}
        <article className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-deep">
          {/* Card header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-brand-slate">
                CASE STUDY — 001
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-brand-mist sm:text-2xl">
                India Hotel &amp; Restaurant
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-muted">
                <MapPin className="size-4 shrink-0 text-brand-slate" />
                Maynaguri, Jalpaiguri — NH-27 highway
              </p>
            </div>
            <span className="font-mono inline-flex items-center gap-2 rounded-full border border-brand-saffron/40 bg-brand-saffron/10 px-4 py-2 text-xs font-bold tracking-[0.15em] text-brand-saffron uppercase">
              <span className="status-dot inline-block size-2 rounded-full bg-brand-saffron" aria-hidden="true" />
              Active client
            </span>
          </div>

          {/* Hook */}
          <div className="border-b border-white/10 px-6 py-6 sm:px-8">
            <p className="font-display text-lg leading-relaxed text-brand-mist sm:text-xl">
              &ldquo;A highway hotel that was invisible online — now it answers before
              the customer asks.&rdquo;
            </p>
          </div>

          {/* Deliverables */}
          <div className="px-6 py-6 sm:px-8">
            <p className="font-mono text-xs tracking-[0.25em] text-brand-slate">
              DELIVERED
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.title}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-saffron">
                    <d.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-brand-mist">
                      {d.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                      {d.detail}
                    </p>
                    {d.link && (
                      <a
                        href={d.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-saffron transition-colors hover:text-brand-saffron-bright"
                      >
                        {d.linkLabel ?? d.link}
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Honest pipeline strip */}
        <div
          className={cn(
            "mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl",
            "border border-white/10 bg-brand-navy px-6 py-6 sm:flex-row sm:items-center sm:px-8"
          )}
        >
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-brand-slate">
              PIPELINE
            </p>
            <p className="font-display mt-2 text-lg font-bold text-brand-mist">
              Currently onboarding pilot clients across North Bengal.
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Limited slots — {SITE.positioning} matlab har project founder ki
              personal attention ke saath.
            </p>
          </div>
          <a
            href={LINKS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-saffron px-6 py-3.5 text-sm font-bold text-brand-navy-deep shadow-lg shadow-brand-saffron/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Your business could be next
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
