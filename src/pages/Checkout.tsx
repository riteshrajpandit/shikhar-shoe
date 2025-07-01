import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Truck, 
  Shield, 
  Check, 
  ArrowLeft, 
  MapPin,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Checkout: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Method
    paymentMethod: 'cod', // cod = Cash on Delivery
    
    // Order Notes
    orderNotes: ''
  });

  const shippingCost = total >= 100 ? 0 : 15;
  const tax = total * 0.08;
  const finalTotal = total + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect to success page
    clearCart();
    navigate('/order-success');
  };

  const steps = [
    { id: 1, title: 'Shipping', icon: Truck },
    { id: 2, title: 'Payment', icon: CreditCard },
    { id: 3, title: 'Review', icon: Check }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-100">
              Your cart is empty
            </h2>
            <p className="text-primary-600 dark:text-primary-400 font-poppins mb-8">
              Add some items to your cart before proceeding to checkout.
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-colors"
              >
                Continue Shopping
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
          <Link to="/cart" className="inline-flex items-center space-x-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-poppins mb-6 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Checkout
          </h1>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  currentStep >= step.id ? 'text-accent-600 dark:text-accent-400' : 'text-primary-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    currentStep >= step.id 
                      ? 'border-accent-500 bg-accent-500 text-white' 
                      : 'border-primary-300 dark:border-primary-600'
                  }`}>
                    {currentStep > step.id ? (
                      <Check size={16} />
                    ) : (
                      <step.icon size={16} />
                    )}
                  </div>
                  <span className="font-poppins font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-accent-500' : 'bg-primary-200 dark:bg-primary-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center">
                      <Truck size={16} />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                      Shipping Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <motion.button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-poppins font-semibold transition-colors"
                    >
                      Continue to Payment
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center">
                      <CreditCard size={16} />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                      Payment Method
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.paymentMethod === 'cod'
                          ? 'border-accent-500 bg-accent-50 dark:bg-accent-900'
                          : 'border-primary-200 dark:border-primary-700 hover:border-accent-300 dark:hover:border-accent-600'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.paymentMethod === 'cod'
                            ? 'border-accent-500 bg-accent-500'
                            : 'border-primary-300 dark:border-primary-600'
                        }`}>
                          {formData.paymentMethod === 'cod' && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold font-poppins text-primary-900 dark:text-primary-100">
                            Cash on Delivery
                          </h3>
                          <p className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                            Pay with cash when your order is delivered to your doorstep
                          </p>
                        </div>
                        <div className="text-2xl">💵</div>
                      </div>
                    </motion.div>

                    <div className="bg-accent-50 dark:bg-accent-900 border border-accent-200 dark:border-accent-700 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-accent-700 dark:text-accent-300">
                        <Shield size={16} />
                        <span className="text-sm font-poppins font-medium">
                          Secure and convenient payment option
                        </span>
                      </div>
                      <p className="text-sm text-accent-600 dark:text-accent-400 font-poppins mt-2">
                        No need to pay online. Our delivery partner will collect the payment when your order arrives.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <motion.button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-8 py-3 rounded-xl font-poppins font-semibold hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                    >
                      Back to Shipping
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-poppins font-semibold transition-colors"
                    >
                      Review Order
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg flex items-center justify-center">
                      <Check size={16} />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-primary-900 dark:text-primary-100">
                      Review Your Order
                    </h2>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4 mb-8">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-700 rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold font-poppins text-primary-900 dark:text-primary-100">
                            {item.name}
                          </h3>
                          <p className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                            {item.color} • Size {item.size} • Qty {item.quantity}
                          </p>
                        </div>
                        <div className="font-bold font-poppins text-accent-600 dark:text-accent-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold font-poppins mb-3 text-primary-900 dark:text-primary-100">
                      Shipping Address
                    </h3>
                    <div className="text-primary-700 dark:text-primary-300 font-poppins">
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                      <p>{formData.country}</p>
                      <p className="mt-2">{formData.email}</p>
                      <p>{formData.phone}</p>
                    </div>
                  </div>

                  {/* Order Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white dark:bg-primary-900 font-poppins text-primary-900 dark:text-primary-100 resize-none"
                      placeholder="Any special instructions for delivery..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-8 py-3 rounded-xl font-poppins font-semibold hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                    >
                      Back to Payment
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-poppins font-semibold transition-colors"
                    >
                      Place Order
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
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

              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex justify-between text-sm font-poppins">
                    <span className="text-primary-600 dark:text-primary-400">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-primary-900 dark:text-primary-100">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 border-t border-primary-200 dark:border-primary-700 pt-4">
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
                <div className="border-t border-primary-200 dark:border-primary-700 pt-3">
                  <div className="flex justify-between font-poppins">
                    <span className="text-lg font-semibold text-primary-900 dark:text-primary-100">Total</span>
                    <span className="text-lg font-bold text-accent-600 dark:text-accent-400">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm font-poppins text-primary-600 dark:text-primary-400">
                  <Shield size={16} className="text-accent-500" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-poppins text-primary-600 dark:text-primary-400">
                  <Truck size={16} className="text-accent-500" />
                  <span>Free returns within 30 days</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;