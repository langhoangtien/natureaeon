import Link from "next/link";

import Cart from "./cart-header";
import { usePathname } from "next/navigation";
import { LogoWithLink } from "../logo";
import { PRODUCT_SLUG } from "@/config";

export const menu = [
  { name: "About Us", link: "/about-us" },
  { name: "Buy", link: `/products/${PRODUCT_SLUG}` },
  { name: "Contact", link: "/contact-us" },
  { name: "Track Order", link: "/track-order" },
];

export default function NavDesktop() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col justify-center space-y-8">
      <div className="flex justify-between items-center space-x-1 py-2 px-4">
        <LogoWithLink />
        <div className="flex space-x-8 justify-center">
          {menu.map((item) => (
            <Link
              key={item.name}
              className={`text-base font-normal border-b-2 hover:border-accent-foreground  py-1 ${
                currentPath === item.link
                  ? "border-accent-foreground"
                  : "border-transparent"
              }`}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
}
