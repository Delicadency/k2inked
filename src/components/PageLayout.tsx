import { ReactNode } from "react";
import { cn } from "@/utils";
import { Heading } from "./Heading";
import { Container } from "./Container";
import { Divider } from "@/icons/Divider";

type PageProps = {
  variant: "light" | "dark";
  headingName: string;
  tabDeskClassName: string;
  children: ReactNode;
};

export const PageLayout = ({
  variant,
  headingName,
  tabDeskClassName,
  children,
}: PageProps) => {
  const pageVariants = {
    light: "text-dark bg-light",
    dark: "text-light bg-dark",
  };

  return (
    <section className={cn(pageVariants[variant], "h-fit desktop:pb-40 pb-25")}>
      <Container className="flex flex-col items-center px-6.5 pt-34">
        {variant === "light" ? (
          <Heading tag="h2" variant="dark" className="text-center">
            {headingName}
          </Heading>
        ) : (
          <Heading tag="h2" variant="light" className="text-center">
            {headingName}
          </Heading>
        )}
        <Divider className="tablet:hidden mb-14" capWidth={70} />
        <div className={tabDeskClassName}>
          <Divider className="tablet:flex mb-20 hidden" />
        </div>
        {children}
      </Container>
    </section>
  );
};
