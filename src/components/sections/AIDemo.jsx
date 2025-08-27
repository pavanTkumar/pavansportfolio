import { motion } from 'framer-motion';

const AIDemo = () => {
  return (
    <section id="ai-demo" className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          AI Demo Section
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Coming in Phase 5
        </motion.p>
      </div>
    </section>
  );
};

export default AIDemo;