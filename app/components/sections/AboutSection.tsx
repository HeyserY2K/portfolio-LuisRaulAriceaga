'use client';

import Link from 'next/link';

import GlassPanel from '@/app/components/ui/GlassPanel';
import Section from '@/app/components/ui/Section';
import { getPortalData } from '@/lib/portal';

import { useI18n } from '../../i18n/I18nProvider';

/**
 * About Section Component (reusable)
 */
const AboutSection = () => {
  const { t, locale } = useI18n();
  const portal = getPortalData(locale);
  // const name = portal.profile.name;
  const summary = portal.about.summary;
  const { email, location } = portal.profile;
  return (
    <Section id="about">
      <h2 className="mb-2 text-3xl font-bold">{t('sections.about.title')}</h2>
      {/* <p className="mb-8 text-[var(--text-secondary)]">{name}</p> */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg text-[var(--text-secondary)]">{summary}</p>
          <p className="text-sm text-[var(--text-secondary)]">
            {location.city}, {location.state_region}, {location.country} · {email}
          </p>
          <div>
            <Link
              href={`/${locale}/sections/resume`}
              className="text-[var(--brand-accent)] underline"
            >
              {t('nav.resume')}
            </Link>
          </div>
        </div>
        <GlassPanel className="p-6">
          <h3 className="mb-4 text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--text-secondary)]">
            {portal.about.skills.slice(0, 10).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 backdrop-blur-[8px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
};

export default AboutSection;
