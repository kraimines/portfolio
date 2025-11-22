"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Contact() {
  const [form, setForm] = useState({
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://getform.io/f/bgdjxyva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
          _gotcha: '', // Honeypot for spam prevention
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ email: '', message: '' });
        // Reset form after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="mb-12 text-center"
          variants={fadeIn('up', 0)}
        >
          <h2 className="text-4xl font-bold mb-4 glow-accent">
            <span className="relative inline-block">
              Let's Connect
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={staggerContainer}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/20 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
            variants={fadeIn('right', 0.2)}
            whileHover={{
              boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2 text-white">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                placeholder="your@email.com"
                disabled={loading || submitted}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium mb-2 text-white">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                placeholder="Your message..."
                disabled={loading || submitted}
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {error && (
                <div className="text-red-400 text-sm mb-4 p-3 bg-red-900/30 rounded-lg border border-red-800/50">
                  {error}
                </div>
              )}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading || submitted}
                whileHover={!loading && !submitted ? { 
                  scale: 1.02, 
                  boxShadow: '0 5px 15px -5px rgb(6, 182, 212, 0.5)' 
                } : {}}
                whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : submitted ? (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ✓
                    </motion.span>
                    Message Sent!
                  </motion.span>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div 
            className="space-y-6 p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/20 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 h-full"
            variants={fadeIn('left', 0.2)}
            whileHover={{
              boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.1)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:ineskraim22@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/30"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  >
                    <Mail size={16} />
                  </motion.span>
                  ineskraim22@gmail.com
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/30"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  >
                    <Linkedin size={16} />
                  </motion.span>
                  ines-kraim
                </motion.a>
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/30"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  >
                    <Github size={16} />
                  </motion.span>
                  @kraimines
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
