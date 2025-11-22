'use client';

import { motion } from 'framer-motion';
import { letterAnimation } from '@/lib/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  splitByWord?: boolean;
  delay?: number;
}

export const AnimatedText = ({ 
  text, 
  className = '', 
  splitByWord = false,
  delay = 0 
}: AnimatedTextProps) => {
  const words = splitByWord ? text.split(' ') : [text];
  
  return (
    <div className={`flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span 
          key={wordIndex} 
          className="inline-flex overflow-hidden mr-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {!splitByWord ? (
            word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letterAnimation(charIndex * 0.05 + delay)}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))
          ) : (
            <motion.span
              variants={letterAnimation(wordIndex * 0.1 + delay)}
              className="inline-block"
            >
              {word}
            </motion.span>
          )}
        </motion.span>
      ))}
    </div>
  );
};

const staggerContainer: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
};
