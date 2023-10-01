import { Box, Container } from '@chakra-ui/react';
import AboutProblemsList from './AboutProblemsList';
import WaveText from '../WaveText/WaveText';

const AboutProblems = () => {
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
          style={{
            fontSize: '3rem',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#000',
          }}
        >
          Working Solutions
        </WaveText>
        <AboutProblemsList />
      </Container>
    </Box>
  );
};

export default AboutProblems;
