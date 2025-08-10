import React from 'react';
import { cn } from '@/app/lib/cn';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type CommonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
};

type GlassButtonProps = CommonProps & (AnchorProps | ButtonProps);

export default function GlassButton(props: GlassButtonProps) {
  const { variant = 'primary', className, children } = props;
  const base = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
    'border border-[color:var(--glass-border)] backdrop-blur-[12px] shadow-[0_8px_20px_rgba(0,0,0,var(--glass-shadow-strength))]',
  );

  const variants: Record<NonNullable<GlassButtonProps['variant']>, string> = {
    primary:
      'bg-[rgb(var(--glass-rgb)_/_var(--glass-alpha-strong))] text-[var(--text-primary)] hover:shadow-[0_12px_28px_rgba(0,0,0,var(--glass-shadow-strong))] hover:-translate-y-0.5 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-primary-rgb)_/_0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    secondary:
      'bg-[rgb(var(--glass-rgb)_/_var(--glass-alpha))] text-[var(--text-primary)] hover:shadow-[0_12px_28px_rgba(0,0,0,var(--glass-shadow-strong))] hover:-translate-y-0.5 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-secondary-rgb)_/_0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
  };

  if (props.as === 'a') {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </a>
    );
  }

  const { ...rest } = props as ButtonProps;
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
