import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

import aboutImg from '../../assets/svg/about-icons/light-bulb-eco-svgrepo-com.svg';
import AboutList from './AboutList';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { useTranslation } from 'react-i18next';

const variant = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};

const AboutInfo = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" paddingY={'90px'} flexDirection={'column'} maxW={'full'}>
      <Container
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        display={'flex'}
        alignItems={'center'}
        px="12px"
      >
        <AnimateOnScroll variant={variant}>
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
              {t('aboutPage.aboutInfo.text')}
            </Text>
            <Text
              fontSize={'xl'}
              color={'green.700'}
              mb={'44px'}
              fontWeight={'semibold'}
            >
              Aorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod labore et dolore magna aliqua ust enim veniam.
            </Text>
            <AboutList />
          </Box>
        </AnimateOnScroll>
        <Image
          display={{ base: 'none', lg: 'block' }}
          height={'550px'}
          margin={'0 auto'}
          mt={'2rem'}
          src={aboutImg}
        />
      </Container>
    </Box>
  );
};

export default AboutInfo;
