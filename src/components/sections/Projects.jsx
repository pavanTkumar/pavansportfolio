// src/components/sections/Projects.jsx
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-dark-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects Section
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Coming in Phase 4
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;