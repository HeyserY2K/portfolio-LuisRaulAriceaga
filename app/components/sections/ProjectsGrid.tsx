'use client';

import Image from 'next/image';

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

  const handleProjectClick = (link: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id="projects">
      <h2 className="mb-8 text-3xl font-bold">{t('sections.projects.title')}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassPanel
            key={project.title}
            className="group cursor-pointer overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,var(--glass-shadow-strong))]"
            onClick={() => handleProjectClick(project.link)}
          >
            {/* Thumbnail Section - Now Vertical */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient Overlay for Better Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Floating Action Indicator */}
              <div className="absolute right-3 top-3 rounded-full bg-[var(--glass-bg)] p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <svg
                  className="h-4 w-4 text-[var(--brand-accent)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-3 text-xl font-semibold transition-colors duration-200 group-hover:text-[var(--brand-accent)]">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-xs backdrop-blur-[8px]"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-xs backdrop-blur-[8px]">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsGrid;
