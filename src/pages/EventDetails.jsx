import EventInfo from '../components/EventInfo/EventInfo';
import RoutesHero from '../components/RoutesHero/RoutesHero';
import bgImg from '../assets/img/eventsBg.jpg';

const EventDetails = () => {
  return (
    <>
      <RoutesHero titlePath={'Title'} bgImg={bgImg} />
      <EventInfo />
    </>
  );
};

export default EventDetails;
