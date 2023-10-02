import { Box, Container, Heading } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import './PostsSection.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { postsData } from '../../common/data/postsData';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const PostsSection = () => {
  const { t } = useTranslation();
  const news = t('newsPage.newsData', {
    returnObjects: true,
  });

  const gradient = 'linear-gradient(-45deg,#fdfeff9f, #4bc32d97)';

  return (
    <>
      <Box
        as="section"
        bg={gradient}
        py={{ base: '36px', lg: '72px', xl: '112px' }}
      >
        <Container
          maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
          px="12px"
        >
          <Heading
            mb={{ base: '32px', lg: '72px' }}
            textAlign="center"
            fontSize={{ base: '2xl', lg: '4xl' }}
            fontWeight="bold"
            color={'black'}
          >
            {t('newsPage.title')}
          </Heading>
          <Swiper
            className="mySwiper2"
            navigation
            loop
            slidesPerView={'auto'}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 1,
              },
            }}
            modules={[Navigation]}
          >
            {news.length > 0 &&
              news.map(({ title }, index) => (
                <SwiperSlide key={index}>
                  <Box
                    shadow={'dark-lg'}
                    position={'relative'}
                    as="li"
                    borderRadius={'10px'}
                    overflow="hidden"
                    css={{
                      '&:hover .news_card': {
                        transform: 'scale(1.03)',
                        transition: 'all 500ms, filter 500ms ease-in-out',
                        filter: 'brightness(100%)',
                      },
                    }}
                  >
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/news"
                      display={'block'}
                      textAlign={'center'}
                      color={'#ffffffc2'}
                      fontSize={'24px'}
                      borderRadius={'10px'}
                    >
                      <Box
                        borderRadius={'10px'}
                        className="news_card"
                        filter="brightness(80%)"
                        position="relative"
                        z-index="2"
                        width="100%"
                        height="260px"
                        transition="all 500ms cubic-bezier(0.4, 0, 0.2, 1)"
                        as="div"
                        bgImage={`url(${postsData[index].image})`}
                        bgRepeat={'no-repeat'}
                        bgPos={'center'}
                        bgSize={'cover'}
                        _hover={{
                          cursor: 'pointer',
                          transition: 'all 500ms ease-in-out',
                          filter: 'grayscale(100%)',
                        }}
                      ></Box>
                      <Box
                        borderRadius={'10px'}
                        as="div"
                        bg="linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 15%,
    rgba(252, 176, 69, 0) 50%
  )"
                        position={'absolute'}
                        top="0"
                        zIndex={'2'}
                        width={'100%'}
                        height={'100%'}
                        display={'flex'}
                        alignItems={'flex-end'}
                        padding={'16px 20px'}
                      >
                        <Heading
                          color={'#fff'}
                          fontSize={'24'}
                          textAlign={'left'}
                        >
                          {title}
                        </Heading>
                      </Box>
                    </ChakraLink>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
          <ChakraLink
            mt={'20px'}
            as={ReactRouterLink}
            to="/news"
            display={'block'}
            textAlign={'center'}
            color={'#000'}
            fontSize={'24px'}
            textDecor={'underline'}
            _hover={{ color: '#00000067' }}
          >
            {t('newsPage.underButton')}
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
        </Container>
      </Box>
    </>
  );
};

export default PostsSection;

{
  /* <AccordionItem
                      position="relative"
                      overflow="hidden"
                      border="none"
                      borderRadius="10px"
                      maxW={{ base: '100%', lg: '768px', xl: '1024px' }}
                      margin={'50px auto'}
                      // css={{
                      //   '&::-webkit-scrollbar': {
                      //     width: '3px',
                      //   },
                      //   '&::-webkit-scrollbar-thumb': {
                      //     backgroundColor: '#fff',
                      //     borderRadius: '50%',
                      //   },
                      // }}
                      boxShadow={'lg'}
                    >
                      <h3>
                        <AccordionButton
                          bgColor="#f2e1c1"
                          _hover={{ bgColor: '#d4b174', color: '#fff' }}
                          _active={{ bgColor: '#d4b174', color: '#fff' }}
                          _focus={{ bgColor: '#d4b174', color: '#fff' }}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="600"
                            fontSize="24px"
                          >
                            {title}
                          </Box>
                          <AccordionIcon fontSize={'2.25rem'} />
                        </AccordionButton>
                      </h3>

                      <AccordionPanel
                        pb={4}
                        opacity={'0.9'}
                        borderBottomRadius="10px"
                        color="#fff"
                      >
                        {text.split('\n').map((paragraph, paraIndex) => (
                          <p key={paraIndex}>{paragraph}</p>
                        ))}

                        <Box
                          w={'100%'}
                          h={'100%'}
                          blur={'2px'}
                          filter={'auto'}
                          bgColor={'blackAlpha.200'}
                          position={'absolute'}
                          top={'0'}
                          left={'0'}
                          borderBottomRadius={'10px'}
                        />
                      </AccordionPanel>
                      <Box
                        width="100%"
                        height="480px"
                        as="div"
                        bgImage={`url(${image})`}
                        bgRepeat={'no-repeat'}
                        bgPos={'center'}
                        bgSize={'cover'}
                      ></Box>
                    </AccordionItem> */
}
