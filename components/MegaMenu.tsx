'use client';

import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { COMPLETE_SITEMAP } from '@/lib/sitemapData';

interface MegaMenuProps {
  locale: Locale;
}

export default function MegaMenu({ locale }: MegaMenuProps) {
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const governmentPages = [
    { id: 'media-center', label: 'Media Center', labelAr: 'مركز الإعلام', icon: '📰', description: 'Press releases & media kit', descriptionAr: 'البيانات الصحفية ومجموعة الإعلام' },
    { id: 'reports', label: 'Reports & Transparency', labelAr: 'التقارير والشفافية', icon: '📊', description: 'Annual reports & audits', descriptionAr: 'التقارير السنوية والتدقيق' },
    { id: 'partnerships', label: 'Partnerships', labelAr: 'الشراكات', icon: '🤝', description: 'Government & UN partners', descriptionAr: 'شركاء حكوميون وأمميون' },
    { id: 'operations', label: 'Operations', labelAr: 'العمليات', icon: '🌍', description: 'Global programs & data', descriptionAr: 'البرامج العالمية والبيانات' },
    { id: 'compliance', label: 'Compliance & Legal', labelAr: 'الامتثال والقانونية', icon: '⚖️', description: 'Privacy & governance', descriptionAr: 'الخصوصية والحوكمة' },
    { id: 'announcements', label: 'Announcements', labelAr: 'الإعلانات', icon: '👑', description: 'Official notices & decrees', descriptionAr: 'الإشعارات الرسمية والمراسيم' },
  ];

  const mainItems = COMPLETE_SITEMAP.filter(item =>
    ['programs', 'about', 'impact', 'get-involved', 'news-resources', 'regions', 'support'].includes(item.id)
  );

  return (
    <div className="w-full bg-gradient-to-b from-[#0a1428] to-[#0d1a2a] text-white border-y-2 border-[#d4af37]">
      <div className="container-lg py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Government & Transparency Section */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <span className="text-4xl group-hover:scale-110 transition-transform">👑</span>
              <div>
                <h3 className="text-lg font-bold text-[#d4af37] group-hover:text-white transition-colors">
                  {ar ? 'الحكومية' : 'Government'}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {ar ? 'الشفافية والمساءلة' : 'Transparency & Accountability'}
                </p>
              </div>
            </div>

            <ul className="space-y-2 border-t border-[#d4af37]/20 pt-4">
              {governmentPages.map(page => (
                <li key={page.id}>
                  <Link
                    href={`${base}/${page.id}`}
                    className="flex items-start gap-2 px-3 py-2 rounded hover:bg-[#d4af37]/10 transition-all group"
                  >
                    <span className="text-lg mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">{page.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200 group-hover:text-[#d4af37] transition-colors font-medium">
                        {ar ? page.labelAr : page.label}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {ar ? page.descriptionAr : page.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {mainItems.map(section => (
            <div key={section.id} className="space-y-4">
              {/* Section Header */}
              <Link
                href={`${base}${section.path}`}
                className="flex items-center gap-3 mb-6 group"
              >
                {section.icon && <span className="text-4xl group-hover:scale-110 transition-transform">{section.icon}</span>}
                <div>
                  <h3 className="text-lg font-bold text-[#d4af37] group-hover:text-white transition-colors">
                    {ar ? section.labelAr : section.label}
                  </h3>
                  {section.description && (
                    <p className="text-xs text-gray-400 mt-1">
                      {ar ? section.descriptionAr : section.description}
                    </p>
                  )}
                </div>
              </Link>

              {/* Section Items */}
              {section.children && section.children.length > 0 && (
                <ul className="space-y-2 border-t border-[#d4af37]/20 pt-4">
                  {section.children.map(item => (
                    <li key={item.id}>
                      <Link
                        href={`${base}${item.path}`}
                        className="flex items-start gap-2 px-3 py-2 rounded hover:bg-[#d4af37]/10 transition-all group"
                      >
                        {item.icon && <span className="text-lg mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">{item.icon}</span>}
                        <div className="flex-1">
                          <div className="text-sm text-gray-200 group-hover:text-[#d4af37] transition-colors font-medium">
                            {ar ? item.labelAr : item.label}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                              {ar ? item.descriptionAr : item.description}
                            </p>
                          )}
                        </div>
                      </Link>

                      {/* Sub-items */}
                      {item.children && item.children.length > 0 && (
                        <ul className="ml-6 mt-1 space-y-1 border-l border-[#d4af37]/20 pl-3">
                          {item.children.slice(0, 4).map(subitem => (
                            <li key={subitem.id}>
                              <Link
                                href={`${base}${subitem.path}`}
                                className="text-xs text-gray-400 hover:text-[#d4af37] hover:bg-[#d4af37]/5 px-2 py-1 rounded block transition-all"
                              >
                                {ar ? subitem.labelAr : subitem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 pt-8 border-t border-[#d4af37]/30 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href={`${base}/get-involved/donate`}
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#a8312f] to-[#8b2f2d] rounded-lg hover:shadow-lg hover:shadow-[#a8312f]/50 transition-all hover:scale-105"
          >
            <span className="text-3xl">💝</span>
            <div>
              <div className="font-bold text-white">{ar ? 'تبرع الآن' : 'Donate Now'}</div>
              <p className="text-xs text-gray-300">{ar ? 'ساعد أولئك المحتاجين' : 'Help those in need'}</p>
            </div>
          </Link>

          <Link
            href={`${base}/get-involved/volunteer`}
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a2f50] to-[#142850] border-2 border-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-[#0a1428] transition-all hover:scale-105"
          >
            <span className="text-3xl">🤝</span>
            <div>
              <div className="font-bold">{ar ? 'تطوع معنا' : 'Volunteer'}</div>
              <p className="text-xs opacity-80">{ar ? 'شارك في مهمتنا' : 'Join our mission'}</p>
            </div>
          </Link>

          <Link
            href={`${base}/contact`}
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a2f50] to-[#142850] border-2 border-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-[#0a1428] transition-all hover:scale-105"
          >
            <span className="text-3xl">📞</span>
            <div>
              <div className="font-bold">{ar ? 'اتصل بنا' : 'Contact Us'}</div>
              <p className="text-xs opacity-80">{ar ? 'نحن هنا للمساعدة' : 'We\'re here to help'}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
