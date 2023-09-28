import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
// import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      {/* <Meta /> */}
      <Flex wrap="wrap" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
