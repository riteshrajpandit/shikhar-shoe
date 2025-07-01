import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Users, AlertTriangle, Clock } from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to change these terms and conditions at any time. Your continued use of the website following any changes shall constitute your acceptance of such changes.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Use License',
      content: [
        {
          subtitle: 'Permission',
          text: 'Permission is granted to temporarily download one copy of the materials on Minimal\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
        },
        {
          subtitle: 'Restrictions',
          text: 'Under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.'
        }
      ]
    },
    {
      icon: Scale,
      title: 'Disclaimer',
      content: [
        {
          subtitle: 'As Is Basis',
          text: 'The materials on Minimal\'s website are provided on an \'as is\' basis. Minimal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
          subtitle: 'Accuracy',
          text: 'Further, Minimal does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: [
        {
          subtitle: 'Liability Limitations',
          text: 'In no event shall Minimal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Minimal\'s website, even if Minimal or a Minimal authorized representative has been notified orally or in writing of the possibility of such damage.'
        },
        {
          subtitle: 'Jurisdiction Limitations',
          text: 'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      content: [
        {
          subtitle: 'Account Registration',
          text: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.'
        },
        {
          subtitle: 'Prohibited Uses',
          text: 'You may not use our service: for any unlawful purpose or to solicit others to perform unlawful acts; to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances; to infringe upon or violate our intellectual property rights or the intellectual property rights of others.'
        },
        {
          subtitle: 'Products and Services',
          text: 'Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Governing Law',
      content: [
        {
          subtitle: 'Jurisdiction',
          text: 'These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'
        },
        {
          subtitle: 'Severability',
          text: 'If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full mb-6">
            <Scale size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Terms of Service
          </h1>
          <p className="text-lg text-primary-600 dark:text-primary-400 font-poppins mb-4">
            Please read these terms and conditions carefully before using our service.
          </p>
          <p className="text-sm text-primary-500 dark:text-primary-500 font-poppins">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-primary-800 rounded-2xl p-8 mb-12 shadow-sm"
        >
          <h2 className="text-2xl font-bold font-poppins mb-4 text-primary-900 dark:text-primary-100">
            Welcome to Minimal
          </h2>
          <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of our website located at minimal.com 
            (the "Service") operated by Minimal ("us", "we", or "our"). Our Privacy Policy also 
            governs your use of the Service and explains how we collect, safeguard and disclose 
            information that results from your use of our web pages.
          </p>
          <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed">
            Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). 
            You acknowledge that you have read and understood Agreements, and agree to be bound by them.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-primary-800 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-xl flex items-center justify-center">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={item.subtitle}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 + itemIndex * 0.05 }}
                    >
                      <h3 className="text-lg font-semibold font-poppins mb-3 text-primary-800 dark:text-primary-200">
                        {item.subtitle}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold font-poppins mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-accent-100 font-poppins mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact us. 
            We're here to help clarify any concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-colors backdrop-blur-sm"
            >
              Contact Legal Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all backdrop-blur-sm"
            >
              Download PDF
            </motion.button>
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-600 dark:text-primary-400 font-poppins mb-4">
            Related Documents
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/privacy" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary-400">•</span>
            <a href="/cookies" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Cookie Policy
            </a>
            <span className="text-primary-400">•</span>
            <a href="/returns" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Return Policy
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;