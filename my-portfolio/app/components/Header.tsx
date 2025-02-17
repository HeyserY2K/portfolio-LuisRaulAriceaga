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
      className='w-full py-4 px-8 flex justify-between items-center bg-blue-900 shadow-md'
      aria-label='Header'
    >
      <img src='/logos/H-Logo-Trace.png' alt='Logo' className='h-8' aria-label='Logo' />
      <nav aria-label='Main Navigation'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/' aria-label='Home'>
              <span className='text-white hover:text-blue-300'>Home</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/resume' aria-label='Resume'>
              <span className='text-white hover:text-blue-300'>Resume</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/about' aria-label='About'>
              <span className='text-white hover:text-blue-300'>About</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/blog' aria-label='Blog'>
              <span className='text-white hover:text-blue-300'>Blog</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/projects' aria-label='Projects'>
              <span className='text-white hover:text-blue-300'>Projects</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/store' aria-label='Store'>
              <span className='text-white hover:text-blue-300'>Store</span>
            </Link>
          </li>
          <li>
            <Link href='/sections/social' aria-label='Social'>
              <span className='text-white hover:text-blue-300'>Social</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
