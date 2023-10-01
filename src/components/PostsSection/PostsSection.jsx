import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import './PostsSection.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

import { postsData } from '../../common/data/postsData';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const PostsSection = () => {
  const gradient = 'linear-gradient(-45deg, #4de992, #16acdf)';

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
            color={'white'}
          >
            Ecosystem of care: from creation to action
          </Heading>
          <Swiper
            autoHeight={true}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
          >
            {postsData.length > 0 &&
              postsData.map(({ image, title, text }, index) => (
                <SwiperSlide key={index}>
                  <Accordion allowMultiple>
                    <AccordionItem
                      position="relative"
                      overflow="hidden"
                      border="none"
                      borderRadius="10px"
                      maxW={{ base: '100%', lg: '768px', xl: '1024px' }}
                      margin={'50px auto'}
                      css={{
                        '&::-webkit-scrollbar': {
                          width: '3px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: '#fff',
                          borderRadius: '50%',
                        },
                      }}
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
                    </AccordionItem>
                  </Accordion>
                </SwiperSlide>
              ))}
          </Swiper>
          <ChakraLink
            as={ReactRouterLink}
            to="/news"
            display={'block'}
            textAlign={'center'}
            color={'#fff'}
            fontSize={'24px'}
          >
            Check more news
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
        </Container>
      </Box>
    </>
  );
};

export default PostsSection;
