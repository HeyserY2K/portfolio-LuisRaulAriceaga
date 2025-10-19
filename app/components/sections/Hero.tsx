'use client';

import Image from 'next/image';

import GlassButton from '@/app/components/ui/GlassButton';
import GlassPanel from '@/app/components/ui/GlassPanel';
import Section from '@/app/components/ui/Section';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function Hero() {
  const { locale, t } = useI18n();
  const prefix = `/${locale}`;

  return (
    <Section className="pt-20">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md dark:bg-white/5">
            <span>{t('sections.hero.availability')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Luis Raúl Ariceaga</h1>
          <p className="mt-3 max-w-xl text-lg text-[var(--text-secondary)]">
            {t('sections.hero.summary')}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <GlassButton as="a" href={`${prefix}/sections/resume`}>
              {t('sections.hero.viewResume')}
            </GlassButton>
            <GlassButton
              as="a"
              href={`mailto:luisra.heyser@gmail.com`}
              variant="secondary"
              className="ring-1 ring-[rgba(var(--accent-contrast-rgb),0.25)]"
              style={{ alignContent: 'center' }}
            >
              {t('sections.hero.emailCta')}
            </GlassButton>
          </div>
        </div>

        <GlassPanel className="mx-auto w-full max-w-sm p-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
            {/* Replace with your image path in public */}
            <Image
              src="/portrait.jpg"
              alt="Portrait of Luis Raúl Ariceaga"
              fill
              className="object-cover"
              priority
            />
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
}
