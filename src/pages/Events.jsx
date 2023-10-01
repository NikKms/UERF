import RoutesHero from '../components/RoutesHero/RoutesHero';
import EventsList from '../components/EventsList/EventsList';
import bgImg from '../assets/img/about_hero.jpg';

const Events = () => {
  return (
    <>
      <RoutesHero titlePath={'example.path'} bgImg={bgImg} />
      <EventsList />
    </>
  );
};

export default Events;
