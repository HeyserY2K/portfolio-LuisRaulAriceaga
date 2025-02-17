import About from './pages/AboutPage';
import Blog from './pages/BlogPage';
import Projects from './pages/ProjectsPage';
import Store from './pages/StorePage';
import Social from './pages/SocialPage';

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
