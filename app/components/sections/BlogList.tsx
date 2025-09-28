'use client';

import Section from '@/app/components/ui/Section';
import GlassPanel from '@/app/components/ui/GlassPanel';
import portalBundle from '@/data/portal.json';
import type { PortalBlogPost, PortalBundle, PortalData } from '@/types/portal';
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Blog List Section (reusable)
 */
const BlogList = () => {
  const { t, locale } = useI18n();
  const bundle = portalBundle as PortalBundle;
  const portal = (bundle[locale as 'en' | 'es'] ?? bundle.en) as PortalData;
  const posts: PortalBlogPost[] = portal.blog.posts.slice(0, 3);

  return (
    <Section id="blog">
      <h2 className="mb-8 text-3xl font-bold">{t('sections.blog.title')}</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <GlassPanel
            key={post.title}
            className="p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,var(--glass-shadow-strong))]"
          >
            <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
            <p className="mb-4 text-[var(--text-secondary)]">{post.excerpt}</p>
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default BlogList;
