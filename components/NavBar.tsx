'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg">
          <Link href="/">
            CANADA RADON <span className="block text-sm font-normal">SAFETY SOLUTIONS</span>
          </Link>
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/what-is-radon">Learn</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li className="bg-blue-900 px-3 py-1 rounded whitespace-nowrap">1-800-000-0000</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-3 mt-4 text-sm lg:hidden">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/what-is-radon" onClick={() => setMenuOpen(false)}>Learn</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li className="bg-blue-900 px-3 py-2 rounded text-center">1-800-000-0000</li>
        </ul>
      )}
    </nav>
  );
}
