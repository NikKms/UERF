import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Pagination, Navigation } from 'swiper/modules';
import { Box, Container } from '@chakra-ui/react';

const EventSlider = ({ data }) => {
  return (
    <Box
      as="section"
      backgroundColor="#f4f6fa"
      paddingBottom="90px"
      paddingTop="90px"
    >
      <Container maxW={{ base: '744px', lg: '1000px', xl: '1176px' }} px="12px">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            type: 'bullets',
          }}
          navigation={true}
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
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.imagesSlider.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

EventSlider.propTypes = {
  data: PropTypes.object,
};

export default EventSlider;
