"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Left: Hamburger & Dropdown */}
        <div className="flex items-center gap-4">
          {/* Hamburger with hover dropdown */}
          <div className="relative group hidden md:block">
            <button className="p-2 focus:outline-none" aria-label="Toggle menu">
              <Image src="/hamburger.png" alt="Menu" width={28} height={28} />
            </button>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40 p-3 hidden group-hover:block z-50">
              <Link href="/" className="block py-1 text-gray-700 hover:text-indigo-600">Home</Link>
              <Link href="/features" className="block py-1 text-gray-700 hover:text-indigo-600">Features</Link>
              <Link href="/pricing" className="block py-1 text-gray-700 hover:text-indigo-600">Pricing</Link>
              <Link href="/contact" className="block py-1 text-gray-700 hover:text-indigo-600">Contact</Link>
            </div>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Cheggl Logo" width={32} height={32} />
            <span className="text-2xl font-bold italic text-purple-800 tracking-wide">CHEGGL</span>
          </Link>
        </div>

        {/* Right: Search, Button, Profile */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Box */}
          <div className="flex items-center px-4 py-2 bg-gray-200 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-gray-700 w-40"
            />
          </div>

           {/* Divider */}
            <div className="h-8 w-px bg-gray-300 hidden lg:block" />

          {/* For Companies Button */}
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            For companies
            <span className="ml-1">↗</span>
          </button>

            {/* Profile Icon */}
              <button className="text-[#4c1d95]" aria-label="User Profile">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.389 0 4.607.584 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
          </div>
          {/* Right: Hamburger (only visible on mobile) */}
        <div className="relative md:hidden group">
          <button className="p-2 focus:outline-none" aria-label="Toggle menu">
            <Image src="/hamburger.png" alt="Menu" width={28} height={28} />
          </button>
          {/* Dropdown on hover */}
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 p-3 hidden group-hover:block z-50">
            <Link href="/" className="block py-1 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="/features" className="block py-1 text-gray-700 hover:text-indigo-600">Features</Link>
            <Link href="/pricing" className="block py-1 text-gray-700 hover:text-indigo-600">Pricing</Link>
            <Link href="/contact" className="block py-1 text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
      
    </header>
  );
}
