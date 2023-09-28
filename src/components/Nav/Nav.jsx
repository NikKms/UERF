import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Flex gap={10}>
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/events">Events</Link>
      </Box>
    </Flex>
  );
};

export default Nav;
