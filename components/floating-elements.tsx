"use client"

import { motion } from "framer-motion"
import { Code2, Database, Brain, Cpu, Sparkles, Zap } from "lucide-react"

export default function FloatingElements() {
  const icons = [
    { Icon: Code2, delay: 0, duration: 4 },
    { Icon: Database, delay: 0.5, duration: 5 },
    { Icon: Brain, delay: 1, duration: 4.5 },
    { Icon: Cpu, delay: 1.5, duration: 5.5 },
    { Icon: Sparkles, delay: 2, duration: 4 },
    { Icon: Zap, delay: 2.5, duration: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {icons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 text-cyan-400/20" />
        </motion.div>
      ))}
    </div>
  )
}
