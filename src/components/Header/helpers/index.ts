"use client";

import { useEffect, useState, useCallback } from "react";
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

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export const useKeyPress = (
  targetKey: string | string[],
  callback: (event: KeyboardEvent) => void,
) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const keys = Array.isArray(targetKey) ? targetKey : [targetKey];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(true);
        callback(event);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey, callback]);

  return keyPressed;
};
