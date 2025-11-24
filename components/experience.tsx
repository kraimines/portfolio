'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Experience() {
  const experiences = [
    {
      company: "Zaitouna Bank",
      period: "June - August 2025",
      title: "OCR & LLM-Based Receipt Analysis",
      description: "Developed a Django web app automating receipt extraction and accounting workflows.",
      highlights: [
        "Multi-OCR pipeline (Doctr, Tesseract, Docling) for accurate text recognition",
        "LLM integration (Gemini, Qwen, Ollama) to structure and correct OCR outputs",
        "Real-time analytics dashboard and automated Excel report exports",
        "Improved data accuracy and reduced manual entry time through AI-driven automation",
      ],
    },
    {
      company: "National Council of Statistics (CNS)",
      period: "June 2024",
      title: "R Shiny Choropleth App with PCA-Based Regional Analysis",
      description: "Performed data analysis and built interactive visualization application.",
      highlights: [
        "Data cleaning on demographic and socioeconomic datasets",
        "Applied PCA to reduce 61 variables to 14 key components",
        "Interactive R Shiny application with choropleth map of Tunisia",
        "Dynamic visualizations for regional variation analysis",
      ],
    },
  ]

  return (
    <motion.section
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-black via-slate-900/20 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="border-l-2 border-cyan-500 pl-8 pb-8 relative group"
              variants={fadeIn('right', index * 0.2)}
              whileHover={{
                x: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </motion.div>
                <motion.span 
                  className="text-sm text-muted-foreground bg-slate-800/50 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  {exp.period}
                </motion.span>
              </div>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
