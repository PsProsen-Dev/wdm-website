/**
 * Central site constants — single source of truth for contact details,
 * links, and brand strings. Update here; every section picks it up.
 *
 * Brand (locked 2026-10-09, premium redesign):
 *   Deep Navy #0F2D52 · Saffron Amber #F29318 · Warm Slate #7A8FA6
 */

export const SITE = {
  name: "We Digital Mitra",
  tagline: "Your Growth Our Responsibility",
  positioning: "1 human, 100% AI-operated",
  phoneDisplay: "+91 78724 23473",
  phoneHref: "tel:+917872423473",
  /** WhatsApp Business (primary contact channel) */
  whatsappNumber: "918942963453",
  whatsappDisplay: "+91 89429 63453",
  emails: ["wedigitalmitra@gmail.com", "contact@wedigitalmitra.com"],
  location: "Panbari Bazar, Maynaguri, Jalpaiguri, West Bengal",
  coverage: "8 districts of North Bengal — NH31/Dooars corridor",
  founded: "January 2024",
  founder: "Prosenjit Paul (aka Ps Prosen)",
} as const;

const wa = (text: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const LINKS = {
  whatsappGeneral: wa(
    "Namaste! Mujhe apne business ke liye digital marketing ke baare me baat karni hai."
  ),
  whatsappAudit: wa(
    "Namaste! Mujhe FREE 30-minute digital audit book karna hai apne business ke liye."
  ),
  whatsappService: (service: string) =>
    wa(`Namaste! Mujhe "${service}" service ke baare me jaankari chahiye.`),
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
