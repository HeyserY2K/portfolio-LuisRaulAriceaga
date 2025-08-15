import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import BlogList from '../components/sections/BlogList';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import StoreTeaser from '../components/sections/StoreTeaser';
import SocialLinks from '../components/sections/SocialLinks';

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Hero />
      <AboutSection />
      <BlogList />
      <ProjectsGrid />
      <StoreTeaser />
      <SocialLinks />
    </div>
  );
}


