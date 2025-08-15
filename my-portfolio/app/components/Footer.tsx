'use client';

import React from 'react';

import { useI18n } from '../i18n/I18nProvider';

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const text = t('footer.copyright', { year });
  return (
    <footer
      className="mx-auto my-10 w-[min(100%,_1200px)] rounded-2xl border border-[color:var(--glass-border)] bg-[rgb(var(--glass-rgb)_/_var(--glass-alpha))] py-6 text-center text-[var(--text-primary)] shadow-[0_8px_24px_rgba(0,0,0,var(--glass-shadow-strength))] backdrop-blur-[12px]"
      aria-label={t('footer.aria.footer')}
    >
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
