'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import DesktopNav from './navigation/DesktopNav';
import HamburgerButton from './navigation/HamburgerButton';
import MobileMenu from './navigation/MobileMenu';
import { useI18n } from '../i18n/I18nProvider';

/**
 * Header orchestrates desktop + mobile navigation.
 * Keeps state minimal and leaves rendering/details to dedicated components.
 */
const Header = () => {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Ref for the hamburger button so MobileMenu can ignore it in outside-click logic
  // NOTE: useRef<HTMLButtonElement>(null) gives a RefObject<HTMLButtonElement> whose current starts as null.
  // This matches the prop type expected by MobileMenu without introducing a union generic.
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  // Close mobile menu on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header
      className="glass-surface sticky top-4 z-40 mx-auto flex w-[min(100%,_1200px)] items-center gap-3 px-4 py-2 sm:px-6"
      aria-label={t('nav.aria.main')}
    >
      <Link
        href={`/${locale}`}
        aria-label={t('nav.aria.home')}
        className="flex shrink-0 items-center"
      >
        <div className="group flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4614 4584"
            fill="none"
            className="h-7 w-7 sm:h-8 sm:w-8"
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

      <DesktopNav onNavigate={close} />

      {/* Mobile cluster */}
      <div className="ml-auto flex items-center gap-3 md:hidden">
        <LanguageSwitcher />
        <HamburgerButton
          ref={triggerRef}
          open={open}
          onClick={toggle}
          labelOpen={t('nav.aria.openMenu') || 'Open menu'}
          labelClose={t('nav.aria.closeMenu') || 'Close menu'}
        />
      </div>

      {/* Mobile menu portaled to body; header height unaffected */}
      <MobileMenu open={open} onClose={close} triggerRef={triggerRef} />
    </header>
  );
};

export default Header;
