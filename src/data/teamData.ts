import { path } from "@/routes";

type TeamMember = {
  id: string;
  name: string;
  role: "tattoo" | "piercing";
  imgSrc: string;
  hoverImgSrc?: string;
  alt: string;
  route: string;
  heading: string;
  style: string;
};

export const TeamData: TeamMember[] = [
  {
    id: "klaudia",
    name: "Klaudia",
    role: "tattoo",
    imgSrc: "/images/team/image00006.jpeg",
    hoverImgSrc: "/images/team/image00005.jpeg",
    alt: "Klaudia",
    route: path.artist("klaudia"),
    heading: "Klaudia",
    style: "fineline / single needle",
  },
  {
    id: "kari",
    name: "Kari",
    role: "tattoo",
    imgSrc: "/images/team/image00009.jpeg",
    hoverImgSrc: "/images/team/image00010.jpeg",
    alt: "Kari",
    route: path.artist("kari"),
    heading: "Kari",
    style: "blackwork / realism",
  },
  {
    id: "sonia",
    name: "Sonia",
    role: "tattoo",
    imgSrc: "/images/team/image00003.jpeg",
    hoverImgSrc: "/images/team/image00004.jpeg",
    alt: "Sonia",
    route: path.artist("sonia"),
    heading: "Sonia",
    style: "fineline / ornaments",
  },
  {
    id: "ewelina",
    name: "Ewelina",
    role: "tattoo",
    imgSrc: "/images/team/image00011.jpeg",
    hoverImgSrc: "/images/team/image00012.jpeg",
    alt: "Ewelina",
    route: path.artist("ewelina"),
    heading: "Ewelina",
    style: "dotwork",
  },
  {
    id: "mirella",
    name: "Mirella",
    role: "tattoo",
    imgSrc: "/images/team/image00007.jpeg",
    hoverImgSrc: "/images/team/image00008.jpeg",
    alt: "Mirella",
    route: path.artist("mirella"),
    heading: "Mirella",
    style: "fineline / microrealism",
  },
  {
    id: "emi",
    name: "Emi",
    role: "piercing",
    imgSrc: "/images/team/image00001.jpeg",
    hoverImgSrc: "/images/team/image00002.jpeg",
    alt: "Emi",
    route: path.artist("emi"),
    heading: "Emi",
    style: "piercing",
  },
] as const;
