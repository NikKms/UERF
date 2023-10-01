import {
  Box,
  Container,
  Heading,
  Image,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { postsData } from '../../common/data/postsData';

const NewsList = () => {
  return (
    <Box
      as="section"
      bg={'gray.100'}
      py={{ base: '36px', lg: '72px', xl: '112px' }}
      pt={'75px'}
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <VStack
          as={'ul'}
          // divider={<StackDivider borderColor="white.200" />}
          // spacing={4}
          gap={0}
          align="stretch"
          listStyleType={'none'}
        >
          {postsData.length > 0 &&
            postsData.map(({ image, title, text }, index) => (
              <Box
                as={'li'}
                key={index}
                bgColor={index % 2 === 0 ? 'gray.200' : 'gray.300'}
                p={'20px'}
              >
                <Heading as={'h3'} key={index}>
                  {title}
                </Heading>
                <Box
                  as="div"
                  display={'flex'}
                  flexDir={{
                    base: 'column',
                    lg: index % 2 === 0 ? 'row' : 'row-reverse',
                  }}
                  alignItems={'center'}
                  gap={'20px'}
                >
                  <Image
                    src={image}
                    width={{ base: '100%', lg: '50%' }}
                    h={'60%'}
                  />
                  <Box as="div">
                    {text.split('\n').map((paragraph, paraIndex) => (
                      <p key={paraIndex}>
                        <br />
                        {paragraph}
                      </p>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default NewsList;
