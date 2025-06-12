import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from  '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#1E191D] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 md:flex-row justify-between">
        <div className='flex '>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-4 h-4" />
            <span className="text-black font-bold">S</span>
          </div>
          <span className="font-semibold text-sm tracking-wide">SUN CO.</span>
        </div>
          {/* Réseaux sociaux */}
        <div className="flex space-x-3 absolute right-4">
          <a href="#" className="bg-[#2A2529] p-2 rounded-full hover:bg-[#3A3539] transition">
            <FaInstagram className="text-white text-sm" />
          </a>
          <a href="#" className="bg-[#2A2529] p-2 rounded-full hover:bg-[#3A3539] transition">
            <FaTwitter className="text-white text-sm" />
          </a>
          <a href="#" className="bg-[#2A2529] p-2 rounded-full hover:bg-[#3A3539] transition">
            <FaYoutube className="text-white text-sm" />
          </a>
        </div>
       
        </div>
         {/* Copyright */}
        <div className="text-sm text-gray-400 md:text-center  md:mt-0">
          © 2023 dot.cards text task. All rights reserved
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
