"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useDarkMode from '@/hooks/useDarkMode';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { enabled, toggle } = useDarkMode();

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-md dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Cheggl logo" width={32} height={32} />
          <span className="text-2xl font-bold text-primaryText">Cheggl</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/features" className="hover:text-indigo-600">Features</Link>
          <Link href="/pricing" className="hover:text-indigo-600">Pricing</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>

        <div className="hidden md:flex item-center space-x-4">
             <button
              onClick={toggle}
              className="flex items-center gap-2 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
              aria-label="Toggle dark mode"
            >
              <Image
                src={enabled ? '/moon.png' : '/sun.png'}
                alt={enabled ? 'Dark mode icon' : 'Light mode icon'}
                width={20}
                height={20}
              />
              <span className="hidden sm:inline text-sm">{enabled ? 'Dark' : 'Light'}</span>
            </button>
          <Link href="/login" className="px-4 py-2">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded">Sign Up</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-white shadow-lg" aria-label="Mobile navigation" role="menu">
          <Link href="/" className="block px-4 py-2 text-primaryText" role="menuitem">Home</Link>
          <Link href="/features" className="block px-4 py-2 text-primaryText" role="menuitem">Features</Link>
          <Link href="/pricing" className="block px-4 py-2 text-primaryText" role="menuitem">Pricing</Link>
          <Link href="/contact" className="block px-4 py-2 text-primaryText" role="menuitem">Contact</Link>
          <div className="border-t my-2" />
          <Link href="/login" className="block px-4 py-2 text-primaryText" role="menuitem">Login</Link>
          <Link href="/signup" className="block px-4 py-2 bg-indigo-600 text-white rounded text-primaryText" role="menuitem">Sign Up</Link>
        </nav>
      )}
    </header>
  )
}
