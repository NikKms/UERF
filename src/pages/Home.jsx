import { useRef } from 'react';
import { ApplicationSection } from '../components/ApplicationSection/ApplicationSection';
import Hero from '../components/Hero/Hero';
import PostsSection from '../components/PostsSection/PostsSection';
import Sponsors from '../components/Sponsors/Sponsors';
import WhoWe from '../components/WhoWe/WhoWe';

const Home = () => {
  const refToContactForm = useRef(null);

  const handleClick = () => {
    refToContactForm.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero handleClick={handleClick} />
      <WhoWe />
      <PostsSection />
      <Sponsors />
      <ApplicationSection refToContactForm={refToContactForm} />
    </>
  );
};

export default Home;
