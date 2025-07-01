import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  const shippingCost = total >= 100 ? 0 : 15;
  const tax = total * 0.08;
  const finalTotal = total + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-100">
              Your cart is empty
            </h2>
            <p className="text-primary-600 dark:text-primary-400 font-poppins mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-colors"
              >
                <span>Continue Shopping</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Shopping Cart
          </h1>
          <p className="text-lg text-primary-600 dark:text-primary-400 font-poppins">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.color}-${item.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center space-x-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-primary-50 dark:bg-primary-700 rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-primary-600 dark:text-primary-400 font-poppins mb-3">
                        <span>Color: {item.color}</span>
                        <span>Size: {item.size}</span>
                      </div>
                      <div className="text-xl font-bold font-poppins text-accent-600 dark:text-accent-400">
                        ${item.price}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-primary-200 dark:border-primary-700 rounded-lg">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                          className="p-2 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors rounded-l-lg text-primary-900 dark:text-primary-100"
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="px-4 py-2 font-poppins font-medium text-primary-900 dark:text-primary-100">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                          className="p-2 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors rounded-r-lg text-primary-900 dark:text-primary-100"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.id, item.color, item.size)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                      >
                        <X size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Continue Shopping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins font-medium transition-colors"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  <span>Continue Shopping</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm sticky top-8"
            >
              <h2 className="text-2xl font-bold font-poppins mb-6 text-primary-900 dark:text-primary-100">
                Order Summary
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-poppins">
                  <span className="text-primary-600 dark:text-primary-400">Subtotal</span>
                  <span className="font-medium text-primary-900 dark:text-primary-100">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-poppins">
                  <span className="text-primary-600 dark:text-primary-400">Shipping</span>
                  <span className="font-medium text-primary-900 dark:text-primary-100">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-poppins">
                  <span className="text-primary-600 dark:text-primary-400">Tax</span>
                  <span className="font-medium text-primary-900 dark:text-primary-100">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-primary-200 dark:border-primary-700 pt-4">
                  <div className="flex justify-between font-poppins">
                    <span className="text-lg font-semibold text-primary-900 dark:text-primary-100">Total</span>
                    <span className="text-lg font-bold text-accent-600 dark:text-accent-400">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {total < 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent-50 dark:bg-accent-900 border border-accent-200 dark:border-accent-700 rounded-xl p-4 mb-6"
                >
                  <div className="flex items-center space-x-2 text-accent-700 dark:text-accent-300">
                    <Truck size={16} />
                    <span className="text-sm font-poppins">
                      Add ${(100 - total).toFixed(2)} more for free shipping!
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm font-poppins text-primary-600 dark:text-primary-400">
                  <Truck size={16} className="text-accent-500" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-poppins text-primary-600 dark:text-primary-400">
                  <Shield size={16} className="text-accent-500" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 rounded-xl font-poppins font-semibold transition-colors mb-4"
                >
                  Proceed to Checkout
                </motion.button>
              </Link>

              {/* Security Notice */}
              <p className="text-xs text-primary-500 dark:text-primary-500 font-poppins text-center">
                Secure checkout with SSL encryption
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;