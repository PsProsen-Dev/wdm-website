"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE, LINKS, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Fixed top nav — mission-control dark. Gains shadow on scroll. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md transition-shadow",
        scrolled && "shadow-lg shadow-black/40"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label={SITE.name}>
          <BrandLogo variant="light" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.18em] text-brand-muted transition-colors hover:text-brand-saffron"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={LINKS.whatsappGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center gap-2 rounded-xl bg-brand-saffron px-4 text-sm font-bold text-brand-navy-deep shadow-lg shadow-brand-saffron/20 transition-all hover:bg-brand-saffron-deep hover:-translate-y-0.5 md:inline-flex"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-mist hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 font-mono text-xs tracking-[0.18em] text-brand-muted hover:bg-white/10 hover:text-brand-saffron"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href={LINKS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-saffron text-sm font-bold text-brand-navy-deep"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
