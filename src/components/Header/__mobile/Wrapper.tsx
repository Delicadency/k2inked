import dynamic from "next/dynamic";
import { useDisclosure, useKeyPress } from "../__helpers";
import { useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { IconBurger } from "@/icons/IconBurger";
import { cn } from "@/utils";

const Navigation = dynamic(() =>
  import("./MobileNav").then((mod) => mod.MobileNav),
);

export const Wrapper = () => {
  const { isOpen, toggle, close } = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleEscapeKey = useCallback(() => close(), [close]);
  useKeyPress("Escape", handleEscapeKey);

  useEffect(() => close(), [pathname, close]);

  const handleToggle = () => {
    toggle();
    if (!isOpen && buttonRef.current) buttonRef.current.focus();
  };

  return (
    <>
      <button
        type="button"
        data-testid="button"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={handleToggle}
        ref={buttonRef}
      >
        <IconBurger className="text-light w-5.5 self-center transition duration-300 active:scale-110" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[70] bg-black/40 transition-opacity duration-200",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
          "motion-reduce:transition-none",
        )}
        onClick={close}
        aria-hidden
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed top-0 right-0 z-[80] h-dvh w-[100vw]",
          "bg-dark/95 supports-[backdrop-filter]:bg-darker/90 backdrop-blur",
          "transition-transform duration-300 ease-out will-change-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "motion-reduce:transform-none motion-reduce:transition-none",
        )}
      >
        <Navigation onClose={close} />
      </aside>
    </>
  );
};
