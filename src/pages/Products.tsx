import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List, Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, Product } from '../data/products';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'newest'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'boots', name: 'Boots' },
    { id: 'loafers', name: 'Loafers' },
    { id: 'sandals', name: 'Sandals' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-primary-950 text-primary-900 dark:text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4 text-primary-900 dark:text-primary-50">
            Our Collection
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-poppins max-w-2xl mx-auto">
            Discover premium footwear crafted for the modern minimalist lifestyle.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-full focus:ring-2 focus:ring-accent-400 focus:border-transparent font-poppins text-primary-900 dark:text-primary-100"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-poppins text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-accent-500 text-white'
                        : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Advanced Filters Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors font-poppins"
              >
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </motion.button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-full focus:ring-2 focus:ring-accent-400 font-poppins text-sm text-primary-900 dark:text-primary-100"
              >
                <option value="newest">Newest</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price Low-High</option>
                <option value="price-high">Price High-Low</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-primary-100 dark:bg-primary-800 rounded-full p-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-primary-700 text-accent-500 shadow-sm'
                      : 'text-primary-500 dark:text-primary-400'
                  }`}
                >
                  <Grid size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-primary-700 text-accent-500 shadow-sm'
                      : 'text-primary-500 dark:text-primary-400'
                  }`}
                >
                  <List size={16} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white dark:bg-primary-800 rounded-2xl p-6 border border-primary-200 dark:border-primary-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium font-poppins mb-2 text-primary-900 dark:text-primary-100">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="flex-1 accent-accent-500"
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="flex-1 accent-accent-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <p className="text-primary-600 dark:text-primary-400 font-poppins">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">👟</div>
            <h3 className="text-2xl font-bold font-urbanist mb-2 text-primary-900 dark:text-primary-100">No products found</h3>
            <p className="text-primary-600 dark:text-primary-400 font-poppins mb-6">
              Try adjusting your search or filter criteria
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 500]);
              }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-poppins font-medium transition-colors"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;