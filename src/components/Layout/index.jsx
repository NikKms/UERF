// import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Flex wrap="wrap" minHeight="100vh">
        <Header />
        <Box width="full" as="main">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
