"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { DividersData } from "./data";

type DividerProps = {
  id: string;
};

export const DividerImage = ({ id }: DividerProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 20) / viewportH;
        const translate = (progress - 0.2) * rect.height * 0.5;
        inner.style.transform = `translateY(${translate.toFixed(1)}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const divider = DividersData.find((d) => d.id === id);
  if (!divider) return null;

  return (
    <section
      ref={rootRef}
      className="desktop:h-[400px] relative h-[200px] w-screen overflow-hidden"
    >
      <div ref={innerRef} className="absolute -inset-40 will-change-transform">
        <Image
          src={divider.src}
          alt={divider.alt}
          sizes="100vw"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};
