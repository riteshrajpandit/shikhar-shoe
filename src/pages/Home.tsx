import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { gsap } from 'gsap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP animations for elements
    gsap.fromTo(
      '.animate-on-scroll',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.animate-on-scroll',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '30-day money-back guarantee'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Handcrafted with premium materials'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full mb-4"
                >
                  <feature.icon size={24} />
                </motion.div>
                <h3 className="text-lg font-semibold font-poppins mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-poppins text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-urbanist mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-2xl mx-auto">
              Discover our handpicked selection of premium footwear, designed for the modern minimalist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-primary-900 dark:bg-white text-white dark:text-primary-900 px-8 py-4 rounded-full font-poppins font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors"
              >
                <span>View All Products</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-urbanist text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-primary-200 font-poppins mb-8">
              Get exclusive access to new releases, special offers, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-accent-400 font-poppins"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-poppins font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;