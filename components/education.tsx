'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      school: "Higher School of Statistics and Information Analysis (ESSAI)",
      degree: "Engineering Cycle – Data Science",
      period: "2023 – 2026",
      location: "Tunis, Tunisia",
    },
    {
      school: "Preparatory Institute for Engineering Studies of Tunis",
      degree: "Mathematics & Physics",
      period: "2021 – 2022",
      location: "Tunis, Tunisia",
    },
  ];

  return (
    <motion.section
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
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-2">Education</h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Education List */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-l border-gray-300 pl-6"
              >
                <h3 className="font-serif font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-600 mt-1">{edu.school}</p>
                <p className="text-xs text-gray-500">{edu.period} • {edu.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
