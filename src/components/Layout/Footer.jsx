import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import logoSvg from '../../assets/svg/logo.svg';
import FooterAbout from '../FooterAbout/FooterAbout';
import logoSvgEn from '../../assets/svg/logo_en.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <Box
      as="footer"
      width="100%"
      bgColor="teal"
      color="white"
      py="16px"
      backgroundColor="#080d27"
      borderTop="1px"
      borderTopColor="teal.900"
    >
      <Container
        maxW="1176px"
        mx="auto"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        gap="32px"
      >
        <Link to="/">
          <Box w="11rem">
            <img
              src={i18n.language === 'ua' ? logoSvg : logoSvgEn}
              alt="Logo"
            />
          </Box>
        </Link>
        <FooterAbout />
      </Container>


      <Box as='a'
        _hover={{ color: "teal.400" }}
        w={'260px'}
        textAlign='center'
        display={"block"}
        m="24px auto 0 auto" href="mailto:7ty@gmail.com"> ©2023 SevenTy. All rights reserved.</Box>

    </Box>
  );
};

export default Footer;
