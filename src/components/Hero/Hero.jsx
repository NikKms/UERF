import Slider from '../Slider/Slider';
import heroBgArr from '../../common/data/sliderBgArr';
import Btn from '../Btn/Btn';
import { Box, Text } from '@chakra-ui/react';
import ForumSvg from '../../assets/svg/forum-logo.svg';

const Icon = () => {
  return (
    <Box as="span" w={100}>
      <img src={ForumSvg} alt="" />
    </Box>
  );
};

const Hero = () => (
  <section>
    <Box pos="absolute" zIndex="2" top="65%" left="5%">
      <Text as="h2" fontSize="38px" fontWeight="700" mb="5" color="#fff">
        Join forum, save the Earth!
      </Text>
      <Btn icon={<Icon />} />
    </Box>
    <Slider data={heroBgArr} />
  </section>
);

export default Hero;
