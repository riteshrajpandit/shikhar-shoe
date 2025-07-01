import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate counters
    if (counterRef.current) {
      const counters = counterRef.current.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
          }
        });
      });
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every design decision serves a purpose, eliminating the unnecessary to focus on what truly matters.'
    },
    {
      icon: Heart,
      title: 'Craftsmanship',
      description: 'We believe in the beauty of handcrafted excellence, where attention to detail makes all the difference.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of individuals who appreciate quality, sustainability, and timeless design.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering products that exceed expectations in both form and function.'
    }
  ];

  const stats = [
    { number: 10000, label: 'Happy Customers', suffix: '+' },
    { number: 50, label: 'Premium Styles', suffix: '+' },
    { number: 98, label: 'Satisfaction Rate', suffix: '%' },
    { number: 5, label: 'Years of Excellence', suffix: '' }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to create minimalist footwear that combines style with comfort.'
    },
    {
      year: '2020',
      title: 'First Collection',
      description: 'Launched our debut collection featuring 10 carefully crafted designs.'
    },
    {
      year: '2021',
      title: 'Going Global',
      description: 'Expanded internationally, bringing minimal design to customers worldwide.'
    },
    {
      year: '2022',
      title: 'Sustainability Focus',
      description: 'Introduced eco-friendly materials and sustainable manufacturing processes.'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Pioneered new comfort technologies while maintaining our minimalist aesthetic.'
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Continuing to redefine modern footwear with purpose-driven design.'
    }
  ];

  return (
    <div className="overflow-hidden bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-black dark:via-primary-950 dark:to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-poppins mb-6"
              >
                Our Story
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-urbanist mb-6 leading-tight">
                Crafting the
                <span className="block text-accent-400">Future of Footwear</span>
              </h1>
              
              <p className="text-xl text-primary-200 font-poppins leading-relaxed mb-8">
                We believe that great design is born from the intersection of form and function. 
                Our journey began with a simple question: What if footwear could be both 
                beautiful and purposeful?
              </p>

              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square relative">
                <motion.img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent rounded-3xl" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-300/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={counterRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold font-urbanist text-accent-600 dark:text-accent-400 mb-2">
                  <span className="counter" data-target={stat.number}>0</span>
                  {stat.suffix}
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-poppins">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-urbanist mb-6 text-primary-900 dark:text-primary-50">
              Our Values
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-3xl mx-auto">
              These core principles guide everything we do, from design to delivery, 
              ensuring that every step of your journey with us reflects our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-primary-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-2xl mb-6"
                >
                  <value.icon size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold font-poppins mb-4 text-primary-900 dark:text-primary-100">
                  {value.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-urbanist mb-6 text-primary-900 dark:text-primary-50">
              Our Journey
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-2xl mx-auto">
              From a simple idea to a global brand, here's how we've grown 
              while staying true to our minimalist roots.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-500/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Marker */}
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold font-poppins shadow-lg">
                    {item.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                        {item.title}
                      </h3>
                      <span className="text-accent-600 dark:text-accent-400 font-poppins font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-poppins">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-urbanist text-white mb-6">
              Ready to Step Into Minimalism?
            </h2>
            <p className="text-xl text-primary-200 font-poppins mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have already discovered the perfect 
              balance of style, comfort, and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-colors"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;