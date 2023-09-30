// import React from 'react';
import { Box } from '@chakra-ui/react';
import AboutHero from '../components/AboutHero/AboutHero';
import AboutInfo from '../components/AboutInfo/AboutInfo';

function About() {
  return (
    <>
      <Box as="section" flexDirection={'column'} maxW={'full'}>
        <AboutHero />
      </Box>
      <Box
        as="section"
        paddingY={'90px'}
        flexDirection={'column'}
        maxW={'full'}
      >
        <AboutInfo />
      </Box>
    </>
  );
}
export default About;
