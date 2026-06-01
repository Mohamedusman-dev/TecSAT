import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, Building, HardHat } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-secondary-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-10 h-1.5 bg-primary-500 rounded-full"></span>
              <h1 className="text-primary-600 font-bold tracking-wider text-lg md:text-xl">ABOUT tecSAT</h1>
            </div>
            <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-secondary-dark dark:text-white leading-tight">
              Excellence in Engineering & Facility Audits
            </h3>
            <p className="mt-6 text-secondary-gray dark:text-gray-400 leading-relaxed">
            tecSAT Engineering Services is a multidisciplinary engineering company specializing in facility audits, MEP systems, HVAC solutions, civil works, waterproofing, fabrication, renovations, and technical support services. We help clients enhance building performance, improve operational efficiency, ensure compliance, and extend asset life through professional engineering expertise and detailed assessments.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-1 gap-4">
              {[
  'Certified Engineering Professionals',
  'HVAC, MEP & Building Systems Expertise',
  'Renovation & Building Improvement Services',
  'End-to-End Engineering Support'
].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-primary-500" size={14} />
                  </div>
                  <span className="text-secondary-dark dark:text-gray-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" 
                    alt="Team"
                  />
                ))}
              </div>
              <div className="ml-6">
                <p className="text-sm font-bold dark:text-white">Expert Engineering Team</p>
                <p className="text-xs text-secondary-gray dark:text-gray-400">Certified professionals at your service</p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-primary-50 dark:bg-gray-800 rounded-2xl border border-primary-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold text-secondary-dark dark:text-white mb-4">Our Mission</h4>
              <p className="text-secondary-gray dark:text-gray-400 text-sm leading-relaxed">
                To provide unparalleled engineering and facility audit services that empower building owners with actionable insights for safety and longevity.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-primary-900/5 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Eye size={24} />
              </div>
              <h4 className="text-xl font-bold text-secondary-dark dark:text-white mb-4">Our Vision</h4>
              <p className="text-secondary-gray dark:text-gray-400 text-sm leading-relaxed">
                To be a trusted leader in engineering and facility solutions, shaping the future of smart, safe, and sustainable infrastructure.
              </p>
            </motion.div>

            <div className="sm:col-span-2 relative mt-6 rounded-2xl overflow-hidden h-64 group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Engineer at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-3 text-white">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <HardHat size={20} />
                </div>
                <span className="font-bold">Quality Assured Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
