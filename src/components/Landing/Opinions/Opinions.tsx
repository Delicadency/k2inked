import { PageLayout } from "@/components/PageLayout";
import { opinionsData, paragraphs } from "./data";
import { Card } from "./Card";

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
      {opinionsData.map((opinion) => (
        <Card key={opinion.id} {...opinion} />
      ))}
    </PageLayout>
  );
};
