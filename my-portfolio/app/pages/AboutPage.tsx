import React from 'react';

/**
 * About Section Component
 *
 * Displays information about the portfolio owner, including a brief bio
 * and professional summary.
 *
 * @returns {JSX.Element} The About section component
 */
const About: React.FC = () => {
  return (
    <section id='about' className='py-16'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>About Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-4'>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              Hi, I&apos;m a passionate developer with expertise in building
              modern web applications. I specialize in React, TypeScript, and
              Next.js.
            </p>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              With a strong foundation in software architecture and user
              experience, I create scalable and maintainable solutions for
              complex problems.
            </p>
          </div>
          <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Skills</h3>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
              <li>Frontend Development</li>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>UI/UX Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
