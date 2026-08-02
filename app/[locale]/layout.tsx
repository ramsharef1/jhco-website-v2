export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      {children}
    </>
  );
}
