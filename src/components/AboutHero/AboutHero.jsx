// import React from 'react';
import bgImg from '../../assets/img/about_hero.jpg';

import { Center, Text } from '@chakra-ui/react';
import WaveText from './WaveText';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const linearGradient = `linear-gradient(to top, rgba(6, 7, 7, 0.8),rgba(34, 32, 32, 0.4))`;
  const containerStyle = `${linearGradient}, url(${bgImg}) no-repeat center`;

  const { t } = useTranslation();

  return (
    <Center
      maxW={'full'}
      background={containerStyle}
      backgroundSize={'cover'}
      height={'600px'}
      flexDirection={'column'}
    >
      <WaveText
        style={{
          fontSize: '3rem',
          fontWeight: '500',
          color: '#fff',
          textTransform: 'uppercase',
        }}
      >
        {t('aboutPage.hero.title')}
      </WaveText>
      <Text
        fontSize={'xl'}
        marginTop={'12px'}
        textAlign={'center'}
        color={'whiteAlpha.900'}
      >
        Lorem ipsum dolor
      </Text>
    </Center>
  );
};

export default AboutHero;
