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
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>Digital Store</h2>
        <div className='rounded-lg bg-[var(--card-bg)] p-8 text-center'>
          <h3 className='mb-4 text-2xl font-semibold'>Coming Soon</h3>
          <p className='text-[var(--text-secondary)]'>
            Future home of digital products, templates, and resources. Stay
            tuned for upcoming releases!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;
