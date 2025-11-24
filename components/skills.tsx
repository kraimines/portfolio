'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        "Supervised & Unsupervised Learning",
        "Deep Learning (CNN, RNN, LSTM)",
        "Time Series Analysis",
        "NLP & LLM",
        "RAG",
        "BERT & Transformers",
        "Econometrics",
        "Big Data",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SAS", "C", "Java", "SQL", "HTML/CSS/JavaScript"],
    },
    {
      title: "Data & Tools",
      skills: [
        "pandas",
        "NumPy",
        "scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Power BI",
        "Docker",
      ],
    },
  ]

  return (
    <motion.section 
      id="skills" 
      className="py-20 px-4 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          variants={fadeIn('up', 0)}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-400 glow-accent">Skills & Expertise</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-1 gap-8"
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/20 rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
              variants={fadeIn('up', index * 0.2)}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
              <motion.h3 
                className="text-xl font-bold text-white mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-2 relative z-10"
                variants={staggerContainer}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-slate-800/50 text-cyan-300 text-sm rounded-full font-medium hover:bg-cyan-500/10 transition-colors duration-300"
                    variants={fadeIn('up', 0.1 * i)}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(6, 182, 212, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
