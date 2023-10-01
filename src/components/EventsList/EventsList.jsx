import eventsList from '../../common/data/card-events.json';
import { Container, Grid } from '@chakra-ui/react';
import EventsItem from './EventsItem';

const EventsList = () => {
  return (
    <Container
      maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
      px="12px"
      marginTop="90px"
      marginBottom="90px"
    >
      <Grid
        as={'ul'}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
        rowGap={50}
      >
        {eventsList.map(event => (
          <EventsItem key={event.id} event={event} />
        ))}
      </Grid>
    </Container>
  );
};

export default EventsList;