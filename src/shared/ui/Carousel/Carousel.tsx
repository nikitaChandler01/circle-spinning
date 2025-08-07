import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import './Carousel.scss';

interface ICarousel<T> {
  swiperRef?: React.MutableRefObject<SwiperRef | null>;
  items: T[];
  itemRenderer: (item: T) => React.ReactNode;
}

const Carousel = <T,>({ items, itemRenderer, swiperRef }: ICarousel<T>) => {
  return (
    <Swiper
      ref={swiperRef}
      className="my-carousel"
      slidesPerView={'auto'}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{itemRenderer(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
