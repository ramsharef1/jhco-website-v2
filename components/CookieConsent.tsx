'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const t = {
  ar: {
    text: "يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتكم وقياس الزيارات.",
    learnMore: "سياسة الخصوصية",
    accept: "موافق",
    decline: "رفض",
  },
  en: {
    text: "This site uses cookies to improve your experience and measure visits.",
    learnMore: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
  },
};

export const COOKIE_CONSENT_KEY = "jhco_cookie_consent";
export const COOKIE_CONSENT_EVENT = "jhco-cookie-consent-changed";

export default function CookieConsent({ locale }: { locale: Locale }) {
  const d = t[locale];
  const base = `/${locale}`;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1428] border-t border-[#d4af37]/40 shadow-luxury"
    >
      <div className="container-lg py-5 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-gray-300 text-sm mb-0 flex-1 text-center sm:text-start">
          {d.text}{" "}
          <Link href={`${base}/privacy-policy`} className="text-[#d4af37] hover:text-[#e8c547] underline underline-offset-2">
            {d.learnMore}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => respond("declined")}
            className="px-6 py-2.5 border border-[#d4af37]/40 text-gray-300 text-xs font-semibold uppercase tracking-[1px] rounded-sm hover:border-[#d4af37] transition duration-300"
          >
            {d.decline}
          </button>
          <button
            onClick={() => respond("accepted")}
            className="px-6 py-2.5 bg-[#d4af37] text-[#0a1428] text-xs font-bold uppercase tracking-[1px] rounded-sm hover:bg-[#e8c547] transition duration-300"
          >
            {d.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
