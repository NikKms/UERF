import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Container } from '@chakra-ui/react';
import event1_1 from '../../assets/img/event1-1.jpg';
import event1_2 from '../../assets/img/event1-2.jpg';
import event1_3 from '../../assets/img/event1-3.jpg';
import event1_4 from '../../assets/img/event1-4.jpg';
import event1_5 from '../../assets/img/event1-5.jpg';
import event1_6 from '../../assets/img/event1-6.jpg';
import event1_7 from '../../assets/img/event1-7.jpg';
import { useParams } from 'react-router-dom';

const images = [
  { id: '01', imgArr: [] },
  {
    id: '02',
    imgArr: [
      event1_1,
      event1_2,
      event1_3,
      event1_4,
      event1_5,
      event1_6,
      event1_7,
    ],
  },
];

const EventSlider = () => {
  const { id } = useParams();
  const selectedImages = images.find(img => img.id === id);

  return (
    <Box
      as="section"
      backgroundColor="#f4f6fa"
      paddingBottom="70px"
      paddingTop="70px"
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
            270: {
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
        >
          {selectedImages.imgArr.length > 0 &&
            selectedImages.imgArr.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default EventSlider;
