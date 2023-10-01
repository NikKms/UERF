import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { Container } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Pagination, Navigation } from 'swiper/modules';

const EventSlider = ({ data }) => {
  return (
    <Container
      maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
      px="12px"
      marginTop="90px"
      marginBottom="90px"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
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
  );
};

EventSlider.propTypes = {
  data: PropTypes.object,
};

export default EventSlider;
