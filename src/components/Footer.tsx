import Link from "next/link";
import { SocialmediaTray } from "./Socialmedia/SocialmediaTray";
import { Routes } from "@/routes";
import { Container } from "./Container";

export const Footer = () => (
  <footer className="bg-dark text-light pb-17.5 tablet:pb-8.5 tracking-[0.15em]">
    <hr className="h-0.5 w-full" />
    <Container className="tablet:mt-8.5 flex flex-col items-center tablet:justify-between justify-center tablet:flex-row desktop:gap-22.5 tablet:px-8 desktop:px-0">
      <SocialmediaTray navClassName="tablet:hidden mt-13.5 mb-8.5 flex flex-row gap-7.5" iconClassName="text-light link-hover"/>
      <nav className="tablet:text-sm mb-12.5 tablet:mb-0 flex flex-col gap-1.5 text-center tablet:text-start text-[3.5vw] font-bold tracking-[0.15em]">
        <Link
          href={Routes.REGULATIONS}
          aria-label="Kliknij, by przejść do regulaminu salonu K2.Inked"
          className="link-hover"
        >
          REGULAMIN
        </Link>
        <Link
          href={Routes.POLICY}
          aria-label="Kliknij, by przejść do polityki prywatności strony salonu K2.Inked"
          className="link-hover"
        >
          POLITYKA PRYWATNOŚCI
        </Link>
      </nav>
      <section className="desktop:flex-row desktop:inline-flex tablet:gap-1 tablet:text-sm flex flex-col items-center gap-3 text-[3vw]">
        <small>
          &copy; <time dateTime="2025">2025</time>{" "}
          <strong>
            <Link
              href={Routes.HOME}
              aria-label="Przejdź do strony głównej salonu K2.INKED"
              className="link-hover"
            >
              K2.INKED
            </Link>
          </strong>{" "}
          ALL RIGHTS RESERVED.
        </small>
        <small>
          DESIGNED &amp; PROUDLY DEVELOPED BY
          <a
            href="https://www.linkedin.com/in/agata-kuklinska"
            rel="author noopener"
            target="_blank"
            aria-label="Przejdź do profilu LinkedIn autorki strony"
            className="link-hover"
          >
            {" "}
            <strong>AGATA KUKLIŃSKA</strong>
          </a>
          .
        </small>
      </section>
      <SocialmediaTray navClassName="hidden tablet:flex flex-row gap-7.5" iconClassName="text-light link-hover" />
    </Container>
  </footer>
);
