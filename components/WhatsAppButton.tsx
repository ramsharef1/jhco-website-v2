'use client';

import type { Locale } from "@/lib/i18n";

// NOTE: this is JHCO's verified Tarabot-project inquiries number (harvested
// from the live site's Tarabot contact page). No general/main WhatsApp
// business number was found during content harvesting — swap this for the
// organization's main WhatsApp line if one exists before launch.
const WHATSAPP_NUMBER = "962775519133";

const t = {
  ar: { label: "تواصل معنا عبر واتساب", message: "مرحباً، أود الاستفسار عن..." },
  en: { label: "Chat with us on WhatsApp", message: "Hello, I would like to ask about..." },
};

export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const d = t[locale];
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(d.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={d.label}
      className={`fixed bottom-24 md:bottom-6 ${locale === "ar" ? "left-6" : "right-6"} z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-luxury flex items-center justify-center hover:scale-110 transition duration-300`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1.01-2.4.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.3-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.63-.14.26.09 1.66.79 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      </svg>
    </a>
  );
}
