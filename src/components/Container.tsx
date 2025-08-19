import { cn } from "@/utils";
import { ReactNode, ElementType } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Container = "div",
}) => (
  <Container
    className={cn(
      "tablet:max-w-[1279px] desktop:max-w-[1250px] mx-auto w-full max-w-[767px]",
      className,
    )}
  >
    {children}
  </Container>
);
