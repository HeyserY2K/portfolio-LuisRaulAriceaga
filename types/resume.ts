// Centralized Resume domain types (extracted from previous monolithic page)
// Keeping naming stable to avoid breaking imports later if we refactor feature modules.

export interface ResumeLocation {
  country: string;
  state_region: string;
  city: string;
}

export interface PersonalInformation {
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

export interface EducationDetail {
  degree_level: string;
  degree_title: string;
  institution: string;
  location: string;
  start_date: string;
  end_date: string;
  final_evaluation_grade: string;
  certifications: string[];
}

export interface EmploymentPeriod {
  start_date: string;
  end_date: string;
}

export interface ExperienceDetail {
  position: string;
  company: string;
  location: string;
  employment_period: EmploymentPeriod;
  industry: string;
  responsibilities: string[];
  achievements: string[];
  technologies_used: string[];
}

export interface NamedProficiency {
  name: string;
  proficiency: string;
  years_experience?: string;
}

export interface VersionControlProficiency {
  system: string;
  proficiency: string;
}

export interface TechProfile {
  programming_languages: NamedProficiency[];
  frameworks_libraries: NamedProficiency[];
  tools_platforms: NamedProficiency[];
  databases: NamedProficiency[];
  cloud_services: NamedProficiency[];
  version_control: VersionControlProficiency[];
  methodologies: string[];
  open_source_contributions: string[];
}

export interface LanguageEntry {
  name: string;
  proficiency: string;
}

export interface WorkPreferences {
  remote_work: boolean;
  in_person_work: boolean;
  open_to_relocation: boolean;
  willing_to_complete_assessments: boolean;
  willing_to_undergo_drug_tests: boolean;
  willing_to_undergo_background_checks: boolean;
}

export interface SalaryRange {
  min: number;
  max: number;
}

export interface SalaryExpectations {
  currency: string;
  range: SalaryRange;
}

export interface ResumeStructured {
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
