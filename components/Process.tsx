import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Step = {
  num: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "FREE AUDIT",
    text: "30-minute WhatsApp audit of your current online presence. No pitch, just findings.",
    cta: { label: "Book the free audit", href: LINKS.whatsappAudit },
  },
  {
    num: "02",
    title: "BLUEPRINT",
    text: "You get a one-page plan: what to build, what it costs, when it ships.",
  },
  {
    num: "03",
    title: "BUILD & LAUNCH",
    text: "Design, build, test, launch — you approve every step on WhatsApp.",
  },
  {
    num: "04",
    title: "GROWTH LOOP",
    text: "We measure, tune and compound. Monthly check-ins, honest reports.",
  },
];

export function Process() {
  return (
    <section id="process" className="dot-grid relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs tracking-[0.25em] text-brand-saffron">
            FIG. 03 — PROCESS
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-mist sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Koi lamba sales call nahi, koi gol-maal nahi. Chaar seedhe steps —
            pehla step free hai, aur aakhri step kabhi khatam nahi hota.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative mt-14">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-white/10 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-8 left-[12%] hidden h-px w-[26%] bg-gradient-to-r from-brand-saffron to-brand-saffron/0 md:block"
          />

          <ol className="grid gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.num} className="relative">
                <div className="relative inline-flex">
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -left-1 size-2.5 rounded-full bg-brand-saffron status-dot"
                  />
                  <span className="font-mono text-5xl font-bold tracking-tight text-brand-saffron">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-bold tracking-wide text-brand-mist">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {step.text}
                </p>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-5 inline-flex items-center gap-1.5 rounded-lg border border-brand-saffron/40",
                      "px-4 py-2.5 text-sm font-bold text-brand-saffron",
                      "transition-all hover:bg-brand-saffron hover:text-ink"
                    )}
                  >
                    {step.cta.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
