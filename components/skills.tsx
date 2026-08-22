'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "BI & Analytics",
      skills: ["Power BI", "Tableau", "Microsoft Excel", "KPI Reporting", "Dashboards", "Data Visualization"],
    },
    {
      title: "Data & Programming",
      skills: ["Python", "pandas", "NumPy", "scikit-learn", "SQL", "R", "PostgreSQL", "Statistical Analysis"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Jupyter", "VS Code", "Draw.io", "LangGraph", "Neo4j", "TensorFlow", "Streamlit"],
    },
    {
      title: "Professional Skills",
      skills: ["Stakeholder Communication", "Teamwork", "Project Planning", "Prioritization", "Business Ethics", "Data Protection", "Business Intelligence", "Data Mining"],
    },
  ]

  return (
    <motion.section 
      id="skills" 
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
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-2">Skills</h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm text-gray-700 border border-gray-200 hover:border-gray-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
