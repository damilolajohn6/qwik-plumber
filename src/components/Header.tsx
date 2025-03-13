import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full">
      <header className="container py-5 relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 w-10 h-10 bg-yellow-500 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-8 bg-blue-600 transform rotate-45 left-1 top-1"></div>
            </div>
            <h1 className="text-lg font-semibold">PlumPro</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 z-10">
          <Nav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden z-10">
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
    </div>
  );
};

export default Header;
