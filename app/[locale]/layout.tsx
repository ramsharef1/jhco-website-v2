import Header from '@/components/Header';
import MegaMenu from '@/components/MegaMenu';
import Footer from '@/components/Footer';
import { type Locale } from '@/lib/i18n';

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
  const ar = locale === 'ar';
  const dir = ar ? 'rtl' : 'ltr';

  return (
    <>
      <Header locale={locale as Locale} />
      <MegaMenu locale={locale as Locale} />
      <main dir={dir} style={{ minHeight: '100vh' }}>
        {children}
      </main>
      <Footer locale={locale as Locale} />
    </>
  );
}
