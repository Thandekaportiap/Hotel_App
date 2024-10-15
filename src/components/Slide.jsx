import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ImageCarousel = ({ images }) => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay, Pagination]}
                className="progress-slide-carousel"
                loop={true}
                autoplay={{
                    delay: 1200,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                style={{ height: 'max-content', paddingBottom: '64px' }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center relative">
                            <img src={image.src} alt={`Slide ${index + 1}`} className="object-cover h-full w-full rounded-2xl" />
                            <span className="absolute text-3xl font-semibold text-[#003060]">{image.label}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
