import React from 'react';
import { Share2, Globe, Send, MessageCircle, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-heading font-bold text-primary-500">TecSAT</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the industry in professional facility audit and engineering inspection services. Ensuring safety and operational excellence since 2010.
            </p>
            <div className="flex space-x-4">
              {[Share2, Globe, Send, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Home', 'About Us', 'Our Projects', 'Safety Standards', 'Contact Us'].map((link) => (
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
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Building Audits', 'Electrical Safety', 'HVAC Performance', 'Fire Safety', 'Structural Analysis'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for technical insights and regulatory updates.</p>
            <div className="flex">
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
          <p>© 2025 TecSAT Facility Audit Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
