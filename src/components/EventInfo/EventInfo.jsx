import EventSlider from './EventSlider';
import eventFullInfo from '../../common/data/eventFullInfo';
import { useParams } from 'react-router-dom';

const EventInfo = () => {
  const { id } = useParams();

  return (
    <section>
      {eventFullInfo.map(event => {
        if (event.id === id) {
          return <EventSlider key={event.id} data={event} />;
        }
      })}
    </section>
  );
};

export default EventInfo;
