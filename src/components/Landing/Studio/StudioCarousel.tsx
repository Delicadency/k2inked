"use client";
import { useEffect, useState } from "react";
import { Carousel } from "@/components/Carousel";

export const StudioCarousel = () => {
  const cards = Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="bg-light/90 h-100 w-60 rounded-2xl backdrop-blur-sm" />
  ));

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isDesktop) {
    return (
      <div className="grid grid-cols-4 gap-8 max-w-5xl w-full px-6 pb-12 pt-6 mb-10">
        {cards}
      </div>
    );
  }

  return (
    <Carousel
      className="light-swiper h-110 w-full max-w-2xl px-6 pb-12 pt-6 mb-10"
      items={cards}
      swiperProps={{
        pagination: { clickable: true, dynamicBullets: true },
        centeredSlides: true,
        centeredSlidesBounds: true,
      }}
    />
  );
};
