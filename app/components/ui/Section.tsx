import React from 'react';
import { cn } from '@/app/lib/cn';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
};

export default function Section({ className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section className={cn('py-16 scroll-mt-24', className)} {...rest}>
      <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-8', containerClassName)}>{children}</div>
    </section>
  );
}


