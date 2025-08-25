"use client"

import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const delta = y - last;
          if (Math.abs(delta) > 6) setDirection(delta > 0 ? "down" : "up");
          last = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return direction;
};
