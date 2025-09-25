import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Resume - Luis Raul Ariceaga',
  description: 'Professional Resume for Luis Raul Ariceaga',
};

interface ResumeLocation {
  country: string;
  state_region: string;
  city: string;
}

interface PersonalInformation {
  first_name: string;
  last_name: string;
  preferred_name: string;
  email: string;
  phone: string;
  location: ResumeLocation;
  address: string;
  postal_code: string;
  github_url: string;
  portfolio_url: string;
  linkedin_url: string;
}

interface EducationDetail {
  degree_level: string;
  degree_title: string;
  institution: string;
  location: string;
  start_date: string;
  end_date: string;
  final_evaluation_grade: string;
  certifications: string[];
}

interface EmploymentPeriod {
  start_date: string;
  end_date: string;
}

interface ExperienceDetail {
  position: string;
  company: string;
  location: string;
  employment_period: EmploymentPeriod;
  industry: string;
  responsibilities: string[];
  achievements: string[];
  technologies_used: string[];
}

interface NamedProficiency {
  name: string;
  proficiency: string;
  years_experience?: string;
}

interface VersionControlProficiency {
  system: string;
  proficiency: string;
}

interface TechProfile {
  programming_languages: NamedProficiency[];
  frameworks_libraries: NamedProficiency[];
  tools_platforms: NamedProficiency[];
  databases: NamedProficiency[];
  cloud_services: NamedProficiency[];
  version_control: VersionControlProficiency[];
  methodologies: string[];
  open_source_contributions: string[];
}

interface LanguageEntry {
  name: string;
  proficiency: string;
}

interface WorkPreferences {
  remote_work: boolean;
  in_person_work: boolean;
  open_to_relocation: boolean;
  willing_to_complete_assessments: boolean;
  willing_to_undergo_drug_tests: boolean;
  willing_to_undergo_background_checks: boolean;
}

interface SalaryRange {
  min: number;
  max: number;
}

interface SalaryExpectations {
  currency: string;
  range: SalaryRange;
}

interface ResumeStructured {
  personal_information: PersonalInformation;
  education_details: EducationDetail[];
  professional_summary: string;
  core_skills: string[];
  desired_roles: string[];
  experience_details: ExperienceDetail[];
  tech_profile: TechProfile;
  languages: LanguageEntry[];
  interests: string[];
  work_preferences: WorkPreferences;
  availability: { notice_period: string };
  salary_expectations: SalaryExpectations;
  legal_authorization: string[];
}

const translations = {
  en: {
    portfolio: 'Portfolio',
    linkedIn: 'LinkedIn',
    professionalSummary: 'Professional Summary',
    coreSkills: 'Core Skills',
    desiredRoles: 'Desired Roles',
    experience: 'Experience',
    responsibilities: 'Responsibilities',
    achievements: 'Achievements',
    education: 'Education',
    certifications: 'Certifications',
    technicalProfile: 'Technical Profile',
    programmingLanguages: 'Programming Languages',
    frameworksLibraries: 'Frameworks & Libraries',
    toolsPlatforms: 'Tools & Platforms',
    databases: 'Databases',
    cloudServices: 'Cloud Services',
    versionControl: 'Version Control',
    methodologies: 'Methodologies',
    languages: 'Languages',
    interests: 'Interests',
    workPreferences: 'Work Preferences',
    remoteWork: 'Remote work',
    inPersonWork: 'In person work',
    openToRelocation: 'Open to relocation',
    willingToCompleteAssessments: 'Willing to complete assessments',
    willingToUndergoDrugTests: 'Willing to undergo drug tests',
    willingToUndergoBackgroundChecks: 'Willing to undergo background checks',
    availability: 'Availability',
    noticePeriod: 'Notice period',
    salaryExpectations: 'Salary Expectations',
    tech: 'Tech',
    yes: 'Yes',
    no: 'No',
  },
  es: {
    portfolio: 'Portafolio',
    linkedIn: 'LinkedIn',
    professionalSummary: 'Resumen profesional',
    coreSkills: 'Habilidades clave',
    desiredRoles: 'Roles deseados',
    experience: 'Experiencia',
    responsibilities: 'Responsabilidades',
    achievements: 'Logros',
    education: 'Educación',
    certifications: 'Certificaciones',
    technicalProfile: 'Perfil técnico',
    programmingLanguages: 'Lenguajes de programación',
    frameworksLibraries: 'Frameworks y bibliotecas',
    toolsPlatforms: 'Herramientas y plataformas',
    databases: 'Bases de datos',
    cloudServices: 'Servicios en la nube',
    versionControl: 'Control de versiones',
    methodologies: 'Metodologías',
    languages: 'Idiomas',
    interests: 'Intereses',
    workPreferences: 'Preferencias laborales',
    remoteWork: 'Trabajo remoto',
    inPersonWork: 'Trabajo presencial',
    openToRelocation: 'Abierto a reubicación',
    willingToCompleteAssessments: 'Dispuesto a completar evaluaciones',
    willingToUndergoDrugTests: 'Dispuesto a pruebas de drogas',
    willingToUndergoBackgroundChecks: 'Dispuesto a verificaciones de antecedentes',
    availability: 'Disponibilidad',
    noticePeriod: 'Periodo de aviso',
    salaryExpectations: 'Expectativas salariales',
    tech: 'Tecnologías',
    yes: 'Sí',
    no: 'No',
  },
} as const;

