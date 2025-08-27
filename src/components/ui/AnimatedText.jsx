// src/components/ui/AnimatedText.jsx
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.8,
  type = 'fadeUp' 
}) => {
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    }
  };

  // For typewriter effect
  if (type === 'typewriter') {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + (index * 0.05), duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // For word-by-word animations
  if (type === 'words') {
    return (
      <motion.span className={className}>
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + (index * 0.1), duration: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const animation = animations[type] || animations.fadeUp;

  return (
    <motion.span
      className={className}
      initial={animation.initial}
      animate={animation.animate}
      transition={{ delay, duration }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;