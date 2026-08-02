'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: { text: string; href: string };
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const base = `/${locale}`;
  const withLocale = (href: string) =>
    href.startsWith("/") && !href.startsWith(`${base}/`) && href !== base ? `${base}${href}` : href;

  return (
    <section className="relative bg-gradient-to-br from-[#f9f7f4] via-[#fafaf8] to-[#f5f1e6] overflow-hidden">
      <div className="container-lg text-center py-24 md:py-32 relative z-10">
        {/* Ornament */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-[#d4af37]"></div>
            <span className="text-[#d4af37] text-base">◆</span>
            <div className="w-10 h-px bg-[#d4af37]"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15] text-[#0a1428]">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-[#3d3d3d] mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        {cta && (
          <Link
            href={withLocale(cta.href)}
            className="inline-block px-14 py-4 bg-[#0a1428] text-white font-bold rounded-sm hover:bg-[#142850] transition duration-400 uppercase tracking-[1px] text-sm shadow-elegant hover:shadow-premium"
          >
            {cta.text}
          </Link>
        )}
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"></div>
    </section>
  );
}
