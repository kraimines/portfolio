'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import AnimatedText from './animated-text';

export default function About() {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative z-10">
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
        >

          {/* Content */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed text-lg"
              variants={fadeIn('right', 1)}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a final-year Computer Engineering student at ESSAI (Higher School of Statistics and Information
                Analysis) specializing in Data Science and Actuarial Science. My journey in tech has been driven by a
                passion for turning complex data into actionable insights and building intelligent solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With expertise in machine learning, deep learning, and AI, I've worked on diverse projects ranging from
                medical image analysis to financial modeling. I'm particularly interested in leveraging advanced
                techniques like transformers, LLMs, and neural networks to solve real-world problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Currently seeking an end-of-studies internship to apply my expertise in a professional setting and gain
                hands-on experience in building production-grade AI systems.
              </motion.p>
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
