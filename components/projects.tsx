'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Medical Image Analysis",
      description: "Binary classification model for early melanoma detection using dual-input deep learning (EfficientNetV2 + patient metadata). 1st Place in Bootcamp Competition.",
      tech: ["TensorFlow", "Python", "Deep Learning", "Medical Imaging"],
      links: { github: "https://github.com/kraimines/Medical-Image-Classification-EfficientNetV2" }
    },
    {
      title: "Automated Trading with Reinforcement Learning",
      description: "RL agent (PPO policy gradient) trained on 5+ years of historical stock data. Achieved +18.73% annual return over buy-and-hold strategy with optimized risk management.",
      tech: ["Stable-Baselines3", "Python", "Finance", "RL"],
      links: { github: "https://github.com/kraimines/Automated-Trading-Reinforce-Learning" }
    },
    {
      title: "Enterprise AI Assistant",
      description: "Multi-agent system orchestrating HR, CRM, and ERP systems with role-aware access control, LangGraph orchestration, and RAG-powered retrieval for knowledge bases.",
      tech: ["LangGraph", "Neo4j", "RAG", "Python"],
      links: { github: "https://github.com/kraimines/assistant_strategique_intelligent_entreprise" }
    },
    {
      title: "OCR & LLM Receipt Analysis",
      description: "End-to-end document processing pipeline combining multiple OCR engines (Doctr, Tesseract, Docling) with LLM extraction (Gemini). Reduced manual entry by 80%.",
      tech: ["Python", "Gemini API", "OCR", "LLM"],
      links: { github: "https://github.com/kraimines/OCR-and-LLM-based-Receipt-Analysis-Application" }
    },
    {
      title: "Tunisia PCA & Interactive Shiny Dashboard",
      description: "Statistical analysis reducing 61 socio-economic variables to 14 key components (85% variance retained). Interactive dashboard adopted by 50+ researchers.",
      tech: ["R Shiny", "ggplot2", "Statistics", "Data Viz"],
      links: { github: "https://github.com/kraimines/tunisia-pca-shiny-dashboard" }
    }
  ];

  return (
    <motion.section
      id="projects"
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
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-2">Projects</h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border border-gray-200 p-6 space-y-4"
              >
                <h3 className="font-serif text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs border border-gray-200 text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-colors"
                  >
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
