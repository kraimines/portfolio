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
              Data Science engineer with hands-on experience turning raw, large-scale datasets into dashboards, KPI reports, and business insights across consulting, banking, and public-sector environments. Comfortable working with senior stakeholders across departments, translating analytical findings into clear, actionable recommendations.
            </p>
            <p>
              Strong command of Excel, SQL, Python, Power BI, and Tableau, combined with a solid foundation in statistics and business intelligence best practices. Currently completing my Engineering Cycle at ESSAI with a focus on Data Science and practical application of analytics in real-world business scenarios.
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
