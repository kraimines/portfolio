'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-2">About</h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              AI & Data Science Engineer passionate about turning data and emerging AI technologies into practical solutions. I build intelligent systems combining Machine Learning, LLMs, RAG, and knowledge graphs to solve real-world business challenges.
            </p>
            <p>
              My experience spans Deep Learning, Computer Vision, Generative AI, NLP, and data analytics, using technologies such as Python, TensorFlow, PyTorch, Scikit-learn, and OpenCV.
              I specialize in modern AI architectures, including LLMs, RAG, LangChain, LangGraph, multi-agent systems, knowledge graphs with Neo4j, and Graph Neural Networks (GNNs). I enjoy turning complex data and business challenges into scalable, practical AI solutions—from data processing and model development to API integration and intelligent applications.   
           </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-2 border-l border-gray-300 pl-6"
            >
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-gray-900 font-medium">Ariana, Tunis, Tunisia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2 border-l border-gray-300 pl-6"
            >
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:ineskraim22@gmail.com" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                ineskraim22@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2 border-l border-gray-300 pl-6"
            >
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+21692930425" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                +216 92 930 425
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
