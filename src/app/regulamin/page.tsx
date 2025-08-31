import { regulations } from "./data";
import { PageLayout } from "@/components/PageLayout";

const Regulations = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Regulamin"
      tabDeskClassName="tablet:w-150 desktop:w-150"
    >
      <article className="tablet:text-lg text-base leading-7.5 font-light tracking-[0.12em]">
        {regulations.map((regulation, i) => (
          <p className="mb-6" key={i}>
            {regulation}
          </p>
        ))}
      </article>
    </PageLayout>
  );
};

export default Regulations;
