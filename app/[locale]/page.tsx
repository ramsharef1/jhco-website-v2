import { getDictionary, type Locale } from '@/lib/i18n';
import { programs, impactStats, news } from '@/lib/mockData';
import Link from 'next/link';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f9f7f4] via-[#fafaf8] to-[#f5f1e6] overflow-hidden py-24 md:py-40">
        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-[#d4af37]"></div>
                <span className="text-[#a89830] text-xs font-semibold tracking-[1px] uppercase">{dict.hero.eyebrow}</span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl mb-10 leading-[1.15] text-[#0a1428]" style={{ fontFamily: 'var(--font-marcellus)' }}>
                {dict.hero.title}
              </h1>

              <p className="text-lg md:text-xl text-[#3d3d3d] mb-12 leading-relaxed font-light max-w-xl">
                {dict.hero.intro1}
                <span className="text-[#a89830] font-semibold">{dict.hero.introHighlight}</span>
                {dict.hero.intro2}
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link
                  href={`${base}/get-involved/donate`}
                  className="px-12 py-4 bg-[#0a1428] text-white font-bold rounded-sm hover:bg-[#142850] transition duration-400 uppercase tracking-[1px] text-sm text-center shadow-elegant hover:shadow-premium"
                >
                  {dict.hero.ctaDonate}
                </Link>
                <Link
                  href={`${base}/about/mission`}
                  className="px-12 py-4 border-2 border-[#0a1428] text-[#0a1428] font-bold rounded-sm hover:border-[#d4af37] hover:bg-[#f9f7f4] transition duration-400 uppercase tracking-[1px] text-sm text-center"
                >
                  {dict.hero.ctaMission}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 border-t border-[#e8e4db] pt-10">
                <div>
                  <p className="text-3xl md:text-4xl text-[#0a1428] mb-0" style={{ fontFamily: 'var(--font-marcellus)' }}>30+</p>
                  <p className="text-xs text-[#6b6b6b] mt-2 uppercase tracking-[1px] mb-0">{dict.hero.statCountries}</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#0a1428] mb-0" style={{ fontFamily: 'var(--font-marcellus)' }}>75k+</p>
                  <p className="text-xs text-[#6b6b6b] mt-2 uppercase tracking-[1px] mb-0">{dict.hero.statFamilies}</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#0a1428] mb-0" style={{ fontFamily: 'var(--font-marcellus)' }}>2.5k+</p>
                  <p className="text-xs text-[#6b6b6b] mt-2 uppercase tracking-[1px] mb-0">{dict.hero.statVolunteers}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patronage Band */}
      <section className="bg-[#0a1428] py-12 border-b border-[#d4af37]/30">
        <div className="container-lg text-center">
          <p className="text-[#d4af37] text-xs tracking-[2px] uppercase mb-4">{dict.patronage.label}</p>
          <p className="text-white text-xl md:text-2xl mb-0 leading-relaxed" style={{ fontFamily: ar ? 'var(--font-amiri)' : 'var(--font-marcellus)' }}>
            {dict.patronage.statement}
          </p>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-32 bg-gradient-to-b from-[#0a1428] to-[#142850] relative overflow-hidden">
        <div className="container-lg relative z-10">
          <div className="text-center mb-24">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#d4af37]"></div>
                <span className="text-[#d4af37] text-xs font-semibold tracking-[2px] uppercase">{dict.impact.label}</span>
                <div className="w-8 h-px bg-[#d4af37]"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl mb-8 text-white leading-tight">
              {dict.impact.titlePre}<span className="text-[#d4af37]">{dict.impact.titleAccent}</span>
            </h2>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-0">{dict.impact.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="bg-white/5 backdrop-blur-md border border-[#d4af37]/30 p-8 rounded-lg hover:border-[#d4af37] hover:bg-white/10 transition duration-500 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-px bg-[#d4af37] mb-6"></div>
                  <p className="text-4xl text-[#d4af37] mb-2" style={{ fontFamily: 'var(--font-marcellus)' }} dir="ltr">{stat.value}</p>
                  <p className="text-gray-300 text-sm font-light tracking-wide uppercase mb-0">{ar ? stat.labelAr : stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-white relative">
        <div className="container-lg relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl mb-8 text-[#0a1428] leading-tight">
              {dict.programs.titlePre}<span className="text-[#a89830]">{dict.programs.titleAccent}</span>
            </h2>
            <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-0">{dict.programs.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {programs.slice(0, 6).map((program) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} className="group">
                <div className="bg-white border border-[#e8e4db] rounded-lg overflow-hidden hover:border-[#d4af37] transition duration-500 h-full flex flex-col shadow-elegant hover:shadow-premium">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#0a1428] to-[#142850]">
                    <div className="w-full h-full flex items-center justify-center text-gray-600">Image</div>
                  </div>
                  <div className="flex-1 p-10 flex flex-col">
                    <h3 className="text-2xl text-[#0a1428] mb-4 group-hover:text-[#a89830] transition">
                      {ar ? program.nameAr : program.name}
                    </h3>
                    <p className="text-[#6b6b6b] text-base font-light flex-grow mb-6">
                      {ar ? program.descriptionAr : program.description}
                    </p>
                    <p className="text-[#a89830] font-semibold text-sm tracking-wide uppercase mb-0">
                      {ar ? program.impactAr : program.impact}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`${base}/programs`}
              className="inline-block px-16 py-5 bg-[#0a1428] text-white font-bold rounded-sm hover:bg-[#142850] transition duration-500 uppercase tracking-[1px] text-sm shadow-elegant hover:shadow-premium"
            >
              {dict.programs.exploreAll}
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f9f7f4] to-[#f5f1e6] relative">
        <div className="container-lg relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl mb-8 text-[#0a1428] leading-tight">
              {dict.news.titlePre}<span className="text-[#a89830]">{dict.news.titleAccent}</span>
            </h2>
            <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-0">{dict.news.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {news.slice(0, 3).map((article) => (
              <Link key={article.id} href={`${base}/news/${article.slug}`} className="group">
                <div className="bg-white border border-[#e8e4db] rounded-lg overflow-hidden hover:border-[#d4af37] transition duration-500 h-full flex flex-col shadow-elegant hover:shadow-premium">
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#0a1428] to-[#142850]">
                    <div className="w-full h-full flex items-center justify-center text-gray-600">Image</div>
                  </div>
                  <div className="flex-1 p-10 flex flex-col">
                    <span className="text-[#a89830] text-xs font-semibold tracking-[1px] uppercase mb-4" dir="ltr">
                      {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                    </span>
                    <h3 className="text-2xl text-[#0a1428] mb-4 group-hover:text-[#a89830] transition">
                      {ar ? article.titleAr : article.title}
                    </h3>
                    <p className="text-[#6b6b6b] text-base font-light flex-grow mb-0">
                      {ar ? article.excerptAr : article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
