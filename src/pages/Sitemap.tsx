import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ShoppingBag, 
  Info, 
  Mail, 
  Users, 
  Shield, 
  FileText,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Minimal - Discover our story and featured products' },
        { name: 'Products', path: '/products', description: 'Browse our complete collection of minimalist footwear' },
        { name: 'About Us', path: '/about', description: 'Learn about our mission, values, and journey' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our support team' },
      ]
    },
    {
      title: 'Product Categories',
      icon: ShoppingBag,
      links: [
        { name: 'Sneakers', path: '/products?category=sneakers', description: 'Minimalist sneakers for everyday wear' },
        { name: 'Boots', path: '/products?category=boots', description: 'Premium boots for all seasons' },
        { name: 'Loafers', path: '/products?category=loafers', description: 'Elegant slip-on shoes for formal occasions' },
        { name: 'Sandals', path: '/products?category=sandals', description: 'Comfortable sandals for warm weather' },
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'Our Team', path: '/team', description: 'Meet the people behind Minimal' },
        { name: 'Careers', path: '/careers', description: 'Join our growing team of passionate individuals' },
        { name: 'Press', path: '/press', description: 'Latest news and press releases' },
        { name: 'Investors', path: '/investors', description: 'Information for current and potential investors' },
      ]
    },
    {
      title: 'Support',
      icon: Info,
      links: [
        { name: 'Help Center', path: '/help', description: 'Find answers to frequently asked questions' },
        { name: 'Size Guide', path: '/size-guide', description: 'Find your perfect fit with our sizing guide' },
        { name: 'Shipping Info', path: '/shipping', description: 'Shipping options and delivery information' },
        { name: 'Returns', path: '/returns', description: 'Easy returns and exchange policy' },
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use, and protect your information' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our services' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Information about our use of cookies' },
        { name: 'Accessibility', path: '/accessibility', description: 'Our commitment to digital accessibility' },
      ]
    },
    {
      title: 'Connect',
      icon: ExternalLink,
      links: [
        { name: 'Newsletter', path: '/newsletter', description: 'Subscribe to receive updates and exclusive offers' },
        { name: 'Instagram', path: 'https://instagram.com/minimal', description: 'Follow us for daily inspiration', external: true },
        { name: 'Twitter', path: 'https://twitter.com/minimal', description: 'Stay updated with our latest news', external: true },
        { name: 'Facebook', path: 'https://facebook.com/minimal', description: 'Connect with our community', external: true },
      ]
    }
  ];

  const quickStats = [
    { number: '50+', label: 'Products', description: 'Carefully crafted designs' },
    { number: '6', label: 'Categories', description: 'Different shoe types' },
    { number: '20+', label: 'Pages', description: 'Information and resources' },
    { number: '24/7', label: 'Support', description: 'Always here to help' },
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full mb-6">
            <FileText size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Site Map
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-3xl mx-auto">
            Navigate our website with ease. Find all pages, resources, and information 
            organized in one convenient location.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-primary-800 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-bold font-urbanist text-accent-600 dark:text-accent-400 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold font-poppins mb-1 text-primary-900 dark:text-primary-100">
                {stat.label}
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + sectionIndex * 0.1 }}
              className="bg-white dark:bg-primary-800 rounded-3xl p-8 shadow-sm"
            >
              {/* Section Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-xl flex items-center justify-center">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                  {section.title}
                </h2>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold font-poppins text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                {link.name}
                              </h3>
                              <ExternalLink size={14} className="text-primary-400 group-hover:text-accent-500 transition-colors" />
                            </div>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-poppins mt-1">
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight size={16} className="text-primary-300 group-hover:text-accent-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                        </div>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="group block p-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold font-poppins text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-poppins mt-1">
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight size={16} className="text-primary-300 group-hover:text-accent-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-3xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-urbanist mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-accent-100 font-poppins mb-6 max-w-2xl mx-auto">
            Use our search function or contact our support team. We're here to help 
            you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 max-w-md"
            >
              <input
                type="search"
                placeholder="Search our website..."
                className="w-full px-6 py-3 rounded-full border-0 text-primary-900 font-poppins focus:ring-2 focus:ring-white/50"
              />
            </motion.div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-poppins font-semibold transition-colors backdrop-blur-sm whitespace-nowrap"
              >
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-primary-500 dark:text-primary-500 font-poppins">
            Sitemap last updated: January 15, 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;