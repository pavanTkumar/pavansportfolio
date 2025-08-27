// src/utils/constants.js
export const PERSONAL_INFO = {
    name: 'Pavan Tejavath',
    title: 'AI Engineer',
    email: 'pavan@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/pavantejavath',
    github: 'https://github.com/pavantejavath',
    website: 'https://pavantejavath.com'
  };
  
  export const SKILLS = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL'],
    frameworks: ['React', 'Next.js', 'FastAPI', 'Django', 'Node.js'],
    aitools: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Hugging Face', 'Transformers'],
    databases: ['Pinecone', 'FAISS', 'Weaviate', 'ChromaDB', 'PostgreSQL', 'MongoDB'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'GCP', 'Azure'],
    tools: ['Git', 'Docker', 'VS Code', 'Jupyter', 'Postman']
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: 'PromptFlows Studio',
      description: 'A comprehensive platform for designing, testing, and deploying AI prompt workflows with visual flow builder.',
      technologies: ['React', 'Python', 'LangChain', 'FastAPI', 'PostgreSQL'],
      features: ['Visual Flow Builder', 'A/B Testing', 'Analytics Dashboard', 'Version Control'],
      github: 'https://github.com/pavantejavath/promptflows-studio',
      demo: 'https://promptflows-studio.demo.com',
      image: '/projects/promptflows.jpg'
    },
    {
      id: 2,
      name: 'RecruitAI',
      description: 'AI-powered recruitment assistant that automates candidate screening using semantic search and NLP.',
      technologies: ['Python', 'Pinecone', 'OpenAI', 'Streamlit', 'Docker'],
      features: ['Resume Parsing', 'Semantic Matching', 'Interview Scheduling', 'Bias Detection'],
      github: 'https://github.com/pavantejavath/recruitai',
      demo: 'https://recruitai.demo.com',
      image: '/projects/recruitai.jpg'
    },
    {
      id: 3,
      name: 'Personal AI Assistant',
      description: 'Customizable AI assistant with RAG capabilities for personal knowledge management.',
      technologies: ['LangChain', 'FAISS', 'React', 'Node.js', 'MongoDB'],
      features: ['Document Ingestion', 'Conversational Interface', 'Memory Management', 'Custom Integrations'],
      github: 'https://github.com/pavantejavath/personal-ai',
      demo: 'https://myai.thetejavath.com',
      image: '/projects/personal-ai.jpg'
    }
  ];
  
  export const EXPERIENCE = [
    {
      company: 'TechCorp AI',
      position: 'Senior AI Engineer',
      duration: '2023 - Present',
      description: 'Leading development of enterprise AI solutions using LLMs and vector databases.',
      achievements: [
        'Built RAG systems serving 10M+ queries monthly',
        'Reduced inference costs by 40% through optimization',
        'Led team of 5 engineers on AI product development'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'AI Engineer',
      duration: '2022 - 2023',
      description: 'Developed end-to-end AI applications from prototype to production.',
      achievements: [
        'Implemented semantic search increasing user engagement by 60%',
        'Built automated content moderation system',
        'Designed A/B testing framework for AI features'
      ]
    },
    {
      company: 'DataScience Inc',
      position: 'Machine Learning Engineer',
      duration: '2021 - 2022',
      description: 'Focused on traditional ML and early LLM implementation.',
      achievements: [
        'Deployed 15+ ML models to production',
        'Created MLOps pipeline reducing deployment time by 70%',
        'Mentored junior data scientists'
      ]
    }
  ];
  
  export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Demo', href: '#ai-demo' },
    { name: 'Contact', href: '#contact' }
  ];
  
  // src/hooks/useScrollAnimation.js
  import { useState, useEffect, useRef } from 'react';
  
  export const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve after first intersection to prevent re-triggering
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );
  
      const currentElement = elementRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [threshold]);
  
    return [elementRef, isVisible];
  };
  
  export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return scrollProgress;
  };
  
  export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return mousePosition;
  };