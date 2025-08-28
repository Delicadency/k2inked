import { policies } from "./data";
import { PageLayout } from "@/components/PageLayout";

const Policy = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Polityka prywatności"
      tabDivWidth={720}
      deskDivWidth={960}
    >
      <article className="tablet:text-lg mb-25 text-base leading-7.5 font-light tracking-[0.12em]">
        {policies.map((policy, i) => (
          <p className="mb-6" key={i}>
            {policy}
          </p>
        ))}
      </article>
    </PageLayout>
  );
};

export default Policy;
