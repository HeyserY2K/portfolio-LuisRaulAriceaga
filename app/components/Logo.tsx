'use client';

import React, { useMemo } from 'react';

const FULL_PATH =
  'M990.784 432.086C1203.94 291.323 2272.16 14.6212 3059.37 291.322M214.559 1815.59C1354.09 584.915 3348.95 515.204 3696.17 1934.9M214.559 3565.08C266.756 3062.38 356.681 2817.65 623.451 2444.33M292.316 4256.83C310.327 4343.45 308.54 4347.16 345.941 4411M173 910.682C244.27 833.006 287.729 792.241 372.754 725.679M1116.8 4393.57C536.31 3362.65 1354.09 2275.42 2320.69 2275.42M2320.69 3689.75C2903.86 3735.34 3662.66 3148.15 3696.17 2610.57M3712.26 645.244C5104.64 2043.19 4398.79 4215.42 2468.16 4393.57C1327.4 4451.52 1347.39 2983.26 2368.95 2983.26C3252.53 2969.88 3285.94 1583.67 2368.95 1583.67C1799.51 1598.34 1525.43 1680.97 1116.8 1960.38';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  // Split the full path into individual sub-paths based on the Move command 'M'
  const paths = useMemo(() => FULL_PATH.split(/(?=M)/).filter(Boolean), []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4614 4584"
      fill="none"
      className={className}
    >
      {/* Background paths (base color) */}
      {paths.map((d, i) => (
        <path
          key={`bg-${i}`}
          d={d}
          stroke="currentColor"
          strokeWidth="345"
          strokeLinecap="round"
          className="stroke-[var(--text-primary)] transition-colors duration-300"
        />
      ))}

      {/* Foreground paths (accent color, animated) */}
      {paths.map((d, i) => (
        <path
          key={`fg-${i}`}
          d={d}
          stroke="var(--brand-accent)"
          strokeWidth="345"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          // We use arbitrary values for stroke-dashoffset in Tailwind.
          // The group-hover triggers the animation when the parent group is hovered.
          className="transition-[stroke-dashoffset] duration-300 ease-in-out group-hover:[stroke-dashoffset:0]"
          style={{
            // Stagger the animation slightly for a more organic feel
            transitionDelay: `${i * 30}ms`,
          }}
        />
      ))}
    </svg>
  );
};

export default Logo;
