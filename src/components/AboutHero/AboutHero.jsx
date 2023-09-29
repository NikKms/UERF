// import React from 'react';
import bgImg from '../../assets/img/about_hero.jpg';

import { Center, Heading, Text } from '@chakra-ui/react';

const AboutHero = () => {
  const linearGradient = `linear-gradient(to top, rgba(6, 7, 7, 0.8),rgba(34, 32, 32, 0.4))`;
  const containerStyle = `${linearGradient}, url(${bgImg}) no-repeat center`;

  return (
    <Center
      maxW={'full'}
      background={containerStyle}
      backgroundSize={'cover'}
      height={'600px'}
      flexDirection={'column'}
    >
      <Heading as={'h1'} color={'whiteAlpha.900'} size={'2xl'}>
        About
      </Heading>
      <Text fontSize={'xl'} marginTop={'12px'} color={'whiteAlpha.900'}>
        😎 About
      </Text>
    </Center>
  );
};

export default AboutHero;
