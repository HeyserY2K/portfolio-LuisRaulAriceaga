'use client';

import GlassPanel from '@/app/components/ui/GlassPanel';
import Section from '@/app/components/ui/Section';
import { getPortalData } from '@/lib/portal';
import type { PortalProject } from '@/types/portal';

import { useI18n } from '../../i18n/I18nProvider';

/**
 * Projects Grid Section (reusable)
 */
const ProjectsGrid = () => {
  const { t, locale } = useI18n();
  const portal = getPortalData(locale);
  const projects: PortalProject[] = portal.projects.featured;

  return (
    <Section id="projects">
      <h2 className="mb-8 text-3xl font-bold">{t('sections.projects.title')}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <GlassPanel
            key={project.title}
            className="p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,var(--glass-shadow-strong))]"
          >
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-[var(--text-secondary)]">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-sm backdrop-blur-[8px]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-[var(--brand-accent)] hover:underline">
              {idx < 2 ? 'View Template →' : 'View Project →'}
            </a>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsGrid;
