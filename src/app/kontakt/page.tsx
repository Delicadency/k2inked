import { PageLayout } from "@/components/PageLayout";
import { contactData } from "./data";

const ContactPage = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Napisz do nas"
      tabDeskClassName="tablet:w-180 desktop:w-180"
    >
        <article className="tablet:text-lg mb-25 text-base leading-7.5 font-light tracking-[0.12em]">
        {contactData.map((line, i) => (
          <p className="mb-6" key={i}>
            {line}
          </p>
        ))}
        </article>
    </PageLayout>
  );
};

export default ContactPage;
