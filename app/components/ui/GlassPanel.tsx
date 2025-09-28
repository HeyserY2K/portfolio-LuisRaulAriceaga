import React from 'react';
import { cn } from '@/app/lib/cn';

type GlassPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
  blur?: 'xs' | 'sm' | 'md' | 'lg';
  insetHighlight?: boolean;
};

const blurToClass: Record<NonNullable<GlassPanelProps['blur']>, string> = {
  xs: 'backdrop-blur-[6px]',
  sm: 'backdrop-blur-[10px]',
  md: 'backdrop-blur-[16px]',
  lg: 'backdrop-blur-[24px]',
};

export default function GlassPanel({
  as: Tag = 'div',
  className,
  children,
  blur = 'md',
  insetHighlight = true,
  ...rest
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        // Base translucent surface
        'relative rounded-2xl border border-[color:var(--glass-border)] bg-[rgb(var(--glass-rgb)_/_var(--glass-alpha))]',
        // Shadow/elevation
        'shadow-[0_10px_30px_rgba(0,0,0,var(--glass-shadow-strength))]',
        // Backdrop blur
        blurToClass[blur],
        className,
      )}
      {...rest}
    >
      {insetHighlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl [background:linear-gradient(180deg,rgba(255,255,255,var(--glass-highlight-strength))_0%,rgba(255,255,255,0)_30%)]"
        />
      )}
      {/* Content wrapper to keep highlight behind */}
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
