'use client';

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  icon?: string;
  footer?: React.ReactNode;
}

export default function Card({ title, description, image, link, footer }: CardProps) {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const base = `/${locale}`;
  const localizedLink =
    link && link.startsWith("/") && !link.startsWith(`${base}/`) && link !== base
      ? `${base}${link}`
      : link;

  const content = (
    <div className="bg-[#fffbf8] rounded-md shadow-elegant hover:shadow-premium transition duration-400 h-full overflow-hidden flex flex-col border border-[#e8e4db] hover:border-[#d4af37]/70">
      {image ? (
        <div className="relative h-56 bg-gradient-to-br from-[#f9f7f4] to-[#faf8f3] overflow-hidden">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-110 transition duration-500" />
        </div>
      ) : (
        <div className="h-24 bg-gradient-to-br from-[#f5f0e8] via-[#f9f7f4] to-[#faf8f3] flex items-center justify-center border-b border-[#e8e4db]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#d4af37]/70"></div>
            <span className="text-[#d4af37] text-xs">◆</span>
            <div className="w-8 h-px bg-[#d4af37]/70"></div>
          </div>
        </div>
      )}
      <div className="p-10 flex-grow flex flex-col">
        <h3 className="text-2xl text-[#0a1428] mb-4 leading-tight">{title}</h3>
        <p className="text-[#6b6b6b] text-base flex-grow leading-relaxed font-light">{description}</p>
        {footer && <div className="mt-8 pt-6 border-t border-[#e8e4db]">{footer}</div>}
      </div>
      {localizedLink && image && (
        <div className="p-10 pt-0">
          <Link href={localizedLink} className="text-[#a89830] font-semibold hover:text-[#0a1428] inline-flex items-center gap-3 transition duration-300 tracking-[1px] uppercase text-sm">
            {locale === "ar" ? "اعرف المزيد" : "Learn More"} <span>{locale === "ar" ? "←" : "→"}</span>
          </Link>
        </div>
      )}
    </div>
  );

  return localizedLink && !image ? (
    <Link href={localizedLink} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
