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

type TeamParagraphs = string[];

export const teamParagraphs: TeamParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus fermentum sem, non malesuada ante volutpat in. Donec lorem magna, scelerisque congue ligula a, ultricies dignissim nisl. Aliquam feugiat nisl dui, in semper nisi sodales eget. Morbi et lacus at risus sollicitudin semper semper eget ante. Nulla molestie placerat libero vitae venenatis. Ut urna justo, placerat at lobortis quis, auctor et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "In hac habitasse platea dictumst. Aenean a quam at erat efficitur fringilla. Nullam euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, nec lacinia nunc nisl nec nisi. Sed euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, nec lacinia nunc nisl nec nisi. Sed euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, nec lacinia nunc nisl nec nisi.",
];

export const TeamData: TeamMember[] = [
  {
    id: "klaudia",
    name: "Klaudia",
    role: "tattoo",
    imgSrc: "/images/team/image00006.jpg",
    hoverImgSrc: "/images/team/image00005.jpg",
    alt: "Klaudia",
    route: path.artist("klaudia"),
    heading: "Klaudia",
    style: "fineline",
  },
  {
    id: "kari",
    name: "Kari",
    role: "tattoo",
    imgSrc: "/images/team/image00009.jpg",
    hoverImgSrc: "/images/team/image00010.jpg",
    alt: "Kari",
    route: path.artist("kari"),
    heading: "Kari",
    style: "blackwork / realism",
  },
  {
    id: "sonia",
    name: "Sonia",
    role: "tattoo",
    imgSrc: "/images/team/image00003.jpg",
    hoverImgSrc: "/images/team/image00004.jpg",
    alt: "Sonia",
    route: path.artist("sonia"),
    heading: "Sonia",
    style: "fineline / ornaments",
  },
  {
    id: "ewelina",
    name: "Ewelina",
    role: "tattoo",
    imgSrc: "/images/team/image00011.jpg",
    hoverImgSrc: "/images/team/image00012.jpg",
    alt: "Ewelina",
    route: path.artist("ewelina"),
    heading: "Ewelina",
    style: "dotwork",
  },
  {
    id: "mirella",
    name: "Mirella",
    role: "tattoo",
    imgSrc: "/images/team/image00007.jpg",
    hoverImgSrc: "/images/team/image00008.jpg",
    alt: "Mirella",
    route: path.artist("mirella"),
    heading: "Mirella",
    style: "fineline / microrealism",
  },
  {
    id: "emi",
    name: "Emi",
    role: "piercing",
    imgSrc: "/images/team/image00001.jpg",
    hoverImgSrc: "/images/team/image00002.jpg",
    alt: "Emi",
    route: path.artist("emi"),
    heading: "Emi",
    style: "piercing",
  },
] as const;
