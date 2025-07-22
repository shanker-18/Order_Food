import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, User, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { User as UserType } from '../types';

export function OrderPage() {
  const { items, total, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const [errors, setErrors] = useState<Partial<UserType>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<UserType> = {};
    
    if (!user.name.trim()) newErrors.name = 'Name is required';
    if (!user.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = 'Email is invalid';
    if (!user.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(user.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!user.address.trim()) newErrors.address = 'Address is required';
    if (!user.city.trim()) newErrors.city = 'City is required';
    if (!user.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(user.pincode)) newErrors.pincode = 'Pincode must be 6 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof UserType, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert('Your cart is empty. Please add items to place an order.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Generate order ID
    const orderId = `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    // Store order details in sessionStorage for confirmation page
    const orderDetails = {
      ...user,
      items,
      total,
      orderId,
      paymentMethod: 'cash',
      timestamp: new Date().toISOString()
    };
    
    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    
    // Navigate to confirmation page
    navigate('/confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items to your cart to get started!</p>
            <button
              onClick={() => navigate('/menu')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Order</span>
          </h1>
          <p className="text-gray-600">Review your items and provide delivery details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingCart size={20} className="mr-2 text-orange-500" />
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-orange-600 font-semibold">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors ml-2"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">{total >= 299 ? 'FREE' : '₹40'}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-orange-600">₹{total >= 299 ? total : total + 40}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Details Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User size={20} className="mr-2 text-orange-500" />
                Delivery Details
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={user.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    Delivery Address *
                  </label>
                  <textarea
                    value={user.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your complete address"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={user.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter city"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      value={user.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter 6-digit pincode"
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <CreditCard size={16} className="inline mr-1" />
                    Payment Method
                  </label>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        checked={true}
                        readOnly
                        className="text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor="cash" className="ml-3 text-green-800 font-medium">
                        Cash on Delivery
                      </label>
                    </div>
                    <p className="text-green-600 text-sm mt-2 ml-6">
                      Pay with cash when your order arrives. No advance payment required.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  Place Order (₹{total >= 299 ? total : total + 40})
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}