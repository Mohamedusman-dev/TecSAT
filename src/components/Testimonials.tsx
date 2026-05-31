import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Robert Chen",
    role: "Facility Manager",
    company: "Global Tech Park",
    text: "TecSAT's audit was eye-opening. Their technical depth identified critical electrical risks we had missed for years. Highly recommended for any large-scale infrastructure.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "City Health Systems",
    text: "The compliance reporting provided by TecSAT is world-class. It made our accreditation process seamless and gave us complete peace of mind regarding patient safety.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Michael Ross",
    role: "Chief Engineer",
    company: "Apex Industrial",
    text: "Professional, thorough, and efficient. Their structural assessment saved us from a potential disaster by identifying early-stage fatigue in our loading docks.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-secondary-dark transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Client Feedback</h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold dark:text-white">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
            >
              <Quote className="absolute top-8 right-8 text-primary-600/10" size={64} />
              
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-secondary-gray dark:text-gray-300 italic mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-500" />
                <div>
                  <h4 className="font-bold text-secondary-dark dark:text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-secondary-gray dark:text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
