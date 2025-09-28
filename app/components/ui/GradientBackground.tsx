import React from 'react';
import { cn } from '../../lib/cn';

type GradientBackgroundProps = {
  className?: string;
};

export default function GradientBackground({ className }: GradientBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none fixed inset-0 z-0 overflow-hidden', className)}
    >
      {/* Animated, low-cost blobs: all brand colors distributed */}
      {/* Purple (primary) – top-left (small hitbox, larger visual) */}
      <div className="absolute left-[6%] top-[8%] h-[28vh] w-[22vw] dvd-x-1 dvd-y-2">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgb(var(--accent-primary-rgb)/0.30) 0%, rgb(var(--accent-primary-rgb)/0.18) 45%, transparent 88%)',
            borderRadius: '70% 30% 62% 38% / 58% 42% 66% 34%',
          }}
        />
      </div>
      {/* Indigo (secondary) – top-right */}
      <div className="absolute right-[6%] top-[6%] h-[34vh] w-[26vw] dvd-x-3 dvd-y-1">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[190%] w-[190%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgb(var(--accent-secondary-rgb)/0.28) 0%, rgb(var(--accent-secondary-rgb)/0.16) 50%, transparent 90%)',
            borderRadius: '66% 34% 72% 28% / 50% 50% 56% 44%',
          }}
        />
      </div>
      {/* Red (Persian) – bottom-left */}
      <div className="absolute bottom-[6%] left-[8%] h-[46vh] w-[38vw] dvd-x-5 dvd-y-3">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 blur-[60px]"
          style={{
            background:
              'radial-gradient(closest-side, rgb(var(--accent-contrast-rgb)/0.26) 0%, rgb(var(--accent-contrast-rgb)/0.15) 48%, transparent 88%)',
            borderRadius: '74% 26% 64% 36% / 60% 40% 70% 30%',
          }}
        />
      </div>
      {/* Aqua (tertiary) – center-mid */}
      <div className="absolute left-1/2 top-[55%] h-[40vh] w-[32vw] -translate-x-1/2 -translate-y-1/2 dvd-x-2 dvd-y-4">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[185%] w-[185%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgb(var(--accent-tertiary-rgb)/0.26) 0%, rgb(var(--accent-tertiary-rgb)/0.15) 52%, transparent 90%)',
            borderRadius: '68% 32% 60% 40% / 64% 36% 58% 42%',
          }}
        />
      </div>
      {/* Fuchsia – bottom-right */}
      <div className="absolute right-[10%] bottom-[8%] h-[22vh] w-[18vw] translate-x-1/2 dvd-x-4 dvd-y-5">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[210%] w-[210%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgb(var(--accent-fuchsia-rgb)/0.26) 0%, rgb(var(--accent-fuchsia-rgb)/0.14) 48%, transparent 90%)',
            borderRadius: '46% 54% 34% 66% / 58% 42% 62% 38%',
          }}
        />
      </div>

      {/* Optional subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:var(--grain-data-url)]" />
    </div>
  );
}
