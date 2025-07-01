import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Share2, 
  Star, 
  Minus, 
  Plus, 
  ShoppingBag, 
  ArrowLeft,
  Check,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'reviews'>('description');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0].name);
      setSelectedSize(product.sizes[2] || product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-primary-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-100">Product not found</h2>
          <Link to="/products" className="text-accent-500 hover:text-accent-600 font-poppins">
            ← Back to products
          </Link>
        </div>
      </div>
    );
  }

  const currentImages = product.images[selectedColor.toLowerCase()] || Object.values(product.images)[0];
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: currentImages[selectedImage],
      color: selectedColor,
      size: selectedSize,
    });
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'Free shipping on orders over $100' },
    { icon: Shield, title: 'Quality Guarantee', description: '30-day money-back guarantee' },
    { icon: RotateCcw, title: 'Easy Returns', description: 'Hassle-free returns within 30 days' },
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-sm font-poppins text-primary-600 dark:text-primary-400 mb-8"
        >
          <Link to="/" className="hover:text-accent-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-accent-500 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary-900 dark:text-primary-100">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-primary-50 dark:bg-primary-800 rounded-3xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${selectedColor}-${selectedImage}`}
                  src={currentImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 overflow-x-auto">
              {currentImages.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-accent-500'
                      : 'border-primary-200 dark:border-primary-700'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Badges */}
              <div className="flex space-x-2 mb-4">
                {product.isNew && (
                  <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold font-urbanist mb-2 text-primary-900 dark:text-primary-100">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-primary-600 dark:text-primary-400 ml-2 font-poppins">
                    4.8 (124 reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-3xl font-bold font-poppins text-accent-600 dark:text-accent-400">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-primary-500 dark:text-primary-500 line-through font-poppins">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-primary-600 dark:text-primary-400 font-poppins text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </motion.div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold font-poppins mb-4 text-primary-900 dark:text-primary-100">
                Color: <span className="text-accent-600 dark:text-accent-400">{selectedColor}</span>
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-4 transition-all ${
                      selectedColor === color.name
                        ? 'border-accent-500 shadow-lg scale-110'
                        : 'border-primary-200 dark:border-primary-700'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.name && (
                      <Check size={16} className="text-white mx-auto" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold font-poppins mb-4 text-primary-900 dark:text-primary-100">
                Size: <span className="text-accent-600 dark:text-accent-400">{selectedSize}</span>
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-xl border-2 font-poppins font-medium transition-all ${
                      selectedSize === size
                        ? 'border-accent-500 bg-accent-50 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                        : 'border-primary-200 dark:border-primary-700 hover:border-accent-300 dark:hover:border-accent-600 text-primary-900 dark:text-primary-100'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold font-poppins mb-4 text-primary-900 dark:text-primary-100">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-primary-200 dark:border-primary-700 rounded-xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors rounded-l-xl text-primary-900 dark:text-primary-100"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="px-6 py-3 font-poppins font-medium text-primary-900 dark:text-primary-100">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors rounded-r-xl text-primary-900 dark:text-primary-100"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white py-4 px-8 rounded-xl font-poppins font-semibold transition-colors"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-4 border-2 rounded-xl transition-all ${
                  isLiked
                    ? 'border-red-500 bg-red-50 dark:bg-red-900 text-red-500'
                    : 'border-primary-200 dark:border-primary-700 hover:border-red-300 dark:hover:border-red-600 text-primary-900 dark:text-primary-100'
                }`}
              >
                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 border-2 border-primary-200 dark:border-primary-700 hover:border-accent-300 dark:hover:border-accent-600 rounded-xl transition-colors text-primary-900 dark:text-primary-100"
              >
                <Share2 size={20} />
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-primary-200 dark:border-primary-700"
            >
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-lg">
                    <feature.icon size={16} />
                  </div>
                  <div>
                    <div className="font-semibold font-poppins text-sm text-primary-900 dark:text-primary-100">
                      {feature.title}
                    </div>
                    <div className="text-xs text-primary-600 dark:text-primary-400 font-poppins">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="border-b border-primary-200 dark:border-primary-700 mb-8">
            <div className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Features' },
                { id: 'reviews', label: 'Reviews (124)' },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -2 }}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 font-poppins font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent-500 text-accent-600 dark:text-accent-400'
                      : 'border-transparent text-primary-600 dark:text-primary-400 hover:text-accent-500'
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {activeTab === 'description' && (
                <div className="font-poppins">
                  <p className="text-primary-700 dark:text-primary-300 mb-6">
                    {product.description}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400">
                    Our {product.name} represents the perfect fusion of minimalist design and premium craftsmanship. 
                    Each pair is meticulously constructed using the finest materials, ensuring both comfort and durability 
                    for the modern individual who values quality over quantity.
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full" />
                      <span className="font-poppins text-primary-700 dark:text-primary-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-urbanist text-accent-600 dark:text-accent-400 mb-2">
                      4.8
                    </div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-poppins">
                      Based on 124 reviews
                    </p>
                  </div>
                  
                  <div className="text-center py-8">
                    <p className="text-primary-500 dark:text-primary-500 font-poppins">
                      Reviews feature coming soon...
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold font-urbanist mb-8 text-center text-primary-900 dark:text-primary-100">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;