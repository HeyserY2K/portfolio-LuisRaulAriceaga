/**
 * About Section Component
 *
 * Displays information about the portfolio owner, including a brief bio
 * and professional summary.
 *
 * @returns {JSX.Element} The About section component
 */
const About = () => {
  return (
    <section id='about' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>About Me</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
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
          <div className='rounded-lg bg-[var(--card-bg)] p-6'>
            <h3 className='mb-4 text-xl font-semibold'>Skills</h3>
            <ul className='list-inside list-disc space-y-2 text-[var(--text-secondary)]'>
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
