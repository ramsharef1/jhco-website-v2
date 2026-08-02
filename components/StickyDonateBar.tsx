'use client';

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const t = {
  ar: { cta: "قدّم تبرعاً" },
  en: { cta: "Donate Now" },
};

export default function StickyDonateBar({ locale }: { locale: Locale }) {
  const d = t[locale];
  const base = `/${locale}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#a8312f] shadow-luxury">
      <Link
        href={`${base}/get-involved/donate`}
        className="block w-full py-4 text-center text-white font-bold text-sm uppercase tracking-[2px]"
      >
        {d.cta}
      </Link>
    </div>
  );
}
