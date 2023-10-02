import { Box, Container, Heading, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Sponsors = () => {
  const { t } = useTranslation()

  const sponsorLogos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
  ];

  return (
    <Box
      as="section"
      pt={{ base: '32px', lg: '64px', xl: '92px' }}
      pb={{ base: '64px', lg: '92px', xl: '112px' }}
      bg={'green.50'}
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px" display={'flex'} flexDirection={'column'} gap={'48px'}>
        <Heading textAlign={'center'}>{t("homePage.sponsors.title")}</Heading>
        <Flex justify="space-around" align="center" flexDirection={{ base: "column", lg: "row" }}>
          {sponsorLogos.map((logo, index) => (
            <Box
              key={index}
              w={'100px'}
              h={'100px'}
              p="4"
              transition="transform 0.2s, background-color 0.2s"
              _hover={{
                transform: 'scale(1.3)',
                cursor: 'pointer',
              }}
            >
              <Box
                bg="white"
                borderRadius="md"
                boxShadow="md"
                p="2"
                w="100%"
                h="100%"
                transition="background-color 0.2s"
                _hover={{ bg: 'teal.200' }}
              >
                {`Logo ${index + 1}`}
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Sponsors;
