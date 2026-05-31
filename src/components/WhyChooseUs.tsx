import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Shield, Activity, Cpu, Clock } from 'lucide-react';

const features = [
  {
    title: "Certified Inspection Team",
    description: "Our engineers hold industry-leading certifications and specialized training in facility diagnostics.",
    icon: <Award />
  },
  {
    title: "Detailed Technical Reporting",
    description: "Receive comprehensive, data-rich reports with high-resolution evidence and actionable insights.",
    icon: <FileText />
  },
  {
    title: "Compliance & Safety Focus",
    description: "We ensure every audit meets or exceeds local and international safety regulations.",
    icon: <Shield />
  },
  {
    title: "Preventive Risk Identification",
    description: "Our methodology focuses on catching potential failures before they become costly emergencies.",
    icon: <Activity />
  },
  {
    title: "Advanced Methodologies",
    description: "Utilizing non-destructive testing and proprietary analytical models for precision.",
    icon: <Cpu />
  },
  {
    title: "Fast Turnaround Time",
    description: "Efficient workflows that deliver critical audit results without compromising on detail.",
    icon: <Clock />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-secondary-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Why TecSAT</h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold dark:text-white">The Engineering Advantage</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
              </div>
              <h4 className="text-lg font-bold text-secondary-dark dark:text-white mb-3">{feature.title}</h4>
              <p className="text-secondary-gray dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
