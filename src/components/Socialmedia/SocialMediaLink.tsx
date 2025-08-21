import { IconFacebook } from "@/icons/IconFacebook";
import { IconInstagram } from "@/icons/IconInstagram";
import { IconTiktok } from "@/icons/IconTiktok";
import { K2INKED_DATA } from "@/data/k2Data";

type Props = {
  size: number;
  color: "light" | "primary";
};

export const SocialmediaLink = {
  Facebook: ({ size, color }: Props) => (
    <a
      href={K2INKED_DATA.socialMedia.facebook}
      title="Facebook"
      aria-label="Oficjalny profil salonu K2.inked na Facebooku"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconFacebook classname={`text-${color}`} size={size} />
    </a>
  ),

  Instagram: ({ size, color }: Props) => (
    <a
      href={K2INKED_DATA.socialMedia.instagram}
      title="Instagram"
      aria-label="Oficjalny profil salonu K2.inked na Instagramie"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconInstagram classname={`text-${color}`} size={size} />
    </a>
  ),
  Tiktok: ({ size, color }: Props) => (
    <a
      href={K2INKED_DATA.socialMedia.tiktok}
      title="Tiktok"
      aria-label="Oficjalny profil salonu K2.inked na Tiktoku"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <IconTiktok classname={`text-${color}`} size={size} />
    </a>
  ),
};
