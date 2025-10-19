'use client';

import { forwardRef } from 'react';

interface HamburgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
  labelOpen: string; // aria-label when menu is closed (action = open)
  labelClose: string; // aria-label when menu is open (action = close)
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ open, labelOpen, labelClose, className = '', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={open ? labelClose : labelOpen}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/15 ${className}`}
        {...rest}
      >
        {/* Hamburger / Close Icon (professional proportions)
            - Bar width reduced (w-4) for clearer negative space inside the circular button.
            - Closed state uses three bars at 25% / 50% / 75% of height.
            - Open state animates top & bottom to center and rotates to form a symmetric X.
            - Middle bar gracefully disappears.
            - Thickness 2px approximates common icon libraries (Font Awesome, Heroicons).
        */}
        <span className="relative block h-5 w-5" aria-hidden>
          {/**
           * Transform-only animation to avoid layout shifts:
           * Bars are all absolutely centered (top-1/2 left-1/2) and we only translate/rotate.
           * Closed:
           *  - Top bar: translateY(-6px)
           *  - Middle bar: translateY(0)
           *  - Bottom bar: translateY(6px)
           * Open:
           *  - Top & Bottom move to center (translateY(0)) and rotate (45 / -45)
           *  - Middle fades + scales out
           */}
          {/* Top bar */}
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-4 origin-center -translate-x-1/2 rounded bg-current transition-transform duration-300 ease-out ${open ? 'translate-y-0 rotate-45' : '-translate-y-[6px]'}`}
          />
          {/* Middle bar */}
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-4 origin-center -translate-x-1/2 -translate-y-1/2 rounded bg-current transition-all duration-200 ease-out ${open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'}`}
          />
          {/* Bottom bar */}
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-4 origin-center -translate-x-1/2 rounded bg-current transition-transform duration-300 ease-out ${open ? 'translate-y-0 -rotate-45' : 'translate-y-[6px]'}`}
          />
        </span>
      </button>
    );
  },
);
HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;
