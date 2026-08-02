'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Header({ locale = "en" as Locale }: { locale?: Locale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#fffbf8', borderBottom: '1px solid #e8e4db', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
      {/* Gold accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #d4af37, #e8c547, #d4af37)' }}></div>

      <nav style={{ maxWidth: '1500px', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        {/* Logo Section */}
        <Link href={base} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0a1428' }}>JHCO</div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'none', border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer', color: '#0a1428' }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Language switcher */}
          <Link
            href={switchHref}
            style={{ padding: '8px 16px', border: '1px solid rgba(10,20,40,0.3)', color: '#0a1428', borderRadius: '4px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d4af37'; e.currentTarget.style.color = '#a89830'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,20,40,0.3)'; e.currentTarget.style.color = '#0a1428'; }}
          >
            {locale === "ar" ? "EN" : "عربي"}
          </Link>

          {/* Donate Button */}
          <Link
            href={`${base}/get-involved/donate`}
            style={{ padding: '12px 32px', backgroundColor: '#a8312f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b2f2d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a8312f'}
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
