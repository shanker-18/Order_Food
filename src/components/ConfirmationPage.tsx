import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderDetails } from '../types';

export function ConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderDetails = sessionStorage.getItem('orderDetails');
    
    if (storedOrderDetails) {
      const details = JSON.parse(storedOrderDetails);
      setOrderDetails(details);
      clearCart();
      
      // Clear the order details from session storage after use
      sessionStorage.removeItem('orderDetails');
    } else {
      // If no order details, redirect to menu
      navigate('/menu');
    }
  }, [clearCart, navigate]);

  if (!orderDetails) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  const estimatedDeliveryTime = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from now

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-bounce">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Order Placed <span className="text-green-600">Successfully!</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for your order! We've received it and our kitchen is already preparing your delicious meal.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Order Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-xl font-semibold mb-1">Order #{orderDetails.orderId}</h2>
                <p className="text-green-100">
                  Placed on {new Date(orderDetails.timestamp).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-2xl font-bold">₹{orderDetails.total}</p>
                <p className="text-green-100">Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock size={20} className="mr-2 text-orange-500" />
              Estimated Delivery Time
            </h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-orange-800">
                    {estimatedDeliveryTime.toLocaleTimeString('en-IN', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })} ({estimatedDeliveryTime.toLocaleDateString('en-IN')})
                  </p>
                  <p className="text-orange-600 text-sm">Your order will be delivered in approximately 30 minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin size={20} className="mr-2 text-orange-500" />
              Delivery Address
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{orderDetails.name}</p>
              <p className="text-gray-600 mt-1">{orderDetails.address}</p>
              <p className="text-gray-600">{orderDetails.city}, {orderDetails.pincode}</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-1" />
                  <span>{orderDetails.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-1" />
                  <span>{orderDetails.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-3">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                    <p className="text-sm text-gray-600">₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Status</h3>
          <div className="space-y-4">
            {[
              { status: 'Order Confirmed', time: 'Just now', completed: true },
              { status: 'Preparing Food', time: 'In progress', completed: false },
              { status: 'Out for Delivery', time: 'Pending', completed: false },
              { status: 'Delivered', time: 'Pending', completed: false }
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                  step.completed 
                    ? 'bg-green-500' 
                    : index === 1 
                      ? 'bg-orange-500 animate-pulse' 
                      : 'bg-gray-300'
                }`}></div>
                <div className="flex-1">
                  <p className={`font-medium ${step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                    {step.status}
                  </p>
                  <p className="text-sm text-gray-500">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            We'll send you updates about your order via SMS and email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Order Again</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}