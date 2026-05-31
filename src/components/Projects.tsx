import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

const categories = ['All', 'Building', 'Electrical', 'HVAC', 'Safety'];

const projects = [
  { title: "Metropolis Tower Audit", category: "Building", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
  { title: "Grid-Scale Electrical Safety", category: "Electrical", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
  { title: "Central HVAC Optimization", category: "HVAC", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=600" },
  { title: "Industrial Fire Suppression", category: "Safety", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" },
  { title: "Corporate Hub Inspection", category: "Building", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { title: "Smart Campus Assessment", category: "Safety", image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=600" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Our Portfolio</h2>
            <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold dark:text-white">Recent Inspection Projects</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
                    : 'bg-white dark:bg-gray-800 text-secondary-gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                  <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-primary-600 transition-colors">
                      <Search size={20} />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-primary-600 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
