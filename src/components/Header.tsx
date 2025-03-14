import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/logo.png"
            width={100}
            height={30}
            alt="PlumPro Logo"
            priority
            className="object-contain"
          />
          <h1 className="text-lg font-semibold  md:block">PlumPro</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Nav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-2 text-gray-700">
          <Phone size={18} className="text-gray-500" />
          <div className="text-sm">
            <span className="block text-gray-500">Emergency</span>
            <span className="block font-bold text-black">+2341100978</span>
          </div>
        </div>
      </header>

      {/* Add spacing to avoid content being hidden under the sticky header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
