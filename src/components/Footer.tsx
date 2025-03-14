import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000066] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={120}
              height={40}
              alt="PlumPro Logo"
              priority
            />
          </Link>
          <h2 className="text-xl font-semibold mt-2">PlubPro Solutions</h2>
          <p className="text-sm mt-4">
            Stay updated and engage with us on social media! Follow us for the
            latest plumbing tips, DIY guides, and special promotions. Have a
            question? Don’t hesitate to reach out!
          </p>
          <p className="font-semibold mt-4">Stay Connected</p>
          <div className="flex space-x-4 mt-2">
            <FaLinkedin className="text-blue-500 cursor-pointer text-xl" />
            <FaInstagram className="text-pink-500 cursor-pointer text-xl" />
            <FaFacebook className="text-blue-600 cursor-pointer text-xl" />
          </div>
        </div>

        {/* Center Section (Links) */}
        <div className="flex flex-col md:flex-row space-x-10">
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <a href="#" key={link}>
                    <li className="cursor-pointer hover:underline">{link}</li>
                  </a>
                )
              )}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-2">Socials Links</p>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">Linkedin</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold mb-2">About PlumPro</p>
          <p className="text-sm">
            We strive to deliver exceptional plumbing services with integrity
            and expertise. Our mission is to solve our customers’ plumbing
            challenges through reliable service while fostering a culture of
            continuous improvement and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-yellow-400 text-sm mt-8">
        © 2025 PlumPro Solutions. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
