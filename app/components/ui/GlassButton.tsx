import React from 'react';

import { cn } from '@/app/lib/cn';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type CommonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
  disableHighlight?: boolean; // hides pseudo bars if desired
};

type GlassButtonProps = CommonProps & (AnchorProps | ButtonProps);

const variantClass: Record<'primary' | 'secondary', string> = {
  primary: 'glass-button-primary',
  secondary: 'glass-button-secondary',
};

export default function GlassButton(props: GlassButtonProps) {
  const { variant = 'primary', className, children, disableHighlight = false } = props;
  const classes = cn(
    'glass-button',
    variantClass[variant],
    disableHighlight && 'before:hidden after:hidden',
    className,
  );

  if (props.as === 'a') {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        <span className="relative z-[1]">{children}</span>
      </a>
    );
  }

  const { ...rest } = props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
