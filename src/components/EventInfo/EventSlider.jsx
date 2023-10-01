import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Pagination, Navigation } from 'swiper/modules';

const EventSlider = ({ data }) => {
  return (
    <section>
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
    </section>
  );
};

EventSlider.propTypes = {
  data: PropTypes.object,
};

export default EventSlider;
