import Slider from '../Slider/Slider';
import heroBgArr from '../../common/data/sliderBgArr';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import ForumSvg from '../../assets/svg/forum-logo.svg';
import HeroBtn from '../HeroBtn/HeroBtn';
import { ModalContact } from '../ModalContact/ModalContact';
import { ContactForm } from '../ContactForm/ContactForm';

const Icon = () => {
  return (
    <Box as="span" display={'inline-block'} w={'140px'}>
      <img src={ForumSvg} alt="" />
    </Box>
  );
};

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModal = () => {
    onOpen();
    console.log(isOpen);
  };

  return (
    <section>
      <Box pos="absolute" zIndex="2" top="50%" left="5%">
        <Text as="h2" fontSize="38px" fontWeight="700" mb="5" color="#fff">
          Join forum, save the Earth!
        </Text>
        <HeroBtn icon={<Icon />} onClick={handleModal} />
      </Box>
      <Slider data={heroBgArr} />
      <ModalContact isOpen={isOpen} onClose={onClose}>
        <ContactForm />
      </ModalContact>
    </section>
  );
};

export default Hero;
