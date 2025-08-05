import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.scss';

interface ICarousel<T> {
  items: T[];
  itemRenderer: (item: T) => React.ReactNode;
}

const Carousel = <T,>({ items, itemRenderer }: ICarousel<T>) => {
  return (
    <Swiper
      className="my-carousel"
      navigation={true}
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
