"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="bg-orange-500 text-white px-4 py-3 z-50 fixed w-full">
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="font-bold text-lg">
          <button
            className="flex items-center gap-2 max-w-full overflow-hidden"
            onClick={() => scrollToSection('home')}
          >
            <Image
              src="/Horizontal Logo.png"
              alt="Canada Radon Safety Logo"
              width={200}
              height={100}
            />
            {/* <div className="text-sm leading-tight">
              <div className="font-bold text-base">CANADA RADON</div>
              <span className="block font-normal">SAFETY SOLUTIONS</span>
            </div> */}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 text-sm items-center">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-200 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('learn')}
              className="hover:text-gray-200 transition-colors"
            >
              Learn
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-gray-200 transition-colors"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-200 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-200 transition-colors"
            >
              Contact Us
            </button>
          </li>
          <li className="bg-blue-900 px-3 py-1 rounded whitespace-nowrap">
            1-800-000-0000
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-3 mt-4 text-sm lg:hidden">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-200 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('learn')}
              className="hover:text-gray-200 transition-colors"
            >
              Learn
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-gray-200 transition-colors"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-200 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-200 transition-colors"
            >
              Contact Us
            </button>
          </li>
          <li className="bg-blue-900 px-3 py-2 rounded text-center">
            1-800-000-0000
          </li>
        </ul>
      )}
    </nav>
  );
}
