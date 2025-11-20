'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
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
      className="glass-surface sticky top-4 z-40 flex w-full items-center gap-3 px-4 py-2 sm:px-6"
      aria-label={t('nav.aria.main')}
    >
      <Link
        href={`/${locale}`}
        aria-label={t('nav.aria.home')}
        className="flex shrink-0 items-center"
      >
        <div className="group flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:cursor-pointer">
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
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
