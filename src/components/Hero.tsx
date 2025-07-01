import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Hero entrance animation
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-text'),
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
      );

      // Floating animation for hero elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }

    // Fixed carousel animation
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      let currentIndex = 0;
      const images = carousel.querySelectorAll('.carousel-image');
      const totalImages = images.length;
      
      const rotateCarousel = () => {
        images.forEach((img, index) => {
          const angle = (index - currentIndex) * (360 / totalImages);
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % totalImages;
          const isPrev = index === (currentIndex - 1 + totalImages) % totalImages;
          
          // Calculate z-index to prevent overlapping
          let zIndex = 1;
          if (isActive) zIndex = 10;
          else if (isNext || isPrev) zIndex = 5;
          
          gsap.set(img, { zIndex });
          
          gsap.to(img, {
            rotation: angle,
            scale: isActive ? 1.1 : 0.85,
            opacity: isActive ? 1 : 0.7,
            x: Math.cos((angle * Math.PI) / 180) * 50,
            y: Math.sin((angle * Math.PI) / 180) * 30,
            duration: 1.2,
            ease: 'power2.inOut'
          });
        });
        currentIndex = (currentIndex + 1) % totalImages;
      };

      // Initial setup
      images.forEach((img, index) => {
        const angle = index * (360 / totalImages);
        gsap.set(img, {
          rotation: angle,
          scale: index === 0 ? 1.1 : 0.85,
          opacity: index === 0 ? 1 : 0.7,
          x: Math.cos((angle * Math.PI) / 180) * 50,
          y: Math.sin((angle * Math.PI) / 180) * 30,
          zIndex: index === 0 ? 10 : 1
        });
      });

      const interval = setInterval(rotateCarousel, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const heroImages = [
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 dark:from-black dark:via-primary-950 dark:to-primary-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-gradient bg-[length:200%_200%]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="float-element absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-poppins"
            >
              ✨ New Collection Available
            </motion.div>

            <div className="space-y-6">
              <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-white leading-tight">
                Step Into
                <span className="block bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                  Minimalism
                </span>
              </h1>

              <p className="hero-text text-xl md:text-2xl text-primary-200 font-poppins leading-relaxed max-w-lg">
                Discover our curated collection of premium footwear designed for the modern minimalist lifestyle.
              </p>
            </div>

            <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-100 transition-colors shadow-lg"
                >
                  <span>Shop Collection</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <PlayCircle size={20} />
                <span>Watch Story</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="hero-text flex justify-center lg:justify-start space-x-8 pt-8">
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '50+', label: 'Premium Styles' },
                { number: '98%', label: 'Satisfaction Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold font-urbanist text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-300 font-poppins">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Fixed Carousel */}
          <div className="relative flex justify-center items-center">
            <div 
              ref={carouselRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              style={{ perspective: '1000px' }}
            >
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="carousel-image absolute inset-0 w-full h-full"
                  style={{
                    transformOrigin: 'center center',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative w-64 h-64 lg:w-72 lg:h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={image}
                      alt={`Shoe ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              ))}
              
              {/* Central glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-accent-500/20 via-transparent to-transparent rounded-full pointer-events-none" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[120%] border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;