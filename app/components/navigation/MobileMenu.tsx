'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

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
  const [style, setStyle] = useState<React.CSSProperties | null>(null);

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

  // Position menu relative to trigger (professional libs anchor to trigger rect)
  useEffect(() => {
    if (!open) {
      setStyle(null);
      return;
    }
    const anchor = triggerRef?.current;
    if (!anchor) return;
    const rect = anchor.getBoundingClientRect();
    const gap = 8; // space below trigger
    const width = 256; // default width
    // Align right edge of panel with right edge of trigger for consistency
    const left = Math.max(8, Math.min(rect.right - width, window.innerWidth - width - 8));
    const top = rect.bottom + gap;
    setStyle({ position: 'fixed', top, left, zIndex: 60, width });
  }, [open, triggerRef]);

  // Reposition on resize / scroll while open
  useEffect(() => {
    if (!open) return;
    const handler = () => {
      const anchor = triggerRef?.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const gap = 8;
      const width = 256;
      const left = Math.max(8, Math.min(rect.right - width, window.innerWidth - width - 8));
      const top = rect.bottom + gap;
      setStyle((prev) =>
        prev ? { ...prev, top, left } : { position: 'fixed', top, left, zIndex: 60, width },
      );
    };
    window.addEventListener('resize', handler);
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('scroll', handler);
    };
  }, [open, triggerRef]);

  if (!open || !style) return null;

  const panel = (
    <div
      ref={panelRef}
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      style={style}
      // eslint-disable-next-line tailwindcss/classnames-order
      className="md:hidden overflow-hidden glass-surface glass-interactive animate-fade-slide"
    >
      <ul className="flex flex-col divide-y divide-white/10 text-sm">
        {items.map((item, idx) => (
          <li key={item.href}>
            <Link
              ref={idx === 0 ? firstLinkRef : undefined}
              href={item.href}
              aria-label={item.aria}
              onClick={onClose}
              className="block w-full px-5 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-white/15 hover:text-[var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return createPortal(panel, document.body);
};

export default MobileMenu;
