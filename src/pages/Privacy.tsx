import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, FileText, Clock } from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, shipping address, payment information, and any other information you choose to provide.'
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you visit our website or use our services, we automatically collect certain information about your device and usage patterns. This includes your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.'
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          text: 'We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. You can control cookie settings through your browser preferences.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, process transactions, fulfill orders, and communicate with you about your account or purchases.'
        },
        {
          subtitle: 'Personalization',
          text: 'We may use your information to personalize your experience, provide recommendations, and deliver targeted content and advertisements that may be of interest to you.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to send you important updates about our services, respond to your inquiries, and provide customer support. With your consent, we may also send promotional communications.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, email delivery, and analytics. These providers are contractually obligated to protect your information.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner as part of the transaction.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.'
        },
        {
          subtitle: 'Consent',
          text: 'We may share your information with your consent or at your direction.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.'
        },
        {
          subtitle: 'Payment Security',
          text: 'All payment transactions are processed using industry-standard encryption and security protocols. We do not store complete credit card information on our servers.'
        },
        {
          subtitle: 'Data Breach Response',
          text: 'In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Your Rights and Choices',
      content: [
        {
          subtitle: 'Access and Update',
          text: 'You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.'
        },
        {
          subtitle: 'Deletion',
          text: 'You may request deletion of your personal information, subject to certain legal and business requirements. We will retain some information as necessary for legal compliance or legitimate business purposes.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt out of promotional communications at any time by using the unsubscribe link in our emails or by updating your preferences in your account settings.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Data Retention',
      content: [
        {
          subtitle: 'Retention Period',
          text: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.'
        },
        {
          subtitle: 'Account Information',
          text: 'If you close your account, we may retain certain information for legal compliance, fraud prevention, and legitimate business purposes.'
        },
        {
          subtitle: 'Marketing Data',
          text: 'Marketing-related information is retained until you opt out or as required by applicable marketing regulations.'
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
            <Shield size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary-600 dark:text-primary-400 font-poppins mb-4">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
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
            Our Commitment to Privacy
          </h2>
          <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed mb-4">
            At Minimal, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website, make a purchase, 
            or interact with our services.
          </p>
          <p className="text-primary-600 dark:text-primary-400 font-poppins leading-relaxed">
            By using our services, you agree to the collection and use of information in 
            accordance with this policy. We encourage you to read this policy carefully 
            and contact us if you have any questions or concerns.
          </p>
        </motion.div>

        {/* Policy Sections */}
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
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-accent-100 font-poppins mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy, our data practices, 
            or your rights regarding your personal information, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-colors backdrop-blur-sm"
            >
              Contact Privacy Team
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
            <a href="/terms" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Terms of Service
            </a>
            <span className="text-primary-400">•</span>
            <a href="/cookies" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Cookie Policy
            </a>
            <span className="text-primary-400">•</span>
            <a href="/data-protection" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Data Protection
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;