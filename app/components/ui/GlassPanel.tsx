import React from 'react';

import { cn } from '@/app/lib/cn';

type GlassPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
  blur?: 'xs' | 'sm' | 'md' | 'lg';
  insetHighlight?: boolean;
};

const blurToClass: Record<NonNullable<GlassPanelProps['blur']>, string> = {
  xs: 'glass-panel-blur-xs',
  sm: 'glass-panel-blur-sm',
  md: 'glass-panel-blur-md',
  lg: 'glass-panel-blur-lg',
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
        // Centralized base + hover effects
        'glass-panel',
        blurToClass[blur],
        // Remove highlight pseudo elements when disabled
        !insetHighlight && 'before:hidden after:hidden',
        className,
      )}
      {...rest}
    >
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
