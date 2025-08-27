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