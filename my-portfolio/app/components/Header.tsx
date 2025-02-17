import Link from 'next/link';
import { FC } from 'react';

/**
 * Header Component
 *
 * Displays the header section of the portfolio with navigation links.
 *
 * @returns {JSX.Element} The Header component
 */
const Header: FC = () => {
  return (
    <header
      className='w-full py-4 px-8 flex justify-between items-center bg-blue-900 shadow-md'
      aria-label='Header'
    >
      <h1 className='text-xl font-bold text-white'>My Portfolio</h1>
      <nav aria-label='Main Navigation'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/' aria-label='Home'>
              <span className='text-white hover:text-blue-300'>Home</span>
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
