'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
        >
          {/* Section Title */}
          <motion.div 
            variants={fadeIn('up', 0)}
            className="relative group"
          >
            <h2 className="text-4xl font-bold mb-4 glow-accent">
              <span className="relative inline-block">
                About Me
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed"
              variants={fadeIn('right', 1)}
            >
              <p>
                I'm a final-year Computer Engineering student at ESSAI (Higher School of Statistics and Information
                Analysis) specializing in Data Science and Actuarial Science. My journey in tech has been driven by a
                passion for turning complex data into actionable insights and building intelligent solutions.
              </p>
              <p>
                With expertise in machine learning, deep learning, and AI, I've worked on diverse projects ranging from
                medical image analysis to financial modeling. I'm particularly interested in leveraging advanced
                techniques like transformers, LLMs, and neural networks to solve real-world problems.
              </p>
              <p>
                Currently seeking an end-of-studies internship to apply my expertise in a professional setting and gain
                hands-on experience in building production-grade AI systems.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={fadeIn('left', 1)}
            >
              <motion.div 
                className="p-4 rounded-lg bg-gradient-to-r from-slate-900/50 to-slate-800/20 backdrop-blur-sm border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
                }}
                variants={fadeIn('up', 0.5)}
              >
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-foreground">Ariana, Tunis</p>
              </motion.div>
              
        
              <motion.div 
                className="p-4 rounded-lg bg-gradient-to-r from-slate-900/50 to-slate-800/20 backdrop-blur-sm border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
                }}
                variants={fadeIn('up', 0.9)}
              >
                <p className="text-sm text-muted-foreground mb-1">Contact</p>
                <p className="font-semibold text-foreground">ineskraim22@gmail.com</p>
              </motion.div>
              
              <motion.div 
                className="p-4 rounded-lg bg-gradient-to-r from-slate-900/50 to-slate-800/20 backdrop-blur-sm border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
                }}
                variants={fadeIn('up', 1.1)}
              >
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-semibold text-foreground">+216 92 930 425</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
