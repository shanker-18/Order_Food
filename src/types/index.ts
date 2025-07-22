export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cash' | 'card';
  items: CartItem[];
  total: number;
  orderId: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}