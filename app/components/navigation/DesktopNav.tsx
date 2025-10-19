'use client';

import Link from 'next/link';

import LanguageSwitcher from '@/app/components/LanguageSwitcher';

import { useNavItems } from './NavConfig';

interface DesktopNavProps {
  onNavigate?: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onNavigate }) => {
  const { items } = useNavItems();
  return (
    <nav aria-label="Main" className="ml-auto hidden md:block">
      <ul className="flex items-center gap-7 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-label={item.aria}
              onClick={onNavigate}
              className="whitespace-nowrap rounded text-[var(--text-primary)] transition-colors hover:text-[var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="pl-2">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
