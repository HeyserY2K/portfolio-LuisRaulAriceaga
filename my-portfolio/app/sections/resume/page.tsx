import React from 'react';
export const metadata = {
  title: 'Resume - Luis Raul Ariceaga',
  description: 'Professional Resume for Luis Raul Ariceaga',
};

interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
}

interface Certification {
  title: string;
  dates: string;
}

interface Project {
  title: string;
  description: string;
}

interface ResumeData {
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
  };
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  languages: string[];
}

const getResumeData = async (): Promise<ResumeData> => {
  // Preferimos importar datos estáticos para rendimiento y simplicidad.
  const data = await import('@/data/resume.json');
  return data.default as ResumeData;
};

const ResumePage = async () => {
  const resume = await getResumeData();

  return (
    <main className='max-w-3xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-2'>{resume.name}</h1>
      <p className='text-sm text-gray-600'>
        <strong>Location:</strong> {resume.location}
      </p>
      <p className='text-sm text-gray-600'>
        <strong>Email:</strong> {resume.contact.email}
      </p>
      <p className='text-sm text-gray-600 mb-4'>
        <strong>Phone:</strong> {resume.contact.phone}
      </p>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Professional Summary</h2>
        <p>{resume.summary}</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Skills</h2>
        <ul className='list-disc list-inside'>
          {resume.skills.map((skill: string, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Experience</h2>
        {resume.experience.map((exp: Experience, idx: number) => (
          <div key={idx} className='mb-4'>
            <h3 className='font-bold'>
              {exp.title} | {exp.company}
            </h3>
            <p className='text-sm text-gray-600'>{exp.dates}</p>
            <ul className='list-disc list-inside mt-2'>
              {exp.description.map((desc: string, dIdx: number) => (
                <li key={dIdx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Education</h2>
        {resume.education.map((edu: Education, idx: number) => (
          <div key={idx} className='mb-4'>
            <p className='font-bold'>{edu.degree}</p>
            <p>{edu.institution}</p>
            <p className='text-sm text-gray-600'>
              Graduation Date: {edu.graduationDate}
            </p>
          </div>
        ))}
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Certifications</h2>
        {resume.certifications.map((cert: Certification, idx: number) => (
          <div key={idx} className='mb-2'>
            <p className='font-bold'>{cert.title}</p>
            <p className='text-sm text-gray-600'>{cert.dates}</p>
          </div>
        ))}
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Projects</h2>
        {resume.projects.map((proj: Project, idx: number) => (
          <div key={idx} className='mb-2'>
            <p className='font-bold'>{proj.title}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Languages</h2>
        <ul className='list-disc list-inside'>
          {resume.languages.map((lang: string, idx: number) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ResumePage;
