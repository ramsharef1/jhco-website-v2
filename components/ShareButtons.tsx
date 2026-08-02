'use client';

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const t = {
  ar: { label: "شارك" },
  en: { label: "Share" },
};

export default function ShareButtons({ title, locale }: { title: string; locale: Locale }) {
  const d = t[locale];
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1.01-2.4.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.3-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.63-.14.26.09 1.66.79 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-10.5 6.4L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l10.5 6.401 10.5-6.401Z" />,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-[#a89830] text-xs font-semibold tracking-[1px] uppercase">{d.label}</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${d.label} — ${l.name}`}
          className="w-9 h-9 rounded-full border border-[#e8e4db] flex items-center justify-center text-[#0a1428] hover:border-[#d4af37] hover:text-[#a89830] transition duration-300"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {l.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
