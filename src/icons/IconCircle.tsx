import { IconProps } from "@/types";

export const IconCircle = ({ classname, size }: IconProps) => (
  <svg
    className={classname}
    width={size}
    height={size}
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.99967 3.49984C6.99967 5.43278 5.4327 6.99967 3.49983 6.99967C1.56697 6.99967 0 5.4327 0 3.49984C0 1.56698 1.56697 0 3.49983 0C5.42553 0.00723115 6.99967 1.57422 6.99967 3.49984Z"
      fill="currentColor"
    />
  </svg>
);
