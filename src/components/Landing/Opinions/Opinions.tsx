import { PageLayout } from "@/components/PageLayout";
import { opinionsData, paragraphs } from "./data";
import { Card } from "./Card";
import { Carousel } from "@/components/Carousel";

export const Opinions = () => {
  return (
    <PageLayout
      headingName="Poznaj opinie"
      variant="light"
      tabDeskClassName="tablet:w-170 desktop:w-170"
    >
      <article className="text-dark/80 tablet:text-lg tablet:leading-9 tablet:text-center mx-auto max-w-5xl px-6 text-start text-sm leading-7 font-light tracking-widest">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-6 last:mb-0">
            {p}
          </p>
        ))}
      </article>

      <Carousel
  className="primary-swiper tablet:mt-15 mt-5 mb-10 h-110 w-full max-w-7xl px-6 pt-6 pb-12"
  items={opinionsData.map((op) => <Card key={op.id} {...op} />)}
  swiperProps={{
    // init modules so breakpoints can enable/disable them
    navigation: { enabled: false },
    pagination: { enabled: true, clickable: true, dynamicBullets: true },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        pagination: { enabled: true },
        navigation: { enabled: false },
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        pagination: { enabled: true },
        navigation: { enabled: false },
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: { enabled: false }, // hide bullets on desktop
        navigation: { enabled: true },  // show default arrows
      },
    },

    centeredSlides: true,
    centeredSlidesBounds: true,
  }}
/>

    </PageLayout>
  );
};
