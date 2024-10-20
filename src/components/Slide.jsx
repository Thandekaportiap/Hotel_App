import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ImageCarousel = ({ images }) => {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                className="progress-slide-carousel"
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                style={{ height: 'max-content', }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative flex items-center justify-center bg-indigo-50 rounded-2xl h-96">
                            <img src={image.src} alt={`Slide ${index + 1}`} className="object-cover w-full h-full rounded-2xl" />
                            <span className="absolute text-3xl font-semibold text-[#003060]">{image.label}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
