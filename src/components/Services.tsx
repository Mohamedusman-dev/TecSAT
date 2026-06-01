import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Zap, 
  Wind, 
  Droplets, 
  LayoutTemplate, 
  Settings2,
  SearchCheck
} from 'lucide-react';

const services = [
  {
    icon: <Building2 />,
    title: "Civil & Renovation Works",
    description: "Building repairs, structural improvements, office renovations, fit-outs, and infrastructure enhancement projects."
  },
  {
    icon: <LayoutTemplate />,
    title: "MEP Engineering Solutions",
    description: "Design review, installation support, troubleshooting, upgrades, and maintenance of Mechanical, Electrical, and Plumbing systems."
  },
  {
    icon: <Wind />,
    title: "HVAC Projects & Ducting Works",
    description: "Air conditioning installations, duct fabrication, ventilation systems, modifications, balancing, and performance optimization."
  },
  {
    icon: <Zap />,
    title: "Fabrication & Industrial Works",
    description: "Custom fabrication of MS, SS, GI structures, platforms, supports, handrails, equipment bases, and utility systems.",
    slug: "mep-services"
  },
  {
    icon: <Droplets />,
    title: "Waterproofing Solutions",
    description: "Inspection, diagnosis, and treatment of leakage issues for roofs, terraces, basements, wet areas, and external structures.",
    slug: "waterproofing"
  },
  {
    icon: <Settings2 />,
    title: "Facility Engineering Support Services",
    description: "Technical consultancy, preventive maintenance planning, vendor coordination, project supervision, and operational support.",
    slug: "engineering-support"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <span className="h-px w-8 bg-primary-500"></span>
            <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">
              Our Core Expertise
            </h2>
            <span className="h-px w-8 bg-primary-500"></span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl font-heading font-bold text-secondary-dark dark:text-white"
          >
            Engineering Services & Facility Audit Solutions
          </motion.h3>
          <p className="mt-4 text-secondary-gray dark:text-gray-400">
            From comprehensive facility audits to engineering execution, we deliver end-to-end solutions that enhance safety, performance, and operational efficiency.
          </p>
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
              <p className="text-secondary-gray dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-primary-600 font-bold flex items-center group-hover:translate-x-2 transition-transform text-sm">
                Explore Service <span className="ml-2">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Audit Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-primary-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <SearchCheck size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Need a Technical Building Audit?</h4>
              <p className="text-primary-100">Identify risks and optimize your facility's performance today.</p>
            </div>
          </div>
          <a href="#contact" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-colors whitespace-nowrap">
            Book an Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
