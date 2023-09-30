import { Box, Container, Heading } from '@chakra-ui/react';

const Sponsors = () => {
  return (
    <Box
      as="section"
      py={{ base: '36px', lg: '72px', xl: '112px' }}
      bg={'green.50'}
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Heading>Sponsors</Heading>
      </Container>
    </Box>
  );
};

export default Sponsors;
