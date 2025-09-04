import { PageLayout } from "../../PageLayout";
import { studioData } from "./data";
import { StudioCarousel } from "./StudioCarousel";

export const Studio = () => {
  return (
    <PageLayout
      headingName="Studio"
      variant="dark"
      tabDeskClassName="tablet:w-130 desktop:w-130"
    >
      <StudioCarousel />

      {studioData.map((paragraph, index) => (
        <p
          key={index}
          className="tablet:text-center tablet:text-base max-w-3xl px-6 pb-6 text-start text-sm leading-7 font-light tracking-[0.12em] not-italic"
        >
          {paragraph}
        </p>
      ))}
    </PageLayout>
  );
};
