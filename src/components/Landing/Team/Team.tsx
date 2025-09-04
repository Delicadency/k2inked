import { PageLayout } from "@/components/PageLayout";
import { teamParagraphs } from "./data";
import { Members } from "./Members";

export const Team = () => {
  return (
    <PageLayout
      headingName="Zespół"
      variant="light"
      tabDeskClassName="tablet:w-130 desktop:w-130"
    >
      <article className="tablet:text-center tablet:text-base max-w-3xl px-6 pb-6 text-start text-sm leading-7 font-light tracking-[0.12em] not-italic">
        {teamParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </article>
      <Members />
    </PageLayout>
  );
};
