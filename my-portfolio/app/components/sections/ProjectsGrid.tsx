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
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <div key={project.title} className='bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className='text-blue-600 dark:text-blue-400 hover:underline'>
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


