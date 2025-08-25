"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BurgerButton } from "./BurgerButton";
import { Logo } from "./Logo";
import { useScrollDirection } from "./__helpers";

type HeaderMobileProps = {
  variant?: "auto" | "hero" | "default";
  isMenuOpen?: boolean;
};

export const HeaderMobile = ({
  variant = "auto",
  isMenuOpen = false,
}: HeaderMobileProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const effectiveVariant =
    variant === "auto" ? (isHome ? "hero" : "default") : variant;

  const [scrolledPastHero, setScrolledPastHero] = useState(
    effectiveVariant === "default",
  );
  const direction = useScrollDirection();

  useEffect(() => {
    if (effectiveVariant !== "hero") {
      setScrolledPastHero(true);
      return;
    }
    const el = document.getElementById("hero-sentinel");
    if (!el) {
      setScrolledPastHero(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setScrolledPastHero(!entry.isIntersecting),
      { rootMargin: "-56px 0px 0px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [effectiveVariant]);

  const nearTop = typeof window !== "undefined" ? window.scrollY < 16 : true;

  const shouldHide =
    !isMenuOpen &&
    scrolledPastHero &&
    !nearTop &&
    direction === "down" &&
    (typeof window === "undefined" ? false : window.scrollY > 64);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 px-4 pt-[env(safe-area-inset-top)]",
        "text-light transition-transform duration-300 will-change-transform",
        scrolledPastHero ? "bg-darker/90 backdrop-blur" : "bg-transparent",
        shouldHide ? "-translate-y-full" : "translate-y-0",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-opacity",
      ].join(" ")}
      aria-label="Główna nawigacja"
    >
      <div className="flex h-14 items-center justify-between">
        <Logo
          className="w-10"
          logoClassName={[
            "transition-opacity duration-300",
            scrolledPastHero ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        />
        <strong
          className={[
            "font-marcellus-sc text-xl tracking-[0.15em] transition-opacity duration-300",
            scrolledPastHero ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          K2.Inked
        </strong>

        <BurgerButton />
      </div>
    </header>
  );
};
