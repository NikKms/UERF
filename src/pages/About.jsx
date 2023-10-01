// import React from 'react';
import AboutGallery from '../components/AboutGallery/AboutGallery';
import RoutesHero from '../components/RoutesHero/RoutesHero';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import AboutProblems from '../components/AboutProblems/AboutProblems';
import bgImg from '../assets/img/about_hero.jpg';

function About() {
  return (
    <>
      <RoutesHero titlePath={'aboutPage.hero.title'} bgImg={bgImg} />
      <AboutInfo />
      <AboutProblems />
      <AboutGallery />
    </>
  );
}
export default About;
