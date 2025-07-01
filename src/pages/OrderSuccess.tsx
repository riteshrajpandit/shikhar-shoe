import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const orderNumber = `MIN-${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const orderSteps = [
    {
      icon: CheckCircle,
      title: 'Order Confirmed',
      description: 'Your order has been received and confirmed',
      status: 'completed'
    },
    {
      icon: Package,
      title: 'Processing',
      description: 'We\'re preparing your items for shipment',
      status: 'current'
    },
    {
      icon: Truck,
      title: 'On the Way',
      description: 'Your order is out for delivery',
      status: 'pending'
    },
    {
      icon: Mail,
      title: 'Delivered',
      description: 'Your order has been delivered',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50"
          >
            Order Confirmed!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-600 dark:text-primary-400 font-poppins mb-6"
          >
            Thank you for your purchase. Your order has been successfully placed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-accent-50 dark:bg-accent-900 border border-accent-200 dark:border-accent-700 rounded-xl p-6 inline-block"
          >
            <div className="text-sm text-accent-700 dark:text-accent-300 font-poppins mb-1">
              Order Number
            </div>
            <div className="text-2xl font-bold font-urbanist text-accent-600 dark:text-accent-400">
              {orderNumber}
            </div>
          </motion.div>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm mb-12"
        >
          <h2 className="text-2xl font-bold font-poppins mb-6 text-primary-900 dark:text-primary-100">
            Order Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold font-poppins mb-3 text-primary-900 dark:text-primary-100">
                Payment Method
              </h3>
              <div className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-primary-700 rounded-xl">
                <div className="text-2xl">💵</div>
                <div>
                  <div className="font-medium font-poppins text-primary-900 dark:text-primary-100">
                    Cash on Delivery
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                    Pay when your order arrives
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold font-poppins mb-3 text-primary-900 dark:text-primary-100">
                Estimated Delivery
              </h3>
              <div className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-primary-700 rounded-xl">
                <div className="text-2xl">📦</div>
                <div>
                  <div className="font-medium font-poppins text-primary-900 dark:text-primary-100">
                    {estimatedDelivery}
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                    Standard delivery (5-7 business days)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm mb-12"
        >
          <h2 className="text-2xl font-bold font-poppins mb-8 text-primary-900 dark:text-primary-100">
            Order Progress
          </h2>
          
          <div className="space-y-6">
            {orderSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step.status === 'completed' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                    : step.status === 'current'
                    ? 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                    : 'bg-primary-100 dark:bg-primary-700 text-primary-400'
                }`}>
                  <step.icon size={20} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-semibold font-poppins ${
                    step.status === 'completed' || step.status === 'current'
                      ? 'text-primary-900 dark:text-primary-100'
                      : 'text-primary-500 dark:text-primary-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-poppins ${
                    step.status === 'completed' || step.status === 'current'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-primary-400 dark:text-primary-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
                
                {step.status === 'completed' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-green-500"
                  >
                    <CheckCircle size={20} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl p-8 text-center mb-12"
        >
          <h2 className="text-2xl font-bold font-poppins mb-4">
            What's Next?
          </h2>
          <p className="text-accent-100 font-poppins mb-6 max-w-2xl mx-auto">
            We'll send you email updates about your order status. You can also track 
            your order anytime using your order number.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-colors backdrop-blur-sm"
            >
              Track Your Order
            </motion.button>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all backdrop-blur-sm"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <p className="text-primary-600 dark:text-primary-400 font-poppins mb-4">
            Need help with your order?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Contact Support
            </Link>
            <span className="text-primary-400">•</span>
            <Link to="/returns" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Return Policy
            </Link>
            <span className="text-primary-400">•</span>
            <Link to="/help" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins transition-colors">
              Help Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccess;