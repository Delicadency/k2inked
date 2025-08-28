"use client";

import { useEffect, useMemo, useState, Fragment } from "react";
import type { NavGroup, NavNode } from "../__helpers/data";
import { hasActive } from "../__helpers";
import { IconChevron } from "@/icons/IconChevron";

type Props = {
  node: NavGroup;
  depth: number;
  pathname: string;
  renderNode: (n: NavNode, d: number) => React.ReactNode;
};

export const GroupNode = ({ node, depth, pathname, renderNode }: Props) => {
  const childActive = useMemo(() => hasActive(node, pathname), [node, pathname]);
  
  const [manualOpen, setManualOpen] = useState<boolean | null>(null);
  const open = (manualOpen ?? node.defaultOpen ?? childActive) === true;

  useEffect(() => setManualOpen(null), [pathname]);

  return (
    <div>
      <button
        className="flex w-full items-center gap-3 py-4 text-left text-light"
        aria-expanded={open}
        onClick={() => setManualOpen((v) => (v === null ? !open : !v))}
      >
        <span className="tracking-[0.14em]">{node.label}</span>
        <IconChevron className={`size-6 transition ${open ? "rotate-270" : "rotate-90"}`} />
      </button>

      {open && (
        <div className="pl-4">
          {node.items.map((child, i) => (
            <Fragment key={`${depth}-${i}`}>{renderNode(child, depth + 1)}</Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
