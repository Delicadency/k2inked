import { path, type ArtistPath, type ArtistSlug } from "@/routes";

type BaseTeamMember = {
  name: string;
  imgSrc: string;
  hoverImgSrc?: string;
  alt: string;
  heading: string;
  style: string;
};


export const TEAM = {
  klaudia: {
    name: "Klaudia",
    imgSrc: "/images/team/image00006.jpeg",
    hoverImgSrc: "/images/team/image00005.jpeg",
    alt: "Klaudia",
    heading: "Klaudia",
    style: "fineline / single needle",
  },
  kari: {
    name: "Kari",
    imgSrc: "/images/team/image00009.jpeg",
    hoverImgSrc: "/images/team/image00010.jpeg",
    alt: "Kari",
    heading: "Kari",
    style: "blackwork / realism",
  },
  sonia: {
    name: "Sonia",
    imgSrc: "/images/team/image00003.jpeg",
    hoverImgSrc: "/images/team/image00004.jpeg",
    alt: "Sonia",
    heading: "Sonia",
    style: "ornaments / fineline",
  },
  ewelina: {
    name: "Ewelina",
    imgSrc: "/images/team/image00011.jpeg",
    hoverImgSrc: "/images/team/image00012.jpeg",
    alt: "Ewelina",
    heading: "Ewelina",
    style: "dotwork",
  },
  mirella: {
    name: "Mirella",
    imgSrc: "/images/team/image00007.jpeg",
    hoverImgSrc: "/images/team/image00008.jpeg",
    alt: "Mirella",
    heading: "Mirella",
    style: "fineline / microrealism",
  },
  emi: {
    name: "Emi",
    imgSrc: "/images/team/image00001.jpeg",
    hoverImgSrc: "/images/team/image00002.jpeg",
    alt: "Emi",
    heading: "Emi",
    style: "piercing",
  },
} satisfies Record<ArtistSlug, BaseTeamMember>;

export type TeamMember = {
  id: ArtistSlug;
  route: ArtistPath;
} & BaseTeamMember;

export const TEAM_BY_SLUG: Record<ArtistSlug, TeamMember> = (Object
  .entries(TEAM) as [ArtistSlug, BaseTeamMember][])
  .reduce((acc, [slug, data]) => {
    acc[slug] = { id: slug, route: path.artist(slug), ...data };
    return acc;
  }, {} as Record<ArtistSlug, TeamMember>);

export const TEAM_LIST: TeamMember[] = Object.values(TEAM_BY_SLUG);
