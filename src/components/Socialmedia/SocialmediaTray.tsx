import { SocialmediaLink } from "./SocialMediaLink";

type TrayProps = {
  className: string;
  size: number;
};

export const SocialmediaTray = ({ className, size }: TrayProps) => (
  <nav className={className}>
    <SocialmediaLink.Facebook size={size} color="light" />
    <SocialmediaLink.Instagram size={size} color="light" />
    <SocialmediaLink.Tiktok size={size} color="light" />
  </nav>
);
