"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
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
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
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
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-2">Contact</h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          {/* Contact Info & Form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out via email or connect with me on social platforms.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:ineskraim22@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={18} className="text-gray-500 group-hover:text-gray-900" />
                  <span>ineskraim22@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ines-kraim-514036281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin size={18} className="text-gray-500 group-hover:text-gray-900" />
                  <span>ines-kraim-514036281</span>
                </motion.a>
                <motion.a
                  href="https://github.com/kraimines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Github size={18} className="text-gray-500 group-hover:text-gray-900" />
                  <span>@kraimines</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={loading || submitted}
                  className="w-full px-4 py-2 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  disabled={loading || submitted}
                  className="w-full px-4 py-2 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 disabled:opacity-50"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message"
                  disabled={loading || submitted}
                  className="w-full px-4 py-2 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 disabled:opacity-50"
                ></textarea>
              </div>
              {error && (
                <div className="text-red-700 text-sm p-3 border border-red-200 bg-red-50">
                  {error}
                </div>
              )}
              {submitted && (
                <div className="text-green-700 text-sm p-3 border border-green-200 bg-green-50">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              <motion.button
                type="submit"
                disabled={loading || submitted}
                className="w-full px-6 py-2 border border-gray-900 text-gray-900 font-medium transition-all hover:bg-gray-900 hover:text-white disabled:opacity-50"
                whileHover={!loading && !submitted ? { scale: 1.02 } : {}}
                whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
              >
                {loading ? 'Sending...' : submitted ? 'Sent!' : 'Send'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
