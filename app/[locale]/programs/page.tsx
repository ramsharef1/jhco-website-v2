import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function ProgramsPage({
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
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={base} style={{ textDecoration: 'none', color: '#0a1428', fontWeight: '500' }}>← Back</Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1500px', margin: '0 auto', padding: '80px 32px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#0a1428', marginBottom: '48px' }}>
          Our Programs
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {programs.map((program) => (
            <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px', backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', cursor: 'pointer', height: '100%' }}>
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
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a1428', color: 'white', padding: '40px 32px', textAlign: 'center', marginTop: '80px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#ccc' }}>© 2026 JHCO. All rights reserved.</p>
      </footer>
    </>
  );
}
