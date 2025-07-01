import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in fashion and design. Sarah founded Minimal with the belief that great design should be accessible to everyone.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'sarah@minimal.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative genius behind our minimalist aesthetic. Marcus brings over a decade of experience from top fashion houses worldwide.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'marcus@minimal.com'
      }
    },
    {
      name: 'Elena Kowalski',
      role: 'Head of Sustainability',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Environmental advocate ensuring our products are as kind to the planet as they are to your feet. Elena leads our sustainable initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'elena@minimal.com'
      }
    },
    {
      name: 'David Park',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Tech innovator revolutionizing how we create and deliver products. David combines cutting-edge technology with timeless craftsmanship.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'david@minimal.com'
      }
    },
    {
      name: 'Zara Ahmed',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Brand storyteller who helps connect our values with customers worldwide. Zara has a passion for authentic communication.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'zara@minimal.com'
      }
    },
    {
      name: 'James Thompson',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations expert ensuring seamless production and delivery. James optimizes every step of our process for efficiency and quality.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        email: 'james@minimal.com'
      }
    }
  ];

  const values = [
    {
      title: 'Diversity & Inclusion',
      description: 'We believe diverse perspectives create better products and experiences.',
      stat: '60% diverse leadership'
    },
    {
      title: 'Work-Life Balance',
      description: 'Supporting our team\'s wellbeing is fundamental to our success.',
      stat: '4-day work week'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through education and development.',
      stat: '$5K annual learning budget'
    },
    {
      title: 'Remote-First',
      description: 'Flexibility to work from anywhere while staying connected as a team.',
      stat: '100% remote options'
    }
  ];

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    email: Mail
  };

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6 text-primary-900 dark:text-primary-50">
            Meet Our Team
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-3xl mx-auto">
            We're a diverse group of passionate individuals united by our commitment 
            to creating exceptional footwear and meaningful experiences for our customers.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-primary-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins mb-1 text-primary-900 dark:text-primary-100">
                  {member.name}
                </h3>
                <p className="text-accent-600 dark:text-accent-400 font-poppins font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-poppins text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, link]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons];
                    return (
                      <motion.a
                        key={platform}
                        href={platform === 'email' ? `mailto:${link}` : link}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-primary-100 dark:bg-primary-700 hover:bg-accent-100 dark:hover:bg-accent-900 text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 rounded-lg transition-colors"
                        aria-label={`${member.name} ${platform}`}
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
              Our Culture
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-poppins max-w-2xl mx-auto">
              We're building more than a company – we're creating a culture where 
              everyone can do their best work and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white dark:bg-primary-800 p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="text-2xl font-bold font-urbanist text-accent-600 dark:text-accent-400 mb-2">
                  {value.stat}
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-3 text-primary-900 dark:text-primary-100">
                  {value.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-poppins text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-accent-100 font-poppins mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for minimalist design and exceptional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-colors backdrop-blur-sm"
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-all backdrop-blur-sm"
            >
              Send Your Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;