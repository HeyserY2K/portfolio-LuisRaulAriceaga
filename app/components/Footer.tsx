'use client';

import React from 'react';

import { useI18n } from '../i18n/I18nProvider';

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const text = t('footer.copyright', { year });
  return (
    <footer
      className="glass-surface mx-auto my-10 w-[min(100%,_1200px)] py-6 text-center text-[var(--text-primary)]"
      aria-label={t('footer.aria.footer')}
    >
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
