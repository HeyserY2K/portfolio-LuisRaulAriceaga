import React from 'react';

/**
 * Footer Component
 *
 * Displays the footer section of the portfolio with copyright information.
 *
 * @returns {JSX.Element} The Footer component
 */
const Footer = () => {
  return (
    <footer
      className='w-full bg-[var(--header-bg)] py-6 text-center text-[var(--text-primary)]'
      aria-label='Footer'
    >
      <p>
        © {new Date().getFullYear()} Luis Raul&apos;s Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
