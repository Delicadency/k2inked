import { IconInstagram } from "@/icons/IconInstagram";
import { cn } from "@/utils";

export const InstagramMember = ({
  username,
  className,
}: {
  username: string;
  className?: string;
}) => (
  <a
    href={`https://www.instagram.com/${username}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <IconInstagram className={cn("text-primary link-hover", className)} />
  </a>
);
