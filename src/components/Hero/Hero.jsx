import Slider from '../Slider/Slider';
import heroBgArr from '../../common/data/sliderBgArr';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import HeroBtn from '../HeroBtn/HeroBtn';
import { ModalContact } from '../ModalContact/ModalContact';
import { ContactForm } from '../ContactForm/ContactForm';
import { ForumIcon } from '../../common/icons/ForumIcon';

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <Box pos="absolute" zIndex="2" top="55%" left="5%">
        <Text as="h2" fontSize="38px" fontWeight="700" mb="5" color="#fff">
          Join forum, save the Earth!
        </Text>
        <HeroBtn icon={<ForumIcon />} onClick={onOpen} />
      </Box>
      <Slider data={heroBgArr} />
      <ModalContact isOpen={isOpen} onClose={onClose}>
        <ContactForm />
      </ModalContact>
    </section>
  );
};

export default Hero;
