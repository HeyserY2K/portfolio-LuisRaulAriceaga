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
            <div key={project.title} className='rounded-lg bg-gray-100 p-6 transition-shadow hover:shadow-lg dark:bg-gray-800'>
              <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
              <p className='mb-4 text-gray-600 dark:text-gray-300'>{project.description}</p>
              <div className='mb-4 flex flex-wrap gap-2'>
                {project.tech.map((tech) => (
                  <span key={tech} className='rounded-full bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700'>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className='text-blue-600 hover:underline dark:text-blue-400'>
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


