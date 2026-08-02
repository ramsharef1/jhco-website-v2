import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const program = programs.find(p => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      {/* Header */}
      <header style={{ backgroundColor: '#f9f7f4', padding: '20px 32px', borderBottom: '1px solid #e8e4db' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={`${base}/programs`} style={{ textDecoration: 'none', color: '#0a1428', fontWeight: '500' }}>← Programs</Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1500px', margin: '0 auto', padding: '80px 32px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#0a1428', marginBottom: '24px' }}>
          {ar ? program.nameAr : program.name}
        </h1>
        <p style={{ fontSize: '16px', color: '#d4af37', fontWeight: '700', marginBottom: '32px', textTransform: 'uppercase' }}>
          {ar ? program.categoryAr : program.category}
        </p>

        <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', marginBottom: '48px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d' }}>
            {ar ? program.longDescriptionAr : program.longDescription}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0a1428', marginBottom: '16px' }}>Objectives</h3>
            <ul style={{ color: '#3d3d3d', lineHeight: '1.8' }}>
              {(ar ? program.objectivesAr : program.objectives).map((obj, idx) => (
                <li key={idx} style={{ marginBottom: '12px' }}>{obj}</li>
              ))}
            </ul>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#f9f7f4', borderRadius: '8px' }}>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '12px', color: '#6b6b6b', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>Status</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#0a1428', margin: 0 }}>{program.status}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#6b6b6b', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>Impact</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#d4af37', margin: 0 }}>{ar ? program.impactAr : program.impact}</p>
            </div>
          </div>
        </div>

        <Link href={`${base}/get-involved/donate`} style={{ padding: '16px 32px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', display: 'inline-block' }}>
          Support This Program
        </Link>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a1428', color: 'white', padding: '40px 32px', textAlign: 'center', marginTop: '80px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#ccc' }}>© 2026 JHCO. All rights reserved.</p>
      </footer>
    </>
  );
}
