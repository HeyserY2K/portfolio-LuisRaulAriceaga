import AboutSection from '../components/sections/AboutSection';
import BlogList from '../components/sections/BlogList';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import SocialLinks from '../components/sections/SocialLinks';
import StoreTeaser from '../components/sections/StoreTeaser';

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <AboutSection />
      <BlogList />
      <ProjectsGrid />
      <StoreTeaser />
      <SocialLinks />
    </div>
  );
}


