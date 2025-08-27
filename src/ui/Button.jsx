// src/components/ui/Button.jsx
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  onClick,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 focus:ring-white/50',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-lg hover:shadow-accent-500/25',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/50',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  return (
    <motion.button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;

// src/components/ui/Card.jsx
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  hover = false,
  glass = false,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  const glassClasses = glass ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-dark-800 border border-dark-700';
  const hoverClasses = hover ? 'hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      ref={ref}
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;

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