"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StorySectionProps {
  children: ReactNode
  id: string
  chapter: string
  title: string
  delay?: number
  direction?: "left" | "right" | "up" | "down"
}

export default function StorySection({
  children,
  id,
  chapter,
  title,
  delay = 0,
  direction = "up",
}: StorySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  }

  return (
    <section id={id} className="min-h-screen relative flex items-center justify-center py-20">
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
            {chapter}
          </span>
        </motion.div>

        {/* Title with Typing Effect */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>

        {/* Content */}
        <div className="relative">{children}</div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: delay }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl -z-10"
      />
    </section>
  )
}
