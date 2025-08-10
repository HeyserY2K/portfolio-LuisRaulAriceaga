import Link from 'next/link';

/**
 * Social Links Section (reusable)
 */
const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '📦' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  ];

  return (
    <section id='social' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>Connect With Me</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center rounded-lg bg-gray-100 p-6 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <span className='mr-2 text-2xl'>{link.icon}</span>
              <span className='font-medium'>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;


