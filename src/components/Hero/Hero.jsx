import Slider from '../Slider/Slider';
import heroBgArr from '../../common/data/sliderBgArr';
import { Box, Heading, useDisclosure } from '@chakra-ui/react';
import HeroBtn from '../HeroBtn/HeroBtn';
import { ModalContact } from '../ModalContact/ModalContact';
import { ContactForm } from '../ContactForm/ContactForm';
import { ForumIcon } from '../../common/icons/ForumIcon';
import { useTranslation } from 'react-i18next';

const Hero = ({ handleClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <Box pos="absolute" zIndex="2" top="55%" left="5%">
        <Heading mb="5" color="#fff">
          {t('homePage.hero.title')}
        </Heading>
        <HeroBtn icon={<ForumIcon />} onClick={handleClick} />
      </Box>
      <Slider data={heroBgArr} />
      {/* <ModalContact isOpen={isOpen} onClose={onClose}>
        <ContactForm />
      </ModalContact> */}
    </section>
  );
};

export default Hero;
