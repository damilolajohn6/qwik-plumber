"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

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
      {/* Mobile Menu Trigger */}
      <SheetTrigger className="flex justify-center items-center">
        <Button className="bg-blue-600 hover:bg-blue-900 p-2 rounded-md">
          <CiMenuFries className="text-[36px] text-white" />
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg h-full"
      >
        {/* Logo Section */}
        {/* <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={120}
              height={40}
              alt="PlumPro Logo"
              priority
            />
          </Link>
        </div> */}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 py-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`capitalize font-semibold text-[#000000] transition-all text-lg ${
                link.href === pathname
                  ? "border-b-2 border-[#2c3fe9] pb-1 text-[#000000]"
                  : "hover:text-yellow-500"
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
