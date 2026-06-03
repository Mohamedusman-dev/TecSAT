import React, { useState } from 'react';
import { 
  Share2, 
  Facebook, 
  Instagram, 
  Youtube, 
  ArrowUpRight,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: 'tecSAT Engineering Services',
      text: 'Comprehensive Engineering Services & Facility Audit Solutions',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { 
      Icon: Share2, 
      label: 'Share', 
      href: '#',
      onClick: handleShare,
      isShare: true
    },
    { 
      Icon: Facebook, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/tecSAT.engineeringservices/',
      isShare: false
    },
    { 
      Icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/tecsat_engineeringservices/',
      isShare: false
    },
    { 
      Icon: Youtube, 
      label: 'YouTube', 
      href: 'https://www.youtube.com/@tecSATengineeringservices',
      isShare: false
    }
  ];

  return (
    <footer className="bg-secondary-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-heading font-bold text-primary-500">tecSAT</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing integrated Engineering Services, Facility Audits, HVAC, MEP, Waterproofing, Fabrication, and Renovation Solutions to enhance building performance, safety, and reliability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, label, href, onClick, isShare }, i) => (
                <div key={i} className="relative">
                  <a 
                    href={href}
                    onClick={onClick}
                    target={!isShare ? "_blank" : undefined}
                    rel={!isShare ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                      isShare && copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white/5 hover:bg-primary-600 text-white'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isShare && copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="icon"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Icon size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </a>
                  
                  {isShare && copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap"
                    >
                      URL Copied!
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'About Us', 'Our Core Expertise', 'Why tecSAT','Our Process' ,'Industries We Serve','Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-500 transition-colors flex items-center group">
                    {link} <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                'Facility Audits',
                'Electrical & MEP Services',
                'HVAC Solutions',
                'Fire & Life Safety',
                'Structural & Civil Works',
                'Waterproofing Solutions',
                'Fabrication Services',
                'Interior & Renovation Works'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Connect us</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our updates or reach out for technical consultations.</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 outline-none focus:border-primary-500 w-full text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 tecSAT Engineering Services. All rights reserved.</p>
            <p className="mt-1 opacity-70">
  Developed by Hinelix Technologies Private Limited |{" "}
  <a
    href="https://www.hinelix.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    www.hinelix.com
  </a>
</p>
          </div>
					
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
