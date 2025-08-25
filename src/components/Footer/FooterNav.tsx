import Link from "next/link";
import { STATIC_ROUTES } from "@/routes";

export const FooterNav = () => (
  <nav className="tablet:text-sm tablet:mb-0 tablet:text-start mb-12.5 flex flex-col gap-1.5 text-center text-[3.5vw] font-bold tracking-[0.15em]">
    <Link
      href={STATIC_ROUTES.REGULATIONS}
      aria-label="Kliknij, by przejść do regulaminu salonu K2.Inked"
      className="link-hover"
    >
      REGULAMIN
    </Link>
    <Link
      href={STATIC_ROUTES.POLICY}
      aria-label="Kliknij, by przejść do polityki prywatności strony salonu K2.Inked"
      className="link-hover"
    >
      POLITYKA PRYWATNOŚCI
    </Link>
  </nav>
);
