import About from './sections/about/page';
import Blog from './sections/blog/page';
import Projects from './sections/projects/page';
import Store from './sections/store/page';
import Social from './sections/social/page';

/**
 * Home Component
 *
 * Serves as the main landing page, organizing all sections in a structured layout.
 * Each section is independently loaded and maintained.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      <About />
      <Blog />
      <Projects />
      <Store />
      <Social />
    </div>
  );
};

export default Home;
