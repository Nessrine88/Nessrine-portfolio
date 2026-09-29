"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between pointer-events-none'>
        {/* Figma/Brand Mark Icon */}
        <Link
          href="/"
          aria-label="Home"
          className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm flex items-center justify-center pointer-events-auto transition hover:scale-105 active:scale-95'
        >
          <div className='flex flex-col gap-0.5 items-center justify-center'>
            <div className='flex gap-0.5'>
              <span className='w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-900'></span>
              <span className='w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-400'></span>
            </div>
            <div className='flex gap-0.5'>
              <span className='w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#86efac]'></span>
              <span className='w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-zinc-900'></span>
            </div>
          </div>
        </Link>

        {/* Desktop Floating Pill Nav */}
        <nav className='hidden md:block pointer-events-auto'>
          <ul className='flex items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-xs lg:text-sm font-medium text-zinc-600'>
            {navLinks.map((link) => (
              <li key={link.href} className='hover:text-zinc-950 transition-colors'>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className='md:hidden w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-800 pointer-events-auto transition hover:scale-105 active:scale-95'
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Floating Menu Dropdown */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-md border border-zinc-200 rounded-2xl p-6 shadow-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ul className='flex flex-col gap-4 text-center'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='block py-2 text-base font-semibold text-zinc-800 hover:text-emerald-600 transition-colors'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header