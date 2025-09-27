import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import GradientBackground from '../components/ui/GradientBackground';
import I18nProvider from '../i18n/I18nProvider';

import '../globals.css';

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
  params: { locale: string };
}) {
  const localeParam = params.locale;
  const locale = localeParam as Locale;
  if (!locales.includes(locale)) return notFound();

  const messages = await getMessages(locale);

  return (
    <>
      <GradientBackground />
      <I18nProvider locale={locale} messages={messages}>
        <div className="px-4 sm:px-6">
          <Header />
        </div>
        <main className="container mx-auto p-6 sm:p-12">{children}</main>
        <Footer />
      </I18nProvider>
    </>
  );
}
