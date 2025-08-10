/**
 * Store Teaser Section (reusable)
 */
const StoreTeaser = () => {
  return (
    <section id='store' className='py-16'>
      <div className='mx-auto max-w-4xl px-4'>
        <h2 className='mb-8 text-3xl font-bold'>Digital Store</h2>
        <div className='rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800'>
          <h3 className='mb-4 text-2xl font-semibold'>Coming Soon</h3>
          <p className='text-gray-600 dark:text-gray-300'>
            Future home of digital products, templates, and resources. Stay tuned for upcoming releases!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreTeaser;


