import { cn } from "@/utils";
import { ElementType, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant: "light" | "dark";
  tag: "h1" | "h2" | "h3";
};

export const Heading: React.FC<HeadingProps> = ({
  tag,
  as: Heading = tag,
  className = "",
  children,
  variant,
}) => {
  const variants = {
    light: "text-light",
    dark: "text-dark",
  };

  const sizes = {
    h1: "tablet:text-7xl text-[12vw]",
    h2: "tablet:text-[52px] text-[8vw]",
    h3: "tablet:text-[24px] text-[6vw]",
  };

  return (
    <Heading
      className={cn(
        "font-marcellus-sc text tracking-[0.15em]",
        variants[variant],
        sizes[tag],
        className,
      )}
    >
      {children}
    </Heading>
  );
};
