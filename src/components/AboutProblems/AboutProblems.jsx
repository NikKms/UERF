import { Box, Container } from '@chakra-ui/react';
import AboutProblemsList from './AboutProblemsList';
import WaveText from '../WaveText/WaveText';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutProblems = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      paddingY={'90px'}
      flexDirection={'column'}
      maxW={'full'}
      backgroundColor={'#f4f6fa'}
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <WaveText
          as={motion.h2}
          fontWeight={400}
          fontSize={'3rem'}
          color="black"
          mb={'2rem'}
          textAlign="center"
          textTransform="capitalize"
        >
          {t('aboutPage.solutions.title')}
        </WaveText>
        <AboutProblemsList />
      </Container>
    </Box>
  );
};

export default AboutProblems;
