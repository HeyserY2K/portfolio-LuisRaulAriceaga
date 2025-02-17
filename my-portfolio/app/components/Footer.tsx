import React from 'react';

/**
 * Footer Component
 *
 * Displays the footer section of the portfolio with copyright information.
 *
 * @returns {JSX.Element} The Footer component
 */
const Footer: React.FC = () => {
  return (
    <footer className='w-full py-6 text-center bg-gray-200' aria-label='Footer'>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
