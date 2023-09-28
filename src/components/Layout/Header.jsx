import Nav from '../Nav/Nav';
import logoSvg from '../../assets/svg/logo.svg';
import logoSvgEn from '../../assets/svg/logo_en.svg';

import { Box, Container } from '@chakra-ui/react';
import LangSelect from '../LangSelect/LangSelect';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  return (
    <Box
      as="header"
      py={3}
      w="100%"
      position={'fixed'}
      height={'70px'}
      zIndex={'5'}
    >
      <Container
        maxW="1280px"
        centerContent
        bgColor="transparent"
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Box w="8rem" h="fit-content">
          <img src={i18n.language === 'ua' ? logoSvg : logoSvgEn} />
        </Box>

        <Nav />
        <LangSelect />
      </Container>
    </Box>
  );
};

export default Header;
