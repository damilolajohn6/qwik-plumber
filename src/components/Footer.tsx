import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000066] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 w-10 h-10 bg-yellow-500 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-8 bg-blue-600 transform rotate-45 left-1 top-1"></div>
            </div>
            <span className="text-xl font-semibold">PlubPro S</span>
          </div>
          <p className="text-sm mb-4">
            Stay updated and engage with us on social media! Follow us for the
            latest plumbing tips, DIY guides, and special promotions. Have a
            question or need assistance? Don’t hesitate to reach out—our team is
            here to help!
          </p>
          <p className="font-semibold">Stay Connected</p>
          <div className="flex space-x-3 mt-2">
            <FaLinkedin className="text-blue-500 cursor-pointer" />
            <FaInstagram className="text-pink-500 cursor-pointer" />
            <FaFacebook className="text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col md:flex-row space-x-10">
          <div>
            <p className="font-bold mb-2">links</p>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Portfolio</li>
              <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Socials</p>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">Linkedin</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <p className="font-bold mb-2">PlumPro Solutions</p>
          <p className="text-sm">
            We strive to deliver exceptional plumbing services with integrity
            and expertise. To solve our customers’ plumbing challenges through
            prompt and reliable service while fostering a culture of continuous
            improvement and environmental responsibility. We aim to exceed
            expectations with every interaction, creating lasting relationships
            based on trust and satisfaction.
          </p>
        </div>
      </div>
      <p className="text-center text-yellow-400 text-sm mt-8">
        All rights reserved @2025 PlumPro Solutions
      </p>
    </footer>
  );
};

export default Footer;
