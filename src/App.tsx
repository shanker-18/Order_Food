import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { OrderPage } from './components/OrderPage';
import { ConfirmationPage } from './components/ConfirmationPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;