type DividerItem = {
  id: string;
  src: string;
  alt: string;
};

export const DividersData: DividerItem[] = [
  {
    id: "placeholder1",
    src: "/images/dividers/placeholder1.png",
    alt: "x",
  },
  {
    id: "placeholder2",
    src: "/images/dividers/placeholder2.png",
    alt: "x",
  },
  { id: "placeholder3", src: "/images/dividers/placeholder3.png", alt: "x" },
] as const;

// Data to swap when images are available
