import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "./Heading";

export const Hero = () => (
  <section className="">
    <BackgroundImage
      src="/images/bg-placeholder.png"
      alt="Zdjęcie przedstawiające tatuaż w trakcie wykonywania"
      priority
    >
      <div className="flex flex-col items-center justify-center tablet:h-[100vh] tablet:w-full">
        <LogoK2Inked classname="text-light max-w-[80vw] mobile:max-w-[80vw] tablet:max-w-[500px]" />
        <Heading tag="h1" variant="light">K2.inked</Heading>
        <Heading tag="h3" variant="light">Studio w sercu Warszawy</Heading>
      </div>
    </BackgroundImage>
  </section>
);
