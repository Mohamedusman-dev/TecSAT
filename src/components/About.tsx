import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

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
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm">About TecSAT</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-secondary-dark dark:text-white">
              Excellence in Engineering & Facility Audits
            </h3>
            <p className="mt-6 text-secondary-gray dark:text-gray-400 leading-relaxed">
              TecSAT Facility Audit Solutions is a leader in technical building assessments. We specialize in identifying operational risks, ensuring regulatory compliance, and optimizing facility performance through data-driven inspections.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Certified Engineering Professionals',
                'Advanced Diagnostic Equipment',
                'Comprehensive Digital Reporting',
                'Risk Mitigation Strategies'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary-500" size={20} />
                  <span className="text-secondary-dark dark:text-gray-300 font-medium">{item}</span>
                </div>
              ))}
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
              <p className="text-secondary-gray dark:text-gray-400 text-sm">
                To provide unparalleled facility audit services that empower building owners with actionable insights for safety and longevity.
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
              <p className="text-secondary-gray dark:text-gray-400 text-sm">
                To be the global benchmark for facility inspection excellence, driving the future of smart, safe, and sustainable infrastructure.
              </p>
            </motion.div>

            <div className="sm:col-span-2 relative mt-6 rounded-2xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
                alt="Engineer at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
