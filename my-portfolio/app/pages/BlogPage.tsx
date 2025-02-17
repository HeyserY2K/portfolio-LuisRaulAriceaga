import React from 'react';

/**
 * Blog Section Component
 *
 * Displays a list of blog posts with titles, excerpts, and dates.
 * Currently uses placeholder data.
 *
 * @returns {JSX.Element} The Blog section component
 */
const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js and React',
      date: '2024-03-15',
      readTime: '5 min read'
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for clean code',
      date: '2024-03-10',
      readTime: '7 min read'
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for efficient styling with Tailwind CSS',
      date: '2024-03-05',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.title}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
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