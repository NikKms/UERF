import NavBar from '../NavBar/NavBar';
import logoSvg from '../../assets/svg/logo.svg';
import logoSvgEn from '../../assets/svg/logo_en.svg';

import {
  Box,
  Container,
  Flex,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import LangSelect from '../LangSelect/LangSelect';
import { useTranslation } from 'react-i18next';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      py={3}
      w="100%"
      position={'fixed'}
      height={'80px'}
      zIndex={'5'}
      bg={
        'linear-gradient(180deg, rgba(11,102,147,0.7533514626553747) 24%, rgba(214,209,7,0.4732394178374475) 80%, rgba(217,217,217,0) 100%)'
      }
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
        <Link to="/">
          <Box w="8rem" h="58px">
            <img src={i18n.language === 'ua' ? logoSvg : logoSvgEn} />
          </Box>
        </Link>

        <Flex gap="5em">
          {isLargerThan480 ? (
            <NavBar onClick={onClose} />
          ) : (
            <MobileMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          )}

          {isLargerThan480 ? <LangSelect /> : null}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
