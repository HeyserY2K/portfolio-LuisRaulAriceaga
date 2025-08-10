"use client";

import { useI18n } from '../../i18n/I18nProvider';
import portalEn from '@/data/portal-en.json';
import portalEs from '@/data/portal-es.json';
import type { PortalData } from '@/types/portal';

/**
 * Store Teaser Section (reusable)
 */
const StoreTeaser = () => {
  const { t, locale } = useI18n();
  const portal = (locale === 'es' ? portalEs : portalEn) as PortalData;
  return (
    <section id='store' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>{t('sections.store.title')}</h2>
        <div className='rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800'>
          <h3 className='mb-4 text-2xl font-semibold'>Coming Soon</h3>
          <p className='text-gray-600 dark:text-gray-300'>
            {portal.store.description || t('sections.store.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreTeaser;


