import { Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return (
    <>
      <Header locale={locale as Locale} />
      <main>
        {children}
      </main>
      <Footer locale={locale as Locale} />
    </>
  );
}
