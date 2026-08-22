'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Languages } from 'lucide-react';

export default function Leadership() {
  const leadership = [
    { role: 'Vice-President', organization: 'Enactus ESSAI', year: '2024' },
    { role: 'HR Manager', organization: 'Machine Learning Club', year: '2023' },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'DELF B2' },
    { name: 'Arabic', level: 'Native' },
  ];

  return (
    <motion.section
      id="leadership"
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Leadership & Associative Life</p>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">Community roles that shaped teamwork and responsibility.</h2>
            <div className="space-y-4">
              {leadership.map((item) => (
                <div key={`${item.role}-${item.organization}`} className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-4">
                  <BadgeCheck size={18} className="mt-0.5 text-gray-700" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.role} - {item.organization}
                    </p>
                    <p className="text-sm text-gray-500">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              <Languages size={14} />
              Languages
            </div>
            <div className="space-y-3">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="font-medium text-gray-900">{language.name}</span>
                  <span className="text-sm text-gray-600">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
