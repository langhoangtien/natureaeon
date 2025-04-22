import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";
import Cart from "./cart-header";
import { menu } from "./nav-desktop";
import { LogoWithLink } from "../logo";

export default function NavMobile() {
  return (
    <div className="flex justify-between items-center space-x-1 py-2 px-4">
      <Sheet>
        <SheetTrigger asChild>
          <Menu strokeWidth={1} className="size-6 "></Menu>
        </SheetTrigger>
        <SheetContent onOpenAutoFocus={(e) => e.preventDefault()} side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-4 p-4 ">
            {menu.map((item) => (
              <Link key={item.name} className="text-base " href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <LogoWithLink />
      <span className="flex space-x-2 items-center">
        {/* <SearchHeader /> */}
        <Cart />
      </span>
    </div>
  );
}
