import React from 'react';
import { motion } from 'framer-motion';
import { Building, Zap, Wind, ShieldAlert, ClipboardCheck, HardHat } from 'lucide-react';

const services = [
  {
    icon: <Building />,
    title: "Building Condition Audit",
    description: "Comprehensive structural and architectural assessment to identify defects and maintenance needs.",
    slug: "building-audit"
  },
  {
    icon: <Zap />,
    title: "Electrical Safety Audit",
    description: "In-depth inspection of electrical systems to prevent hazards and ensure compliance with safety standards.",
    slug: "electrical-audit"
  },
  {
    icon: <Wind />,
    title: "HVAC System Inspection",
    description: "Performance evaluation of heating, ventilation, and air conditioning systems for energy efficiency.",
    slug: "hvac-inspection"
  },
  {
    icon: <ShieldAlert />,
    title: "Fire & Life Safety Audit",
    description: "Rigorous testing of fire suppression systems, alarms, and emergency exit strategies.",
    slug: "fire-safety"
  },
  {
    icon: <ClipboardCheck />,
    title: "Compliance Management",
    description: "Assisting facilities in meeting local and international regulatory requirements and certifications.",
    slug: "compliance"
  },
  {
    icon: <HardHat />,
    title: "Structural Assessment",
    description: "Non-destructive testing and analysis of load-bearing elements for long-term stability.",
    slug: "structural"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold uppercase tracking-widest text-sm"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-heading font-bold text-secondary-dark dark:text-white"
          >
            Specialized Audit & Inspection Services
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white dark:bg-secondary-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-primary-500/30"
            >
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
              </div>
              <h4 className="text-xl font-bold text-secondary-dark dark:text-white mb-4">{service.title}</h4>
              <p className="text-secondary-gray dark:text-gray-400 mb-6 line-clamp-3">
                {service.description}
              </p>
              <button className="text-primary-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                Learn More <span className="ml-2">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
