"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="#" className="font-serif text-lg font-semibold text-gray-900">
          Ines Kraim
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-10 text-sm text-gray-700">
            <li>
              <a href="#about" className="transition-colors hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="transition-colors hover:text-gray-900">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-gray-900">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-gray-900">
                Skills
              </a>
            </li>
            <li>
              <a href="#leadership" className="transition-colors hover:text-gray-900">
                Leadership
              </a>
            </li>
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="text-sm px-5 py-2 border border-gray-900 text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 space-y-4">
            <a href="#about" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#experience" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#projects" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#skills" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#leadership" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Leadership
            </a>
            <a
              href="#contact"
              className="block text-sm px-5 py-2 border border-gray-900 text-gray-900 transition-all hover:bg-gray-900 hover:text-white text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
