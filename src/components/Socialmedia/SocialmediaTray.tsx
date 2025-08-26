import { SocialmediaLink, SocialmediaLinkProps } from "./SocialMediaLink";

type TrayProps = SocialmediaLinkProps & {
  navclassName?: string;
};

export const SocialmediaTray = ({
  navclassName = "",
  size = 30,
  iconclassName = "",
}: TrayProps) => (
  <nav className={navclassName}>
    <SocialmediaLink.Facebook size={size} iconclassName={iconclassName} />
    <SocialmediaLink.Instagram size={size} iconclassName={iconclassName} />
    {/* <SocialmediaLink.Tiktok size={size} iconclassName={iconclassName} /> */}
  </nav>
);
