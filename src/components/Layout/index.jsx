import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import BtnToTop from '../BtnToTop/BtnToTop';

const Layout = ({ children }) => {
  const location = useLocation();


  useEffect(() => {
    if (location.pathname !== '/news') window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Flex wrap="wrap" minHeight="100vh">
        <Header />
        <Box width="full" as="main">
          {children}
        </Box>
        <BtnToTop />
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
