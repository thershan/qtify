import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import './Carousel.css';
import CarouselLeft from './CarouselLeftNavigation';
import CarouselRight from './CarouselRightNavigation';

const Controls = ({ data, swiperRef }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [data, swiperRef]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  const swiperRef = useRef(null);

  const sliderSettings = {
    240: { slidesPerView: 2 },
    376: { slidesPerView: 2.25, spaceBetween: 10 },
    440: { slidesPerView: 3 },
    680: { slidesPerView: 3 },
    767: { slidesPerView: 4.5 },
    1025: { slidesPerView: 6 },
    1200: { slidesPerView: 7 },
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        breakpoints={sliderSettings}
        slidesPerView={7}
        spaceBetween={20}
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log('Swiper initialized:', swiper);
        }}
      >
        <Controls data={data} swiperRef={swiperRef} />
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      {window.innerWidth > 767 && (
        <div className="arrow-right absolute -right-2 top-1/3 z-10 bg-white rounded-full">
          <CarouselRight />
        </div>
      )}
      {window.innerWidth > 767 && (
        <div className="arrow-left absolute -left-3 top-1/3 z-10 bg-white rounded-full">
          <CarouselLeft />
        </div>
      )}
    </div>
  );
};

export default Carousel;
