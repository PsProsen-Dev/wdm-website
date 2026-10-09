"use client";

import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/site";

/**
 * Floating WhatsApp button — always visible, bottom-right.
 * Keeps the recognisable WhatsApp green with a pulse ring,
 * framed for the dark mission-control theme.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={LINKS.whatsappGeneral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-ping fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25d366] text-white shadow-2xl shadow-black/50 transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
