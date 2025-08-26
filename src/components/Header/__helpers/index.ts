"use client";

import { useEffect, useState } from "react";
import type { NavNode } from "../__helpers/data";

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

export const hasActive = (node: NavNode, pathname: string): boolean => {
  if (node.kind === "link") {
    return node.isActive ? node.isActive(pathname) : pathname === node.href;
  }
  if (node.kind === "group") {
    return node.items.some((c) => hasActive(c, pathname));
  }
  return false;
};
