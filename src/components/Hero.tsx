import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Hammer, Building2 } from 'lucide-react';

const stats = [
  { label: 'Engineering Projects', value: 50, suffix: '+', icon: <Hammer className="text-primary-500" /> },
  { label: 'Audit Compliance', value: 100, suffix: '%', icon: <ShieldCheck className="text-primary-500" /> },
  { label: 'Facilities Managed', value: 35, suffix: '+', icon: <Building2 className="text-primary-500" /> },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Engineering Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 via-secondary-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1]"
          >
           Comprehensive <span className="text-primary-500">Engineering Services</span> & Facility <span className="text-primary-400">Audit Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Enhancing building performance, safety, and compliance through comprehensive engineering services and facility audit solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all group shadow-lg shadow-primary-600/20"
            >
              Request Inspection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/20"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary-600/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;
