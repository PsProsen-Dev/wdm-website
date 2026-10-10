import { Phone, MessageCircle, Mail, MapPin, ClipboardCheck } from "lucide-react";
import { SITE, LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-xs tracking-[0.25em] text-brand-saffron">
            FIG. 06 — CONTACT
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-mist sm:text-5xl">
            Start the conversation.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Call, message, or drop an email — the first conversation is always
            free. Your growth, our responsibility.
          </p>
        </div>

        {/* Mission-control contact panel */}
        <div className="dot-grid relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-brand-navy p-6 sm:p-10 lg:p-12">
          {/* corner glow */}
          <div className="pointer-events-none absolute -top-24 right-[8%] h-64 w-64 rounded-full bg-brand-saffron/15 blur-3xl" />

          <div className="relative">
            {/* Status block */}
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6 font-mono text-[11px] tracking-[0.18em] text-brand-slate sm:flex-row sm:items-center sm:justify-between sm:text-xs">
              <span className="inline-flex items-center gap-2.5 text-brand-mist">
                <span className="status-dot inline-block size-2 rounded-full bg-brand-saffron" />
                STATUS: OPEN FOR NEW CLIENTS
              </span>
              <span>RESPONSE: USUALLY WITHIN A FEW HOURS</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden />
                BASED: PANBARI BAZAR, MAYNAGURI (IST)
              </span>
            </div>

            {/* Primary CTA stack */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={LINKS.whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-2xl bg-brand-saffron px-8 py-5 text-brand-navy-deep shadow-xl shadow-brand-saffron/25 transition-all hover:-translate-y-0.5 hover:shadow-brand-saffron/40"
              >
                <MessageCircle className="size-6 shrink-0" aria-hidden />
                <span className="text-left leading-tight">
                  <span className="block font-display text-lg font-extrabold">
                    Chat on WhatsApp
                  </span>
                  <span className="block font-mono text-xs font-semibold tracking-wider opacity-80">
                    {SITE.whatsappDisplay}
                  </span>
                </span>
              </a>
              <a
                href={LINKS.whatsappAudit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/20 px-8 py-5 text-brand-mist transition-all hover:-translate-y-0.5 hover:border-brand-saffron/60 hover:bg-white/5"
              >
                <ClipboardCheck className="size-6 shrink-0 text-brand-saffron" aria-hidden />
                <span className="text-left leading-tight">
                  <span className="block font-display text-lg font-bold">
                    Book free 30-min audit
                  </span>
                  <span className="block text-xs text-brand-muted">
                    Zero cost, zero pressure
                  </span>
                </span>
              </a>
            </div>

            {/* Direct contact rows */}
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={SITE.phoneHref}
                className={cn(
                  "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5",
                  "transition-all hover:-translate-y-0.5 hover:border-brand-saffron/40 hover:bg-white/[0.06]"
                )}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-saffron/15 text-brand-saffron">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <dt className="font-mono text-[10px] tracking-[0.22em] text-brand-slate">
                    PHONE
                  </dt>
                  <dd className="truncate font-display text-sm font-bold text-brand-mist">
                    {SITE.phoneDisplay}
                  </dd>
                </span>
              </a>
              <a
                href={`mailto:${SITE.emails[0]}`}
                className={cn(
                  "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5",
                  "transition-all hover:-translate-y-0.5 hover:border-brand-saffron/40 hover:bg-white/[0.06]"
                )}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-saffron/15 text-brand-saffron">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <dt className="font-mono text-[10px] tracking-[0.22em] text-brand-slate">
                    EMAIL
                  </dt>
                  <dd className="truncate font-display text-sm font-bold text-brand-mist">
                    {SITE.emails[0]}
                  </dd>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-saffron/15 text-brand-saffron">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <dt className="font-mono text-[10px] tracking-[0.22em] text-brand-slate">
                    LOCATION
                  </dt>
                  <dd className="truncate font-display text-sm font-bold text-brand-mist">
                    {SITE.location}
                  </dd>
                </span>
              </div>
            </dl>
          </div>
        </div>

        {/* Google Maps embed — WDM office: Panbari Bazar, Maynaguri 735219 */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="We Digital Mitra (WDM) on Google Maps"
            src="https://www.google.com/maps?q=26.6719531,88.8455111&z=16&output=embed"
            className="h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href="https://www.google.com/maps?q=26.6719531,88.8455111"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 rounded-xl bg-brand-saffron px-4 py-2 font-display text-sm font-bold text-brand-navy-deep shadow-lg transition-all hover:-translate-y-0.5"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
