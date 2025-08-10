"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from '../i18n/I18nProvider';

const locales = ['en', 'es'] as const;
type Locale = (typeof locales)[number];

function replaceLocaleInPath(pathname: string, newLocale: Locale) {
  const parts = pathname.split('/');
  // First part is '', second is locale in our routing
  if (parts.length > 1 && locales.includes(parts[1] as Locale)) {
    parts[1] = newLocale;
    return parts.join('/') || '/';
  }
  return `/${newLocale}${pathname}`;
}

export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (target: Locale) => {
    if (!pathname) return;
    const next = replaceLocaleInPath(pathname, target);
    router.push(next);
  };

  return (
    <div className='flex items-center gap-2 text-sm'>
      <button
        type='button'
        onClick={() => switchTo('en')}
        className={locale === 'en' ? 'font-semibold underline' : 'hover:underline'}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <span>·</span>
      <button
        type='button'
        onClick={() => switchTo('es')}
        className={locale === 'es' ? 'font-semibold underline' : 'hover:underline'}
        aria-pressed={locale === 'es'}
      >
        ES
      </button>
    </div>
  );
}


