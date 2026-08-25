'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Github, MapPin, CalendarDays } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'TALAN Tunisie',
      title: 'AI Engineering Intern - Enterprise AI Assistant',
      period: '02/2026 - 05/2026',
      location: 'Tunis, Tunisia',
      description:
        'The project aimed to build an intelligent enterprise assistant providing a 360° view of the organization by connecting HR, CRM, ERP, and business data into a unified knowledge graph. Employees can query company information in natural language, retrieve contextual insights through RAG, and automate tasks such as reports and emails. Role-aware dashboards adapt the information, insights, and access level to each user profile. In parallel, the platform monitors market events and competitors, using LLMs, temporal knowledge graphs, and a TGAT-based GNN to analyze relationships and anticipate their potential business impact.',
      achievements: ['Best FYP Project ranked by PwC'],
      technologies: [
        'Python',
        'LangGraph',
        'LLMs',
        'RAG',
        'Multi-Agent AI',
        'Knowledge Graphs',
        'Neo4j',
        'Graph Neural Networks',
        'TGAT',
        'FastAPI',
        'React',
        'PostgreSQL',
        'NLP',
        'Market Intelligence',
        'Role-Aware AI',
      ],
      github: 'https://github.com/kraimines/assistant_strategique_intelligent_entreprise',
      demoUrl: 'videos/talan-demo.mp4',
    },
    {
      company: 'Zaitouna Bank',
      title: 'AI Developer Intern - OCR & Document Processing',
      period: '06/2025 - 08/2025',
      location: 'Tunis, Tunisia',
      description:
        'Automated accounting and reporting workflows with a multi-OCR pipeline (Doctr, Tesseract, Docling) and LLM integration (Gemini). Delivered a real-time analytics dashboard with automated Excel exports while maintaining strict data confidentiality.',
      achievements: ['80% reduction in manual data entry', '95% OCR accuracy', '10,000+ receipts processed', '2 weeks ahead of schedule'],
      technologies: ['Python', 'Django', 'Doctr', 'Tesseract', 'Docling', 'Gemini API', 'PostgreSQL'],
      github: 'https://github.com/kraimines/OCR-and-LLM-based-Receipt-Analysis-Application',
      demoUrl: 'videos/zaitouna-demo.mp4',
    },
    {
      company: 'National Council of Statistics (CNS)',
      title: 'Data Science Intern - PCA & Data Visualization',
      period: '06/2024',
      location: 'Tunis, Tunisia',
      description:
        'Applied PCA to reduce 61 variables to 14 key components while retaining 85% variance; built an interactive R Shiny dashboard with a choropleth map of Tunisia; the tool was adopted as the official CNS analysis platform.',
      achievements: ['50+ researchers using the tool', '3 key regional patterns identified', 'Adopted as official CNS tool'],
      technologies: ['R', 'R Shiny', 'ggplot2', 'leaflet', 'dplyr', 'tidyr', 'Statistics'],
      github: 'https://github.com/kraimines/tunisia-pca-shiny-dashboard',
      demoUrl: 'videos/cns-demo.mp4',
    },
  ];

  return (
    <motion.section
      id="experience"
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
          className="space-y-12"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Experience</p>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3">Selected work, presented like case studies.</h2>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4 lg:max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        <CalendarDays size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="max-w-3xl text-gray-700 leading-relaxed">{exp.description}</p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-80 lg:shrink-0">
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      {exp.demoUrl && (
                        <a
                          href={exp.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
                        >
                          <PlayCircle size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
