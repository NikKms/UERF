import EventSlider from './EventSlider';
import eventFullInfo from '../../common/data/eventFullInfo';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Img } from '@chakra-ui/react';

const EventInfo = () => {
  const { id } = useParams();
  const selectedEvent = eventFullInfo.find(event => event.id === id);
  return (
    <>
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Box as="section" paddingTop="90px" paddingBottom="90px">
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
        </Box>
      </Container>
      <EventSlider key={selectedEvent.id} data={selectedEvent} />
    </>
  );
};

export default EventInfo;
