import AboutSection from './components/sections/AboutSection';
import BlogList from './components/sections/BlogList';
import ProjectsGrid from './components/sections/ProjectsGrid';
import SocialLinks from './components/sections/SocialLinks';
import StoreTeaser from './components/sections/StoreTeaser';

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
      <AboutSection />
      <BlogList />
      <ProjectsGrid />
      <StoreTeaser />
      <SocialLinks />
    </div>
  );
};

export default Home;
