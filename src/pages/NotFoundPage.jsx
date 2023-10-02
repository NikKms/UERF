import { Link } from 'react-router-dom';
import { Box, Center, Text, Link as ChakraLink } from '@chakra-ui/react';

const NotFoundPage = () => {
    return (
        <Center h="100vh">
            <Box textAlign="center">
                <Text fontSize="xl" fontWeight="bold" mb="4">
                    404, Page Not Found 😒               </Text>
                <Text mb="4">The page you are looking for does not exist.</Text>
                <ChakraLink as={Link} to="/" color="teal.500">
                    Go back to Home
                </ChakraLink>
            </Box>
        </Center>
    );
};

export default NotFoundPage;