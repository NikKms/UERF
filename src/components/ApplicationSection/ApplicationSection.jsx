import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import bg from '../../assets/img/calling.jpg';
import contactFormImg from '../../assets/img/contactForm.png';
import ForumSvg from '../../assets/svg/forum-logo.svg';

export const ApplicationSection = () => {
  return (
    <Box as="section" maxW={'full'} backgroundImage={bg} position="relative">
      <Box
        position="absolute"
        background="linear-gradient(-45deg, rgb(255 254 10 / 31%), rgb(22 172 223 / 61%))"
        w="100%"
        height="100%"
      />
      <Container
        position="relative"
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        display={'flex'}
        flexWrap="wrap"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        px="12px"
        pt="40px"
        pb="40px"
        gap="15px"
        zIndex="3"
        backgroundColor="#fff3"
      >
        <Box w={{ base: '100%', lg: 'calc((100% - 15px) / 2)' }} padding="15px">
          <ContactForm />
        </Box>

        <Box
          w={{ base: '100%', lg: 'calc((100% - 15px) / 2)' }}
          padding="0 20px 20px "
        >
          <Heading
            color="#fff"
            mb="20px"
            as="h3"
            maxW="387px"
            fontSize={{ base: '2xl', lg: '3xl' }}
          >
            Зробіть крок до стійкого майбутнього наших дітей.
          </Heading>
          {/* <Image src={contactFormImg} opacity={0.9} /> */}
          <Image
            src={ForumSvg}
            alt="logo"
            maxW={{ base: '280px', lg: '400px' }}
            mb="20px"
          />
          <Text color="#003d7c">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
