import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Shield, Activity, Cpu, Clock } from 'lucide-react';

const features = [
  {
    title: "Certified Engineering Team",
    description: "Our experienced engineers and technical specialists deliver reliable solutions across Civil, MEP, HVAC, Waterproofing, Fabrication, Renovation, and Facility Assessment projects.",
    icon: <Award />
  },
  {
    title: "Preventive Risk Identification",
    description: "Our inspections and engineering evaluations help identify potential failures, performance gaps, and maintenance risks before they impact operations.",
    icon: <FileText />
  },
  {
    title: "End-to-End Engineering Solutions",
    description: "From design review and technical assessments to execution support, renovation, waterproofing, HVAC modifications, MEP works, and fabrication services, we provide complete project lifecycle support.",
    icon: <Shield />
  },
  {
    title: "Fast Response & Project Delivery",
    description: "Efficient planning, skilled execution teams, and strong project coordination enable us to deliver quality outcomes within committed timelines.",
    icon: <Activity />
  },
  {
    title: "Practical & Cost-Effective Solutions",
    description: "We focus on realistic, sustainable, and budget-conscious engineering solutions that improve performance, reliability, and asset life.",
    icon: <Cpu />
  },
  {
    title: "Client-Centric Approach",
    description: "Every project is customized to the client’s operational needs, ensuring measurable value, transparency, and long-term support.",
    icon: <Clock />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-secondary-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold  tracking-widest text-lg">Why tecSAT</h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold dark:text-white">Engineering Excellence & Facility Assurance</h3>
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
