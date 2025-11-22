"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50"
              style={{ transition: "all 300ms ease-out" }}
            >
              <span className="text-black font-bold text-sm">IK</span>
            </div>
            <span
              className="hidden sm:inline font-semibold text-white group-hover:text-cyan-400"
              style={{ transition: "all 300ms ease-out" }}
            >
              Ines Kraim
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-cyan-400 text-sm font-medium relative group"
                style={{ transition: "all 300ms ease-out" }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full"
                  style={{ transition: "all 300ms ease-out" }}
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 text-sm font-medium hover:scale-105"
              style={{ transition: "all 300ms ease-out" }}
            >
              Get In Touch
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded text-sm"
                onClick={() => setIsOpen(false)}
                style={{ transition: "all 300ms ease-out" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
