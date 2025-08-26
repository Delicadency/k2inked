import { Fragment } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "../__components/Logo";
import { BurgerButton } from "./BurgerButton";
import { usePathname } from "next/navigation";
import { NavNode, NAV_MOBILE } from "../__helpers/data";
import { GroupNode } from "../__components/GroupNode";

export const MobileNav = () => {
  const pathname = usePathname();

  const renderNode = (node: NavNode, depth = 0) => {
    switch (node.kind) {
      case "link": {
        const active = node.isActive
          ? node.isActive(pathname)
          : pathname === node.href;
        return (
          <Link
            href={node.href}
            aria-current={active ? "page" : undefined}
            className={[
              "block py-3 tracking-[0.12em]",
              active ? "bg-primary text-light rounded px-3" : "text-light/90",
            ].join(" ")}
          >
            {node.label}
          </Link>
        );
      }
      case "group": {
        return (
          <GroupNode
            node={node}
            depth={depth}
            pathname={pathname}
            renderNode={renderNode}
          />
        );
      }
    }
  };

  return (
    <Container>
      <div
        className="bg-dark relative size-full w-screen"
        aria-label="Menu"
        aria-roledescription="Menu"
      >
        <div>
          <Logo className="w-10" />
          <strong className="font-marcellus-sc text-xl tracking-[0.15em] transition-opacity duration-300">
            K2.Inked
          </strong>
          <BurgerButton />
        </div>
        <nav aria-label="Nawigacja mobilna">
          {NAV_MOBILE.map((n, i) => (
            <Fragment key={i}>{renderNode(n)}</Fragment>
          ))}
        </nav>
      </div>
    </Container>
  );
};
