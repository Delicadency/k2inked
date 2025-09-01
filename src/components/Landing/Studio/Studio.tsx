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
          className="max-w-3xl px-6 pb-6 text-center leading-7 font-light tracking-[0.12em] not-italic"
        >
          {paragraph}
        </p>
      ))}
    </PageLayout>
  );
};
