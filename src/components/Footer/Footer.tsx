import { SocialmediaTray } from "../Socialmedia/SocialmediaTray";
import { Container } from "../Container";
import { FooterNav } from "./FooterNav";
import { Attribution } from "./Attribution";

export const Footer = () => (
  <footer className="bg-dark text-light tablet:pb-8.5 pb-17.5 tracking-[0.15em]">
    <hr className="h-0.5 w-full" />
    <Container className="tablet:mt-8.5 tablet:justify-between tablet:flex-row desktop:gap-22.5 tablet:px-8 desktop:px-0 flex flex-col items-center justify-center">
      <SocialmediaTray
        navclassName="tablet:hidden mt-13.5 mb-8.5 flex flex-row gap-7.5"
        iconclassName="text-light link-hover"
      />
      <FooterNav />
      <Attribution />
      <SocialmediaTray
        navclassName="hidden tablet:flex flex-row gap-7.5"
        iconclassName="text-light link-hover"
      />
    </Container>
  </footer>
);
