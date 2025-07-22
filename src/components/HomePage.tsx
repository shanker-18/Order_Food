import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Truck, Shield } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "Quality Food",
      description: "Fresh ingredients and authentic recipes"
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Free Delivery",
      description: "Free delivery on orders above ₹299"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Safe & Secure",
      description: "Contactless delivery and secure payments"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-orange-200"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-700"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Delicious Food
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Delivered Fresh
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the finest cuisines from the comfort of your home. 
              Fresh ingredients, authentic flavors, delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/menu"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Order Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/menu"
                className="px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Food Images */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=200" 
            alt="Food" 
            className="absolute top-20 right-10 w-16 h-16 rounded-full object-cover shadow-lg animate-float opacity-80"
          />
          <img 
            src="https://images.pexels.com/photos/4253318/pexels-photo-4253318.jpeg?auto=compress&cs=tinysrgb&w=200" 
            alt="Food" 
            className="absolute bottom-32 left-16 w-20 h-20 rounded-full object-cover shadow-lg animate-float animation-delay-300 opacity-80"
          />
          <img 
            src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200" 
            alt="Food" 
            className="absolute top-32 left-1/4 w-14 h-14 rounded-full object-cover shadow-lg animate-float animation-delay-700 opacity-80"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FoodieHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering not just food, but an exceptional dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our most loved dishes, crafted with passion and served with love
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
            >
              <span>View Full Menu</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Butter Chicken",
                image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
                price: "₹449",
                rating: "4.8"
              },
              {
                name: "Paneer Butter Masala",
                image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400",
                price: "₹349",
                rating: "4.7"
              },
              {
                name: "Chicken Biryani",
                image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
                price: "₹499",
                rating: "4.9"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <Link
                      to="/menu"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Satisfy your cravings with our delicious food delivered fresh to your doorstep.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Start Ordering</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}