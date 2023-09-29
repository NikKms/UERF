import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import bg from '../../assets/img/footer-bg.jpg'
import FooterAbout from '../FooterAbout/FooterAbout';
import FooterGallery from '../FooterGallery/FooterGallery';
import LangSelect from '../LangSelect/LangSelect';

const Footer = () => {
  return (
    <Box as='footer'
      width='full'
      minH='150px'
      bgColor='teal'
      position="relative"
      backgroundImage={`url(${bg})`}
      bgPos="center"
      bgSize='cover'
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.3)"
      />
      <Container
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        px="12px"
        py='24px'
        position="relative"
        zIndex="1"
        mx="auto"
        gap='32px'
      >
        <FooterAbout />
        <FooterGallery />
      </Container>
    </Box>
  );
};

export default Footer;
