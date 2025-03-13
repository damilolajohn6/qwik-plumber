"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who we are" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Button className="bg-blue-600 hover:bg-blue-900 p-2 rounded-md">
          <CiMenuFries className="text-[36px] text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg"
      >
        <div className="mb-8 text-center text-2xl">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 w-10 h-10 bg-yellow-500 transform rotate-45"></div>
                <div className="absolute inset-0 w-8 h-8 bg-blue-600 transform rotate-45 left-1 top-1"></div>
              </div>
              <h1>PlumPro</h1>
            </div>
          </Link>
        </div>
        <nav className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`capitalize font-bold text-[#746B5F] transition-all text-lg ${
                link.href === pathname
                  ? "border-b-2 border-[#A28E66] pb-1"
                  : "hover:text-[#A28E66]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
