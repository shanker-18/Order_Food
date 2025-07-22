import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, Flame, ShoppingCart } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vegetarian' | 'non-vegetarian'>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  const subcategories = ['all', 'starters', 'soups', 'main-course', 'desserts', 'beverages'];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [selectedCategory, selectedSubcategory, searchTerm]);

  const handleOrderNow = (item: any) => {
    // Clear existing cart and add this item
    clearCart();
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });

    // Create order details for confirmation
    const orderDetails = {
      name: 'Guest User',
      email: 'guest@example.com',
      phone: '1234567890',
      address: 'Default Address',
      city: 'Default City',
      pincode: '123456',
      items: [{
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      }],
      total: item.price,
      orderId: `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`,
      paymentMethod: 'cash',
      timestamp: new Date().toISOString()
    };

    // Store order details and navigate to confirmation
    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    navigate('/confirmation');
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  const formatSubcategoryName = (subcategory: string) => {
    return subcategory.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Menu</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and authentic recipes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subcategory Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedSubcategory === subcategory
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
              }`}
            >
              {formatSubcategoryName(subcategory)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {item.category === 'vegetarian' ? (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      VEG
                    </div>
                  ) : (
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NON-VEG
                    </div>
                  )}
                  {item.isPopular && (
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star size={12} className="fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Flame size={12} />
                      <span>Spicy</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded-full">
                    {formatSubcategoryName(item.subcategory)}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 shadow-md hover:shadow-lg text-sm"
                    >
                      <ShoppingCart size={14} />
                      <span>Add</span>
                    </button>
                    <button
                      onClick={() => handleOrderNow(item)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-md hover:shadow-lg"
                    >
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
}