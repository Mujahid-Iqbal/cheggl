"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-semibold text-gray-600">Company</h4>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:underline text-gray-600">About</Link></li>
            <li><Link href="/careers" className="hover:underline text-gray-600">Careers</Link></li>
            <li><Link href="/blog" className="hover:underline text-gray-600">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-600">Resources</h4>
          <ul className="mt-2 space-y-1">
            <li><Link href="/docs" className="hover:underline text-gray-600">Docs</Link></li>
            <li><Link href="/help" className="hover:underline text-gray-600">Help Center</Link></li>
            <li><Link href="/api" className="hover:underline text-gray-600">API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-600">Social</h4>
        <ul className="mt-2 space-y-2 flex flex-col items-center md:items-start">
            <li>
              <a href="#" aria-label="Twitter" className="flex items-center gap-2 text-gray-600 hover:underline">
                <Image src="/x.png" alt="Twitter logo" width={20} height={20} />
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="flex items-center gap-2 text-gray-600 hover:underline">
                <Image src="/linkedin.png" alt="LinkedIn logo" width={20} height={20} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Cheggl. All rights reserved.
      </div>
    </footer>
  )
}
