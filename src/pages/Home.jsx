import { ApplicationSection } from '../components/ApplicationSection/ApplicationSection';
import { ContactForm } from '../components/ContactForm/ContactForm';
import Hero from '../components/Hero/Hero';
import PostsSection from '../components/PostsSection/PostsSection';
import Sponsors from '../components/Sponsors/Sponsors';
import Upcoming from '../components/Upcoming/Upcoming';
import WhoWe from '../components/WhoWe/WhoWe';

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWe />
      <PostsSection />
      <ApplicationSection />
      <Upcoming />
      <Sponsors />
    </>
  );
};

export default Home;
