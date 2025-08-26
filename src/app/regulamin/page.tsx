import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Divider } from "@/icons/Divider";
import { regulations } from "./data";

const Regulations = () => {
  return (
    <div className="text-light bg-dark h-fit">
      <Container className="flex flex-col items-center px-6.5 pt-34">
        <Heading variant="light" tag="h2">
          Regulamin
        </Heading>
        <Divider className="tablet:hidden mb-14" capWidth={70} />
        <div className="w-160">
          <Divider className="tablet:flex mb-20 hidden" />
        </div>
        <article className="tablet:text-lg mb-25 text-base leading-7.5 font-light tracking-[0.12em]">
          {regulations.map((regulation, i) => (
            <p className="mb-6" key={i}>
              {regulation}
            </p>
          ))}
        </article>
      </Container>
    </div>
  );
};

export default Regulations;
