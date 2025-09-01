import { PageLayout } from "../../PageLayout";
import { studioData } from "./data";

export const Studio = () => {
  return (
    <PageLayout
      headingName="Studio"
      variant="dark"
      tabDeskClassName="tablet:w-180 desktop:w-180"
    >
      <div></div>
      {studioData.map((paragraph, index) => (
        <p
          key={index}
          className="max-w-3xl px-6 pb-6 tablet:text-center leading-7 font-light text-start tracking-[0.12em] not-italic text-sm tablet:text-base"
        >
          {paragraph}
        </p>
      ))}
    </PageLayout>
  );
};
