import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import logoSvg from '../../assets/svg/logo.svg';
import FooterAbout from '../FooterAbout/FooterAbout';
import NavBar from '../NavBar/NavBar';
import logoSvgEn from '../../assets/svg/logo_en.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { i18n } = useTranslation();
  const gradient = 'linear-gradient(0deg, #0b1731, #48b0b0)';

  return (
    <Box
      as='footer'
      width='100%'
      bgColor='teal'
      color='white'
      py='16px'
      background={gradient}
      borderTop='1px'
      borderTopColor='teal.900'
    >
      <Container
        maxW='1176px'
        mx='auto'
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        gap='32px'
      >
        <Link to="/">
          <Box w='14rem'>
            <img src={i18n.language === 'ua' ? logoSvg : logoSvgEn} alt="Logo" />
          </Box>
        </Link>
        <FooterAbout />
        <NavBar
          flexDir='column'
          color='white'
          fontSize='md'
          align='center'
        />
      </Container>

      <Box
        mt='24px'
        textAlign='center'
      >
        <Text fontSize='sm' opacity='0.8'>
          © 2023 <a href="your_link_here">SevenTy</a>. All rights reserved.
        </Text>

      </Box>
    </Box>
  );
};

export default Footer;
