import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import AIDemo from './components/sections/AIDemo';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Projects />
                <AIDemo />
                <Contact />
              </motion.div>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;