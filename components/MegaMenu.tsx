'use client';

import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

interface MegaMenuProps {
  locale: Locale;
}

export default function MegaMenu({ locale }: MegaMenuProps) {
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const sections = {
    government: {
      icon: '👑',
      title: ar ? 'الحكومة' : 'Government',
      subtitle: ar ? 'الشفافية والمساءلة' : 'Transparency & Accountability',
      links: [
        { icon: '📰', label: ar ? 'مركز الإعلام' : 'Media Center', href: `${base}/media-center` },
        { icon: '📊', label: ar ? 'التقارير' : 'Reports', href: `${base}/reports` },
        { icon: '⚖️', label: ar ? 'الامتثال' : 'Compliance', href: `${base}/compliance` },
        { icon: '👑', label: ar ? 'الإعلانات' : 'Announcements', href: `${base}/announcements` },
      ],
    },
    care: {
      icon: '🏥',
      title: ar ? 'الرعاية' : 'Care',
      subtitle: ar ? 'البرامج الإنسانية' : 'Humanitarian Programs',
      links: [
        { icon: '🚨', label: ar ? 'الأزمات' : 'Crisis Response', href: `${base}/programs/gaza-aid` },
        { icon: '💊', label: ar ? 'الصحة' : 'Healthcare', href: `${base}/programs/healthcare` },
        { icon: '🍽️', label: ar ? 'الغذاء' : 'Food Aid', href: `${base}/programs/food-aid` },
        { icon: '🏠', label: ar ? 'المأوى' : 'Shelter', href: `${base}/programs/shelter` },
      ],
    },
    education: {
      icon: '📚',
      title: ar ? 'التعليم' : 'Education',
      subtitle: ar ? 'فرص التعلم' : 'Learning Opportunities',
      links: [
        { icon: '🎓', label: ar ? 'منح دراسية' : 'Scholarships', href: `${base}/programs/education` },
        { icon: '👶', label: ar ? 'التعليم المبكر' : 'Early Learning', href: `${base}/programs/early-learning` },
        { icon: '💻', label: ar ? 'تدريب مهني' : 'Vocational Training', href: `${base}/programs/vocational-training` },
        { icon: '📖', label: ar ? 'محو الأمية' : 'Literacy', href: `${base}/programs/literacy` },
      ],
    },
    partnerships: {
      icon: '🤝',
      title: ar ? 'الشراكات' : 'Partnerships',
      subtitle: ar ? 'التعاون العالمي' : 'Global Cooperation',
      links: [
        { icon: '🌍', label: ar ? 'الشركاء' : 'Our Partners', href: `${base}/partnerships` },
        { icon: '🏢', label: ar ? 'العمليات' : 'Operations', href: `${base}/operations` },
        { icon: '📈', label: ar ? 'التأثير' : 'Impact', href: `${base}/news` },
        { icon: '💬', label: ar ? 'الشهادات' : 'Testimonials', href: `${base}/contact` },
      ],
    },
    about: {
      icon: 'ℹ️',
      title: ar ? 'عن الهيئة' : 'About',
      subtitle: ar ? 'من نحن' : 'Who We Are',
      links: [
        { icon: '🎯', label: ar ? 'مهمتنا' : 'Our Mission', href: `${base}/about/mission` },
        { icon: '📋', label: ar ? 'رؤيتنا' : 'Our Vision', href: `${base}/about/mission` },
        { icon: '👥', label: ar ? 'الفريق' : 'Our Team', href: `${base}/about/mission` },
        { icon: '⭐', label: ar ? 'القيم' : 'Our Values', href: `${base}/about/mission` },
      ],
    },
    getInvolved: {
      icon: '❤️',
      title: ar ? 'شارك معنا' : 'Get Involved',
      subtitle: ar ? 'انضم إلى المهمة' : 'Join Our Mission',
      links: [
        { icon: '💝', label: ar ? 'تبرع' : 'Donate', href: `${base}/get-involved/donate` },
        { icon: '🤝', label: ar ? 'تطوع' : 'Volunteer', href: `${base}/get-involved/volunteer` },
        { icon: '📢', label: ar ? 'انشر الخبر' : 'Spread the Word', href: `${base}/contact` },
        { icon: '📞', label: ar ? 'اتصل بنا' : 'Contact Us', href: `${base}/contact` },
      ],
    },
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#0a1428', color: 'white', borderTop: '2px solid #d4af37', borderBottom: '2px solid #d4af37' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Main grid - 6 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Section Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>{section.icon}</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#d4af37', margin: '0 0 4px 0' }}>
                    {section.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#aaa', margin: 0 }}>
                    {section.subtitle}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(212, 175, 55, 0.2)', marginBottom: '8px' }}></div>

              {/* Links */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', color: '#ccc', fontSize: '13px', transition: 'all 0.2s', cursor: 'pointer' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                        e.currentTarget.style.color = '#d4af37';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#ccc';
                      }}
                    >
                      <span style={{ fontSize: '14px' }}>{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: 'linear-gradient(135deg, #a8312f, #8b2f2d)', borderRadius: '8px', textDecoration: 'none', color: 'white', transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '28px' }}>💝</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '2px' }}>{ar ? 'تبرع الآن' : 'Donate Now'}</div>
              <p style={{ fontSize: '12px', color: '#ddd', margin: 0 }}>{ar ? 'ساعد أولئك المحتاجين' : 'Help those in need'}</p>
            </div>
          </Link>

          <Link href={`${base}/get-involved/volunteer`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: 'linear-gradient(135deg, #1a2f50, #142850)', border: '2px solid #d4af37', borderRadius: '8px', textDecoration: 'none', color: 'white', transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4af37'; e.currentTarget.style.color = '#0a1428'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; }}
          >
            <span style={{ fontSize: '28px' }}>🤝</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '2px' }}>{ar ? 'تطوع معنا' : 'Volunteer With Us'}</div>
              <p style={{ fontSize: '12px', opacity: 0.9, margin: 0 }}>{ar ? 'شارك في مهمتنا' : 'Join our mission'}</p>
            </div>
          </Link>

          <Link href={`${base}/contact`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: 'linear-gradient(135deg, #1a2f50, #142850)', border: '2px solid #d4af37', borderRadius: '8px', textDecoration: 'none', color: 'white', transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4af37'; e.currentTarget.style.color = '#0a1428'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; }}
          >
            <span style={{ fontSize: '28px' }}>📞</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '2px' }}>{ar ? 'اتصل بنا' : 'Contact Us'}</div>
              <p style={{ fontSize: '12px', opacity: 0.9, margin: 0 }}>{ar ? 'نحن هنا للمساعدة' : 'We\'re here to help'}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
