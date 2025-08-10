/**
 * Projects Grid Section (reusable)
 */
const ProjectsGrid = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js and TypeScript',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
  ];

  return (
    <section id='projects' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>Featured Projects</h2>
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


