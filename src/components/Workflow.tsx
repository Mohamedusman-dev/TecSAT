import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Site Inspection",
    description: "On-site visit by our certified engineers for initial data collection and visual assessment."
  },
  {
    number: "02",
    title: "Technical Assessment",
    description: "Detailed testing using advanced diagnostic tools and non-destructive methodologies."
  },
  {
    number: "03",
    title: "Data Analysis",
    description: "Processing findings through our proprietary analytical models to identify risk patterns."
  },
  {
    number: "04",
    title: "Detailed Reporting",
    description: "Generation of comprehensive digital reports with photographic evidence and compliance scoring."
  },
  {
    number: "05",
    title: "Recommendations",
    description: "Strategic maintenance planning and corrective action roadmaps for facility optimization."
  }
];

const Workflow = () => {
  return (
    <section className="py-24 bg-secondary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-primary-500 font-bold uppercase tracking-widest text-sm">Our Process</h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold">How We Deliver Excellence</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600/0 via-primary-600 to-primary-600/0 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-secondary-dark shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
