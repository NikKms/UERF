import { Box, Flex } from "@chakra-ui/react";
import Header from './Header'
import Footer from "./Footer";
// import Meta from "./Meta";

const Layout = ({ children }) => {
    return (
        <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
            {/* <Meta /> */}
            <Flex wrap="wrap" margin="8" minHeight="90vh">
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