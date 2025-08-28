"use client";
import { HeaderMobile } from "./layouts/mobile/HeaderMobile";
import { HeaderTabAndDesk } from "./layouts/tablet-desktop/HeaderTabAndDesk";

export const Header = () => (
  <header>
    <HeaderMobile />
    <HeaderTabAndDesk />
  </header>
);