const getResumeData = async (lang: 'en' | 'es'): Promise<ResumeStructured> => {
  if (lang === 'es') {
    const data = await import('@/data/resume-es.json');
    return data.default as ResumeStructured;
  }
  const data = await import('@/data/resume-en.json');
  return data.default as ResumeStructured;
};

const formatEmploymentPeriod = (period: EmploymentPeriod): string => {
  const start = period.start_date || '';
  const end = period.end_date || '';
  return [start, end].filter(Boolean).join(' - ');
};

type SearchParams = Record<string, string | string[] | undefined>;
type PageParams = { locale?: string };
type PageProps = { searchParams?: SearchParams; params?: PageParams };

const ResumePage = async ({ searchParams, params }: PageProps) => {
  const sp: SearchParams = searchParams ?? {};
  const langRaw = sp.lang;
  const langStr = Array.isArray(langRaw) ? langRaw[0] : langRaw;

  const localeParam = params?.locale;
  const lang = (langStr === 'es' || localeParam === 'es' ? 'es' : 'en') as 'en' | 'es';

  const resume = await getResumeData(lang);
  const t = translations[lang];
  const name = `${resume.personal_information.first_name} ${resume.personal_information.last_name}`;
  const { email, location, portfolio_url, linkedin_url } = resume.personal_information;

  return (
    <main className="mx-auto max-w-3xl p-4">
      <header className="mb-6 flex items-start justify-between gap-4">
        <h1 className="mb-1 text-3xl font-bold">{name}</h1>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href={`/en/sections/resume`}
            className={lang === 'en' ? 'font-semibold underline' : 'hover:underline'}
          >
            EN
          </Link>
          <span>·</span>
          <Link
            href={`/es/sections/resume`}
            className={lang === 'es' ? 'font-semibold underline' : 'hover:underline'}
          >
            ES
          </Link>
        </div>
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
          {resume.core_skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {resume.desired_roles?.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{t.desiredRoles}</h2>
          <ul className="list-inside list-disc">
            {resume.desired_roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.experience}</h2>
        {resume.experience_details.map((exp, idx) => (
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
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {exp.achievements?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">{t.achievements}</p>
                <ul className="list-inside list-disc">
                  {exp.achievements.map((item, i) => (
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
        {resume.education_details.map((edu, idx) => (
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
                  {edu.certifications.map((c, i) => (
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
              {resume.tech_profile.programming_languages.map((item, i) => (
                <li key={i}>
                  {item.name} — {item.proficiency}
                  {item.years_experience ? ` (${item.years_experience} yrs)` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t.frameworksLibraries}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.frameworks_libraries.map((item, i) => (
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
              {resume.tech_profile.tools_platforms.map((item, i) => (
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
              {resume.tech_profile.databases.map((item, i) => (
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
              {resume.tech_profile.cloud_services.map((item, i) => (
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
              {resume.tech_profile.version_control.map((vc, i) => (
                <li key={i}>
                  {vc.system} — {vc.proficiency}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {resume.tech_profile.methodologies?.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold">{t.methodologies}</p>
            <ul className="list-inside list-disc">
              {resume.tech_profile.methodologies.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">{t.languages}</h2>
        <ul className="list-inside list-disc">
          {resume.languages.map((lang, idx) => (
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
            {resume.interests.map((interest, idx) => (
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
