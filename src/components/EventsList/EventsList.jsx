import { Box, Container, Grid } from '@chakra-ui/react';
import EventsItem from './EventsItem';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import eventsList from '../../common/data/card-events';

const EventsList = () => {
  return (
    <AnimateOnScroll>
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Box as="section" paddingTop="90px" paddingBottom="90px">
          <Grid
            as={'ul'}
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
            gap={6}
            rowGap={50}
          >
            {eventsList.map(event => (
              <EventsItem key={event.id} event={event} />
            ))}
          </Grid>
        </Box>
      </Container>
    </AnimateOnScroll>
  );
};

export default EventsList;
