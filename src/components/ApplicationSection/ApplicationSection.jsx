import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import bg from '../../assets/img/calling.jpg';

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
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        display={'flex'}
        px="12px"
        pt="40px"
        pb="40px"
      >
        <ContactForm />
      </Container>
    </Box>
  );
};
