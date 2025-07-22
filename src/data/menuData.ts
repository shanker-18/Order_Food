export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'vegetarian' | 'non-vegetarian';
  subcategory: 'starters' | 'soups' | 'main-course' | 'desserts' | 'beverages';
  isSpicy?: boolean;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Vegetarian Starters
  {
    id: 'v1',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices and herbs',
    price: 299,
    image: 'https://images.pexels.com/photos/4253318/pexels-photo-4253318.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'starters',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'v2',
    name: 'Vegetable Spring Rolls',
    description: 'Crispy rolls filled with fresh vegetables and served with sweet chili sauce',
    price: 199,
    image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'starters'
  },
  {
    id: 'v3',
    name: 'Stuffed Mushrooms',
    description: 'Button mushrooms stuffed with cream cheese and herbs',
    price: 249,
    image: 'https://images.pexels.com/photos/5840080/pexels-photo-5840080.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'starters'
  },

  // Vegetarian Soups
  {
    id: 'v4',
    name: 'Tomato Basil Soup',
    description: 'Creamy tomato soup with fresh basil and croutons',
    price: 149,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'soups'
  },
  {
    id: 'v5',
    name: 'Sweet Corn Soup',
    description: 'Traditional sweet corn soup with vegetables',
    price: 129,
    image: 'https://images.pexels.com/photos/2365945/pexels-photo-2365945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'soups'
  },

  // Vegetarian Main Course
  {
    id: 'v6',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese in rich tomato and butter gravy',
    price: 349,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'main-course',
    isPopular: true
  },
  {
    id: 'v7',
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with spices',
    price: 299,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'main-course'
  },
  {
    id: 'v8',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice with mixed vegetables and aromatic spices',
    price: 399,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'main-course'
  },

  // Non-Vegetarian Starters
  {
    id: 'nv1',
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated in yogurt and spices, grilled to perfection',
    price: 399,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'starters',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'nv2',
    name: 'Fish Fingers',
    description: 'Crispy battered fish fingers served with tartar sauce',
    price: 349,
    image: 'https://images.pexels.com/photos/4518647/pexels-photo-4518647.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'starters'
  },
  {
    id: 'nv3',
    name: 'Mutton Seekh Kebab',
    description: 'Spiced minced mutton grilled on skewers',
    price: 449,
    image: 'https://images.pexels.com/photos/4518660/pexels-photo-4518660.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'starters',
    isSpicy: true
  },

  // Non-Vegetarian Soups
  {
    id: 'nv4',
    name: 'Chicken Hot & Sour Soup',
    description: 'Spicy and tangy chicken soup with vegetables',
    price: 199,
    image: 'https://images.pexels.com/photos/2365938/pexels-photo-2365938.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'soups',
    isSpicy: true
  },

  // Non-Vegetarian Main Course
  {
    id: 'nv5',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and butter sauce',
    price: 449,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'main-course',
    isPopular: true
  },
  {
    id: 'nv6',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice layered with spiced chicken',
    price: 499,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'main-course',
    isPopular: true
  },
  {
    id: 'nv7',
    name: 'Fish Curry',
    description: 'Fresh fish cooked in coconut-based curry',
    price: 399,
    image: 'https://images.pexels.com/photos/4518647/pexels-photo-4518647.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'non-vegetarian',
    subcategory: 'main-course'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in sugar syrup',
    price: 149,
    image: 'https://images.pexels.com/photos/4607743/pexels-photo-4607743.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'desserts'
  },
  {
    id: 'd2',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten chocolate center',
    price: 199,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'desserts'
  },

  // Beverages
  {
    id: 'b1',
    name: 'Mango Lassi',
    description: 'Traditional yogurt-based mango drink',
    price: 99,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'beverages'
  },
  {
    id: 'b2',
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime soda with mint',
    price: 79,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetarian',
    subcategory: 'beverages'
  }
];