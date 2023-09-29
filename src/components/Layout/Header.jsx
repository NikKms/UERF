import Nav from '../Nav/Nav';
import logoSvg from '../../assets/svg/logo.svg';
import logoSvgEn from '../../assets/svg/logo_en.svg';

import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import LangSelect from '../LangSelect/LangSelect';
import { useTranslation } from 'react-i18next';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const { i18n } = useTranslation();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

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
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        px="12px"
        centerContent
        bgColor="transparent"
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Box w="8rem" h="fit-content">
          <img src={i18n.language === 'ua' ? logoSvg : logoSvgEn} />
        </Box>

        <LangSelect />
        {isLargerThan480 ? <Nav /> : <MobileMenu />}
      </Container>
    </Box>
  );
};

export default Header;
