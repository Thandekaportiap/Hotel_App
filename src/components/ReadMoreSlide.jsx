import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SwiperCore from 'swiper';

// Install modules
SwiperCore.use([Autoplay, Pagination]);

const images = [
   
    { src: require('../assets/hotel3.jpg'), label: 'Woodside' },
    { src: require('../assets/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'), label: 'Viewpoint' },
    { src: require('../assets/hotel5.jpg'), label: 'Sweden' },
];

const ProgressSlideCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        className="progress-slide-carousel"
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.progress-slide-carousel .swiper-pagination',
          type: 'progressbar',
        }}
        spaceBetween={50}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <img src={image} alt={`Slide ${index + 1}`} className="h-full w-full object-cover rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default ProgressSlideCarousel;
