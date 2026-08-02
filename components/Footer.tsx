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
    <footer className="bg-[#0a1428] text-white">
      <div className="container-lg py-16 border-b border-[#d4af37]/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37]">JHCO</h3>
            <p className="text-sm text-gray-300">
              {ar
                ? 'الهيئة الخيرية الأردنية الهاشمية - تغيير الحياة من خلال العمل الإنساني'
                : 'Jordan Hashemite Charity Organization - Changing lives through humanitarian action'}
            </p>
          </div>

          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-bold text-[#d4af37]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-[#d4af37] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-lg py-8 text-center text-sm text-gray-400">
        <p>© 2026 JHCO. {ar ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
      </div>
    </footer>
  );
};

export default Footer;
