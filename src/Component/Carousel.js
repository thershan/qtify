import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { LeftButton, RightButton } from './NavigationButtons';

function Carousel({ items }) {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.right-button',
          prevEl: '.left-button',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
        ))}
        <LeftButton />
        <RightButton />
      </Swiper>
    </div>
  );
}

export default Carousel;
