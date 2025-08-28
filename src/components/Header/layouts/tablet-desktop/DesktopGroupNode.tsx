"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { NavGroup, NavLink } from "@/components/Header/helpers/data";
import { hasActive } from "@/components/Header/helpers";
import { IconChevron } from "@/icons/IconChevron";

type Props = {
  node: NavGroup;
  pathname: string;
  renderLink: (n: NavLink) => React.ReactNode; // already bound to "menu" variant by parent
};

export const DesktopGroupNode = ({ node, pathname, renderLink }: Props) => {
  const childActive = useMemo(
    () => hasActive(node, pathname),
    [node, pathname],
  );
  const [open, setOpen] = useState<boolean>(false);
  const hoverTimer = useRef<number | null>(null);

  useEffect(() => setOpen(false), [pathname]);

  const onEnter = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    setOpen(true);
  };
  const onLeave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(false), 80);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Escape") setOpen(false);
    if ((e.key === "Enter" || e.key === " ") && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const sections = node.items.filter(
    (it): it is NavGroup => it.kind === "group",
  );

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      role="none"
    >
      <button
        type="button"
        className="link-hover flex items-center gap-3 py-2 tracking-[0.14em] focus:outline-none"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
      >
        <span className={childActive ? "font-bold" : ""}>{node.label}</span>
        <IconChevron
          className={`size-6 transition ${open ? "rotate-270" : "rotate-90"}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="bg-dark/95 absolute top-full -left-30 mt-2 w-80 rounded-b-md p-4 shadow-lg ring-1 ring-white/10"
        >
          {sections.map((section, i) => (
            <div
              key={i}
              className={i > 0 ? "mt-2 border-t border-white/10 pt-2" : ""}
            >
              <div className="mb-2 text-center text-base tracking-[0.18em]">
                {section.label}
              </div>
              <ul className="hover:!text-light space-y-1">
                {section.items.map((item, j) => {
                  if (item.kind !== "link") return null;

                  return (
                    <li key={`${i}-${j}`}>
                      <div className="hover:bg-primary cursor-pointer rounded-tr-md rounded-bl-md px-6 py-2 text-base tracking-[0.12em]">
                        {renderLink(item)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
