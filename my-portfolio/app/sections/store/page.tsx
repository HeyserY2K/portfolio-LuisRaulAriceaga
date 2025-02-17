import React from 'react';

/**
 * Store Section Component
 *
 * Displays a placeholder for future store items or digital products.
 * Currently shows a "Coming Soon" message with a brief description.
 *
 * @returns {React.ReactElement} The Store section component
 */
const Store = () => {
  return (
    <section id='store' className='py-16'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>Digital Store</h2>
        <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center'>
          <h3 className='text-2xl font-semibold mb-4'>Coming Soon</h3>
          <p className='text-gray-600 dark:text-gray-300'>
            Future home of digital products, templates, and resources. Stay
            tuned for upcoming releases!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;
