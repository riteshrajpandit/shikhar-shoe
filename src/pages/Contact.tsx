import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@minimal.com',
      link: 'mailto:hello@minimal.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Design Street, New York, NY 10001',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      description: 'Monday - Friday',
      value: '8:00 AM - 5:00 PM EST',
      link: null
    }
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all purchases. Items must be in original condition with tags attached.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location. Free shipping on orders over $100.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also check your order status in your account.'
    },
    {
      question: 'What materials do you use?',
      answer: 'We use premium, sustainably-sourced materials including full-grain leather, organic cotton, and recycled rubber.'
    }
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
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6 text-primary-900 dark:text-primary-50">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions about our products, 
            need assistance, or just want to share your feedback, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold font-poppins mb-6 text-primary-900 dark:text-primary-100">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-primary-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center">
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-poppins mb-1 text-primary-900 dark:text-primary-100">
                        {info.title}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                        {info.description}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-poppins text-primary-800 dark:text-primary-200">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold font-poppins mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-accent-100 mb-4 font-poppins">
                Check out our FAQ section or start a live chat for instant assistance.
              </p>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-poppins text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Live Chat</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold font-poppins mb-6 text-primary-900 dark:text-primary-100">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="product">Product Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins resize-none text-primary-900 dark:text-primary-100"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex justify-end"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-400 text-white px-8 py-3 rounded-xl font-poppins font-semibold transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-poppins">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold font-poppins mb-3 text-lg text-primary-900 dark:text-primary-100">
                  {faq.question}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;