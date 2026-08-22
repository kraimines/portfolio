import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-32 pb-20 px-6 relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 leading-tight">
              Ines Kraim
            </h1>
            <p className="text-xl text-gray-700 mb-6">AI & Data Science Engineer</p>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Data Science engineer with hands-on experience turning raw, large-scale datasets into dashboards, KPI reports, and business insights across consulting, banking, and public-sector environments. Comfortable working with senior stakeholders across departments, translating analytical findings into clear, actionable recommendations.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium transition-all hover:bg-gray-900 hover:text-white"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium transition-all hover:bg-gray-900 hover:text-white flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium transition-all hover:bg-gray-900 hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/kraimines"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ines-kraim-514036281/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ineskraim22@gmail.com"
              className="p-3 border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
