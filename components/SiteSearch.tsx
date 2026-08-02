'use client';

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { getSearchIndex } from "@/lib/searchIndex";
import type { Locale } from "@/lib/i18n";

const t = {
  ar: { open: "بحث", placeholder: "ابحث في الموقع...", noResults: "لا توجد نتائج", close: "إغلاق" },
  en: { open: "Search", placeholder: "Search the site...", noResults: "No results found", close: "Close" },
};

export default function SiteSearch({ locale }: { locale: Locale }) {
  const d = t[locale];
  const ar = locale === "ar";
  const base = `/${locale}`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(() => getSearchIndex(), []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((item) => {
        const title = (ar ? item.titleAr : item.title).toLowerCase();
        const desc = (ar ? item.descriptionAr : item.description).toLowerCase();
        return title.includes(q) || desc.includes(q);
      })
      .slice(0, 8);
  }, [query, index, ar]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={d.open}
        className="w-10 h-10 flex items-center justify-center text-[#0a1428] hover:text-[#a89830] transition duration-300"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-[#0a1428]/60 backdrop-blur-sm flex items-start justify-center pt-24 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            dir={ar ? "rtl" : "ltr"}
            className="bg-white rounded-md shadow-luxury w-full max-w-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#e8e4db] px-6 py-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a8a8a8] shrink-0" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={d.placeholder}
                className="flex-1 outline-none text-[#0a1428] placeholder:text-[#a8a8a8]"
              />
              <button onClick={() => setOpen(false)} aria-label={d.close} className="text-[#a8a8a8] hover:text-[#0a1428] transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {query.trim() && (
              <div className="max-h-96 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-[#a8a8a8] text-sm text-center py-10">{d.noResults}</p>
                ) : (
                  results.map((item, i) => (
                    <Link
                      key={i}
                      href={`${base}${item.href}`}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-4 border-b border-[#f5f0e8] last:border-0 hover:bg-[#fdf9ef] transition duration-200"
                    >
                      <p className="text-[#0a1428] font-semibold mb-1">{ar ? item.titleAr : item.title}</p>
                      <p className="text-[#6b6b6b] text-sm mb-0 line-clamp-1">{ar ? item.descriptionAr : item.description}</p>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
