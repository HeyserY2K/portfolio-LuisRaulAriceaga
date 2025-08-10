'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useI18n } from '../i18n/I18nProvider';

const Header = () => {
  const { locale, t } = useI18n();
  const prefix = `/${locale}`;

  return (
    <header
      className="flex w-full items-center justify-between bg-[var(--header-bg)] px-8 py-4 shadow-md"
      aria-label={t('nav.aria.main')}
    >
      <Link href={prefix} aria-label={t('nav.aria.home')}>
        <div className="group flex h-8 w-8 items-center justify-center hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4614 4584"
            fill="none"
            className="h-8"
          >
            <path
              d="M990.784 432.086C1203.94 291.323 2272.16 14.6212 3059.37 291.322M214.559 1815.59C1354.09 584.915 3348.95 515.204 3696.17 1934.9M214.559 3565.08C266.756 3062.38 356.681 2817.65 623.451 2444.33M292.316 4256.83C310.327 4343.45 308.54 4347.16 345.941 4411M173 910.682C244.27 833.006 287.729 792.241 372.754 725.679M1116.8 4393.57C536.31 3362.65 1354.09 2275.42 2320.69 2275.42M2320.69 3689.75C2903.86 3735.34 3662.66 3148.15 3696.17 2610.57M3712.26 645.244C5104.64 2043.19 4398.79 4215.42 2468.16 4393.57C1327.4 4451.52 1347.39 2983.26 2368.95 2983.26C3252.53 2969.88 3285.94 1583.67 2368.95 1583.67C1799.51 1598.34 1525.43 1680.97 1116.8 1960.38"
              stroke="currentColor"
              strokeWidth="345"
              strokeLinecap="round"
              className="duration-250 stroke-[var(--text-primary)] transition-colors group-hover:stroke-[var(--brand-accent)]"
            />
          </svg>
        </div>
      </Link>

      <nav aria-label={t('nav.aria.main')}>
        <ul className="flex items-center gap-6">
          <li>
            <Link href={prefix} aria-label={t('nav.aria.home')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.home')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/resume`} aria-label={t('nav.aria.resume')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.resume')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/about`} aria-label={t('nav.aria.about')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.about')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/blog`} aria-label={t('nav.aria.blog')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.blog')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/projects`} aria-label={t('nav.aria.projects')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.projects')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/store`} aria-label={t('nav.aria.store')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.store')}
              </span>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/sections/social`} aria-label={t('nav.aria.social')}>
              <span className="text-[var(--text-primary)] hover:text-[var(--brand-accent)]">
                {t('nav.social')}
              </span>
            </Link>
          </li>
          <li className="ml-2">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
