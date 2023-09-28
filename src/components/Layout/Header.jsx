import Nav from '../Nav/Nav';
import logoSvg from '../../assets/svg/logo.svg';

import { Box, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header">
      <Flex w="100vw" bgColor="transparent">
        <Box w={'100px'} h={'fit-content'}>
          <img src={logoSvg}></img>
        </Box>
        <Nav />
      </Flex>
    </Box>
  );
};

export default Header;
