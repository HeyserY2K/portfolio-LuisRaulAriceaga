import Link from 'next/link';

/**
 * Header Component
 *
 * Displays the header section of the portfolio with navigation links.
 *
 * @returns {JSX.Element} The Header component
 */
const Header = () => {
  return (
    <header
      className='flex w-full items-center justify-between bg-[var(--header-bg)] px-8 py-4 shadow-md'
      aria-label='Header'
    >
      {/* <img src='/logos/finger_trace_white.png' alt='Logo' className='h-8' aria-label='Logo' /> */}
      <Link href='/' aria-label='Go to Home'>
        <div className='group flex h-8 w-8 items-center justify-center hover:cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 4614 4584'
            fill='none'
            className='h-8'
          >
            <path
              d='M990.784 432.086C1203.94 291.323 2272.16 14.6212 3059.37 291.322M214.559 1815.59C1354.09 584.915 3348.95 515.204 3696.17 1934.9M214.559 3565.08C266.756 3062.38 356.681 2817.65 623.451 2444.33M292.316 4256.83C310.327 4343.45 308.54 4347.16 345.941 4411M173 910.682C244.27 833.006 287.729 792.241 372.754 725.679M1116.8 4393.57C536.31 3362.65 1354.09 2275.42 2320.69 2275.42M2320.69 3689.75C2903.86 3735.34 3662.66 3148.15 3696.17 2610.57M3712.26 645.244C5104.64 2043.19 4398.79 4215.42 2468.16 4393.57C1327.4 4451.52 1347.39 2983.26 2368.95 2983.26C3252.53 2969.88 3285.94 1583.67 2368.95 1583.67C1799.51 1598.34 1525.43 1680.97 1116.8 1960.38'
              stroke='currentColor'
              strokeWidth='345'
              strokeLinecap='round'
              className='duration-250 stroke-[var(--text-primary)] transition-colors group-hover:stroke-[var(--brand-accent)]'
            />
          </svg>
        </div>
      </Link>

      <nav aria-label='Main Navigation'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/' aria-label='Home'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>Home</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/resume' aria-label='Resume'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>Resume</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/about' aria-label='About'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>About</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/blog' aria-label='Blog'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>Blog</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/projects' aria-label='Projects'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href='/sections/store' aria-label='Store'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>Store</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/social' aria-label='Social'>
              <span className='text-[var(--text-primary)] hover:text-[var(--brand-accent)]'>
                Social
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
