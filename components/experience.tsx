'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { useState } from 'react';
import { X, ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      company: "Zaitouna Bank",
      location: "Tunis, Tunisia",
      period: "June - August 2025",
      type: "Internship",
      title: "OCR & LLM-Based Receipt Analysis",
      description: "Developed a Django web app automating receipt extraction and accounting workflows.",
      videoUrl: "/zaitouna-demo.mp4",
      videoType: "video/mp4",
      highlights: [
        "Multi-OCR pipeline (Doctr, Tesseract, Docling) for accurate text recognition",
        "LLM integration (Gemini, Qwen, Ollama) to structure and correct OCR outputs",
        "Real-time analytics dashboard and automated Excel report exports",
        "Improved data accuracy and reduced manual entry time through AI-driven automation",
      ],
      responsibilities: [
        "Designed and implemented multi-OCR pipeline integrating Doctr, Tesseract, and Docling",
        "Integrated LLM models (Gemini, Qwen, Ollama) for intelligent data extraction",
        "Built real-time analytics dashboard with interactive visualizations",
        "Automated Excel report generation reducing manual work by 80%",
        "Collaborated with accounting team to ensure data accuracy and compliance"
      ],
      technologies: ["Python", "Django", "Doctr", "Tesseract", "Docling", "Gemini API", "Qwen", "Ollama", "PostgreSQL", "Pandas", "Excel"],
      achievements: [
        "Reduced manual data entry time by 80% through automation",
        "Improved OCR accuracy to 95% using ensemble approach",
        "Processed over 10,000 receipts with 98% data accuracy",
        "Delivered project 2 weeks ahead of schedule"
      ],
      links: {}
    },
    {
      company: "National Council of Statistics (CNS)",
      location: "Tunis, Tunisia",
      period: "June 2024",
      type: "Internship",
      title: "R Shiny Choropleth App with PCA-Based Regional Analysis",
      description: "Performed data analysis and built interactive visualization application.",
      videoUrl: "/cns-demo.mp4",
      videoType: "video/mp4",
      highlights: [
        "Data cleaning on demographic and socioeconomic datasets",
        "Applied PCA to reduce 61 variables to 14 key components",
        "Interactive R Shiny application with choropleth map of Tunisia",
        "Dynamic visualizations for regional variation analysis",
      ],
      responsibilities: [
        "Cleaned and preprocessed large demographic and socioeconomic datasets",
        "Performed Principal Component Analysis to reduce dimensionality from 61 to 14 variables",
        "Developed interactive R Shiny web application for data exploration",
        "Created choropleth maps visualizing regional variations across Tunisia",
        "Presented findings to senior statisticians and government officials"
      ],
      technologies: ["R", "R Shiny", "ggplot2", "leaflet", "dplyr", "tidyr", "PCA", "Statistics"],
      achievements: [
        "Successfully reduced data complexity while retaining 85% variance",
        "Created interactive tool used by 50+ researchers",
        "Identified 3 key regional development patterns",
        "Application adopted as official CNS analysis tool"
      ],
      links: {}
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
          variants={fadeIn('up', 0)}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-400 glow-accent">Professional Experience</h2>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              onClick={() => setSelectedExp(index)}
              className="border-l-2 border-cyan-500 pl-8 pb-8 relative group cursor-pointer bg-slate-900/30 hover:bg-slate-900/50 rounded-r-lg p-6 -ml-8 transition-all duration-300"
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
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <p className="text-cyan-400 font-medium flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                    <p className="text-gray-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                </motion.div>
                <motion.span 
                  className="text-sm text-muted-foreground bg-slate-800/50 px-3 py-1 rounded-full flex items-center gap-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </motion.span>
              </div>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>View Full Details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedExp !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 border-b border-cyan-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{experiences[selectedExp].title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                          <span className="font-semibold text-cyan-400">{experiences[selectedExp].company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          <span>{experiences[selectedExp].location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>{experiences[selectedExp].period}</span>
                        </div>
                      </div>
                      <span className="inline-block mt-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {experiences[selectedExp].type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Video Demo */}
                  {experiences[selectedExp].videoUrl && (
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-3">Project Demo</h3>
                      <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950">
                        <video 
                          controls 
                          className="w-full h-auto"
                          preload="metadata"
                        >
                          <source 
                            src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${experiences[selectedExp].videoUrl}`}
                            type={experiences[selectedExp].videoType || "video/mp4"} 
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">{experiences[selectedExp].description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {experiences[selectedExp].responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {experiences[selectedExp].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences[selectedExp].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg text-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {Object.keys(experiences[selectedExp].links).length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-3">Links</h3>
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(experiences[selectedExp].links).map(([key, url]) => (
                          <a
                            key={key}
                            href={url as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                          >
                            <span className="capitalize">{key}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
