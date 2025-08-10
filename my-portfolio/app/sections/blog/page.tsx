/**
 * Blog Section Component
 *
 * Displays a list of blog posts with titles, excerpts, and dates.
 * Currently uses placeholder data.
 *
 * @returns {JSX.Element} The Blog section component
 */
const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with Next.js',
      excerpt:
        'Learn how to build modern web applications with Next.js and React',
      date: '2024-03-15',
      readTime: '5 min read',
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for clean code',
      date: '2024-03-10',
      readTime: '7 min read',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for efficient styling with Tailwind CSS',
      date: '2024-03-05',
      readTime: '6 min read',
    },
  ];

  return (
    <section id='blog' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>Latest Posts</h2>
        <div className='space-y-8'>
          {posts.map((post) => (
            <article
              key={post.title}
              className='rounded-lg bg-[var(--card-bg)] p-6 transition-shadow hover:shadow-lg'
            >
              <h3 className='mb-2 text-xl font-semibold'>{post.title}</h3>
              <p className='mb-4 text-[var(--text-secondary)]'>
                {post.excerpt}
              </p>
              <div className='flex items-center text-sm text-[var(--text-secondary)]'>
                <span>{post.date}</span>
                <span className='mx-2'>•</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
