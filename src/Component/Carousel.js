import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./carousel.css";
import Card from "./CardComponent";

const Carousel = ({ data, carouselKey }) => {
  const sliderSettings = {
    240: {
      slidesPerView: 2,
    },
    376: {
      slidesPerView: 2.25,
      spaceBetween: 10
    },
    440: {
      slidesPerView: 3,
    },
    680: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4.5,
    },
    1025: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    }
  };

  return (
    <div className="relative">
      <Swiper
        key={carouselKey}
        breakpoints={sliderSettings}
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={20}
        navigation={{
          nextEl: `.arrow-right-${carouselKey}`,
          prevEl: `.arrow-left-${carouselKey}`,
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <Card data={item} type="album" key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      {window.innerWidth > 767 && (
        <div className={`arrow-right-${carouselKey} absolute -right-2 top-1/3 z-10 bg-white rounded-full`}>{'›'}</div>
      )}
      {window.innerWidth > 767 && (
        <div className={`arrow-left-${carouselKey} absolute -left-3 top-1/3 z-10 bg-white rounded-full`}>{'‹'}</div>
      )}
    </div>
  );
};

export default Carousel;
