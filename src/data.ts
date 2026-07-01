export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Suya Steak',
    description: 'Prime cut steak generously rubbed with our signature spicy suya blend, flame-grilled to perfection.',
    price: 15.000,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: '2',
    name: 'Jollof Fiesta',
    description: 'Rich, smoky party jollof rice served with grilled chicken, fried plantains, and a side of coleslaw.',
    price: 18.000,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    popular: true
  },
  {
    id: '3',
    name: 'Asun Pasta',
    description: 'Penne pasta tossed in a fiery goat meat pepper soup reduction with fresh basil.',
    price: 21.000,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Crispy Yam Fries & Pepper Sauce',
    description: 'Golden-fried yam batons sprinkled with sea salt, served with our secret fiery pepper dip.',
    price: 9.500,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1576107261940-c529ba42e584?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Plantain Mosa',
    description: 'Sweet overripe plantain fritters, crisp on the outside and fluffy inside.',
    price: 8.000,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Zobo Velvet Cake',
    description: 'Decadent red velvet infused with hibiscus extract, topped with cream cheese frosting.',
    price: 11.000,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000&auto=format&fit=crop',
    popular: true
  }
];

export const reviews = [
  {
    id: '1',
    name: 'Aisha T.',
    text: 'The best Jollof outside of Lagos! The smoky flavor is authentic and the ambiance is stunning.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael R.',
    text: 'Salamora completely redefined my expectations for African fusion. The Asun Pasta is a masterpiece.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sarah K.',
    text: 'Fantastic service, beautiful interior, and the Suya Steak was cooked to absolute perfection.',
    rating: 4
  }
];
