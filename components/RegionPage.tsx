import Hero from "@/components/Hero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { countries } from "@/lib/mockData";
import { type Locale } from "@/lib/i18n";

const regionMeta = {
  asia: {
    ar: { title: "آسيا", subtitle: "أوسع مناطق عملنا الإنساني، من فلسطين إلى إندونيسيا" },
    en: { title: "Asia", subtitle: "Our largest field of humanitarian work, from Palestine to Indonesia" },
  },
  africa: {
    ar: { title: "أفريقيا", subtitle: "إغاثة وتنمية في عشر دول أفريقية" },
    en: { title: "Africa", subtitle: "Relief and development across ten African countries" },
  },
  europe: {
    ar: { title: "أوروبا", subtitle: "عون أردني وصل البلقان والقوقاز في أوقات الأزمات" },
    en: { title: "Europe", subtitle: "Jordanian aid that reached the Balkans and Caucasus in times of crisis" },
  },
  americas: {
    ar: { title: "الأمريكيتان", subtitle: "استجابة إنسانية للكوارث الكبرى" },
    en: { title: "The Americas", subtitle: "Humanitarian response to major disasters" },
  },
} as const;

const labels = {
  ar: {
    photoLabel: "صورة — من عملياتنا",
    body: "قدّمت الهيئة في هذه الدولة مساعدات إنسانية وبرامج إغاثية بالتنسيق مع الشركاء المحليين والدوليين. تفاصيل البرامج والحملات تُستكمل ضمن المحتوى الرسمي.",
    back: "جميع مناطق العمل",
  },
  en: {
    photoLabel: "Photograph — From Our Operations",
    body: "In this country, JHCO has delivered humanitarian assistance and relief programs in coordination with local and international partners. Program details are to be completed with official content.",
    back: "All Regions",
  },
} as const;

export default function RegionPage({
  region,
  locale,
}: {
  region: keyof typeof regionMeta;
  locale: Locale;
}) {
  const ar = locale === "ar";
  const meta = regionMeta[region][locale];
  const l = labels[locale];
  const base = `/${locale}`;
  const arrow = ar ? "←" : "→";
  const regionCountries = countries.filter((c) => c.region === region);

  return (
    <>
      <Hero title={meta.title} subtitle={meta.subtitle} />
      <section className="py-28 bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regionCountries.map((c) => (
              <div key={c.name} className="bg-[#fffbf8] border border-[#e8e4db] rounded-md overflow-hidden shadow-elegant hover:shadow-premium hover:border-[#d4af37]/70 transition duration-400">
                <ImagePlaceholder label={l.photoLabel} className="h-40 w-full" />
                <div className="p-8">
                  <h3 className="text-2xl mb-3">{ar ? c.nameAr : c.name}</h3>
                  <p className="text-[#6b6b6b] text-sm font-light leading-relaxed mb-0">{l.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={`${base}/where-we-work`} className="text-[#a89830] font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition">
            {l.back} <span>{arrow}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
