'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import GlassPanel from '@/app/components/ui/GlassPanel';
import Section from '@/app/components/ui/Section';
import { getPortalData } from '@/lib/portal';
import type { PortalSocialLink } from '@/types/portal';

import { useI18n } from '../../i18n/I18nProvider';

/**
 * Social Links Section (reusable)
 */
const SocialLinks = () => {
  const { t, locale } = useI18n();
  const portal = getPortalData(locale);
  const socialLinks: PortalSocialLink[] = portal.social.links;

  // Map social link names to React Icons
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return (
          <FaGithub className="h-6 w-6 fill-[var(--text-primary)] transition-colors duration-300" />
        );
      case 'linkedin':
        return (
          <FaLinkedin className="h-6 w-6 fill-[var(--text-primary)] transition-colors duration-300" />
        );
      case 'instagram':
        return (
          <FaInstagram className="h-6 w-6 fill-[var(--text-primary)] transition-colors duration-300" />
        );
      default:
        return null;
    }
  };

  return (
    <Section id="social">
      <h2 className="mb-8 text-3xl font-bold">{t('sections.social.title')}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {socialLinks.map((link) => (
          <GlassPanel
            key={link.name}
            className="p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,var(--glass-shadow-strong))]"
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {getSocialIcon(link.name)}
              <span className="font-medium">{link.name}</span>
            </Link>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default SocialLinks;
