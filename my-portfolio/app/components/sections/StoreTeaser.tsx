"use client";

import Section from '@/app/components/ui/Section';
import GlassPanel from '@/app/components/ui/GlassPanel';
import portalEn from '@/data/portal-en.json';
import portalEs from '@/data/portal-es.json';
import type { PortalData } from '@/types/portal';
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Store Teaser Section (reusable)
 */
const StoreTeaser = () => {
  const { t, locale } = useI18n();
  const portal = (locale === 'es' ? portalEs : portalEn) as PortalData;
  return (
    <Section id='store'>
      <h2 className='mb-8 text-3xl font-bold'>{t('sections.store.title')}</h2>
      <GlassPanel className='p-8 text-center'>
        <h3 className='mb-4 text-2xl font-semibold'>Coming Soon</h3>
        <p className='text-[var(--text-secondary)]'>
          {portal.store.description || t('sections.store.description')}
        </p>
      </GlassPanel>
    </Section>
  );
};

export default StoreTeaser;


