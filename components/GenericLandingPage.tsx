/**
 * Generic Landing Page Template
 * Reusable component for creating consistent landing pages
 */

import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

export interface LandingPageProps {
  locale: Locale;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  heroImage?: string;
  sections: LandingSection[];
  relatedPages?: RelatedPage[];
}

export interface LandingSection {
  id: string;
  type: 'overview' | 'statistics' | 'features' | 'programs' | 'testimonials' | 'cta';
  title: string;
  titleAr: string;
  content?: string;
  contentAr?: string;
  image?: string;
  items?: SectionItem[];
  cta?: CtaButton;
}

export interface SectionItem {
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  icon?: string;
  image?: string;
  link?: string;
  stats?: string;
}

export interface CtaButton {
  text: string;
  textAr: string;
  link: string;
  style?: 'primary' | 'secondary';
}

export interface RelatedPage {
  title: string;
  titleAr: string;
  link: string;
  icon: string;
}

export default function GenericLandingPage({
  locale,
  title,
  titleAr,
  subtitle,
  subtitleAr,
  heroImage = '/placeholder-hero-2560x720.jpg',
  sections,
  relatedPages,
}: LandingPageProps) {
  const ar = locale === 'ar';

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImage}')`,
        }}
      >
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">{ar ? titleAr : title}</h1>
          <p className="text-xl opacity-90">{ar ? subtitleAr : subtitle}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-28 bg-white">
        <div className="container-lg space-y-28">
          {sections.map(section => (
            <SectionRenderer key={section.id} section={section} ar={ar} />
          ))}
        </div>
      </section>

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <section className="py-28 bg-[#f9f7f4] border-t border-[#e8e4db]">
          <div className="container-lg">
            <h2 className="text-3xl font-bold text-[#0a1428] mb-12">
              {ar ? 'صفحات ذات صلة' : 'Related Pages'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className="bg-white rounded-lg p-6 border border-[#e8e4db] hover:shadow-elegant hover:border-[#d4af37] transition text-center"
                >
                  <span className="text-4xl mb-4 block">{page.icon}</span>
                  <h3 className="font-bold text-[#0a1428] hover:text-[#a89830] transition">
                    {ar ? page.titleAr : page.title}
                  </h3>
                  <span className="text-[#a89830] font-semibold text-sm inline-block mt-4">
                    {ar ? 'عرض المزيد' : 'Learn More'} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

interface SectionRendererProps {
  section: LandingSection;
  ar: boolean;
}

function SectionRenderer({ section, ar }: SectionRendererProps) {
  const title = ar ? section.titleAr : section.title;
  const content = ar ? section.contentAr : section.content;

  switch (section.type) {
    case 'overview':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1428] mb-6">{title}</h2>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">{content}</p>
            {section.cta && (
              <Link
                href={section.cta.link}
                className="inline-block px-8 py-4 bg-[#a8312f] text-white font-bold rounded-lg hover:bg-[#8b2f2d] transition"
              >
                {ar ? section.cta.textAr : section.cta.text}
              </Link>
            )}
          </div>
          {section.image && (
            <img
              src={section.image}
              alt={title}
              className="rounded-lg shadow-elegant max-w-full h-auto"
            />
          )}
        </div>
      );

    case 'statistics':
      return (
        <div>
          <h2 className="text-3xl font-bold text-[#0a1428] mb-12 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items?.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0a1428] to-[#142850] text-white rounded-lg p-8 text-center"
              >
                {item.icon && <span className="text-5xl mb-4 block">{item.icon}</span>}
                <div className="text-4xl font-bold text-[#d4af37] mb-2">{item.stats}</div>
                <p className="text-gray-300">{ar ? item.titleAr : item.title}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'features':
    case 'programs':
      return (
        <div>
          <h2 className="text-3xl font-bold text-[#0a1428] mb-6">{title}</h2>
          {content && <p className="text-lg text-[#6b6b6b] mb-12">{content}</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items?.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8e4db] rounded-lg p-8 hover:shadow-elegant hover:border-[#d4af37] transition"
              >
                {item.icon && <span className="text-4xl mb-4 block">{item.icon}</span>}
                <h3 className="font-bold text-[#0a1428] mb-3 text-lg">
                  {ar ? item.titleAr : item.title}
                </h3>
                <p className="text-[#6b6b6b] mb-6">{ar ? item.descriptionAr : item.description}</p>
                {item.link && (
                  <Link href={item.link} className="text-[#a89830] font-semibold hover:text-[#d4af37] transition">
                    {ar ? 'اعرف المزيد' : 'Learn More'} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 'testimonials':
      return (
        <div>
          <h2 className="text-3xl font-bold text-[#0a1428] mb-12 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items?.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f9f7f4] to-[#f3f4f6] rounded-lg p-8 border border-[#e8e4db]"
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={ar ? item.titleAr : item.title}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-bold text-[#0a1428]">{ar ? item.titleAr : item.title}</p>
                    <p className="text-xs text-[#a89830]">{ar ? item.descriptionAr : item.description}</p>
                  </div>
                </div>
                <p className="text-[#6b6b6b] italic">"{ar ? item.titleAr : item.title}"</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="py-16 bg-gradient-to-r from-[#0a1428] to-[#142850] text-white rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          {content && <p className="text-lg mb-12 max-w-2xl mx-auto">{content}</p>}
          {section.cta && (
            <Link
              href={section.cta.link}
              className="inline-block px-10 py-4 bg-[#d4af37] text-[#0a1428] font-bold rounded-lg hover:bg-[#e8c547] transition"
            >
              {ar ? section.cta.textAr : section.cta.text}
            </Link>
          )}
        </div>
      );

    default:
      return null;
  }
}
