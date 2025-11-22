import { Variants, Transition } from 'framer-motion';

interface AnimationProps {
  delay?: number;
  duration?: number;
  ease?: number[];
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const letterAnimation = (i: number = 0): Variants => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9] as const
    }
  }
});

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => ({
  hidden: { 
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
});
