import { getDictionary, type Locale } from '@/lib/i18n';
import { programs, impactStats, news } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

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
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f9f7f4, #fafaf8, #f5f1e6)', padding: '80px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ color: '#d4af37', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {dict.hero.eyebrow}
                </span>
              </div>
              <h1 style={{ fontSize: '72px', fontWeight: '400', lineHeight: '1.15', color: '#0a1428', marginBottom: '32px', fontFamily: 'var(--font-marcellus)' }}>
                {dict.hero.title}
              </h1>
              <p style={{ fontSize: '18px', color: '#3d3d3d', marginBottom: '48px', lineHeight: '1.8', maxWidth: '600px' }}>
                {dict.hero.intro1}
                <span style={{ color: '#d4af37', fontWeight: '600' }}> {dict.hero.introHighlight} </span>
                {dict.hero.intro2}
              </p>

              <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <Link href={`${base}/get-involved/donate`} style={{ padding: '16px 32px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '700', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }}>
                  {dict.hero.ctaDonate}
                </Link>
                <Link href={`${base}/about/mission`} style={{ padding: '16px 32px', border: '2px solid #0a1428', color: '#0a1428', textDecoration: 'none', fontSize: '14px', fontWeight: '700', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }}>
                  {dict.hero.ctaMission}
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', borderTop: '1px solid #e8e4db', paddingTop: '40px', maxWidth: '400px' }}>
                <div>
                  <p style={{ fontSize: '32px', color: '#0a1428', fontWeight: '400', fontFamily: 'var(--font-marcellus)', marginBottom: '8px' }}>30+</p>
                  <p style={{ fontSize: '11px', color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', margin: 0 }}>{dict.hero.statCountries}</p>
                </div>
                <div>
                  <p style={{ fontSize: '32px', color: '#0a1428', fontWeight: '400', fontFamily: 'var(--font-marcellus)', marginBottom: '8px' }}>75k+</p>
                  <p style={{ fontSize: '11px', color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', margin: 0 }}>{dict.hero.statFamilies}</p>
                </div>
                <div>
                  <p style={{ fontSize: '32px', color: '#0a1428', fontWeight: '400', fontFamily: 'var(--font-marcellus)', marginBottom: '8px' }}>2.5k+</p>
                  <p style={{ fontSize: '11px', color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', margin: 0 }}>{dict.hero.statVolunteers}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patronage */}
      <section style={{ backgroundColor: '#0a1428', padding: '48px 32px', textAlign: 'center', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#d4af37', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '16px' }}>{dict.patronage.label}</p>
          <p style={{ color: 'white', fontSize: '20px', lineHeight: '1.8', fontFamily: 'var(--font-marcellus)' }}>{dict.patronage.statement}</p>
        </div>
      </section>

      {/* Impact */}
      <section style={{ background: 'linear-gradient(180deg, #0a1428, #142850)', padding: '96px 32px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{ color: '#d4af37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '24px' }}>{dict.impact.label}</p>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: 'white', marginBottom: '24px', fontFamily: 'var(--font-marcellus)' }}>
              {dict.impact.titlePre} <span style={{ color: '#d4af37' }}>{dict.impact.titleAccent}</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#ccc', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>{dict.impact.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {impactStats.map((stat, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.3)', padding: '32px', borderRadius: '8px', textAlign: 'center', transition: 'all 0.3s' }}>
                <div style={{ width: '8px', height: '2px', backgroundColor: '#d4af37', margin: '0 auto 24px', borderRadius: '1px' }}></div>
                <p style={{ fontSize: '36px', color: '#d4af37', marginBottom: '8px', fontFamily: 'var(--font-marcellus)', fontWeight: '400' }} dir="ltr">{stat.value}</p>
                <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', margin: 0 }}>{ar ? stat.labelAr : stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: 'white', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{ color: '#a89830', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '16px' }}>{dict.programs.label}</p>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'var(--font-marcellus)' }}>
              {dict.programs.titlePre} <span style={{ color: '#a89830' }}>{dict.programs.titleAccent}</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#3d3d3d', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>{dict.programs.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
            {programs.slice(0, 6).map((program) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                  <div style={{ position: 'relative', height: '200px', backgroundColor: '#f0f0f0' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>Image</div>
                  </div>
                  <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                      {ar ? program.nameAr : program.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                      {ar ? program.descriptionAr : program.description}
                    </p>
                    <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px' }}>
                      <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 0 }}>
                        {ar ? program.impactAr : program.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href={`${base}/programs`} style={{ padding: '12px 32px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', display: 'inline-block' }}>
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section style={{ background: 'linear-gradient(180deg, white, #f9f7f4, #f5f1e6)', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{ color: '#a89830', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '16px' }}>{dict.news.label}</p>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'var(--font-marcellus)' }}>
              {dict.news.titlePre} <span style={{ color: '#a89830' }}>{dict.news.titleAccent}</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#3d3d3d', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>{dict.news.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {news.slice(0, 3).map((article) => (
              <Link key={article.id} href={`${base}/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                  <div style={{ position: 'relative', height: '200px', backgroundColor: '#f0f0f0' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>Image</div>
                  </div>
                  <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }} dir="ltr">
                      {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                    </p>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                      {ar ? article.titleAr : article.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1 }}>
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
