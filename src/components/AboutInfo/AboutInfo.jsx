import { Box, Heading, Image, Text } from '@chakra-ui/react';
import aboutImg from '../../assets/img/output-onlinepngtools.png';
import AboutList from './AboutList';

const AboutInfo = () => {
  return (
    <Box display={'flex'} maxW={'container.xl'} margin={'0 auto'}>
      <Box>
        <Heading
          as={'h2'}
          fontWeight={'normal'}
          textAlign={'left'}
          size={'2xl'}
          mb={'32px'}
        >
          Green Revolution <br />
          <strong>is the best Revolution</strong>
        </Heading>
        <Text mb={'20px'} fontSize={'lg'}>
          Vis integre expetendis at, duo an nisl feugiat democritum. Eu etiam
          reprehendunt vis, per ut melius gloriatur intellegam, nec ne viris
          invidunt eloquentiam.
        </Text>
        <Text
          fontSize={'xl'}
          color={'green.700'}
          mb={'44px'}
          fontWeight={'semibold'}
        >
          Aorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
          labore et dolore magna aliqua ust enim veniam.
        </Text>
        <AboutList />
      </Box>
      <Image height={'550px'} margin={'0 auto'} mt={'2rem'} src={aboutImg} />
    </Box>
  );
};

export default AboutInfo;
