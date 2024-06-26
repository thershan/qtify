import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import './Carousel.css';
import CarouselLeft from './CarouselLeftNavigation';
import CarouselRight from './CarouselRightNavigation';

const Controls = ({ data, swiperRef }) => {
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      console.log('Swiper instance:', swiperRef.current);
    }
  }, [data, swiperRef]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  const swiperRef = useRef(null);

  const sliderSettings = {
    240: { slidesPerView: 2, slidesPerGroup: 1 },
    376: { slidesPerView: 2.25, spaceBetween: 10, slidesPerGroup: 1 },
    440: { slidesPerView: 3, slidesPerGroup: 1 },
    680: { slidesPerView: 3, slidesPerGroup: 1 },
    767: { slidesPerView: 4.5, slidesPerGroup: 1 },
    1025: { slidesPerView: 6, slidesPerGroup: 1 },
    1200: { slidesPerView: 7, slidesPerGroup: 1 },
  };

  useEffect(() => {
    if (swiperRef.current) {
      console.log('Initial Slide Count:', swiperRef.current.slides.length);
    }
  }, [data]);

  const verifyVisibility = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.slides;
      console.log('Slide Visibility Check:');
      for (let i = 0; i < slides.length; i++) {
        console.log(`Slide ${i + 1} visibility:`, slides[i].isVisible);
      }
    }
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        breakpoints={sliderSettings}
        slidesPerView={7}
        slidesPerGroup={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log('Swiper initialized:', swiper);
        }}
        onSlideChange={() => verifyVisibility()}
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
