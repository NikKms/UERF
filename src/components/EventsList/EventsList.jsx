import eventsList from '../../common/data/card-events.json';
import { Container, Grid, GridItem, Box } from '@chakra-ui/react';

const EventsList = () => {
  return (
    <Container
      maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
      px="12px"
      marginTop={'100px'}
    >
      <Grid
        as={'ul'}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
      >
        {eventsList.map(event => (
          <GridItem
            as={'li'}
            key={event.id}
            position="relative"
            paddingTop="100px"
            paddingRight="30px"
            paddingBottom="50px"
            paddingLeft="30px"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundAttachment="scroll"
            backgroundPosition="50% 50%"
            listStyleType={'none'}
            backgroundImage={`url(${event.image})`}
            _hover={{
              backgroundSize: '110%',
              filter: 'brightness(1.4)',
              transition: 'background-size 0.3s, filter 0.3s',
            }}
          >
            {event.event}
            <Box
              backgroundColor="rgba(0, 0, 0, 0.5)"
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={0}
              backgroundPosition="center center"
              backgroundRepeat="repeat"
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsList;
