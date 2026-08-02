'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import SiteSearch from "@/components/SiteSearch";
import MegaMenu from "@/components/MegaMenu";

export default function Header({ locale = "en" as Locale }: { locale?: Locale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const t = dict.nav;
  const base = `/${locale}`;

  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header className="bg-[#fffbf8] sticky top-0 z-50 shadow-elegant border-b border-[#e8e4db]">
      {/* Premium top accent */}
      <div className="h-1 bg-gradient-to-r from-[#d4af37] via-[#e8c547] to-[#d4af37]"></div>

      <nav className="container-lg flex items-center justify-between py-5 gap-4">
        {/* Logo Section */}
        <Link href={base} className="flex items-center group shrink-0">
          <Image
            src="/media/logo.webp"
            alt={locale === "ar" ? "الهيئة الخيرية الأردنية الهاشمية" : "Jordan Hashemite Charity Organization"}
            width={497}
            height={134}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#0a1428] text-3xl hover:text-[#d4af37] transition duration-300"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <div className="flex items-center gap-4">
          <SiteSearch locale={locale} />

          {/* Language switcher */}
          <Link
            href={switchHref}
            className="px-4 py-2 border border-[#0a1428]/30 text-[#0a1428] rounded-md text-sm font-semibold hover:border-[#d4af37] hover:text-[#a89830] transition duration-300"
            style={locale === "en" ? { fontFamily: "var(--font-amiri)" } : undefined}
          >
            {locale === "ar" ? "EN" : "عربي"}
          </Link>

          {/* Donate Button */}
          <Link
            href={`${base}/get-involved/donate`}
            className="hidden md:inline-block px-10 py-3.5 bg-[#a8312f] text-white font-bold rounded-md shadow-premium hover:bg-[#8b2f2d] transition duration-400 text-xs tracking-[1px] uppercase hover:shadow-luxury"
          >
            {t.donate}
          </Link>
        </div>
      </nav>

      {/* Mega Menu (Hidden on mobile, shown on desktop) */}
      <div className="hidden md:block">
        <MegaMenu locale={locale} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fffbf8] border-t border-[#e8e4db] max-h-[80vh] overflow-y-auto">
          <div className="container-lg py-6 space-y-4">
            {/* Primary Navigation Links */}
            <div className="grid grid-cols-2 gap-3">
              <Link href={`${base}/programs/gaza-aid`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? '🚨 البرامج' : '🚨 Programs'}
              </Link>
              <Link href={`${base}/get-involved/donate`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? '💝 تبرع' : '💝 Donate'}
              </Link>
              <Link href={`${base}/get-involved/volunteer`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? '🤝 تطوع' : '🤝 Volunteer'}
              </Link>
              <Link href={`${base}/about/mission`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? 'ℹ️ عننا' : 'ℹ️ About'}
              </Link>
              <Link href={`${base}/news`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? '📰 أخبار' : '📰 News'}
              </Link>
              <Link href={`${base}/contact`} className="px-4 py-3 bg-[#f3f4f6] rounded-lg text-sm font-semibold text-[#0a1428] hover:bg-[#d4af37] hover:text-white transition">
                {locale === 'ar' ? '📞 تواصل' : '📞 Contact'}
              </Link>
            </div>

            {/* Government & Transparency */}
            <div className="border-t border-[#e8e4db] pt-4 mt-4">
              <h3 className="text-xs font-bold text-[#0a1428] mb-3 uppercase tracking-wider">
                {locale === 'ar' ? '👑 الحكومية والشفافية' : '👑 Government & Transparency'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href={`${base}/media-center`} className="px-4 py-2 bg-purple-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-purple-200 transition">
                  {locale === 'ar' ? '📰 الإعلام' : '📰 Media'}
                </Link>
                <Link href={`${base}/reports`} className="px-4 py-2 bg-blue-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-blue-200 transition">
                  {locale === 'ar' ? '📊 التقارير' : '📊 Reports'}
                </Link>
                <Link href={`${base}/partnerships`} className="px-4 py-2 bg-green-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-green-200 transition">
                  {locale === 'ar' ? '🤝 الشراكات' : '🤝 Partners'}
                </Link>
                <Link href={`${base}/operations`} className="px-4 py-2 bg-yellow-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-yellow-200 transition">
                  {locale === 'ar' ? '🌍 العمليات' : '🌍 Operations'}
                </Link>
                <Link href={`${base}/compliance`} className="px-4 py-2 bg-red-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-red-200 transition">
                  {locale === 'ar' ? '⚖️ الامتثال' : '⚖️ Compliance'}
                </Link>
                <Link href={`${base}/announcements`} className="px-4 py-2 bg-amber-50 rounded-lg text-xs font-semibold text-[#0a1428] hover:bg-amber-200 transition">
                  {locale === 'ar' ? '👑 الإعلانات' : '👑 Announce'}
                </Link>
              </div>
            </div>

            {/* Mobile Donate Button */}
            <div className="border-t border-[#e8e4db] pt-4 mt-4">
              <Link
                href={`${base}/get-involved/donate`}
                className="block w-full px-6 py-3.5 bg-[#a8312f] text-white font-bold text-center hover:bg-[#8b2f2d] transition duration-400 rounded-md uppercase tracking-[1px] text-sm shadow-premium hover:shadow-luxury"
              >
                {t.donateNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
