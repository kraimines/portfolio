import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import { AnimatedText } from './ui/animated-text'

export default function Hero() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div 
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div 
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeIn('right', 1)}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-accent font-medium text-lg mb-4 glow-accent"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <AnimatedText 
                text="Data Science &" 
                className="text-foreground block" 
              />
              <AnimatedText 
                text="AI Engineer" 
                className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent glow-accent" 
              />
            </h1>
            <motion.p 
              variants={fadeIn('right', 2)}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Final-year engineering student specializing in machine learning, deep learning, and intelligent solutions.
              Passionate about transforming data into actionable insights and building AI-powered applications.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeIn('right', 3)}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 25px -5px rgb(6, 182, 212, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-lg font-medium group"
            >
              View My Work
              <motion.span 
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            <motion.a
              whileHover={{ 
                y: -2,
                borderColor: 'rgba(6, 182, 212, 0.6)',
                backgroundColor: 'rgba(6, 182, 212, 0.05)'
              }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 text-foreground rounded-lg font-medium"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeIn('right', 4)}
            className="flex gap-4 pt-4"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kraimines"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/ines-kraim-514036281/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:your.email@example.com"
              className="p-2 rounded-full border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                delay: 0.5,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }
            }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 25px -5px rgb(0, 0, 0, 0.1), 0 10px 10px -5px rgb(0, 0, 0, 0.04)'
            }}
            className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-accent/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 1, duration: 1 }
              }}
              className="absolute inset-0"
            >
              <Image
                src="/portfolio/aa.png"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 1.2, duration: 0.8 }
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
