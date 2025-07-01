import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name.toLowerCase());
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const currentImage = product.images[selectedColor]?.[0] || Object.values(product.images)[0][0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: currentImage,
      color: selectedColor,
      size: product.sizes[0], // Default to first available size
    });
  };

  const handleColorChange = (color: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color.toLowerCase());
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-white dark:bg-primary-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-primary-50 dark:bg-primary-700 rounded-3xl">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-700 dark:to-primary-600 animate-pulse" />
          )}
          
          <motion.img
            src={currentImage}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.isNew && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              >
                NEW
              </motion.span>
            )}
            {product.originalPrice && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              >
                SALE
              </motion.span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full shadow-lg transition-colors ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white dark:bg-primary-700 text-primary-700 dark:text-primary-300 hover:bg-red-50 dark:hover:bg-red-900'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="p-2 bg-accent-500 hover:bg-accent-600 text-white rounded-full shadow-lg transition-colors"
            >
              <ShoppingBag size={16} />
            </motion.button>
          </div>

          {/* Color Options */}
          <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.colors.map((color) => (
              <motion.button
                key={color.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => handleColorChange(color.name, e)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color.name.toLowerCase()
                    ? 'border-accent-500 shadow-lg'
                    : 'border-white dark:border-primary-600 shadow-md'
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold font-poppins text-lg text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-sm text-primary-600 dark:text-primary-400 font-poppins">
                4.8
              </span>
            </div>
          </div>

          <p className="text-primary-600 dark:text-primary-400 text-sm font-poppins mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold font-poppins text-accent-600 dark:text-accent-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-primary-500 dark:text-primary-500 line-through font-poppins">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="text-xs text-primary-500 dark:text-primary-500 font-poppins">
              {product.sizes.length} sizes
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
      </motion.div>
    </Link>
  );
};

export default ProductCard;