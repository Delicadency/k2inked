import { SocialmediaLink, SocialmediaLinkProps } from "./SocialMediaLink";

type TrayProps = SocialmediaLinkProps & {
  navClassName?: string;
};

export const SocialmediaTray = ({
  navClassName = "",
  size = 30,
  iconClassName = ""
}: TrayProps) => (
  <nav className={navClassName}>
    <SocialmediaLink.Facebook size={size} iconClassName={iconClassName} />
    <SocialmediaLink.Instagram size={size} iconClassName={iconClassName} />
    {/* <SocialmediaLink.Tiktok size={size} iconClassName={iconClassName} /> */}
  </nav>
);
