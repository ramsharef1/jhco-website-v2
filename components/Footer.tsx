'use client';

import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

const Footer = ({ locale }: { locale: Locale }) => {
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const sections = {
    programs: {
      title: ar ? 'البرامج' : 'Programs',
      links: [
        { label: ar ? 'الأزمات والطوارئ' : 'Crisis Response', href: `${base}/programs/gaza-aid` },
        { label: ar ? 'التعليم' : 'Education', href: `${base}/programs/education` },
        { label: ar ? 'الصحة' : 'Healthcare', href: `${base}/programs/healthcare` },
        { label: ar ? 'سبل العيش' : 'Livelihoods', href: `${base}/programs/livelihoods` },
      ],
    },
    government: {
      title: ar ? 'الحكومة والشفافية' : 'Government & Transparency',
      links: [
        { label: ar ? 'مركز الإعلام' : 'Media Center', href: `${base}/media-center` },
        { label: ar ? 'التقارير' : 'Reports', href: `${base}/reports` },
        { label: ar ? 'الامتثال' : 'Compliance', href: `${base}/compliance` },
        { label: ar ? 'الإعلانات' : 'Announcements', href: `${base}/announcements` },
      ],
    },
    about: {
      title: ar ? 'عن الهيئة' : 'About',
      links: [
        { label: ar ? 'مهمتنا' : 'Our Mission', href: `${base}/about/mission` },
        { label: ar ? 'العمليات' : 'Operations', href: `${base}/operations` },
        { label: ar ? 'الشراكات' : 'Partnerships', href: `${base}/partnerships` },
        { label: ar ? 'الحوكمة' : 'Governance', href: `${base}/support/governance` },
      ],
    },
    resources: {
      title: ar ? 'الموارد' : 'Resources',
      links: [
        { label: ar ? 'الأخبار' : 'News', href: `${base}/news` },
        { label: ar ? 'تطوع' : 'Get Involved', href: `${base}/get-involved/volunteer` },
        { label: ar ? 'تبرع' : 'Donate', href: `${base}/get-involved/donate` },
        { label: ar ? 'الأسئلة الشائعة' : 'FAQ', href: `${base}/faq` },
      ],
    },
    legal: {
      title: ar ? 'القانونية' : 'Legal',
      links: [
        { label: ar ? 'سياسة الخصوصية' : 'Privacy Policy', href: `${base}/privacy` },
        { label: ar ? 'الشروط' : 'Terms', href: `${base}/terms` },
        { label: ar ? 'اتصل بنا' : 'Contact', href: `${base}/contact` },
        { label: ar ? 'الموقع' : 'Locations', href: `${base}/locations` },
      ],
    },
  };

  return (
    <footer style={{ backgroundColor: '#0a1428', color: 'white' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '64px 32px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#d4af37', margin: 0 }}>JHCO</h3>
            <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6', margin: 0 }}>
              {ar
                ? 'الهيئة الخيرية الأردنية الهاشمية - تغيير الحياة من خلال العمل الإنساني'
                : 'Jordan Hashemite Charity Organization - Changing lives through humanitarian action'}
            </p>
          </div>

          {Object.entries(sections).map(([key, section]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#d4af37', margin: 0 }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} style={{ fontSize: '13px', color: '#ccc', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '32px', textAlign: 'center', fontSize: '13px', color: '#999' }}>
        <p>© 2026 JHCO. {ar ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
      </div>
    </footer>
  );
};

export default Footer;
