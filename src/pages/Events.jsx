import RoutesHero from '../components/RoutesHero/RoutesHero';
import EventsList from '../components/EventsList/EventsList';
import bgImg from '../assets/img/eventsBg.jpg';

const Events = () => {
  return (
    <>
      <RoutesHero titlePath={'eventPage.hero.title'} bgImg={bgImg} />
      <EventsList />
    </>
  );
};

export default Events;
