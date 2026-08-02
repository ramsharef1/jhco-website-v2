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
      {/* Header */}
      <header style={{ backgroundColor: '#f9f7f4', padding: '20px 32px', borderBottom: '1px solid #e8e4db' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0a1428', margin: 0 }}>JHCO</h1>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/en" style={{ textDecoration: 'none', color: locale === 'en' ? '#d4af37' : '#0a1428', fontWeight: '500' }}>English</Link>
            <Link href="/ar" style={{ textDecoration: 'none', color: locale === 'ar' ? '#d4af37' : '#0a1428', fontWeight: '500' }}>العربية</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#0a1428', marginBottom: '24px' }}>
            {dict.hero.title || 'Serving Humanity with Dignity'}
          </h2>
          <p style={{ fontSize: '18px', color: '#3d3d3d', lineHeight: '1.8', marginBottom: '48px', maxWidth: '800px' }}>
            {dict.hero.intro1 || 'The Jordan Hashemite Charity Organization delivers humanitarian aid and development support across 30+ countries with compassion, impartiality, and excellence.'}
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '80px' }}>
            <Link href={`${base}/get-involved/donate`} style={{ padding: '16px 32px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px' }}>
              {dict.hero.ctaDonate || 'Make a Donation'}
            </Link>
            <Link href={`${base}/about/mission`} style={{ padding: '16px 32px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px' }}>
              {dict.hero.ctaMission || 'Learn More'}
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ padding: '32px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e8e4db' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#d4af37', marginBottom: '8px' }}>30+</h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>Countries Served</p>
            </div>
            <div style={{ padding: '32px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e8e4db' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#d4af37', marginBottom: '8px' }}>75k+</h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>Families Supported</p>
            </div>
            <div style={{ padding: '32px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e8e4db' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#d4af37', marginBottom: '8px' }}>2.5k+</h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0a1428', marginBottom: '48px', textAlign: 'center' }}>
            Our Programs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
            {programs.slice(0, 6).map((program) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '32px', backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {ar ? program.nameAr : program.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                    {ar ? program.descriptionAr : program.description}
                  </p>
                  <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', marginBottom: 0 }}>
                    {ar ? program.impactAr : program.impact}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href={`${base}/programs`} style={{ padding: '12px 32px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px' }}>
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0a1428', marginBottom: '48px', textAlign: 'center' }}>
            Latest News
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {news.slice(0, 3).map((article) => (
              <Link key={article.id} href={`${base}/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', cursor: 'pointer' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }} dir="ltr">
                    {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                  </p>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {ar ? article.titleAr : article.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6' }}>
                    {ar ? article.excerptAr : article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a1428', color: 'white', padding: '40px 32px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#ccc' }}>© 2026 Jordan Hashemite Charity Organization. All rights reserved.</p>
      </footer>
    </>
  );
}
