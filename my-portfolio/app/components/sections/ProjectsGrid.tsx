"use client";

import { useI18n } from '../../i18n/I18nProvider';
import portalEn from '@/data/portal-en.json';
import portalEs from '@/data/portal-es.json';
import type { PortalData, PortalProject } from '@/types/portal';

/**
 * Projects Grid Section (reusable)
 */
const ProjectsGrid = () => {
  const { t, locale } = useI18n();
  const portal = (locale === 'es' ? portalEs : portalEn) as PortalData;
  const projects: PortalProject[] = portal.projects.featured;

  return (
    <section id='projects' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>{t('sections.projects.title')}</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <div key={project.title} className='rounded-lg bg-[var(--card-bg)] p-6 transition-shadow hover:shadow-lg'>
              <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
              <p className='mb-4 text-[var(--text-secondary)]'>{project.description}</p>
              <div className='mb-4 flex flex-wrap gap-2'>
                {project.tech.map((tech) => (
                  <span key={tech} className='rounded-full bg-[var(--chip-button)] px-3 py-1 text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className='text-[var(--brand-accent)] hover:underline'>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;


