import EventSlider from './EventSlider';
import eventFullInfo from '../../common/data/eventFullInfo';
import { useParams } from 'react-router-dom';
import { Container, Heading, Img } from '@chakra-ui/react';

const EventInfo = () => {
  const { id } = useParams();
  const selectedEvent = eventFullInfo.find(event => event.id === id);
  return (
    <Container
      maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
      px="12px"
      marginTop="90px"
      marginBottom="90px"
    >
      <section display={'flex'}>
        <Heading
          as="h3"
          color="#000000"
          textTransform="capitalize"
          fontSize="28px"
          marginBottom={'20px'}
          lineHeight="40px"
          fontWeight="700"
        >
          {selectedEvent.title}
        </Heading>
        <Img
          width="600px"
          height="400px"
          src={selectedEvent.mainImg}
          alt={selectedEvent.title}
        />
      </section>

      <EventSlider key={selectedEvent.id} data={selectedEvent} />
    </Container>
  );
};

export default EventInfo;
