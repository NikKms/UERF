import { Box, Container, Grid } from '@chakra-ui/react';
import EventsItem from './EventsItem';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

import { useTranslation } from 'react-i18next';

const EventsList = () => {
  const { t } = useTranslation();

  const eventShort = t('eventPage.eventCard', {
    returnObjects: true,
  });

  return (
    <AnimateOnScroll>
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Box as="section" paddingTop="70px" paddingBottom="70px">
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
            {eventShort.map(event => (
              <EventsItem key={event.id} event={event} />
            ))}
          </Grid>
        </Box>
      </Container>
    </AnimateOnScroll>
  );
};

export default EventsList;
