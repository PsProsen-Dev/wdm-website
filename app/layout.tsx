import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline} | AI-Powered Digital Marketing Agency, North Bengal`,
  description:
    "We Digital Mitra — 1 human, 100% AI-operated digital marketing agency. Website development, lead-generation pipelines aur WhatsApp automation, North Bengal ke local businesses ke liye. Your Growth, Our Responsibility.",
  keywords: [
    "digital marketing North Bengal",
    "website development Jalpaiguri",
    "social media marketing Maynaguri",
    "Google Business Profile North Bengal",
    "WhatsApp automation",
    "lead generation North Bengal",
    "We Digital Mitra",
  ],
  authors: [{ name: "Prosenjit Paul (Ps Prosen)" }],
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "1 human, 100% AI-operated agency — websites, lead pipelines aur WhatsApp automation, North Bengal ke local businesses ke liye.",
    siteName: SITE.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "1 human, 100% AI-operated agency — websites, lead pipelines aur WhatsApp automation.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

// LocalBusiness structured data — helps Google understand the agency
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  slogan: SITE.tagline,
  telephone: SITE.phoneDisplay,
  email: SITE.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Panbari Bazar, Maynaguri",
    addressLocality: "Jalpaiguri",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: "North Bengal — NH31/Dooars corridor (8 districts)",
  foundingDate: "2024-01",
  founder: {
    "@type": "Person",
    name: "Prosenjit Paul",
    alternateName: "Ps Prosen",
  },
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
