"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const [currentChapter, setCurrentChapter] = useState(1)

  const chapters = [
    { id: 1, name: "Introduction", section: "hero" },
    { id: 2, name: "About Me", section: "about" },
    { id: 3, name: "Journey", section: "experience" },
    { id: 4, name: "Projects", section: "projects" },
    { id: 5, name: "Skills", section: "skills" },
    { id: 6, name: "Contact", section: "contact" },
  ]

  useEffect(() => {
    const updateChapter = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const sections = chapters.map((chapter) => ({
        ...chapter,
        element: document.getElementById(chapter.section),
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setCurrentChapter(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", updateChapter)
    updateChapter()

    return () => window.removeEventListener("scroll", updateChapter)
  }, [])

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      {/* Progress bar */}
      <div className="relative w-1 h-64 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 to-blue-500 origin-top"
        />
      </div>

      {/* Chapter indicators */}
      <div className="absolute right-4 top-0 space-y-8">
        {chapters.map((chapter) => (
          <motion.a
            key={chapter.id}
            href={`#${chapter.section}`}
            className="block group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={false}
                animate={{
                  scale: currentChapter === chapter.id ? 1.5 : 1,
                  backgroundColor:
                    currentChapter === chapter.id ? "rgb(34, 211, 238)" : "rgb(71, 85, 105)",
                }}
                className="w-3 h-3 rounded-full"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-xs text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {chapter.name}
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
