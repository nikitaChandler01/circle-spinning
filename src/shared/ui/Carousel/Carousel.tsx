import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.scss';
import useResize from '@shared/lib/useResize';

interface ICarousel<T> {
  items: T[];
  itemRenderer: (item: T) => React.ReactNode;
}

const Carousel = <T,>({ items, itemRenderer }: ICarousel<T>) => {
  const isMobile = useResize({ maxWidth: 320 });

  return (
    <Swiper
      className="my-carousel"
      slidesPerView={'auto'}
      pagination={isMobile}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{itemRenderer(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
