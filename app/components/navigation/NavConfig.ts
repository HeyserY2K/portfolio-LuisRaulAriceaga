import { useI18n } from '@/app/i18n/I18nProvider';

/**
 * Hook returning the structured navigation items for the current locale.
 * Centralising this avoids duplication between desktop and mobile navs
 * and will make future conditional items (e.g. blog, store) easier.
 */
export function useNavItems() {
  const { locale, t } = useI18n();
  return {
    locale,
    items: [
      { href: `/${locale}/sections/resume`, label: t('nav.resume'), aria: t('nav.aria.resume') },
      { href: `/${locale}/sections/about`, label: t('nav.about'), aria: t('nav.aria.about') },
      {
        href: `/${locale}/sections/projects`,
        label: t('nav.projects'),
        aria: t('nav.aria.projects'),
      },
      { href: `/${locale}/sections/social`, label: t('nav.social'), aria: t('nav.aria.social') },
    ],
    t,
  } as const;
}

export type NavItem = ReturnType<typeof useNavItems>['items'][number];
