import type {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
} from "react";
import type { RouteValues } from "@/routes";

export type Variant = "light" | "lightTrans" | "primary" | "primaryTrans";

export type CommonProps = {
  children: ReactNode;
  className?: string;
  variant: Variant;
  as?: "button" | "a";
  ariaLabel: string;
};

export type ButtonFlavor = {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & Omit<
  ComponentPropsWithoutRef<"button">,
  "className" | "children" | "type" | "onClick" | "disabled"
>;

export type InternalAnchor = {
  as: "a";
  href: RouteValues;
  target?: "_self";
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  disabled?: boolean; 
} & Omit<
  ComponentPropsWithoutRef<"a">,
  "className" | "children" | "href" | "onClick" | "target" | "rel"
>;


export type ExternalAnchor = {
  as: "a";
  href: `http${string}` | `mailto:${string}` | `tel:${string}`;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  disabled?: boolean; 
} & Omit<
  ComponentPropsWithoutRef<"a">,
  "className" | "children" | "href" | "onClick" | "target" | "rel"
>;

export type ButtonProps = CommonProps & (ButtonFlavor | InternalAnchor | ExternalAnchor);
