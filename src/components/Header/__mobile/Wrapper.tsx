import dynamic from "next/dynamic";
import { useDisclosure, useKeyPress } from "../__helpers";
import { useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IconBurger } from "@/icons/IconBurger";

const Navigation = dynamic(() =>
  import("./MobileNav").then((mod) => mod.MobileNav),
);

export const Wrapper = () => {
  const { isOpen, toggle, close } = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleEscapeKey = useCallback(() => {
    close();
  }, [close]);

  useKeyPress("Escape", handleEscapeKey);

  useEffect(() => {
    close();
  }, [pathname, close]);

  const handleToggle = () => {
    toggle();
    if (!isOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  return (
    <>
      <button
        type="button"
        data-testid="button"
        aria-label="Otwórz menu"
        onClick={handleToggle}
        ref={buttonRef}
      >
        <IconBurger className="text-light w-5.5 self-center transition duration-300 active:scale-110" />
      </button>
      <div
        className={clsx(
          "fixed top-0 right-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0 overflow-y-auto" : "translate-x-full",
        )}
      >
        {isOpen && <Navigation onClose={close} />}
      </div>
    </>
  );
};
