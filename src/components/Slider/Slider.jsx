import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import './Slider.css';

import { Box } from '@chakra-ui/react';

const Slider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation
      centeredSlides={true}
      effect={'fade'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
    >
      {data.map((bg, index) => (
        <SwiperSlide key={index}>
          <Box
            as="div"
            h="80vh"
            w="100vw"
            bgImage={`url(${bg})`}
            bgPos="center"
            bgSize={'cover'}
            bgRepeat="no-repeat"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;