'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from "lucide-react"
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Projects() {
  const projects = [
    {
      title: "Medical Image Analysis",
      subtitle: "1st Place, Bootcamp Competition",
      description: "Deep learning model for early melanoma detection on the ISIC 2024 dataset.",
      highlights: [
        "Dual-input architecture: EfficientNetV2 + Dense networks",
        "Data balancing and stratified splitting",
        "0.85 validation AUC achieved",
        "Patient metadata integration for improved accuracy",
      ],
      tech: ["Python", "TensorFlow", "KerasCV", "OpenCV", "scikit-learn"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Credit Default Probability Modeling",
      subtitle: "Machine Learning Classification",
      description: "ML model to predict credit default using financial and non-financial indicators.",
      highlights: [
        "Advanced data preprocessing with winsorization",
        "NearMiss balancing for 3.5% default rate",
        "Feature engineering with IV, ANOVA, Chi-Square analysis",
        "96% accuracy with Random Forest (AUC: 0.63)",
      ],
      tech: ["Python", "scikit-learn", "pandas", "SMOTE"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Multilingual Sentiment Analysis",
      subtitle: "NLP with Transformers",
      description: "NLP pipeline for emotion classification with multiple algorithms.",
      highlights: [
        "Compared Logistic Regression, SVM, Random Forest, LSTM, DistilBERT",
        "DistilBERT achieved 71% accuracy",
        "Text preprocessing and feature extraction",
        "Streamlit dashboard for real-time emotion detection",
      ],
      tech: ["Python", "PyTorch", "Transformers", "Streamlit", "TensorFlow"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Mental Health Analysis of University Students",
      subtitle: "Statistical Analysis with R",
      description: "Comprehensive study analyzing stress, anxiety, and depression factors among university students.",
      highlights: [
        "Principal Component Analysis (PCA) for dimensionality reduction",
        "Correlation analysis and visualization",
        "Descriptive statistics and demographic analysis",
        "Interactive visualizations with R",
      ],
      tech: ["R", "FactoMineR", "ggplot2", "dplyr", "corrplot"],
      links: {
        github: "https://github.com/kraimines/Mental-Health-Analysis",
        demo: "#",
      },
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-black via-slate-900/20 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, -10, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="mb-12"
          variants={fadeIn('up', 0)}
        >
          <h2 className="text-4xl font-bold mb-4 glow-accent">
            <span className="relative inline-block">
              Featured Projects
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/20 rounded-xl p-6 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
              variants={fadeIn('up', index * 0.2)}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgb(168, 85, 247, 0.2)'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
              <motion.div 
                className="flex justify-between items-start mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-purple-400 text-sm">{project.subtitle}</p>
                </div>
                <div className="flex space-x-2">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 text-gray-300 hover:text-white"
                      aria-label="GitHub repository"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 text-gray-300 hover:text-white"
                      aria-label="Live demo"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="mb-6">
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors"
                    >
                      <span className="text-accent">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-accent/10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium hover:bg-accent/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
