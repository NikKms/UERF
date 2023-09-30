import { Box, Container, Heading } from '@chakra-ui/react';

const Upcoming = () => {
  return (
    <Box as="section" py={{ base: '36px', lg: '72px', xl: '112px' }}>
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Heading>Upcoming</Heading>
      </Container>
    </Box>
  );
};

export default Upcoming;
