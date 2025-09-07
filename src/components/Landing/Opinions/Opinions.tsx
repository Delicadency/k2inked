"use client";

import { PageLayout } from "@/components/PageLayout";
import { opinionsData, paragraphs } from "./data";
import { Card } from "./Card";
import { Carousel } from "@/components/Carousel";
import { IconChevron } from "@/icons/IconChevron";

export const Opinions = () => {
  return (
    <PageLayout
      headingName="Poznaj opinie"
      variant="light"
      tabDeskClassName="tablet:w-170 desktop:w-170"
    >
      <article className="text-dark/80 tablet:text-base tablet:text-center mx-auto max-w-5xl px-6 text-start text-sm leading-7 font-light tracking-widest">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-6 last:mb-0">
            {p}
          </p>
        ))}
      </article>

      {/* to refactor it later - too many repeats, I could make a component for buttons and simplify the code */}
      <div className="desktop:mt-20 relative mx-auto mt-10 w-full max-w-7xl overflow-visible">
        <button
          className="opinions-prev desktop:flex absolute top-1/2 -left-15 z-50 hidden h-16 w-10 -translate-y-1/2 cursor-pointer items-center justify-center"
          aria-label="Poprzednie opinie"
        >
          <IconChevron
            width={34}
            height={68}
            className="text-primary hover:text-secondary active:text-primary/80 rotate-180 transition duration-300 active:scale-110"
          />
        </button>

        <button
          className="opinions-next desktop:flex absolute top-1/2 -right-13 z-50 hidden h-16 w-10 -translate-y-1/2 cursor-pointer items-center justify-center"
          aria-label="Następne opinie"
        >
          <IconChevron
            width={34}
            height={68}
            className="text-primary hover:text-secondary active:text-primary/80 transition duration-300 active:scale-110"
          />
        </button>

        <Carousel
          className="primary-swiper tablet:mt-15 mt-5 mb-10 h-110 w-full px-6 pt-6 pb-12"
          items={opinionsData.map((op) => (
            <Card key={op.id} {...op} />
          ))}
          swiperProps={{
            pagination: {
              enabled: true,
              clickable: true,
              dynamicBullets: true,
            },
            // tell Swiper to use YOUR buttons
            navigation: {
              enabled: true,
              prevEl: ".opinions-prev",
              nextEl: ".opinions-next",
            },
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
                pagination: { enabled: false },
                navigation: { enabled: true },
              },
            },
            onBreakpoint: (swiper) => {
              const isDesk = window.innerWidth >= 1280;
              if (isDesk) swiper.navigation.update();
            },
            centeredSlides: true,
            centeredSlidesBounds: true,
            watchOverflow: true,
          }}
        />
      </div>
    </PageLayout>
  );
};
