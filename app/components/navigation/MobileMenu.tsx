'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { useNavItems } from './NavConfig';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Ref of the button that toggles this menu; excluded from outside-click close */
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

/**
 * Mobile navigation panel. Simple focus management: focus first link on open
 * and restore focus to trigger on unmount if provided.
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, triggerRef }) => {
  const { items } = useNavItems();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Focus first link when opening
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Click / pointer outside (ignore trigger button region)
  useEffect(() => {
    if (!open) return;
    const handler = (e: PointerEvent) => {
      const target = e.target as Node;
      if (triggerRef?.current && triggerRef.current.contains(target)) return; // ignore toggle
      if (panelRef.current && !panelRef.current.contains(target)) {
        onClose();
      }
    };
    window.addEventListener('pointerdown', handler);
    return () => window.removeEventListener('pointerdown', handler);
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      className="absolute right-0 top-full mt-3 w-64 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/20 bg-white/95 shadow-xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[rgba(20,20,20,0.92)]"
    >
      <ul className="flex flex-col divide-y divide-white/10 text-sm">
        {items.map((item, idx) => (
          <li key={item.href}>
            <Link
              ref={idx === 0 ? firstLinkRef : undefined}
              href={item.href}
              aria-label={item.aria}
              onClick={onClose}
              className="block w-full px-5 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-white/20 hover:text-[var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
