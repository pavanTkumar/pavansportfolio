import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/pavantejavath', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pavantejavath', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pavan@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-primary-500" />
                <Code className="w-4 h-4 text-accent-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="font-bold text-xl text-white">Pavan Tejavath</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              AI Engineer specializing in LLM applications, RAG pipelines, and intelligent systems. 
              Passionate about building the future of AI-powered solutions.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3 
              className="font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {['About', 'Projects', 'AI Demo', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase().replace(' ', '-')}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <motion.h3 
              className="font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={20} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.p 
              className="text-gray-500 text-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's build something amazing together
            </motion.p>
          </div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Pavan Tejavath. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <motion.button
              className="text-gray-500 hover:text-primary-400 transition-colors duration-200 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              className="text-gray-500 hover:text-primary-400 transition-colors duration-200 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;