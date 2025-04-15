"use client";
import * as React from "react";

import NavMobile from "./nav-mobile";
import { useIsTablet } from "@/hooks/use-is-mobile";
import NavDesktop from "./nav-desktop";

export default function Header() {
  const isMobile = useIsTablet();
  return (
    <header className="w-full sticky top-0 z-50  bg-background/90 shadow-md ">
      {/* <CarouselHeader /> */}
      <div className="mx-auto max-w-7xl p-4">
        {" "}
        {isMobile ? <NavMobile /> : <NavDesktop />}
      </div>
    </header>
  );
}
