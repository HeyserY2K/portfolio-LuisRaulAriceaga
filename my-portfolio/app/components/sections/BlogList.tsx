"use client";

import { useI18n } from '../../i18n/I18nProvider';
import portalEn from '@/data/portal-en.json';
import portalEs from '@/data/portal-es.json';
import type { PortalBlogPost, PortalData } from '@/types/portal';

/**
 * Blog List Section (reusable)
 */
const BlogList = () => {
  const { t, locale } = useI18n();
  const portal = (locale === 'es' ? portalEs : portalEn) as PortalData;
  const posts: PortalBlogPost[] = portal.blog.posts.slice(0, 3);

  return (
    <section id='blog' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>{t('sections.blog.title')}</h2>
        <div className='space-y-8'>
          {posts.map((post) => (
            <article key={post.title} className='rounded-lg bg-[var(--card-bg)] p-6 transition-shadow hover:shadow-lg'>
              <h3 className='mb-2 text-xl font-semibold'>{post.title}</h3>
              <p className='mb-4 text-[var(--text-secondary)]'>{post.excerpt}</p>
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

export default BlogList;


