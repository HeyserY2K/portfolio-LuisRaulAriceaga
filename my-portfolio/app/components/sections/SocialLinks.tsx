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
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>Connect With Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
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


