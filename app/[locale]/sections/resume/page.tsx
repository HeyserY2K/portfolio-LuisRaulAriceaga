import React from 'react';

import type {
  EmploymentPeriod,
  ExperienceDetail,
  EducationDetail,
  NamedProficiency,
  VersionControlProficiency,
  LanguageEntry,
  ResumeStructured,
} from '@/types/resume';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Resume - Luis Raul Ariceaga',
  description: 'Professional Resume for Luis Raul Ariceaga',
};

const formatEmploymentPeriod = (period: EmploymentPeriod): string => {
  const start = period.start_date || '';
  const end = period.end_date || '';
  return [start, end].filter(Boolean).join(' - ');
};

type RouteParams = { locale?: string };
type ResumePageProps = { params?: RouteParams };

const ResumePage = async ({ params }: ResumePageProps) => {
  const localeParam = params?.locale;
  const lang = (localeParam === 'es' ? 'es' : 'en') as 'en' | 'es';

  // Load resume data & labels. Using relative import instead of alias in a template
  // string because some bundler edge cases fail to resolve path aliases inside
  // a dynamic template segment at build time.
  const resume: ResumeStructured = (await import(`../../../../data/resume-${lang}.json`))
    .default as ResumeStructured;
  const t: Record<string, string> = (await import(`../../../../i18n/resume/${lang}.json`))
    .default as Record<string, string>;
  const name = `${resume.personal_information.first_name} ${resume.personal_information.last_name}`;
  const { email, location, portfolio_url, linkedin_url } = resume.personal_information;

  return (
    <main className="mx-auto max-w-3xl p-4">
      <header className="mb-6">
        <h1 className="mb-1 text-3xl font-bold">{name}</h1>
        {/* Removed in-page locale toggle (global LanguageSwitcher in Header handles language) */}
      </header>

      <p className="text-sm text-[var(--text-secondary)]">
        {location.city}, {location.state_region}, {location.country}
      </p>
      <p className="text-sm text-[var(--text-secondary)]">{email}</p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm">
        {portfolio_url && (
          <a
            className="text-[var(--brand-accent)] underline"
            href={portfolio_url}
            target="_blank"
            rel="noreferrer"
          >
            {t.portfolio}
          </a>
        )}
        {linkedin_url && (
          <a
            className="text-[var(--brand-accent)] underline"
            href={linkedin_url}
            target="_blank"
            rel="noreferrer"
          >
            {t.linkedIn}
          </a>
        )}
      </div>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.professionalSummary}</h2>
        <p>{resume.professional_summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.coreSkills}</h2>
        <ul className="list-inside list-disc">
          {resume.core_skills.map((skill: string, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {resume.desired_roles?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{t.desiredRoles}</h2>
          <ul className="list-inside list-disc">
            {resume.desired_roles.map((role: string, idx: number) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.experience}</h2>
        {resume.experience_details.map((exp: ExperienceDetail, idx: number) => (
          <div key={idx} className="mb-6">
            <h3 className="font-bold">
              {exp.position} | {exp.company}
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {exp.location} • {formatEmploymentPeriod(exp.employment_period)} • {exp.industry}
            </p>
            {exp.responsibilities?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">{t.responsibilities}</p>
                <ul className="list-inside list-disc">
                  {exp.responsibilities.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {exp.achievements?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">{t.achievements}</p>
                <ul className="list-inside list-disc">
                  {exp.achievements.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {exp.technologies_used?.length > 0 && (
              <p className="mt-2 text-sm">
                {t.tech}: {exp.technologies_used.join(', ')}
              </p>
            )}
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.education}</h2>
        {resume.education_details.map((edu: EducationDetail, idx: number) => (
          <div key={idx} className="mb-4">
            <p className="font-bold">{edu.degree_title}</p>
            <p>
              {edu.institution} • {edu.location}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {edu.start_date} - {edu.end_date} • {edu.degree_level} • {edu.final_evaluation_grade}
            </p>
            {edu.certifications?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">{t.certifications}</p>
                <ul className="list-inside list-disc">
                  {edu.certifications.map((c: string, i: number) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.technicalProfile}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-semibold">{t.programmingLanguages}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.programming_languages.map(
                (item: NamedProficiency, i: number) => (
                  <li key={i}>
                    {item.name} — {item.proficiency}
                    {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.frameworksLibraries}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.frameworks_libraries.map((item: NamedProficiency, i: number) => (
                <li key={i}>
                  {item.name} — {item.proficiency}
                  {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.toolsPlatforms}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.tools_platforms.map((item: NamedProficiency, i: number) => (
                <li key={i}>
                  {item.name} — {item.proficiency}
                  {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.databases}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.databases.map((item: NamedProficiency, i: number) => (
                <li key={i}>
                  {item.name} — {item.proficiency}
                  {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.cloudServices}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.cloud_services.map((item: NamedProficiency, i: number) => (
                <li key={i}>
                  {item.name} — {item.proficiency}
                  {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.versionControl}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.version_control.map(
                (vc: VersionControlProficiency, i: number) => (
                  <li key={i}>
                    {vc.system} — {vc.proficiency}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        {resume.tech_profile.methodologies?.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold">{t.methodologies}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.methodologies.map((m: string, i: number) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.languages}</h2>
        <ul className="list-inside list-disc">
          {resume.languages.map((lang: LanguageEntry, idx: number) => (
            <li key={idx}>
              {lang.name} — {lang.proficiency}
            </li>
          ))}
        </ul>
      </section>

      {resume.interests?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{t.interests}</h2>
          <ul className="list-inside list-disc">
            {resume.interests.map((interest: string, idx: number) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Private sections removed intentionally */}
    </main>
  );
};

export default ResumePage;
