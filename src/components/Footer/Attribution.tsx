import Link from "next/link";
import { Routes } from "@/routes";

export const Attribution = () => (
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
);
