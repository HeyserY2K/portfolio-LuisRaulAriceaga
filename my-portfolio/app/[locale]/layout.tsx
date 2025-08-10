import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import I18nProvider from '../i18n/I18nProvider';

import '../globals.css';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'My Portfolio - Luis Raul Ariceaga',
    template: '%s | Luis Raul Ariceaga',
  },
  description: 'Showcasing my projects, blog, and future store.',
};

const locales = ['en', 'es'] as const;
type Locale = (typeof locales)[number];

async function getMessages(locale: Locale) {
  if (locale === 'en') {
    const mod = await import('../../public/locales/en/common.json');
    return mod.default;
  }
  const mod = await import('../../public/locales/es/common.json');
  return mod.default;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  if (!locales.includes(locale)) return notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} bg-[var(--background)] text-[var(--text-primary)] antialiased`}>
        <I18nProvider locale={locale} messages={messages}>
          <Header />
          <main className='container mx-auto p-6 sm:p-12'>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}


