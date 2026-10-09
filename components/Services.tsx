import {
  ArrowRight,
  Check,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Share2,
  Target,
  type LucideIcon,
} from "lucide-react";
import { LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Service = {
  index: string;
  icon: LucideIcon;
  title: string;
  hook: string;
  bullets: string[];
  /** Honest proof line — verifiable fact only, no fabricated metrics. */
  proof: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    index: "SVC.01",
    icon: Globe,
    title: "Website Development",
    hook: "Your 24/7 salesman that never sleeps.",
    bullets: [
      "Mobile-first, tez-loading website — Google par aasaani se mile",
      "Call + WhatsApp buttons, Google Maps location built-in",
      "Aapke business ki bhasha me design — seedha, samajhne layak",
    ],
    proof: (
      <>
        Live client site:{" "}
        <a
          href="https://indiahotelmaynaguri.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-saffron underline decoration-brand-saffron/40 underline-offset-2 transition-colors hover:text-brand-saffron-bright"
        >
          indiahotelmaynaguri.com
        </a>
      </>
    ),
  },
  {
    index: "SVC.02",
    icon: Target,
    title: "Lead-Generation Pipelines",
    hook: "Strangers → enquiries on autopilot.",
    bullets: [
      "Google Maps se local business data — sahi prospects, sahi ilaka",
      "WhatsApp par enquiry capture + automatic follow-up",
      "Pipeline me har lead track — koi enquiry slip nahi karegi",
    ],
    proof: "Systems built on Google Maps + WhatsApp data",
  },
  {
    index: "SVC.03",
    icon: MessageCircle,
    title: "WhatsApp Automation",
    hook: "Every chat answered, every lead captured.",
    bullets: [
      "Auto-replies — raat ko bhi, chhutti par bhi turant jawab",
      "Catalog + quick replies — customer khud order/enquiry kare",
      "Broadcast flows — offers aur updates seedha customer ke phone par",
    ],
    proof: "Catalogs, auto-replies, broadcast flows",
  },
  {
    index: "SVC.04",
    icon: MapPin,
    title: "Google Business Profile",
    hook: "Own the map pack on NH-31.",
    bullets: [
      "Profile claim, verify aur poori tarah optimize",
      "Photos, reviews aur sahi categories — Google par bharosa",
      "Local search me dikho — jab customer 'near me' search kare",
    ],
    proof: "Setup + optimization included",
  },
  {
    index: "SVC.05",
    icon: Share2,
    title: "Social Media Systems",
    hook: "Content that compounds.",
    bullets: [
      "Facebook + Instagram ke liye consistent posting system",
      "Festival aur offer creatives — North Bengal style me",
      "Comments/messages ka regular management — page zinda rahe",
    ],
    proof: "Content engines, not viral promises",
  },
  {
    index: "SVC.06",
    icon: Megaphone,
    title: "Meta & Google Ads",
    hook: "Paid traffic with a pilot's discipline.",
    bullets: [
      "Facebook/Instagram + Google ads — sahi audience, sahi budget",
      "Lead forms — enquiry seedha WhatsApp par",
      "Chhote budget se start, data dekhkar scale — paisa ka hisaab saaf",
    ],
    proof: "Now onboarding pilot advertisers",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs tracking-[0.25em] text-brand-saffron">
            FIG. 02 — SERVICES
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-brand-mist sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Har service ka ek hi maksad — <strong className="text-brand-mist">dhanda badhana</strong>,
            sirf likes nahi. Neeche sab kuch proof ke saath hai; jo abhi pilot stage me hai,
            woh saaf-saaf likha hai.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.index}
              className={cn(
                "group flex flex-col rounded-2xl border border-white/10 bg-brand-navy/40 p-6",
                "transition-all duration-300 hover:-translate-y-1 hover:border-brand-saffron/40",
                "hover:bg-brand-navy/60"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-brand-saffron">
                  {s.index}
                </span>
                <s.icon className="size-6 text-brand-saffron" aria-hidden="true" />
              </div>

              <h3 className="font-display mt-4 text-xl font-bold text-brand-mist">
                {s.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-brand-mist/90">
                {s.hook}
              </p>

              <ul className="mt-4 flex-1 space-y-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-muted"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-brand-saffron"
                      aria-hidden="true"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Honest proof footer */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-mono text-xs leading-relaxed text-brand-slate">
                  <span className="mr-2 text-brand-saffron">PROOF</span>
                  {s.proof}
                </p>
              </div>

              <a
                href={LINKS.whatsappService(s.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-mist transition-colors hover:text-brand-saffron"
              >
                Discuss on WhatsApp
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
