import { Carousel } from "@/components/Carousel";

export const StudioCarousel = () => {

    // Placeholder cards; replace with actual content as needed
  const cards = Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="bg-light/90 h-100 w-60 rounded-2xl backdrop-blur-sm" />
  ));

  return (

      <Carousel
        className="light-swiper h-110 w-full max-w-2xl desktop:max-w-5xl px-6 pb-12 pt-6 mb-10"
        items={cards}
        swiperProps={{
          pagination: { clickable: true, dynamicBullets: true },
          centeredSlides: true,
          centeredSlidesBounds: true,
        }}
      />
  );
};