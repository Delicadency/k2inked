"use client";

import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "./Heading";
import { Button } from "./Button/Button";
import { Routes } from "@/routes";

export const Hero = () => (
  <BackgroundImage
    src="/images/bg-placeholder.png"
    alt="Zdjęcie przedstawiające tatuaż w trakcie wykonywania"
    priority
  >
    <section className="tablet:h-[100vh] tablet:w-full flex min-h-[100svh] w-full flex-col items-center justify-center">
      <LogoK2Inked classname="text-light max-w-[80vw] mobile:max-w-[70vw] tablet:max-w-[500px]" />
      <Heading tag="h1" variant="light">
        K2.inked
      </Heading>
      <Heading tag="h3" variant="light">
        Studio w sercu Warszawy
      </Heading>
      <div className="tablet:gap-45 tablet:pt-18 flex flex-row gap-[20vw] pt-13.5">
        <Button
          variant="light"
          ariaLabel="Kliknij, by przejść do strony z formularzem kontaktowym"
          as="a"
          href={Routes.CONTACT}
          className="tablet:w-51 w-25.5"
        >
          Umów się
        </Button>
        <Button
          variant="lightTrans"
          ariaLabel="Kliknij, by przejść do galerii prac"
          as="a"
          href={Routes.GALLERY}
        >
          Zobacz prace
        </Button>
      </div>
    </section>
  </BackgroundImage>
);
