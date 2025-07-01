import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Frown } from 'lucide-react';
import { gsap } from 'gsap';

const NotFound: React.FC = () => {
  const numberRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the 404 number with glitch effect
    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          rotationX: -90
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: 'back.out(1.7)'
        }
      );

      // Glitch effect
      gsap.to(numberRef.current, {
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        textShadow: '0 0 5px rgba(59, 130, 246, 0.5)',
        delay: 2
      });
    }

    // Floating animation for decorative elements
    if (floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children;
      Array.from(elements).forEach((el, index) => {
        gsap.to(el, {
          y: Math.random() * 50 - 25,
          x: Math.random() * 30 - 15,
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });
      });
    }
  }, []);

  const suggestions = [
    {
      icon: Home,
      title: 'Go Home',
      description: 'Return to our homepage and start fresh',
      path: '/',
      color: 'bg-accent-500 hover:bg-accent-600'
    },
    {
      icon: Search,
      title: 'Search Products',
      description: 'Find what you\'re looking for in our collection',
      path: '/products',
      color: 'bg-primary-600 hover:bg-primary-700'
    },
    {
      icon: ArrowLeft,
      title: 'Go Back',
      description: 'Return to the previous page',
      action: () => window.history.back(),
      color: 'bg-primary-500 hover:bg-primary-600'
    }
  ];

  const popularPages = [
    { name: 'New Arrivals', path: '/products?filter=new' },
    { name: 'Best Sellers', path: '/products?sort=popular' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Returns', path: '/returns' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-800">
      {/* Background Animation Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-300/30 dark:bg-accent-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 404 Number */}
        <motion.div
          ref={numberRef}
          initial={{ opacity: 0 }}
          className="mb-8"
        >
          <div className="text-[120px] md:text-[200px] font-bold font-urbanist text-accent-500 dark:text-accent-400 leading-none select-none">
            404
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Frown size={32} className="text-accent-500 dark:text-accent-400" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold font-urbanist text-primary-900 dark:text-primary-100">
              Oops! Page Not Found
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Don't worry, 
            even our best shoes sometimes take the wrong path. Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={suggestion.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {suggestion.path ? (
                <Link
                  to={suggestion.path}
                  className={`block p-6 ${suggestion.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <suggestion.icon size={32} className="mx-auto mb-4" />
                  <h3 className="text-lg font-bold font-poppins mb-2">
                    {suggestion.title}
                  </h3>
                  <p className="text-sm opacity-90 font-poppins">
                    {suggestion.description}
                  </p>
                </Link>
              ) : (
                <button
                  onClick={suggestion.action}
                  className={`w-full p-6 ${suggestion.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <suggestion.icon size={32} className="mx-auto mb-4" />
                  <h3 className="text-lg font-bold font-poppins mb-2">
                    {suggestion.title}
                  </h3>
                  <p className="text-sm opacity-90 font-poppins">
                    {suggestion.description}
                  </p>
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/60 dark:bg-primary-800/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50"
        >
          <h2 className="text-xl font-bold font-poppins mb-6 text-primary-900 dark:text-primary-100">
            Or try one of these popular pages:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={page.path}
                  className="block p-4 bg-white dark:bg-primary-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-primary-200 dark:border-primary-600"
                >
                  <span className="text-primary-800 dark:text-primary-200 font-poppins font-medium">
                    {page.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <p className="text-sm text-primary-500 dark:text-primary-500 font-poppins italic">
            💡 Fun fact: 404 errors got their name from room 404 at CERN, where the web was born!
          </p>
        </motion.div>
      </div>

      {/* Animated shoe illustration */}
      <motion.div
        className="absolute bottom-10 right-10 opacity-10 dark:opacity-5"
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="text-8xl">👟</div>
      </motion.div>
    </div>
  );
};

export default NotFound;