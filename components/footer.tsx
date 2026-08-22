"use client"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif font-semibold text-gray-900 mb-2">Ines Kraim</h3>
            <p className="text-sm text-gray-600">AI & Data Science Engineer</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/kraimines"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ines-kraim-514036281/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ineskraim22@gmail.com"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-center text-gray-600 text-sm">(c) {currentYear} Ines Kraim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
