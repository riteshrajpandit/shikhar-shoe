export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: {
    [color: string]: string[];
  };
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  description: string;
  features: string[];
  category: 'sneakers' | 'boots' | 'loafers' | 'sandals';
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Urban Minimal',
    price: 189,
    originalPrice: 229,
    images: {
      white: [
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      black: [
        'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      gray: [
        'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Gray', hex: '#6B7280' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Clean lines meet comfort in our signature Urban Minimal sneaker. Crafted with premium materials for the modern minimalist.',
    features: [
      'Premium leather upper',
      'Memory foam insole',
      'Durable rubber outsole',
      'Minimalist design'
    ],
    category: 'sneakers',
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Classic Runner',
    price: 159,
    images: {
      white: [
        'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      navy: [
        'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1F2937' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Timeless running shoe design with modern comfort technology. Perfect for both athletic performance and casual wear.',
    features: [
      'Breathable mesh upper',
      'Cushioned midsole',
      'Flexible outsole',
      'Lightweight construction'
    ],
    category: 'sneakers',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Essential Boot',
    price: 249,
    images: {
      brown: [
        'https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      black: [
        'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'Brown', hex: '#8B4513' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Versatile ankle boot that transitions seamlessly from work to weekend. Crafted from premium leather with attention to detail.',
    features: [
      'Full-grain leather',
      'Comfortable fit',
      'Durable construction',
      'Versatile styling'
    ],
    category: 'boots'
  },
  {
    id: '4',
    name: 'Comfort Loafer',
    price: 199,
    images: {
      tan: [
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      black: [
        'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'Tan', hex: '#D2691E' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Sophisticated slip-on loafer combining traditional craftsmanship with modern comfort features.',
    features: [
      'Soft leather upper',
      'Padded insole',
      'Slip-resistant sole',
      'Easy slip-on design'
    ],
    category: 'loafers'
  },
  {
    id: '5',
    name: 'Street Walker',
    price: 139,
    images: {
      white: [
        'https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      black: [
        'https://images.pexels.com/photos/2562993/pexels-photo-2562993.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Casual sneaker designed for everyday wear. Combines style and comfort for the urban explorer.',
    features: [
      'Canvas upper',
      'Rubber sole',
      'Comfortable fit',
      'Casual style'
    ],
    category: 'sneakers',
    isNew: true
  },
  {
    id: '6',
    name: 'Summer Slide',
    price: 79,
    images: {
      white: [
        'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      black: [
        'https://images.pexels.com/photos/267321/pexels-photo-267321.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Minimalist slide sandal perfect for warm weather. Simple design with maximum comfort.',
    features: [
      'Soft footbed',
      'Adjustable strap',
      'Water-resistant',
      'Lightweight'
    ],
    category: 'sandals'
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);