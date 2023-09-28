import Nav from '../Nav/Nav';
import logoSvg from '../../assets/svg/logo.svg';

import { Box, Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" py={3} w="100%">
      <Container
        maxW="1280px"
        centerContent
        bgColor="transparent"
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Box w="100px" h="fit-content">
          <img src={logoSvg} />
        </Box>

        <Nav />
      </Container>
    </Box>
  );
};

export default Header;
