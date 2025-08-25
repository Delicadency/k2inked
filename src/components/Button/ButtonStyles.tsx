import type { Variant } from "./ButtonTypes";

export const base =
  "group relative inline-flex items-center justify-center select-none cursor-pointer " +
  "px-8 py-2 uppercase text-xs tablet:text-lg font-inconsolata min-w-34 tablet:min-w-51 " +
  "transition-all duration-200 ease-out transform-gpu will-change-transform " +
  "outline-none overflow-hidden " +
  "focus-visible:ring-2 focus-visible:ring-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark " +
  "hover:scale-[1.04] active:scale-[1.08] " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none";

export const variants: Record<Variant, string> = {
  light: "text-dark bg-light hover:bg-light/90",
  lightTrans:
    "!text-light bg-transparent ring-1 ring-inset ring-light/60 hover:bg-light/10",
  primary: "text-light bg-primary hover:bg-primary/90",
  primaryTrans:
    "text-primary bg-transparent ring-1 ring-inset ring-primary/60 hover:bg-primary/10",
};
