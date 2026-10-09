import { User, Cpu, ArrowRight } from "lucide-react";
import { SITE, LINKS } from "@/lib/site";

/**
 * FIG. 05 — ABOUT
 * Founder story: short, honest, first-person voice. No invented
 * credentials, awards, or metrics — only verifiable facts.
 */

const SPEC_SHEET: [string, string][] = [
  ["BASED", "Maynaguri, IN"],
  ["FOUNDED", "Jan 2024"],
  ["MODEL", "1 human + AI"],
  ["FOCUS", "North Bengal local businesses"],
];

const PRINCIPLES = [
  {
    icon: User,
    title: "No account managers",
    text: "Jo kaam karega, wahi aapse baat karega. Bichauliye nahi — seedhi zimmedari, seedha jawab.",
  },
  {
    icon: Cpu,
    title: "AI does the heavy lifting",
    text: "Design, automation, follow-ups — AI systems bhaari kaam sambhalte hain, main har delivery personally check karta hoon.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — FIG. 05 */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs tracking-[0.25em] text-brand-saffron">
            FIG. 05 — ABOUT
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-mist sm:text-4xl">
            One human. <span className="text-brand-saffron">A hundred systems.</span>
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Founder voice */}
          <div>
            <p className="font-display text-lg leading-relaxed text-brand-mist sm:text-xl">
              &ldquo;I did not learn marketing in a classroom. I learned it by
              building systems that run businesses.&rdquo;
            </p>
            <p className="mt-3 text-sm text-brand-slate">
              — {SITE.founder}, Founder
            </p>

            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              Main <strong className="text-brand-mist">Prosenjit Paul</strong> hoon —
              Maynaguri se ek self-taught builder. <strong className="text-brand-mist">January 2024</strong> me
              maine We Digital Mitra isliye shuru kiya kyunki North Bengal ke chhote
              businesses ko bhi wahi digital power milni chahiye jo ab tak sirf bade
              sheheron tak seemit thi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              &ldquo;1 human, 100% AI-operated&rdquo; ka matlab simple hai —{" "}
              <strong className="text-brand-mist">koi bloated team nahi, koi account
              manager nahi</strong>. Aap seedha builder se baat karte ho, aur execution
              AI systems sambhalte hain. Overhead kam, isliye senior-quality kaam
              imaandaar price par.
            </p>

            <div className="mt-8 space-y-5">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-saffron">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-mist">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={LINKS.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-saffron transition-colors hover:text-brand-saffron-bright"
            >
              Seedha founder se baat karein <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Founder card + spec sheet */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-navy">
              <div className="dot-grid absolute inset-0" aria-hidden="true" />
              <div className="relative p-8 text-center sm:p-10">
                <div className="font-display mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-saffron text-4xl font-extrabold text-brand-navy-deep shadow-lg shadow-brand-saffron/25">
                  P
                </div>
                <h3 className="font-display mt-6 text-2xl font-extrabold text-brand-mist">
                  Prosenjit Paul
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-brand-saffron">
                  aka Ps Prosen
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Founder, {SITE.name}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-saffron/40 bg-brand-saffron/10 px-4 py-2">
                  <span className="status-dot inline-block size-2 rounded-full bg-brand-saffron" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold tracking-[0.15em] text-brand-saffron uppercase">
                    {SITE.positioning}
                  </span>
                </div>
              </div>
            </div>

            {/* Spec sheet */}
            <dl className="font-mono mt-4 overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-deep">
              {SPEC_SHEET.map(([label, value], i) => (
                <div
                  key={label}
                  className={
                    "flex items-center justify-between px-6 py-3.5 text-sm" +
                    (i < SPEC_SHEET.length - 1 ? " border-b border-white/10" : "")
                  }
                >
                  <dt className="tracking-[0.2em] text-brand-slate">{label}</dt>
                  <dd className="font-bold text-brand-mist">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
