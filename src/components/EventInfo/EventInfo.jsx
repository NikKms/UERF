import EventSlider from './EventSlider';
import eventFullInfo from '../../common/data/eventFullInfo';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const EventInfo = () => {
  const { id } = useParams();
  const selectedEvent = eventFullInfo.find(event => event.id === id);
  return (
    <>
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Box as="section" paddingTop="100px" paddingBottom="70px">
          <Heading
            as="h2"
            color="#000000"
            textTransform="capitalize"
            fontSize="28px"
            marginBottom={'20px'}
            lineHeight="40px"
            fontWeight="700"
          >
            {selectedEvent.title}
          </Heading>
          <Box display={{ lg: 'flex' }} gap={10}>
            <Img
              objectFit={'cover'}
              marginBottom={{ base: '20px', lg: '0' }}
              width="600px"
              height="400px"
              src={selectedEvent.mainImg}
              alt={selectedEvent.title}
            />
            <Box>
              <Text fontSize={16}>{selectedEvent.mainInfo}</Text>
              <Heading
                as="h3"
                color="#000000"
                fontSize="24px"
                marginTop={'20px'}
                lineHeight="40px"
                fontWeight="700"
              >
                Issues to address
              </Heading>
              <Text fontSize={16}>
                {selectedEvent.problemToSolve.map((problem, index) => {
                  return (
                    <UnorderedList key={index}>
                      <ListItem>{problem}</ListItem>
                    </UnorderedList>
                  );
                })}
              </Text>
              <Heading
                as="h3"
                color="#000000"
                fontSize="24px"
                marginTop={'20px'}
                lineHeight="40px"
                fontWeight="700"
              >
                Сonclusions
              </Heading>
              <Text fontSize={16}>{selectedEvent.conclusion}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
      <EventSlider key={selectedEvent.id} data={selectedEvent} />
    </>
  );
};

export default EventInfo;
