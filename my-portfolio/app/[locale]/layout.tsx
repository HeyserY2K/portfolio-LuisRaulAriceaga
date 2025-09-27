// app/[locale]/layout.tsx
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

// Supported locales
const locales = ['en', 'es'] as const;
type Locale = (typeof locales)[number];

// NOTE: For static export, prefer loading messages from a path that is bundled,
// not from /public via import. If your JSON lives under /public/locales/*,
// consider fetching it with `fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/locales/...`)`
// instead of importing from '../../public/...'. If you keep importing JSON,
// place it under the app/ tree (e.g., app/locales/*) so it can be bundled.
async function getMessages(locale: Locale) {
  if (locale === 'en') {
    const mod = await import('../../public/locales/en/common.json');
    return mod.default;
  }
  const mod = await import('../../public/locales/es/common.json');
  return mod.default;
}

// Pre-generate localized routes for static export
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  // IMPORTANT: In Next 15 layout signatures, `params` may be typed as a Promise by the generated types.
  // Typing it as a Promise here satisfies the checker in `.next/types/...`.
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ← changed from `{ locale: string }`
}) {
  // Await the promise to read the actual params
  const { locale: localeParam } = await params;

  // Narrow to our supported locales (types + runtime guard)
  const locale = localeParam as Locale;
  if (!locales.includes(locale)) return notFound();

  // Load i18n messages for this locale
  const messages = await getMessages(locale);

  // NOTE:
  // - Do NOT render <html> or <body> here. Only the root app/layout.tsx should render those.
  // - This layout wraps the locale-specific subtree and provides i18n context, header, footer, etc.
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
