import { Box, Container, Heading, Image, VStack } from '@chakra-ui/react';
import { postsData } from '../../common/data/postsData';
import { useTranslation } from 'react-i18next';

const NewsList = () => {
  const { t } = useTranslation();
  const news = t('newsPage.newsData', {
    returnObjects: true,
  });
  return (
    <Box
      as="section"
      bg={'gray.100'}
      py={{ base: '36px', lg: '72px', xl: '112px' }}
      pt={'75px'}
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <VStack as={'ul'} gap={0} align="stretch" listStyleType={'none'}>
          {news.length > 0 &&
            news.map(({ title, text }, index) => (
              <Box
                as={'li'}
                key={index}
                bgColor={index % 2 === 0 ? 'gray.200' : 'gray.300'}
                p={'20px'}
                display={'flex'}
                flexDir={{
                  base: 'column',
                  lg: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
                gap={'20px'}
              >
                <Box
                  width={{ base: '100%', lg: '50%' }}
                  display={'flex'}
                  flexDir={'column'}
                >
                  <Heading
                    as={'h3'}
                    key={index}
                    borderBottom={'0.5px #3838383c solid'}
                    mb={'20px'}
                  >
                    {title}
                  </Heading>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flex={'1'}
                  >
                    <Image src={postsData[index].image} />
                  </Box>
                </Box>

                <Box as="div" width={{ base: '100%', lg: '50%' }}>
                  {text.split('\n').map((paragraph, paraIndex) => (
                    <p key={paraIndex}>
                      {paragraph}
                      <br />
                    </p>
                  ))}
                </Box>
              </Box>
            ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default NewsList;
