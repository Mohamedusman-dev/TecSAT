import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitError(null);
    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
          },
        ]);

      if (error) throw error;

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError('Failed to send inquiry. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-secondary-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Contact Us</h2>
            <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-secondary-dark dark:text-white">
              Ready to Secure Your Facility?
            </h3>
            <p className="mt-6 text-secondary-gray dark:text-gray-400">
              Get in touch with our expert team for a customized audit proposal or technical consultation.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-dark dark:text-white">Call Us</h4>
                  <p className="text-secondary-gray dark:text-gray-400">+91 81222 81202</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-dark dark:text-white">Email Us</h4>
                  <p className="text-secondary-gray dark:text-gray-400">info@tecsat.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-dark dark:text-white">Visit Us</h4>
                  <p className="text-secondary-gray dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380908.06713917665!2d79.87898893406809!3d13.047316842861278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1780374479600!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary-dark dark:text-white">Inquiry Sent!</h4>
                  <p className="text-secondary-gray dark:text-gray-400 max-w-xs">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-primary-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-dark dark:text-gray-300 mb-2">Full Name</label>
                      <input
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-dark dark:text-gray-300 mb-2">Email Address</label>
                      <input
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-dark dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        placeholder="+91 00000 00000"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-dark dark:text-gray-300 mb-2">Company</label>
                      <input
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        placeholder="Company Name"
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-dark dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                      placeholder="Tell us about your facility audit needs..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-red-600 text-sm">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
