import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE, LINKS, NAV_LINKS } from "@/lib/site";

/** Footer — mission-control dark, honest copy only. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-muted">
              {SITE.tagline} — {SITE.positioning} agency for local businesses in the{" "}
              {SITE.coverage}.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-brand-saffron">
              EXPLORE
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-saffron"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-brand-saffron">
              CONTACT
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-saffron"
                >
                  <Phone className="size-4 shrink-0 text-brand-saffron" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-saffron"
                >
                  <MessageCircle className="size-4 shrink-0 text-brand-saffron" />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              {SITE.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-saffron"
                  >
                    <Mail className="size-4 shrink-0 text-brand-saffron" />
                    {e}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-saffron" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-brand-slate sm:flex-row">
          <p>© 2026 {SITE.name} · Built &amp; operated by 1 human + AI systems</p>
          <p className="font-mono tracking-[0.2em]">{SITE.tagline.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
}
