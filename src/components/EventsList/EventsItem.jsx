import { GridItem, Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const EventsItem = ({ event: { id, timeAndPlace, title, image } }) => {
  const location = useLocation();
  return (
    <GridItem
      as={'li'}
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
      backgroundImage={`url(${image})`}
      transitionProperty="filter"
      transitionDuration="0.5s"
      transitionTimingFunction="ease-in-out"
      _hover={{
        filter: 'brightness(1.3)',
      }}
    >
      <Link to={`/events/${id}`} state={{ from: location }}>
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
        <Box position="relative" zIndex="1" paddingTop={'120px'}>
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={'15px'}
            marginBottom={'20px'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              width="55px"
              height="55px"
              backgroundColor="#fff"
              color="#252525"
              borderRadius="100px"
              border={'7px solid rgba(17, 153, 142, 0.3)'}
            >
              <Text
                as="span"
                fontFamily={'Raleway'}
                fontSize="20px"
                lineHeight="2em"
                fontWeight="700"
              >
                {id}
              </Text>
            </Box>
            <Text
              fontSize="19px"
              lineHeight="1.3em"
              color="#fff"
              marginBottom="15px"
            >
              {timeAndPlace}
            </Text>
          </Box>
          <Heading
            as="h3"
            color="#ffffff"
            textTransform="capitalize"
            fontSize="32px"
            lineHeight="40px"
            fontWeight="700"
          >
            {title}
          </Heading>
        </Box>
      </Link>
    </GridItem>
  );
};

EventsItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timeAndPlace: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventsItem;
