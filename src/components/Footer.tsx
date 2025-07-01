import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Team', href: '/team' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-urbanist text-white"
            >
              MINIMAL
            </motion.h3>
            <p className="text-primary-300 font-poppins leading-relaxed">
              Redefining footwear with minimalist design and premium quality. 
              Every step tells a story of craftsmanship and style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-800 hover:bg-accent-500 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold font-poppins text-white"
            >
              Quick Links
            </motion.h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="block text-primary-300 hover:text-white transition-colors font-poppins"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold font-poppins text-white"
            >
              Legal
            </motion.h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="block text-primary-300 hover:text-white transition-colors font-poppins"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold font-poppins text-white"
            >
              Contact Us
            </motion.h4>
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Mail size={16} className="text-accent-400" />
                <span className="text-primary-300 font-poppins">hello@minimal.com</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3"
              >
                <Phone size={16} className="text-accent-400" />
                <span className="text-primary-300 font-poppins">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <MapPin size={16} className="text-accent-400" />
                <span className="text-primary-300 font-poppins">New York, NY 10001</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-primary-400 font-poppins text-sm">
            © 2024 Minimal. All rights reserved.
          </p>
          <p className="text-primary-400 font-poppins text-sm mt-4 md:mt-0">
            Crafted with ❤️ for shoe enthusiasts
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;