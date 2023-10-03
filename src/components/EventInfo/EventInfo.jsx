import EventSlider from './EventSlider';
import { useLocation, useParams, Link } from 'react-router-dom';
import { ApplicationSection } from '../ApplicationSection/ApplicationSection';
import {
  Box,
  Container,
  Heading,
  Icon,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useRef } from 'react';
import './eventInfo.css';
import { BsArrowLeft } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const EventInfo = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const eventFullInfo = t('eventPage.eventFullInfo', {
    returnObjects: true,
  });

  const selectedEvent = eventFullInfo.find(event => event.id === id);
  return (
    <>
      <Box as="section" paddingTop="100px" paddingBottom="70px">
        <Container
          maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
          px="12px"
        >
          <Link className="styledLinkBack" to={backLinkHref.current}>
            <Icon as={BsArrowLeft} />
            {t('eventPage.back')}
          </Link>
          <Heading
            as="h2"
            color="#000000"
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
              max-height="400px"
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
                {selectedEvent?.problemToSolveHeading}
              </Heading>
              <UnorderedList fontSize={16}>
                {selectedEvent.problemToSolve &&
                  selectedEvent.problemToSolve.map((problem, index) => {
                    return <ListItem key={index}>{problem}</ListItem>;
                  })}
              </UnorderedList>
              <Heading
                as="h3"
                color="#000000"
                fontSize="24px"
                marginTop={'20px'}
                lineHeight="40px"
                fontWeight="700"
              >
                {selectedEvent.conclusionHeading}
              </Heading>
              <Text fontSize={16}>{selectedEvent.conclusion}</Text>
            </Box>
          </Box>
        </Container>
      </Box>
      {selectedEvent.imagesSlider ? (
        <EventSlider key={selectedEvent.id} data={selectedEvent} />
      ) : (
        <ApplicationSection />
      )}
    </>
  );
};

export default EventInfo;
