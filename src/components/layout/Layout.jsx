import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;