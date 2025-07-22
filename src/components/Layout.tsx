import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Menu, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { getItemCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                FoodieHub
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                to="/menu"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/menu') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <Menu size={18} />
                <span>Menu</span>
              </Link>
            </nav>

            <Link
              to="/order"
              className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-white">FoodieHub</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Delicious food delivered fresh to your doorstep. Experience the finest cuisines 
                with our premium food delivery service.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors duration-300">Menu</Link></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-orange-500" />
                  <a href="mailto:support@foodiehub.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    support@foodiehub.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-orange-500" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 FoodieHub. All rights reserved. Made with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}