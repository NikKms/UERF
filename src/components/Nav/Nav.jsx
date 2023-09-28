import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Btn from '../Btn/Btn';

const Nav = () => {
  return (
    <Flex as="ul" gap={5} listStyleType="none">
      <Box as="li">
        <Link to="/">
          <Btn text={'Home'} />
        </Link>
      </Box>
      <Box as="li">
        <Link to="/events">
          <Btn text={'Events'} />
        </Link>
      </Box>
      <Box as="li">
        <Link to="/about">About</Link>
      </Box>
    </Flex>
  );
};

export default Nav;
