"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard } from "swiper/modules";
import type { ReactNode } from "react";
import type { SwiperProps } from "swiper/react";

type CarouselProps = {
  items: ReactNode[];
  className?: string;
  swiperProps?: SwiperProps;
};

export const Carousel = ({ items, className, swiperProps }: CarouselProps) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Keyboard]}
      slidesPerView={1}
      spaceBetween={16}
      keyboard={{ enabled: true }}
      a11y={{ enabled: true }}
      watchOverflow
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },  
        1280: { slidesPerView: 4, spaceBetween: 24 },
      }}
      className={className}
      {...swiperProps} 
    >
      {items.map((node, i) => (
        <SwiperSlide key={i}>{node}</SwiperSlide>
      ))}
    </Swiper>
  );
};
