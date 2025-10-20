import React from 'react';

import { cn } from '@/app/lib/cn';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type CommonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
  disableHighlight?: boolean; // hides pseudo bars if desired
  colorAccent?: boolean; // enables color change to brand accent on hover
};

type GlassButtonProps = CommonProps & (AnchorProps | ButtonProps);

const variantClass: Record<'primary' | 'secondary', string> = {
  primary: 'glass-button-primary',
  secondary: 'glass-button-secondary',
};

export default function GlassButton(props: GlassButtonProps) {
  const {
    variant = 'primary',
    className,
    children,
    disableHighlight = false,
    colorAccent = false,
  } = props;

  const classes = cn(
    'glass-button',
    variantClass[variant],
    disableHighlight && 'before:hidden after:hidden',
    colorAccent && 'glass-button-color-accent',
    className,
  );

  if (props.as === 'a') {
    const { href } = props as AnchorProps;
    // Create clean props by excluding custom component props
    const cleanProps = Object.fromEntries(
      Object.entries(props).filter(
        ([key]) =>
          !['variant', 'className', 'children', 'disableHighlight', 'colorAccent', 'as'].includes(
            key,
          ),
      ),
    ) as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a href={href} className={classes} {...cleanProps}>
        <span className="relative z-[1]">{children}</span>
      </a>
    );
  }

  // Create clean props by excluding custom component props
  const cleanProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        !['variant', 'className', 'children', 'disableHighlight', 'colorAccent', 'as'].includes(
          key,
        ),
    ),
  ) as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...cleanProps}>
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
